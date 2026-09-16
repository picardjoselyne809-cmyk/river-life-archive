import {flushSync} from 'react-dom';
import {cases} from '@/data/research';
type Tool={name:string;title:string;description:string;inputSchema:object;annotations:object;execute:(input:unknown)=>unknown};
type Context={registerTool:(tool:Tool,options:{signal:AbortSignal})=>void|Promise<void>};
export function registerArchiveTools(select:(id:string)=>void){
 const context=(document as Document&{modelContext?:Context}).modelContext;
 if(!context?.registerTool)return()=>{};
 const lifecycle=new AbortController();
 try{Promise.resolve(context.registerTool({name:'open_river_archive',title:'打开河流治理档案',description:'选择铜钵河、梁滩河或蒲河，显示其公开资料档案。只改变本页阅读状态。',inputSchema:{type:'object',properties:{caseId:{type:'string',enum:cases.map(c=>c.id)}},required:['caseId'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).some(k=>k!=='caseId'))throw Error('输入必须只有caseId');const id=(input as {caseId?:unknown}).caseId;const record=cases.find(c=>c.id===id);if(!record)throw Error('无效caseId');flushSync(()=>select(record.id));document.getElementById('cases')?.scrollIntoView();return {caseId:record.id,name:record.name,status:'opened'};}},{signal:lifecycle.signal})).catch(()=>{});}catch{/* Unsupported implementations leave normal controls available. */}
 return()=>lifecycle.abort();
}
