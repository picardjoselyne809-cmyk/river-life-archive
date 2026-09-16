import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {rivers,filterRivers} from '../data/rivers/index.ts';
import {sources} from '../data/sources/index.ts';
import {events} from '../data/events/index.ts';
import {actors} from '../data/actors/index.ts';
import {policies} from '../data/policies/index.ts';
import {media} from '../data/media/index.ts';
for(const collection of [rivers,sources,events,actors,policies,media])assert.equal(new Set(collection.map(x=>x.id)).size,collection.length,'Duplicate identifier');
const sourceIds=new Set(sources.map(s=>s.id));
for(const river of rivers){assert(/^[a-z0-9-]+$/.test(river.id));assert(river.eventIds.length);assert(river.actorIds.length);for(const field of ['overview','difficulty','institution','digital','conclusion']){assert(river[field].text);assert(river[field].sources.length);for(const id of river[field].sources)assert(sourceIds.has(id),river.id+' missing source '+id)}for(const id of river.eventIds)assert(events.some(e=>e.id===id&&e.riverId===river.id));for(const id of river.actorIds)assert(actors.some(a=>a.id===id));for(const id of river.mediaIds)assert(media.some(m=>m.id===id));}
for(const item of [...events,...actors,...policies]){assert(item.sources.length||item.pending);for(const id of item.sources)assert(sourceIds.has(id),id);}
for(const p of policies)for(const id of p.riverIds)assert(rivers.some(r=>r.id===id));
assert.equal(filterRivers('不存在的河流','全部').length,0);assert(filterRivers('梁滩','跨区域治理').some(r=>r.id==='liangtan'));assert(filterRivers('','跨省治理').every(r=>r.tags.includes('跨省治理')));assert(filterRivers(' 四川 ','全部').some(r=>r.id==='tongbo'));
for(const m of media){assert(m.originalUrl.startsWith('https://'));assert(m.credit&&m.license&&m.licenseUrl&&m.caption);if(m.src.startsWith('/'))assert((await stat('public'+m.src)).size>0);}
const exported=JSON.parse(await readFile('public/data/archive.json'));assert.deepEqual(exported.rivers,rivers);assert.deepEqual(exported.events,events);assert.deepEqual(exported.media,media);
console.log(`PASS: ${rivers.length} dossiers, cross references, policy links, filters, media licenses and exported catalog`);
