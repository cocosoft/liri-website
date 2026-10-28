---
title: "Sandbox Isolation"
description: "Overview"
group: "Configuration & Security"
order: 8
source: "配置与安全/sandbox.md"
---

> This page is synced from `app/docs/配置与安全/sandbox.md` in the GitHub repository. If it differs from the source, the repository wins.
# Sandbox Security

## Overview

The sandbox mechanism provides an isolated, secure environment for code execution and command running.

## Sandbox Policies

### File System Isolation

- Tools can only access permitted directories
- Operating system critical paths are protected
- Temporary files are cleaned up automatically

### Network Isolation

- Only network requests within the allowlist are permitted
- Internal network addresses are blocked (SSRF protection)
- DNS rebinding protection

### Process Isolation

- Commands run in a restricted environment
- CPU and memory usage limits
- Execution is terminated automatically on timeout

## Configuration

```json
{
  "sandbox": {
    "enabled": true,
    "allowedPaths": ["./src", "./config", "./data"],
    "forbiddenPaths": ["C:\\Windows", "/etc", "/root"],
    "networkAccess": {
      "allowed": true,
      "allowedDomains": ["*.openai.com", "*.google.com"],
      "blockedIPs": ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"]
    },
    "execution": {
      "maxMemory": "512MB",
      "maxCPU": "50%",
      "timeout": 30000
    }
  }
}
```

## Security Boundary

The sandbox ensures that the Agent's operations do not affect the safety and stability of the host system.
