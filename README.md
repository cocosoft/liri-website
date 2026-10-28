# Liri 官网

> 玲珑鸟 · 你的 AI 私人助手
> 官网：https://openliri.com

基于 **Astro + Tailwind CSS** 构建的静态官网。

## 项目结构

```text
/
├── public/
│   ├── CNAME              # 自定义域名配置
│   ├── logo.png           # 站点 Logo
│   └── favicon.ico
├── scripts/
│   └── sync-docs.mjs      # 从 Liri 仓库 app/docs 同步对外文档
├── src/
│   ├── components/        # 首页区块组件（20 个）
│   ├── content/
│   │   └── docs/          # 文档正文（由 sync-docs 生成，勿手改）
│   ├── data/
│   │   └── site.ts        # 全站唯一事实源（工具数/渠道数/版本等）
│   ├── layouts/
│   │   └── Layout.astro    # 全局布局 + SEO
│   ├── pages/
│   │   ├── index.astro     # 主页
│   │   └── docs/           # 文档列表 + 详情页
│   ├── content.config.ts   # 文档集合定义
│   └── styles/
│       └── global.css      # Tailwind + 自定义主题 + 文档排版
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages 自动部署
├── astro.config.mjs
└── package.json
```

> 所有对外数字集中在 `src/data/site.ts`，修改前请先在 Liri 源码中复核对应事实。

## 本地开发

```bash
# 安装依赖
bun install

# 启动开发服务器（默认 http://localhost:4321）
bun run dev

# 生产构建
bun run build

# 同步文档（从 ../app/docs 拉取对外文档）
bun run sync:docs

# 本地预览构建产物
bun run preview
```

## 部署

推送 `main` 分支自动触发 GitHub Actions 构建并部署到 GitHub Pages。
