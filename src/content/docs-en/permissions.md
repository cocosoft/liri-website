---
title: "Permissions"
description: "Overview"
group: "Configuration & Security"
order: 7
source: "配置与安全/permissions.md"
---

> This page is synced from `app/docs/配置与安全/permissions.md` in the GitHub repository. If it differs from the source, the repository wins.
# Permission System

## Overview

The permission system controls how users and tools access system resources.

## Permission Hierarchy

```text
User → Role → Permission
         ↓
      Policy
```

## Built-in Roles

| Role | Description |
|------|------|
| `admin` | Administrator, full access |
| `user` | Regular user, basic access |
| `readonly` | Read-only user, read operations only |

## Permission Definitions

```typescript
type Permission =
  | "file:read"
  | "file:write"
  | "bash:exec"
  | "network:fetch"
  | "network:search"
  | "admin:config";
```

## Policy Configuration

```json
{
  "permissions": {
    "file_read": {
      "allowed": true,
      "paths": ["./src", "./config"],
      "excludedPaths": ["./config/secrets.json"]
    },
    "bash_exec": {
      "allowed": true,
      "commands": ["node", "bun", "git"],
      "forbiddenCommands": ["rm", "del", "format"]
    }
  }
}
```

## Path Validation

- Every file operation verifies that the path falls within the allowed scope
- Path traversal attacks are prevented through path resolution (path.resolve)
- Operating system critical paths are forbidden
