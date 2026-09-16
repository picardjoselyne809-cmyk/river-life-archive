# 研究与设计定稿（开发前）

核验日期：2026-09-05。定位：案例驱动的流域智能治理交互叙事；不是实时监测系统。

## 案例与来源

1. 铜钵河：核心跨省事件。2024-04-13重庆市政府转载重庆日报 https://www.cq.gov.cn/ywdt/jrcq/202404/t20240413_13128165.html 。补充制度与空间事实：生态环境部2025-07-17 https://www.mee.gov.cn/home/ztbd/2023/mlhh2/yxal3/cq/202507/t20250717_1123691.shtml 。
2. 梁滩河：工程、河长制和跨区长期治理。2019年座谈会 https://sthjj.cq.gov.cn/ztzl_249/rdzl/zysthbdczqzxd/gzdt_38225/201907/t20190722_7036834.html ；2026年回顾 https://www.cq.gov.cn/zjcq/lszq/ltbsjtbwz/202605/t20260506_15650949.html 。
3. 蒲河：綦江区寨溪大桥断面2025年事件，解释治理中心、水利、街道和水电站调度关系。https://www.cq.gov.cn/zt/szzqjs/fngxnzl/sthj/wrfz/202510/t20251030_15126097.html 。疑似污水处理厂不能当作已证实污染原因；溶解氧只写异常，不推测超标方向。

候选取舍：临江河已发现2024年氟化物报道，但其链式溯源主题与蒲河重合，本轮不扩展；龙河/龙溪河作为候选不设独立档案，以维持三个互补案例。并非宣称这些河流无公开资料。

## 证据边界

铜钵河原文在同文使用“均摊坝”和“均滩坝”，网页保留异写说明。报道仅给9:30预警、11:30现场排查、3月21日达标，其他T节点只表示顺序；“不到两天”按报道引用，不推算精确小时。没有公开连续浓度序列，不造曲线。无核实的监测站、排口、企业坐标，一律使用关系示意，不落真实点位。2025年生态环境部长期水质总结与2024年单次异常不合并为“从无异常”。

## 信息架构与页面结构

首页提问 → 五阶段治理能力时间线 → 三案例空间入口 → A身份/B难点/C制度/D数字/E事件/F研究结论 → 铜钵河8步事件播放器 → 数据流/治理流 → 过去现在未来动态循环 → 示意模拟 → 来源与方法。

主导航锚点支持演进、案例、事件、未来与证据。案例选择联动档案，阶段选择联动问题/方式/新增能力/案例。事件支持播放、暂停、跳步、重播。未来循环支持选节点及暂停。模拟输出只用无量纲相对指数。

## 数据结构

Source: id/title/publisher/date/url/kind；Claim: id/text/date/sourceIds/status（reported/planned/hypothesis）；Case: id/name/regions/theme/questions/sections/events/sourceIds/spatialPrecision；EventStep: id/label/time/timePrecision/text/sourceIds/mapState；Stage: problem/method/capability/caseId/sourceIds；SpatialFeature: geometry/properties(name,precision,source,license)。事件示意图使用布局坐标，绝不存为真实经纬度。

地图采用离线可用的公开行政区GeoJSON；若下载失败则明确退化到关系示意图。河流叙事线均标为示意；不展示虚构污染点。优先保证本地运行、静态资源自包含、来源可回溯。

## 最新进展处理

2024-04报道1.1万余感知点；2025-10报道1.7万余、22部门900余项，保持各自时间口径。2025年报道已有AI智能体、未来3日预测和月度复盘；2026-01水利工作会议部署深化AI+河库智管，2026-09-02新闻发布会提出迭代AI+巴渝治水。不同应用与规划口径不能合并为全面自主治理事实。完整资源自适应配置与持续学习循环是研究设想。
