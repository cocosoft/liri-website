---
title: "Quick Start"
description: "Get up and running with Liri in 5 minutes."
group: "Getting Started"
order: 1
source: "快速入门/quickstart.md"
---

> This page is synced from `app/docs/快速入门/quickstart.md` in the GitHub repository. If it differs from the source, the repository wins.
# Quick Start

This guide helps you get up and running with Liri in 5 minutes.

## Start the application

```bash
cd app
bun run dev
```

## Basic interaction

Once started, you are in an interactive REPL where you can type questions directly or use commands.

### Common commands

| Command | Description |
|------|------|
| `/help` | Show all available commands |
| `/skill list` | List available skills |
| `/task list` | List tasks |
| `/config show` | Show the current configuration |
| `exit` | Exit the application |

### Example prompts

```
Hello, please explain what dependency injection is?
```

```
Please read the contents of the file src/index.ts
```

## Using tools

Liri ships with a rich toolset:

```bash
# Read a file
Read the contents of config.json

# Search for information
Search for a TypeScript decorators tutorial

# Generate an image
Generate an image of a cat

# Execute code
Please run this Python code: print("Hello")
```

## Next steps

- See [Tools Overview](/en/docs/tools) for all available tools
- See [Core Modules](https://github.com/cocosoft/Liri/blob/main/app/docs/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/index.md) to learn about the system architecture
- See [Configuration Guide](/en/docs/configuration) for advanced configuration
