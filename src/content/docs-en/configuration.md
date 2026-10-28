---
title: "Configuration"
description: "Configuration hierarchy"
group: "Configuration & Security"
order: 6
source: "配置与安全/configuration.md"
---

> This page is synced from `app/docs/配置与安全/configuration.md` in the GitHub repository. If it differs from the source, the repository wins.
# Configuration Guide

## Configuration Hierarchy

Liri's configuration is applied in order of priority, from highest to lowest:

1. **Environment variables** - injected at runtime, highest priority
2. **Configuration file** - `config/governance.json`
3. **Defaults** - default settings in the code

## Environment Variables

| Variable | Description | Required |
|------|------|------|
| `DEEPSEEK_API_KEY` | DeepSeek API key (get one at <https://platform.deepseek.com/api_keys>) | Yes |
| `DEEPSEEK_BASE_URL` | DeepSeek API endpoint (the default is fine) | No |
| `DEEPSEEK_MODEL` | DeepSeek model name (the default is fine) | No |
| `LOG_LEVEL` | Log level | No |
| `PORT` | Service port | No |

## Configuration File

`config/governance.json` contains the full system configuration:

```json
{
  "permissions": {
    "file_read": {
      "allowed": true,
      "paths": ["./src", "./config", "./docs"]
    },
    "file_write": {
      "allowed": true,
      "paths": ["./src", "./config"]
    },
    "bash_exec": {
      "allowed": true,
      "commands": ["node", "bun", "npm", "git", "npx"],
      "forbiddenCommands": ["rm -rf /*", "del /f /s"]
    }
  },
  "rateLimit": {
    "requestsPerMinute": 60,
    "tokensPerMinute": 100000
  }
}
```

## Runtime Configuration

```bash
# Show current configuration
/config show

# Show a specific configuration item
/config get DEEPSEEK_MODEL

# Modify configuration (temporary)
/config set LOG_LEVEL debug

# Reset configuration to defaults
/config reset LOG_LEVEL
```
