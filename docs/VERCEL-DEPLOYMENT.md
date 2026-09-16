# Vercel 部署配置（案例知识平台）

保留现有技术栈，静态导出，无需后端、环境变量、地图密钥或数据库。

| 配置 | 填写 |
|---|---|
| Framework Preset | Other |
| Root Directory | 包含 package.json 的 river-site 目录；若上传独立源码包则填 ./ |
| Install Command | npm ci |
| Build Command | npm run build |
| Output Directory | dist/client |
| Node.js Version | 24.x |
| Environment Variables | 无 |
| vercel.json | 不需要；实际目录形式路由，不需要 SPA 重写 |

1. 将本项目独立上传到自己的 Git 仓库，不合并智能体项目。不要上传 node_modules、.env、缓存或运行日志。
2. 登录 Vercel，Add New Project，导入仓库，按表配置并 Deploy。
3. 获得 vercel.app 链接后测试下列路径，也要在详情页按刷新并直接粘贴深层 URL。
4. 首页地图 → 铜钵河 → 治理历程 → 2024事件 T0–T7 → 来源原文。
5. 档案库 → 跨区域治理 → 梁滩河 → 浏览器返回，确认筛选仍存在。
6. 重庆治水史 → 展开节点 → 相关河流；巴渝治水 → 两条流 → 未来机制说明。
7. 在1366×768、1920×1080及手机浏览，检查地图、目录、网络、照片和控制台。

本地：npm ci；npm test；npm run check；npm run build；npm run preview。

Vercel 尚未通过账号部署，本项目当前公开发布渠道为既有 Sites；这里提供可部署配置和源码，不冒称已获得 vercel.app 链接。
