import {readFile,writeFile} from 'node:fs/promises';
const d=JSON.parse(await readFile('public/data/archive.json','utf8'));
await writeFile('docs/CONTENT-COVERAGE.md','# 档案内容完整度\n\n2026-09-15；完整度是编辑状态，不是治理绩效评价。共9条河流与1份区域档案。\n\n|档案|状态|历史/事件节点|待补资料|\n|---|---|---|---|\n'+d.rivers.map(r=>`|${r.name}|${r.status}|${r.eventIds.length}|${r.gaps.join('；')}|`).join('\n')+'\n\n所有事实与来源ID关联，完整数据见 public/data/archive.json；来源总表见 /about。2009政策原始文本待核。\n');
await writeFile('docs/MEDIA-SOURCES.md','# 真实影像与许可\n\n仅两张实景照片与一张卫星处理影像；不冒充支流或治理现场。原图保留，页面容器裁切显示。\n\n'+d.media.map(m=>`## ${m.id}\n\n${m.caption}\n\n- 文件：${m.src}\n- 作者/署名：${m.credit}\n- 来源：[原始档案](${m.originalUrl})\n- 许可：[${m.license}](${m.licenseUrl})\n- 使用范围：${m.scope}\n- 修改：${m.changes}\n`).join('\n'));
