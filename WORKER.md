# Worker 接入与配置指南（GitHub OAuth + Discussions）

本项目的「读者笔记（段落批注）」与「章节讨论」基于 **GitHub Discussions** 存储；出于安全与缓存需要，引入了一个 **Cloudflare Worker** 作为：

- GitHub OAuth 的 `code -> access_token` 交换代理（避免在浏览器暴露 `client_secret`）
- Discussions 读取代理 + 缓存层（减轻 GitHub API 压力，并支持匿名只读）

下面按“从零到可用”的顺序给出完整配置步骤。

---

## 0. 你会改到哪些地方

| 目的 | 需要改的文件/位置 | 需要填的内容 |
| --- | --- | --- |
| 指定 Discussions 所在仓库 | `worker/wrangler.toml` | `[vars] REPO_OWNER / REPO_NAME` |
| 配置站点侧 OAuth ClientId / Worker 地址 / 仓库信息 | `docs/.env.development`、`docs/.env.production` | `VITE_GITHUB_CLIENT_ID`、`VITE_WORKER_URL`、`VITE_GITHUB_REPO_OWNER`、`VITE_GITHUB_REPO_NAME` |
| 配置 Worker 的 secrets（不进 Git） | Cloudflare Worker 环境变量（`wrangler secret put`） | `GITHUB_CLIENT_ID`、`GITHUB_CLIENT_SECRET`、`GITHUB_PAT`（可选但强烈建议）等 |

补充：如果你把本仓库当作开源模板复用，想快速定位“哪些文件里还有占位符需要填”，可以直接搜索：

- `rg --hidden CHANGE_ME`
- `rg --hidden CHANGE_ME -g'!*.md'`（推荐：结果更“干净”）

---

## 1. GitHub 仓库侧准备（一次性）

1) **开启 Discussions**

- 进入你的仓库 → `Settings` → `General` → `Features` → 勾选 `Discussions`

2) **创建（或确认存在）Discussions 分类**

本项目默认使用两个分类名（区分不同用途）：

- `Notes`：读者笔记（段落批注）
- `Announcements`：章节讨论（页面底部评论区）

如果你想改分类名，需要同步修改：

- `docs/.vitepress/theme/composables/useAnnotations.ts` 里的 `CATEGORY_NAME`
- `docs/.vitepress/theme/composables/useComments.ts` 里的 `CATEGORY_NAME`

3) **仓库权限建议**

- 公共仓库：通常允许任何登录用户参与讨论即可
- 需要更强管控：在 GitHub Discussions 的分类权限里做限制（按需）

---

## 2. 创建 GitHub OAuth App（开发/生产各一套，推荐）

站点需要 GitHub OAuth 让用户登录后执行写操作（发讨论、评论、回复、点赞等）。推荐分别创建：

- **本地开发 OAuth App**（回调地址：`http://localhost:15689/`）
- **生产环境 OAuth App**（回调地址：你的线上站点根路径，比如 GitHub Pages）

创建位置：

- GitHub → 头像 → `Settings` → `Developer settings` → `OAuth Apps` → `New OAuth App`

需要填写的关键字段：

- `Homepage URL`
  - 本地开发：`http://localhost:15689/`
  - 生产：例如 `https://<OWNER>.github.io/<REPO>/`
- `Authorization callback URL`
  - 本地开发：`http://localhost:15689/`
  - 生产：例如 `https://<OWNER>.github.io/<REPO>/`

创建完成后记下：

- `Client ID`
- `Client Secret`（只会显示一次，注意保存）

---

## 3. 创建 GitHub PAT（用于“匿名只读”拉取 Discussions，强烈建议）

站点的读操作（加载笔记/讨论）默认走 Worker 的缓存代理；当用户未登录时，Worker 需要一个 **服务器端 Token** 去 GitHub GraphQL 拉取 Discussions（否则匿名用户只能看到空列表，直到有登录用户触发缓存填充）。

推荐使用 **Fine-grained personal access token**：

- GitHub → `Settings` → `Developer settings` → `Personal access tokens` → `Fine-grained tokens`
- 选择能访问目标仓库
- 权限至少包含（按 GitHub UI 的实际命名为准）：
  - `Discussions`: **Read**
  - `Metadata`: **Read**

把生成的 token 记下来，后面会写入 Worker 的 `GITHUB_PAT` secret。

---

## 4. 部署 Cloudflare Worker

### 4.1 安装/使用 wrangler

推荐直接用 `npx`（无需全局安装）：

```bash
cd worker
npx wrangler --version
```

首次使用需要登录 Cloudflare：

```bash
npx wrangler login
```

### 4.2 修改 `wrangler.toml`

编辑 `worker/wrangler.toml`：

- `name`：建议改成你自己的（避免与别人冲突）
- `[vars]`：
  - `REPO_OWNER = "你的 GitHub 用户/组织名"`
  - `REPO_NAME = "你的仓库名"`

### 4.3 写入 Worker secrets

在 `worker/` 目录下执行（会提示你交互式输入）：

```bash
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET

# 可选：同时支持本地开发 OAuth（推荐）
npx wrangler secret put GITHUB_CLIENT_ID_DEV
npx wrangler secret put GITHUB_CLIENT_SECRET_DEV

# 强烈建议：用于匿名只读拉取 Discussions
npx wrangler secret put GITHUB_PAT

# 可选：允许无用户 token 的缓存清理（用于脚本/运维）
npx wrangler secret put CACHE_PURGE_KEY
```

### 4.4 部署

```bash
npx wrangler deploy
```

部署完成后，你会得到一个 Worker 访问地址（形如 `https://<name>.<subdomain>.workers.dev`）。

这个地址就是后面站点侧要填的 `VITE_WORKER_URL`（不要带 `/api/...`，只填 base URL）。

---

## 5. 配置站点侧环境变量

站点侧需要配置（已提供占位文件）：

- `docs/.env.development`：本地开发用
- `docs/.env.production`：生产构建用

需要填写：

- `VITE_GITHUB_CLIENT_ID`
  - 本地开发：填 **开发 OAuth App** 的 Client ID
  - 生产：填 **生产 OAuth App** 的 Client ID
- `VITE_WORKER_URL`
  - 本地开发：如果你用线上 Worker，可直接填线上地址
  - 或者（推荐调试）：配合 `npx wrangler dev` 使用本地地址（见下一节）
- `VITE_GITHUB_REPO_OWNER` / `VITE_GITHUB_REPO_NAME`
  - 必须与 Worker 指向的仓库一致

---

## 6. 本地跑通“完整链路”（推荐验证流程）

### 6.1 启动 Worker（本地）

```bash
cd worker
npx wrangler dev
```

然后把 `docs/.env.development` 里的 `VITE_WORKER_URL` 填成 wrangler 输出的本地地址（通常是 `http://localhost:8787`）。

> 注意：即使 Worker 本地跑，secrets 仍由 wrangler 注入；如果你用的是线上 secrets，确保本地 dev 的 OAuth App ClientId 与 Worker 里配置的 `*_DEV` 匹配。

### 6.2 启动站点

```bash
npm ci
npm run dev
```

访问 `http://localhost:15689/`：

- 点击右上角登录按钮完成 GitHub 授权
- 在正文中选中一段文字，尝试添加“读者笔记”
- 在页面底部评论区尝试发一条评论

能正常写入且刷新后仍可读到，即表示整体配置成功。

---

## 7. 生产发布注意事项（GitHub Pages）

本项目的 GitHub Pages 工作流（`.github/workflows/deploy.yml`）会在构建时设置：

- `VITEPRESS_BASE=/<repo>/`

因此如果你用 GitHub Pages，**生产 OAuth App** 的回调地址通常应为：

- `https://<OWNER>.github.io/<REPO>/`

并且 `docs/.env.production` 中：

- `VITE_GITHUB_CLIENT_ID`：填生产 OAuth App 的 Client ID
- `VITE_WORKER_URL`：填你部署好的 Worker 地址

---

## 8. 常见问题排查

1) **能打开站点，但登录时报 redirect_uri 不匹配**

- 检查 OAuth App 的 `Authorization callback URL` 是否与你填写的一致（本地一般是 `http://localhost:15689/`）
- 检查站点是否部署在子路径（GitHub Pages 的 `/<repo>/`）

2) **匿名用户看不到任何讨论/笔记**

- 确认 Worker 已设置 `GITHUB_PAT`
- 确认目标仓库已开启 Discussions

3) **写入失败（发评论/点赞无效）**

- 确认用户已登录（右上角显示头像）
- 确认仓库 Discussions 分类允许用户发言
- 打开浏览器控制台，看 GitHub GraphQL 返回的错误信息（可能是权限/速率限制）
