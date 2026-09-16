import {sources} from '@/data/sources';
import {appHref} from '@/lib/public-path';
export function Refs({ids,local=false}:{ids:string[];local?:boolean}){return <span className="refs">{ids.map(id=><a key={id} href={`${local?'':appHref('/about')}#source-${id}`} title={sources.find(s=>s.id===id)?.title}>[{id}]</a>)}</span>}
export function EvidenceList({ids}:{ids?:string[]}){const list=ids?sources.filter(s=>ids.includes(s.id)):sources;return <div className="evidence-list">{list.map(s=><details key={s.id} id={'source-'+s.id}><summary><span>{s.id}</span><strong>{s.title}</strong><small>{s.date}</small></summary><div><p>{s.publisher} · {s.kind}</p><a href={s.url} target="_blank" rel="noreferrer">查看原始来源 ↗</a></div></details>)}</div>}
