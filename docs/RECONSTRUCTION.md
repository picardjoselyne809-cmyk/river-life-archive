# 产品重构决策 / 2026-09-14

## 检查结论
既有React19、TypeScript、Vinext/Vite静态导出保留。原单页以锚点导航、选中河流替换同一区块，无法分享独立档案。已有铜钵河、梁滩河、蒲河和13项来源；保留事实、事件播放器、动态反馈模型、GeoJSON。新页面使用真实路径，静态预渲染，不引入后台。

## 信息架构（实施前确定）
- `/` 城市实景 → 治理地图 → 问题入口。
- `/rivers` 搜索、治理类型筛选、地图预览、档案索引。
- `/rivers/[id]` 共享详情模板：概览、难题、历程、主体、事件、数字治理、依据。
- `/timeline` 年代节点 → 制度/能力 → 关联河流。
- `/network` 选河流 → 点主体 → 职责、协作与边界。
- `/bayu` 平台专题、两条流、未来反馈研究机制。
- `/about` 研究方法、完整度、来源与影像授权。

## 数据结构
data/rivers独立档案记录；data/events事件；data/policies时间节点；data/actors主体；data/sources证据；data/media影像。记录用稳定ID关联。旧research.ts作为原始三案例资料保留，适配进入新结构，不复制页面。新增档案由generateStaticParams自动生成路由。

## 组件
SiteHeader/Footer、RiverExplorer、RiverDetail、GovernanceNetwork、PolicyTimeline、MediaFigure、EvidenceList。ArchiveMap改为可注入档案集合。保留EventStory、Mechanism/TwoFlows，引用改为跨页面或详情页有效来源入口。

## 视觉方向
真实影像与纸面档案并置；深江水色、岩石灰、白纸底和少量赭红索引。大幅城市照片、细线列表、地理工作区、正文阅读栏；不使用整屏观点切换。

## 资料边界
10份档案包含9条河流与1份三峡库区区域档案，不把区域当单条河。任市河/新盛河合并，梁平跨界主题不重复计数。临江河采用有依据的智慧河长叙事；没有足够证据的具体预警不展示。历史分期为研究整理，阶段交叠；2009历史节点未核到原始文件则显式标记待核。地图行政底图是真实公开GeoJSON，节点均为区域示意，不绘制伪造精确河道。照片仅在确认开放许可时本地嵌入，其他影像链接回原始网页。
