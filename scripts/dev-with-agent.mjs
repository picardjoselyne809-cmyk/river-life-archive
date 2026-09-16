import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawn } from 'node:child_process';

const siteDir = process.cwd();
const defaultAgentApiBase = 'http://127.0.0.1:8787';
const defaultAllowedOrigins = 'http://localhost:3000,http://127.0.0.1:3000';

function readDotEnvLocal(dir) {
  const envPath = resolve(dir, '.env.local');
  if (!existsSync(envPath)) return {};
  const values = {};
  for (const rawLine of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const index = line.indexOf('=');
    if (index <= 0) continue;
    const key = line.slice(0, index).trim();
    let value = line.slice(index + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    values[key] = value;
  }
  return values;
}

function packageHasScript(projectDir, scriptName) {
  const packagePath = resolve(projectDir, 'package.json');
  if (!existsSync(packagePath)) return false;
  try {
    const pkg = JSON.parse(readFileSync(packagePath, 'utf8'));
    return Boolean(pkg?.scripts?.[scriptName]);
  } catch {
    return false;
  }
}

function resolveAgentDir() {
  const localEnv = readDotEnvLocal(siteDir);
  const configuredDir = process.env.BASIN_AGENT_DIR || localEnv.BASIN_AGENT_DIR;
  if (configuredDir) {
    const candidate = resolve(siteDir, configuredDir);
    if (packageHasScript(candidate, 'agent:server')) return candidate;
    throw new Error(`BASIN_AGENT_DIR 指向的目录不可用，未找到包含 agent:server 的 package.json：${candidate}`);
  }

  const candidates = [
    '../basin-agent',
    '../../basin-agent',
    '../outputs/basin-agent',
    '../../outputs/basin-agent',
    '../../../outputs/basin-agent',
  ].map((relativePath) => resolve(siteDir, relativePath));

  const found = candidates.find((candidate) => packageHasScript(candidate, 'agent:server'));
  if (found) return found;

  throw new Error([
    '未找到 basin-agent 项目目录。',
    '请设置 BASIN_AGENT_DIR 指向 basin-agent 根目录，例如：',
    'PowerShell: $env:BASIN_AGENT_DIR="C:\\path\\to\\basin-agent"',
    '也可以在 river-site/.env.local 中加入 BASIN_AGENT_DIR=../basin-agent。',
  ].join('\n'));
}

function npmCommandArgs() {
  if (!process.env.npm_execpath) {
    throw new Error('请通过 npm run dev:agent 启动，这样脚本可以复用当前 npm。');
  }
  return { command: process.execPath, baseArgs: [process.env.npm_execpath] };
}

function sanitizeFrontendEnv(env) {
  const nextEnv = { ...env };
  for (const key of Object.keys(nextEnv)) {
    if (key.startsWith('BASIN_LLM_') || key === 'BASIN_AGENT_DIR') {
      delete nextEnv[key];
    }
  }
  nextEnv.NEXT_PUBLIC_AGENT_API_BASE ??= defaultAgentApiBase;
  return nextEnv;
}

function spawnNpm(name, cwd, npm, args, env) {
  const child = spawn(npm.command, [...npm.baseArgs, ...args], {
    cwd,
    env,
    stdio: 'inherit',
    windowsHide: true,
    detached: process.platform !== 'win32',
  });
  child.on('error', (error) => {
    console.error(`[${name}] 启动失败：${error.message}`);
    stopAll(1);
  });
  return child;
}

function stopChild(child) {
  if (!child.pid || child.killed) return;
  if (process.platform === 'win32') {
    spawn('taskkill', ['/PID', String(child.pid), '/T', '/F'], { stdio: 'ignore', windowsHide: true });
    return;
  }
  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch {
    child.kill('SIGTERM');
  }
}

const children = [];
let stopping = false;

function stopAll(code = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of children) stopChild(child);
  setTimeout(() => process.exit(code), 300);
}

try {
  const agentDir = resolveAgentDir();
  const npm = npmCommandArgs();

  const agentEnv = {
    ...process.env,
    PORT: process.env.PORT ?? '8787',
    AGENT_ALLOWED_ORIGINS: process.env.AGENT_ALLOWED_ORIGINS ?? defaultAllowedOrigins,
  };
  const frontendEnv = sanitizeFrontendEnv(process.env);

  console.log(`Agent API: ${agentDir}`);
  console.log(`Agent API base for site: ${frontendEnv.NEXT_PUBLIC_AGENT_API_BASE}`);
  console.log('Starting basin-agent API and river-site dev server...');

  children.push(spawnNpm('agent', agentDir, npm, ['run', 'agent:server'], agentEnv));
  children.push(spawnNpm('site', siteDir, npm, ['run', 'dev'], frontendEnv));

  for (const child of children) {
    child.on('exit', (code, signal) => {
      if (stopping) return;
      console.error(`A dev process exited (${signal || code}). Stopping the other process.`);
      stopAll(code || 0);
    });
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

process.on('SIGINT', () => stopAll(0));
process.on('SIGTERM', () => stopAll(0));
