// Cross-project identities, not a merge of facts, policies or source numbering.
export const agentCaseRiver:Record<string,string>={C1:'tongbo',C2:'liangtan',C3:'linjiang'};
// Exact original-document URL matches verified against both catalogs.
export const agentSourceArchive:Record<string,string>={S1:'S01',S2:'S03'};
export function riverForCase(caseId:string){return agentCaseRiver[caseId]??null;}
export function archiveSourceForAgent(sourceId:string){return agentSourceArchive[sourceId]??null;}
