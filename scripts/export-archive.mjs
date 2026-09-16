import {writeFile} from 'node:fs/promises';
import {rivers} from '../data/rivers/index.ts';
import {events} from '../data/events/index.ts';
import {sources} from '../data/sources/index.ts';
import {actors} from '../data/actors/index.ts';
import {policies} from '../data/policies/index.ts';
import {media} from '../data/media/index.ts';
await writeFile('public/data/archive.json',JSON.stringify({schemaVersion:1,researchCheckedAt:'2026-09-14',spatialPrecision:'所有案例节点为区域示意',rivers,events,sources,actors,policies,media},null,2)+'\n');
console.log('Exported archive catalog: '+rivers.length+' dossiers');
