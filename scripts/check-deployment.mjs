import {readdir,readFile} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {resolve,relative,extname} from 'node:path';
const root=resolve('.'),failures=[];
const ignored=new Set(['node_modules','.git','.vercel','.vinext','.wrangler','dist','test-results','playwright-report']);
const rules=[['private-key',/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],['service-key',/\b(?:sk-(?:proj-)?[A-Za-z0-9_-]{24,}|gh[pousr]_[A-Za-z0-9]{30,}|AKIA[A-Z0-9]{16}|art_v2_[A-Za-z0-9_]{20,})\b/],['local-user-path',/[A-Z]:[\\/]Users[\\/][^\s/\\"']+/i]];
async function walk(dir,artifact=false){for(const e of await readdir(dir,{withFileTypes:true})){if(ignored.has(e.name)&&!artifact)continue;const p=resolve(dir,e.name),name=relative(root,p);if(!artifact && p===resolve(root,'.env.local') && spawnSync('git',['check-ignore','.env.local']).status===0)continue;if(e.isDirectory()){await walk(p,artifact);continue}if(/^\.env/.test(e.name)||/\.(pem|key|p12|pfx)$/.test(e.name)){failures.push(name+': secret file');continue}if(!['.ts','.tsx','.js','.mjs','.cjs','.json','.geojson','.html','.css','.md','.cmd','.txt'].includes(extname(p)))continue;const text=await readFile(p,'utf8');for(const [label,re]of rules)if(re.test(text))failures.push(name+': '+label);}}
async function findEntry(dir){for(const e of await readdir(dir,{withFileTypes:true})){const p=resolve(dir,e.name);if(e.isFile()&&e.name==='index.html')return p;if(e.isDirectory()){const found=await findEntry(p).catch(()=>null);if(found)return found}}return null}
await walk(root);await walk(resolve('dist/client'),true);
const pkg=JSON.parse(await readFile('package.json'));if(pkg.scripts.build!=='node scripts/build.mjs')failures.push('Unexpected build entry');
const entry=await findEntry(resolve('dist/client'));if(!entry)failures.push('Missing static index.html');else{const html=await readFile(entry,'utf8');if(!html.includes('河流生命档案'))failures.push('Missing competition title');}
if(failures.length){console.error(failures.join('\n'));process.exitCode=1;}else console.log('PASS: source and public build contain no detected credentials/local user paths; static entry verified');
