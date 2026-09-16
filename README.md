# 河流生命档案——流域治理交互式案例知识平台

以河流为索引，将空间、时间、主体、制度、事件和数字治理过程组织为可探索档案。保留 React 19、Vinext、Vite 和 TypeScript，纯静态部署，无数据库、登录或 LLM。

## 运行

建议 Node.js 24（最低 22.13）。首次安装需要网络。

```sh
npm ci
npm run dev
```

```sh
npm test
npm run check
npm run build
npm run preview
```

开发地址以终端为准；生产预览默认 http://localhost:4173。设置 PORT 可更换端口。预览服务仅监听本机。包含构建的交付包也可直接运行 `node scripts/serve.mjs`。不要双击 HTML。

## 信息架构

| 路由 | 探索方式 |
|---|---|
| / | 重庆实景、案例地图、三个问题入口 |
| /rivers | 搜索、治理类型筛选、地图预览、档案列表 |
| /rivers/:id | 独立河流档案，目录、历程、主体、事件、数字环节、证据 |
| /timeline | 五阶段重庆治水史，展开节点并进入相关河流 |
| /network | 按河流或事件探索主体职责、协作与边界 |
| /bayu | 平台专题、数据流与治理流、过去/现在/未来机制 |
| /about | 研究方法、完整度、空间精度、影像许可、来源总索引 |

实际导出 16 个内容页面及 404。每条河生成独立 HTML 目录，支持直接打开与刷新。筛选、搜索和选中河流保存在 URL；浏览器返回可恢复探索条件。

## 内容

10 份档案：铜钵河、梁滩河、蒲河、龙溪河、大清流河、小安溪、临江河、新盛河（任市河）、龙河，以及三峡库区区域历史档案。前四个专题档案为铜钵河、梁滩河、蒲河、临江河；其余为有可靠内容但存在明确资料缺口的基础档案。新盛河与任市河合并编目，三峡库区不计作一条河。

地图使用既有 DataV 公开行政边界 GeoJSON，案例点和治理连线为明确标注的区域示意，没有补造真实河道、监测站或污染源。影像为两张真实照片、一张卫星处理影像，附开放许可；未获转载授权的政府照片只保留原文入口。未来机制与模拟不构成已实现的治理事实或真实预测。

## 数据与组件

- `data/rivers`：河流索引、标签、资料完整度、结构化事实及缺口。
- `data/events`、`data/policies`、`data/actors`：事件、政策与主体。
- `data/sources`、`data/media`：证据和影像的完整来源记录。
- `data/research.ts`：保留原三河事实、铜钵河事件与机制模型。
- `public/data/archive.json`：构建和测试自动生成的全量编目；GeoJSON 同目录。
- `public/media`：三张本地开放许可影像。
- `components/river-detail.tsx`：所有档案共用模板。
- `components/river-explorer.tsx`、`archive-map.tsx`、`governance-network.tsx`：探索组件。
- `app/archive.css`：编辑式视觉与响应式布局；原事件和机制组件保留。

新增河流：先录入来源，再在 rivers、events、actors 中关联唯一 ID；有合法影像才添加 media。运行测试验证引用，build 自动生成详情页。不需要复制页面或接入后端。

## 部署与测试

输出目录 `dist/client`。无需环境变量或地图 Token。Vercel 配置见 `docs/VERCEL-DEPLOYMENT.md`。现有 Sites 公网地址：https://bayu-river-archive.cjz-622.chatgpt.site/

### GitHub Pages

本仓库已配置 GitHub Actions 自动发布。仓库地址：

https://github.com/picardjoselyne809-cmyk/river-life-archive

GitHub 仓库设置：

- `Settings` -> `Pages` -> `Build and deployment` -> `Source` 选择 `GitHub Actions`。
- 推送到 `main` 后，工作流会运行 `npm ci` 与 `npm run build`。
- 工作流使用 `NEXT_PUBLIC_BASE_PATH=/river-life-archive`，适配 Pages 的仓库子路径。
- 发布地址通常为 `https://picardjoselyne809-cmyk.github.io/river-life-archive/`。

如将来更换仓库名，需要同步修改 `.github/workflows/pages.yml` 中的 `NEXT_PUBLIC_BASE_PATH`。

生产预览启动后执行 `npm run test:http`（默认端口4173，其他端口使用 TEST_BASE_URL），验证16条内容路由、资源、来源锚点和404。`npm run check:deployment` 检查源码和产物中常见密钥及本机用户路径；它不能替代完整安全审计。

完整度、影像来源和本轮验收见 `docs/CONTENT-COVERAGE.md`、`docs/MEDIA-SOURCES.md`、`docs/RECONSTRUCTION-VALIDATION.md`。早期三案例原型记录只作为历史材料。
