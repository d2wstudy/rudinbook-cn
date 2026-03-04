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

## 交互功能（读者笔记 / 章节讨论）

本项目的交互功能基于 **GitHub Discussions**，并通过 **Cloudflare Worker** 完成 OAuth 交换与 Discussions 读取缓存代理。

完整的从零配置步骤（包含需要运行的命令、需要修改的文件、常见问题排查）见：

- `WORKER.md`

快速检查清单：

- GitHub 仓库已开启 Discussions，且存在分类：`Notes` / `Announcements`
- `worker/wrangler.toml` 已填写目标仓库：`REPO_OWNER` / `REPO_NAME`
- Worker secrets 已配置：`GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` / `GITHUB_PAT`（可选但强烈建议）
- 站点侧 `.env` 已配置：`VITE_GITHUB_CLIENT_ID` / `VITE_WORKER_URL` / `VITE_GITHUB_REPO_OWNER` / `VITE_GITHUB_REPO_NAME`
