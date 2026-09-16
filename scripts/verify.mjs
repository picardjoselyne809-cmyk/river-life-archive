import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {cases,sources,stages,eventSteps,simulate,mechanisms} from '../data/research.ts';
const known=new Set(sources.map(s=>s.id));assert.equal(known.size,sources.length);
for(const c of cases){assert.equal(c.sections.length,5);assert(c.events.length>=3);for(const item of [...c.sections,...c.events])for(const id of item.sources)assert(known.has(id),`Missing ${id}`)}
for(const s of stages){assert(cases.some(c=>c.id===s.caseId));for(const id of s.sources)assert(known.has(id))}
assert.equal(eventSteps.length,8);assert(eventSteps[2].text.includes('预测'));assert(eventSteps[3].text.includes('疑似'));assert.equal(mechanisms.future.nodes.length,8);
const base=simulate([0,0,0,0]);assert.deepEqual(base,{exposure:100,response:100,cost:100,effect:0});
for(let i=0;i<4;i++){let previous=simulate([0,0,0,0]);for(let v=1;v<=100;v++){const input=[0,0,0,0];input[i]=v;const next=simulate(input);assert(next.exposure<=previous.exposure);assert(next.response<=previous.response);assert(next.effect>=previous.effect);if(i===1)assert(next.cost<=previous.cost);if(i===3)assert(next.cost>=previous.cost);previous=next}}
for(const name of ['chongqing','sichuan','dazhou']){const g=JSON.parse(await readFile(`public/data/${name}.geojson`));assert.equal(g.type,'FeatureCollection');assert(g.features.length>0)}
const exported=JSON.parse(await readFile('public/data/research.json'));assert.deepEqual(exported.cases,cases);assert.deepEqual(exported.sources,sources);assert.deepEqual(exported.eventSteps,eventSteps);
console.log('PASS: case references, event boundaries, simulation monotonicity, GeoJSON and exported data consistency');
