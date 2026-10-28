---
title: "Install Liri"
description: "System requirements"
group: "Getting Started"
order: 2
source: "快速入门/installation.md"
---

> This page is synced from `app/docs/快速入门/installation.md` in the GitHub repository. If it differs from the source, the repository wins.
# Installation Guide

## System requirements

- **Operating system**: Windows 10+ / macOS 12+ / Linux (kernel 5.x+)
- **Runtime**: Node.js >= 20 or Bun >= 1.0
- **Memory**: 512MB minimum (2GB+ recommended)
- **Disk space**: 500MB minimum

## Install dependencies

### Using Bun (recommended)

```bash
# Install Bun
curl -fsSL https://bun.sh/install | bash

# Enter the project directory
cd app

# Install dependencies
bun install
```

### About the runtime

> Liri's database relies on `bun:sqlite`, so you must install and run it with **Bun**; `npm / yarn / pnpm install` is not a substitute.


## Environment configuration

Copy the environment variable template and edit it:

```bash
cp .env.example .env
```

Edit the `.env` file and configure the required parameters:

```ini
# AI model configuration
DEEPSEEK_API_KEY=your-deepseek-api-key-here
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-chat

# Log level
LOG_LEVEL=info

# Service port
PORT=3000
```

## Start the application

```bash
# Development mode (with hot reload)
bun run dev

# Production mode
bun run build
bun run start

# Run directly
bun --bun run src/index.ts
```

## Verify the installation

After starting, you are dropped into an interactive REPL; enter `/help` to see the available commands. If you see the welcome message, the installation succeeded.
