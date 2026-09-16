export const agentApiBase=process.env.NEXT_PUBLIC_AGENT_API_BASE||'';
export function analyzeUrl(base:string):string {
  const url=new URL(base);
  const local=['localhost','127.0.0.1','[::1]'].includes(url.hostname);
  if(url.username||url.password||url.search||url.hash||url.pathname!=='/'||!(url.protocol==='https:'||(url.protocol==='http:'&&local)))throw Error('请配置独立 Agent API 的 Origin 地址，不含密钥、路径或参数。');
  return url.origin+'/api/analyze';
}
export type AgentEvidence={sourceId:string;claim:string;locator:string};
export type AgentSource={id:string;title:string;publisher:string;date:string|null;url:string};
export type AgentResult={
  schemaVersion:string;query:string;
  classification:{tags:string[];issues:string[];actors:string[];note:string};
  cases:{caseId:string;name:string;score:number;reasons:string[];governanceType:string;lessons:string[];boundaries:string[];evidence:AgentEvidence[]}[];
  mechanisms:{id:string;name:string;steps:string[];conditions:string[];advantages:string[];risks:string[];relatedPolicies:string[];reasons:string[]}[];
  actors:{name:string;responsibility:string;authority:string;action:string;coordination:string;basis:string[]}[];
  policies:{id:string;name:string;requirements:string[];boundaries:string[];evidence:AgentEvidence[]}[];
  plans:{id:string;name:string;benefit:string;risk:string;cost:string;eligible:boolean;exclusions:string[];score:number;metrics:Record<string,number>;steps:{owner:string;action:string;deliverable:string}[]}[];
  recommendation:{plan:string;basis:'rule-engine';reason:string;conditional:boolean;sequence:string};
  llm:{status:'success'|'fallback'|'disabled';analysis:string|null;advice:string|null;sourceIds:string[];note:string};
  sources:AgentSource[];audit:{knowledgeVersion:string;knowledgeHash:string;scoreNote:string;weights:Record<string,number>};risks:string[];
};
export async function requestAnalysis(description:string,useLLM:boolean,base=agentApiBase):Promise<AgentResult>{
  if(!base)throw Error('尚未配置治理助手服务地址，请在构建环境设置 NEXT_PUBLIC_AGENT_API_BASE。');
  const response=await fetch(analyzeUrl(base),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({description,useLLM}),signal:AbortSignal.timeout(195000),credentials:'omit'});
  if(!response.ok)throw Error(response.status===400?'情景格式无效，请检查输入。':response.status===413?'情景过长，请精简后再试。':response.status===403?'当前网站来源未获API允许，请检查CORS配置。':'治理助手服务暂不可用，请稍后重试。');
  const data=await response.json() as AgentResult|null;
  if(!data||data.schemaVersion!=='1.0'||!Array.isArray(data.plans)||!Array.isArray(data.sources)||!data.recommendation)throw Error('服务响应版本不兼容。');
  return data;
}
