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


## 交互功能配置（占位符待替换）

站点侧需要配置（`docs/.env.development` / `docs/.env.production`）：

- `VITE_GITHUB_CLIENT_ID`
- `VITE_WORKER_URL`
- `VITE_GITHUB_REPO_OWNER`
- `VITE_GITHUB_REPO_NAME`

Worker（`worker/`）需要：

- 修改 `worker/wrangler.toml` 的 `[vars]`：`REPO_OWNER` / `REPO_NAME`
- 通过 `wrangler secret` 设置：
  - `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`
  - （可选）`GITHUB_CLIENT_ID_DEV` / `GITHUB_CLIENT_SECRET_DEV`
  - `GITHUB_PAT`（用于匿名读取 Discussions）

