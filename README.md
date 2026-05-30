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
├── src/
│   ├── components/        # 页面区块组件
│   │   ├── Hero.astro           # 首屏
│   │   ├── About.astro          # 项目简介
│   │   ├── Capabilities.astro   # 核心能力
│   │   ├── Scenarios.astro      # 使用场景
│   │   ├── Architecture.astro   # 系统架构
│   │   ├── QuickStart.astro     # 快速开始
│   │   ├── Community.astro      # 社区
│   │   └── Footer.astro         # 页脚
│   ├── layouts/
│   │   └── Layout.astro    # 全局布局 + SEO
│   ├── pages/
│   │   └── index.astro     # 主页
│   └── styles/
│       └── global.css      # Tailwind + 自定义主题
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages 自动部署
├── astro.config.mjs
└── package.json
```

## 本地开发

```bash
# 安装依赖
bun install

# 启动开发服务器（默认 http://localhost:4321）
bun run dev

# 生产构建
bun run build

# 本地预览构建产物
bun run preview
```

## 部署

推送 `main` 分支自动触发 GitHub Actions 构建并部署到 GitHub Pages。
