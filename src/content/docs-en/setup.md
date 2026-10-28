---
title: "First-time Setup"
description: "Development environment"
group: "Getting Started"
order: 3
source: "快速入门/setup.md"
---

> This page is synced from `app/docs/快速入门/setup.md` in the GitHub repository. If it differs from the source, the repository wins.
# Environment Setup

## Development environment

### Recommended tools

- **Editor**: VS Code or WebStorm
- **Node version manager**: nvm-windows (Windows) or nvm (macOS/Linux)
- **Package manager**: Bun (recommended) or npm/pnpm/yarn

### Recommended VS Code extensions

- TypeScript + JavaScript
- ESLint
- Prettier
- Rust (for native module development)

### Development commands

```bash
# Install all dependencies (including dev dependencies)
bun install

# Run tests
bun test

# Type check
npx tsc --noEmit

# Lint code
bun run lint
```

## Production environment

### Environment variables

| Variable | Description | Default |
|------|------|--------|
| `DEEPSEEK_API_KEY` | DeepSeek API key (get one at: <https://platform.deepseek.com/api_keys>) | - |
| `DEEPSEEK_BASE_URL` | DeepSeek API endpoint | `https://api.deepseek.com` |
| `DEEPSEEK_MODEL` | DeepSeek model name | `deepseek-chat` |
| `LOG_LEVEL` | Log level | `info` |
| `PORT` | Service port | `3000` |
| `NODE_ENV` | Runtime environment | `development` |

### Performance tuning

```bash
# Build optimization
bun run build

# Set production environment
NODE_ENV=production bun run start
```

## Database configuration

Liri persists data on the filesystem. Default storage paths:

- **Session data**: `data/sessions/`
- **Cache data**: `data/cache/`
- **Log files**: `logs/`
- **OAuth tokens**: `data/oauth-tokens.json`
