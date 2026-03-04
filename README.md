# rudinbook-cn

本仓库使用 VitePress 构建站点，并迁移了参考项目(rl-book-bilingual)的「读者笔记 / 章节讨论」等交互能力（不包含双语对照相关功能）。

## 开发

```bash
npm ci
npm run dev
```

访问：`http://localhost:15689/`

## 构建

```bash
npm run build
```

产物目录：`docs/.vitepress/dist/`

## 字体 / 排版（更像书）

默认将正文（`.vp-doc`）改为「宋体/思源宋体」一类的**衬线**字族，以便长文阅读；导航/UI 仍保持无衬线风格。

- 配置位置：`docs/.vitepress/theme/style.css`
- 推荐安装（可选）：思源宋体（Source Han Serif / Noto Serif CJK），未安装时会自动回退到系统宋体（如 SimSun）

## 交互功能（读者笔记 / 章节讨论）

本项目的交互功能基于 **GitHub Discussions**，并通过 **Cloudflare Worker** 完成 OAuth 交换与 Discussions 读取缓存代理。

完整的从零配置步骤（包含需要运行的命令、需要修改的文件、常见问题排查）见：

- `WORKER.md`

## 作为开源模板复用（换仓库 / 换一本书）

如果你 fork/复制本仓库用于别的书，**建议只从下面清单开始改**，避免到处翻：

- **交互功能必改**
  - `worker/wrangler.toml`：填 `[vars] REPO_OWNER` / `REPO_NAME`
  - `docs/.env.development`、`docs/.env.production`：填 `VITE_GITHUB_CLIENT_ID` / `VITE_WORKER_URL` / `VITE_GITHUB_REPO_OWNER` / `VITE_GITHUB_REPO_NAME`
- **站点内容常改**
  - `docs/.vitepress/config.ts`：站点标题、描述、侧边栏章节目录、导航等
  - `docs/chapters/*`：正文内容
- **不确定该改哪里时**
  - 搜索占位符（排除说明文档）：`rg --hidden CHANGE_ME -g'!*.md'`

说明：导航栏右上角的 GitHub 图标链接在 GitHub Pages 工作流中会自动指向当前仓库（读取 GitHub Actions 的 `GITHUB_REPOSITORY` 环境变量），因此通常不需要手动改链接。

快速检查清单：

- GitHub 仓库已开启 Discussions，且存在分类：`Notes` / `Announcements`
- `worker/wrangler.toml` 已填写目标仓库：`REPO_OWNER` / `REPO_NAME`
- Worker secrets 已配置：`GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` / `GITHUB_PAT`（可选但强烈建议）
- 站点侧 `.env` 已配置：`VITE_GITHUB_CLIENT_ID` / `VITE_WORKER_URL` / `VITE_GITHUB_REPO_OWNER` / `VITE_GITHUB_REPO_NAME`
