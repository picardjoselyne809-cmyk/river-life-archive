import {notFound} from 'next/navigation';
import {rivers} from '@/data/rivers';
import RiverDetail from '@/components/river-detail';
export function generateStaticParams(){return rivers.map(r=>({id:r.id}))}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;const r=rivers.find(r=>r.id===id);return {title:r?.name||'档案未找到',description:r?.summary}}
export default async function RiverPage({params}:{params:Promise<{id:string}>}){const {id}=await params;const river=rivers.find(r=>r.id===id);if(!river)notFound();return <RiverDetail river={river}/>}
