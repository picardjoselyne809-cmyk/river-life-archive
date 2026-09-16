# 治理助手集成与本地运行

## 架构与边界

河流生命档案保留 React / Vinext 静态导出和 GitHub Pages；新增 `/assistant/` 是静态客户端页面。basin-agent 独立运行 Node HTTP 服务，直接复用 KnowledgeStore、analyze 和 enhance，不执行 CLI 子进程，也不复制知识库或规则引擎。

```text
浏览器 /assistant/
  → 独立 Agent API POST /api/analyze
  → 内存 KnowledgeStore → 确定性治理规则
  → 原有 Evidence Pack → 原有 LLM 增强及 JSON/sourceId 校验
  → 结构化结果 → 案例、主体、机制、方案、补充解读与来源卡片
```

GitHub Pages 仅托管文件，不能执行 Node 服务或安全保存模型密钥。页面公开的 API 地址必须指向自己的后端，不能指向模型供应商。LLM 失败不影响本次已生成的规则结果。接口不保存会话、不写审计文件、不依赖登录或数据库；CLI 及其原有报告/审计机制不变。

## 本地启动

需要 Node.js 22.13+（本次使用 Node 24）。两个项目保持独立目录，各自安装依赖。

推荐使用单命令启动。在 river-life-archive 根目录运行：

```powershell
npm install
npm run dev:agent
```

这个命令底层仍会启动两个本地进程：river-site 前端开发服务器，以及 basin-agent 的 Agent API。浏览器只访问前端；模型密钥仍只由 basin-agent 服务端进程读取。

如果 basin-agent 不在常见相对目录（`../basin-agent`、`../../basin-agent` 或相邻 outputs 目录）中，先设置项目位置：

```powershell
$env:BASIN_AGENT_DIR='C:\path\to\basin-agent'
npm run dev:agent
```

也可以在 river-site 被忽略的 `.env.local` 中加入 `BASIN_AGENT_DIR=../basin-agent`。该变量只用于本地启动器，不会传入浏览器端开发服务器。

启动器会为前端默认设置 `NEXT_PUBLIC_AGENT_API_BASE=http://127.0.0.1:8787`，除非你已经设置过该变量；会为 basin-agent 默认设置 `PORT=8787` 与 `AGENT_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000`，除非你已经设置过对应变量。Agent API 默认监听 `0.0.0.0:8787`，访问 `http://127.0.0.1:8787/health` 应得到 `{"status":"ok"}`。该检查不运行治理分析、不调用模型。

仍可手动分两个终端启动。终端 A 在 basin-agent 根目录：

```powershell
npm install
npm run agent:server
```

终端 B 在 river-life-archive 根目录，创建被忽略的 `.env.local`，只放公开前端配置：

```dotenv
NEXT_PUBLIC_AGENT_API_BASE=http://127.0.0.1:8787
```

```powershell
npm install
npm run dev
```

打开 `http://localhost:3000/assistant/`，选示例并开始分析。取消“启用大模型补充解读”可只运行本地知识库与规则。来自河流档案的 `?river=tongbo` 只显示背景提示，不把历史案例冒充当前情景。

公网形态仍是“用户只打开一个 GitHub Pages 静态网页，但独立 Node Agent API 必须在线”。GitHub Pages 不能保存 LLM 密钥，也不能直接运行 basin-agent；公网前端只能通过 `NEXT_PUBLIC_AGENT_API_BASE` 指向自己的 Render 等后端服务。

## 配置

basin-agent 原有 `.env.local` 继续仅由服务端原有加载器读取：

```dotenv
BASIN_LLM_ENDPOINT=<现有完整Chat Completions地址>
BASIN_LLM_MODEL=deepseek-v4-flash
BASIN_LLM_API_KEY=<仅在本机填写，不提交>
BASIN_LLM_TIMEOUT_MS=120000
BASIN_LLM_JSON_MODE=0
```

不改变模型协议、输出预算、解析器或重试配置。不要把这些变量复制到网站、public、工作流或 NEXT_PUBLIC 变量。

以下是 Agent 服务进程环境变量（原有 `.env.local` 加载器只加载 BASIN 变量，因此这些服务参数应在启动终端或未来托管环境设置）：

| 变量 | 默认值 / 作用 |
| --- | --- |
| PORT | 8787，支持 1–65535 |
| AGENT_HOST | 0.0.0.0 |
| AGENT_ALLOWED_ORIGINS | localhost 和 127.0.0.1 的 3000、4173 端口，逗号分隔 |
| AGENT_ANALYSIS_TIMEOUT_MS | 180000，范围 1000–600000 |

```powershell
$env:PORT='8787'
$env:AGENT_ALLOWED_ORIGINS='http://localhost:3000,http://127.0.0.1:3000'
npm run agent:server
```

CORS 填完整 Origin，不能含路径、尾斜杠或通配符。未来 Pages Origin 是 `https://<用户名>.github.io`，不含仓库路径。CORS 是浏览器访问约束，不是鉴权；当前按单人低频使用设计，未引入账号、限流或配额。

前端 `NEXT_PUBLIC_AGENT_API_BASE` 只接受无凭据、无查询参数、无路径的独立 API Origin；公网用 HTTPS，本地允许 HTTP loopback。它在构建时注入，修改后需重启开发服务或重新构建。没有设置时给出配置提示，不猜测 API 地址。客户端等待上限为 195 秒；若未来提高服务端总超时，也需评估客户端与代理的等待上限。

## API 协议

- `GET /health`：200，`{"status":"ok"}`。
- `POST /api/analyze`：`Content-Type: application/json`。
- `OPTIONS /api/analyze`：允许来源的 CORS 预检。

请求：

```json
{"description":"某跨省河流水质异常，污染源未知，上下游信息不同步，应如何组织治理？","useLLM":true}
```

description 为 1–8000 字符，整个请求最多 40000 字节。useLLM 默认为 true。可选 parameters 仅接受既有 engine 的枚举；页面不要求用户理解这些参数。

响应 schemaVersion 为 `1.0`，包含：

| 字段 | 内容 |
| --- | --- |
| query | 用户情景 |
| classification | 原规则标签、参数、待核实问题、主体名称；不认定未核实事实 |
| cases | caseId、名称、检索评分、匹配理由、经验、边界、原始 evidence |
| mechanisms | 机制、步骤、适用条件、优势风险、关联案例/政策 |
| actors / policies | 既有主体职责与制度证据 |
| plans | 原有 A/B/C 方案、评分、资格约束、行动步骤 |
| recommendation | 原推荐，增加 plan 与固定 basis: rule-engine |
| llm | status: success/fallback/disabled；验证后的 analysis/advice/sourceIds 与说明 |
| sources | id/title/publisher/date/url；缺失日期为 null，不编造年份 |
| audit / risks | 知识版本、哈希、评分说明、权重与风险 |

HTTP 错误包括 400、403、405、408、413、415、500，仅返回安全说明，不含内部堆栈或服务配置。LLM 失败/服务总超时仍返回 200 的规则结果，llm.status 为 fallback。前端网络失败则显示可重试提示，不伪造本地分析。模型供应商的超时、429/5xx、长度终止、JSON或来源拒绝均沿用原 enhance 的安全规则。

## 数据映射

映射位于 `data/agent-links.ts`，不合并两套数据：

| Agent 案例 | 档案 riverId |
| --- | --- |
| C1 铜钵河 | tongbo |
| C2 梁滩河 | liangtan |
| C3 临江河 | linjiang |

C4 川渝联合河长、C5 莱茵河没有对应独立河流页面，不生成虚假链接。Agent S1 → 档案 S01、S2 → S03 仅基于两边已有来源 URL 完全一致；其他来源未强行匹配。Agent API 保持自身 ID，前端映射层负责 archive 链接。来源卡片始终保留 Agent 来源的完整标题、机构、日期和原链接。

案例匹配显示检索分值而非概率；方案分值是教学启发式，不代表真实治理效果。事实、案例经验、规则建议与模型补充在独立区域呈现。

## 安全与测试

- 仅后端读取模型认证；浏览器请求不含 Authorization，不使用凭据、浏览器存储或 URL 参数保存密钥。
- 后端只选取 enhance 已校验草稿，不序列化供应商原始响应或推理正文；接口关闭模型 debug，错误不回显内部信息。
- 两项目 `.env.local` 均被忽略，不提交。网站静态构建与工作流中不得出现 BASIN 配置。
- 请求大小、输入长度、JSON/方法检查、精确 CORS、读取超时与分析总超时分别生效。
- 不修改 Codex 的任何模型、认证或配置文件。

basin-agent：`npm test`（包含服务/API测试；模拟异常不消耗真实模型 token）。

river-life-archive：

```powershell
npm test
npm run check
$env:NEXT_PUBLIC_BASE_PATH='/river-life-archive'
npm run build
npm run test:agent:build
npm run check:deployment
```

`/assistant/` 与河流回链随 basePath 静态导出；API 地址不拼接该前缀。原 GitHub Pages 工作流保持不变。预览带前缀构建可运行 `npm start`，访问 `http://localhost:4173/river-life-archive/assistant/`；HTTP资源测试使用同一前缀：

```powershell
$env:TEST_BASE_URL='http://localhost:4173/river-life-archive/'
npm run test:http
```

## 后续公网部署（本轮未执行）

1. 在支持 Node 的独立服务环境放置 basin-agent 的 src、data、server 与依赖，启动命令 `npm run agent:server`；无需 Render SDK。
2. 由托管平台安全设置 BASIN 变量、PORT 与 AGENT_ALLOWED_ORIGINS；健康检查路径 `/health`。不要上传 `.env.local`。
3. 将前端构建变量 NEXT_PUBLIC_AGENT_API_BASE 改成独立服务的 HTTPS Origin，保留 Pages basePath，重新构建静态网站。
4. 验证真实 Pages → API 的 CORS、请求超时、冷启动与 fallback。评估公网匿名接口成本暴露后再发布；当前没有用户系统或限流。
5. 本次未创建云服务、未部署、未提交或推送，未修改仓库/Pages设置。

## 本轮验收记录（2026-09-16）

- basin-agent：94/94 测试通过，原89项加5项服务/API测试。
- 网站：npm test、TypeScript check、带 `/river-life-archive` 前缀静态构建通过；18个路由静态预渲染，包含助手。
- HTTP预览：17个真实页面、34项静态资源、证据锚点与404检查通过。
- 健康检查返回200，不调用模型；PORT覆盖、0.0.0.0监听、CORS、请求格式/大小与模型超时降级均有测试。
- 本地浏览器真实联调：跨省示例返回C1/C4/C2案例，规则推荐A，大模型补充分析与建议成功显示，9个来源引用均落到来源卡片；本次未fallback。
- 异常测试使用注入的失败/超时增强器，确认规则方案和推荐仍在；不改变真实供应商配置。
- 构建产物进行字段/敏感模式扫描，并在后端进程内以现有凭据做精确匹配，仅输出扫描结论；72项公开产物中无服务端凭据。
- 原研究数据、知识库、规则权重、模型协议、CLI、GitHub Pages工作流均未修改。
