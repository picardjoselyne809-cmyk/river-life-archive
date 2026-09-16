# 公网升级修改清单

- app/page.tsx：比赛作品名称、简洁说明、案例背景与“进入治理档案”按钮；导航页脚名称一致。
- app/layout.tsx：浏览器标题更新。
- app/globals.css：首页说明排版、1366×768布局约束、网格子项防溢出。
- components/archive-map.tsx：扩大SVG案例入口可点击热区；不修改地图数据、坐标或来源。
- package.json / package-lock.json：增加preview、HTTP检查、安全扫描命令；修复已发现依赖漏洞。
- .gitignore / .vercelignore：排除本地凭据、缓存、运行产物与部署关联元数据。
- scripts/check-deployment.mjs：源码及公开输出扫描。
- scripts/verify-http.mjs：支持用TEST_BASE_URL对公网做无凭据访问与JSON解析检查。
- README.md、docs/VERCEL-DEPLOYMENT.md、docs/VALIDATION.md：运行、Vercel配置与实测记录。

未添加vercel.json；现有静态输出配合Vercel项目设置即可。未变更data/research.ts、public/data中的案例事实、政策来源或GeoJSON；未合并其他仓库，未加入后端、LLM、登录或数据库。

依赖修复：React/React DOM/RSC 19.2.8，Vinext 1.0.0-beta.9，Vite 8.2.2，RSC插件0.5.34，Cloudflare构建插件1.54.4，Wrangler 4.129.0及配套类型。npm audit已从11项已知漏洞降至0。
