import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {riverForCase,archiveSourceForAgent,agentCaseRiver,agentSourceArchive} from '../data/agent-links.ts';
import {analyzeUrl,requestAnalysis} from '../lib/agent-api.ts';
import {appHref} from '../lib/public-path.ts';
const catalog=JSON.parse(await readFile('public/data/archive.json','utf8'));
assert.equal(riverForCase('C1'),'tongbo');assert.equal(riverForCase('C2'),'liangtan');assert.equal(riverForCase('C3'),'linjiang');assert.equal(riverForCase('C5'),null);
for(const id of Object.values(agentCaseRiver))assert(catalog.rivers.some(r=>r.id===id));
for(const id of Object.values(agentSourceArchive))assert(catalog.sources.some(s=>s.id===id));
assert.equal(archiveSourceForAgent('S1'),'S01');assert.equal(archiveSourceForAgent('S8'),null);
assert.equal(analyzeUrl('http://127.0.0.1:8787'),'http://127.0.0.1:8787/api/analyze');
assert.equal(analyzeUrl('https://agent.example.test'),'https://agent.example.test/api/analyze');
for(const value of ['https://user:secret@example.test','https://example.test?key=secret','https://example.test/v1/chat/completions','javascript:alert(1)'])assert.throws(()=>analyzeUrl(value));
assert.equal(appHref('/assistant/'),(process.env.NEXT_PUBLIC_BASE_PATH||'')+'/assistant/');
const previous=globalThis.fetch;
try{
 let request;
 globalThis.fetch=async(url,options)=>{request={url,options};return new Response(JSON.stringify({schemaVersion:'1.0',plans:[],sources:[],recommendation:{plan:'A'},llm:{status:'fallback'}}),{status:200});};
 const r=await requestAnalysis('某跨省河流治理',false,'https://agent.example.test');assert.equal(r.llm.status,'fallback');
 assert.equal(request.url,'https://agent.example.test/api/analyze');assert.equal(request.options.credentials,'omit');assert.ok(!('Authorization'in request.options.headers));
 globalThis.fetch=async()=>new Response('{}',{status:500});await assert.rejects(requestAnalysis('河流',true,'https://agent.example.test'));
}finally{globalThis.fetch=previous;}
for(const file of ['components/assistant-workbench.tsx','lib/agent-api.ts','app/assistant/page.tsx']){
 const text=await readFile(file,'utf8');assert.ok(!/BASIN_LLM_|Authorization|localStorage|sessionStorage|child_process/.test(text),file+' leaked server dependency');
 assert.ok(!text.includes('http://127.0.0.1:8787'),file+' hardcoded API');
}
assert.equal(spawnSync('git',['check-ignore','.env.local'],{encoding:'utf8'}).status,0);
assert.ok(!(await readFile('.github/workflows/pages.yml','utf8')).includes('BASIN_LLM_'));
console.log('PASS: agent mapping, independent configurable API, basePath, frontend request/failure, ignored env and client separation');

if(process.argv.includes('--build')){
 const prefix=process.env.NEXT_PUBLIC_BASE_PATH||'';
 let assistantEntry=null,files=0;
 async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const path=dir+'/'+entry.name;if(entry.isDirectory()){await walk(path);continue;}
  if(!/\.(html|js|json|rsc|css|map)$/.test(path))continue;
  const text=await readFile(path,'utf8');files++;
  assert.ok(!/BASIN_LLM_|reasoning_content|Bearer\s+sk-|-----BEGIN .*PRIVATE KEY/.test(text),path+' server data in public bundle');
  if(path.endsWith('/assistant/index.html')){assistantEntry=path;assert.ok(text.includes('流域治理助手'));assert.ok(text.includes('开始治理分析'));}
  if(path.endsWith('/rivers/tongbo/index.html'))assert.ok(text.includes(prefix+'/assistant/?river=tongbo')||text.includes(prefix+'/assistant?river=tongbo'),'river-to-assistant basePath');
 }}
 await walk('dist/client');assert.ok(assistantEntry,'assistant static export missing');
 console.log('PASS: assistant static export, dossier back-link, basePath and '+files+' public artifacts scanned');
}
