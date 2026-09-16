import AssistantWorkbench from '@/components/assistant-workbench';
import {rivers} from '@/data/rivers';
import './assistant.css';
export const metadata={title:'流域治理助手',description:'从案例中学习，在规则约束下分析治理情景。'};
export default function AssistantPage(){return <AssistantWorkbench rivers={rivers.map(({id,name})=>({id,name}))}/>;}
