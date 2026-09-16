# 重构验收 · 2026-09-15

保留React、Vinext、Vite及原三案例研究数据、铜钵河事件与机制模拟。现有6个入口页面、10个独立档案页面，另有404。数据按rivers/events/policies/actors/sources/media分离。

## 实际验证

- npm test通过：原事件边界、模拟单调性、GeoJSON和新增档案引用、筛选、媒体许可、导出数据一致性。
- npm run check通过：TypeScript无错误。
- npm run build通过：17条预渲染路由，0跳过；包含16个内容页。只有Vite插件耗时提示，无构建错误。
- npm run test:http通过：16条内容路由、27项资源、档案正文、证据锚点、未知地址404。
- npm run check:deployment通过：未检测到常见密钥或本机用户路径；不等于完整安全审计。
- Windows内嵌Chromium实际操作生产构建localhost:4174；未单独启动品牌Chrome。

## 用户路径

A：首页地图铜钵河→独立详情→治理历程→2024事件T7→S01来源定位与展开，原文链接存在。

B：首页→档案库→跨区域治理→梁滩河→浏览器返回，URL与选中状态恢复筛选。

C：治水史包含工程、责任、协同、数字、智能五阶段；展开2026节点，点击相关蒲河进入详情。

D：巴渝专题→两条流演示→未来机制，出现研究设想及非全面实现事实的说明。

额外检查：主体网络切换事件中心；点击大竹显示职责和权限边界；瞿塘峡影像弹窗打开及Escape关闭。

## 布局

- 1920×1080：首页实景加载、按钮正文可读；文档宽1905，无页面横向溢出。
- 1366×768：首页、地图、详情和主体网络双栏实际检查，无明显重叠。
- 390×844：首页、铜钵河文档宽375；导航和目录横向滚动，事件单列阅读。
- 所检页面最近error/warn日志为空。早期SVG标题水合警告已修复。
- 接续时旧本地预览进程已停止，重新启动后完成检查；公网不依赖此进程。

## 内容与限制

共9条河流、1份三峡库区区域档案，4份专题、6份基础；详见CONTENT-COVERAGE.md。32项来源，3项媒体。河长制条例施行日期核正为2021年1月1日，依据新增S32。2009政策完整原文待核。临江河不虚构具体数字污染预警事件，新盛河与任市河合并编目。

沿用DataV公开行政边界；所有案例节点、关系连线与事件图为示意。未新增真实河道、监测站、污染源坐标。底图再分发许可及正式地图展示要求仍需进一步确认。

两张实景照片、一张卫星处理影像已本地打包，许可记录见MEDIA-SOURCES.md。九条支流可转载实景和治理现场照片仍缺，保留政府原文入口。瞿塘峡原图约6MB，弱网首次访问较慢。

## 修改范围

app/page.tsx、layout.tsx、archive.css、not-found.tsx及rivers、timeline、network、bayu、about路由；components内archive-map、river-explorer、river-detail、governance-network、media-figure、evidence、site-shell；data六类目录；public/data/archive.json与public/media；next.config.ts、tsconfig.json、package.json；scripts内build、serve、verify-http、verify-archive、export-archive、document-catalog；README及部署、资料、媒体、验收文档。

## 下一步

优先补铜钵河、梁滩河授权实景与治理现场影像、精确空间数据；再补龙河预警后续闭环、临江河具体预警事件、2009政策原件。优先完善证据链，再扩充数量。
