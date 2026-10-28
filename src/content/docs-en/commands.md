---
title: "Command Reference"
description: "Overview"
group: "Reference"
order: 14
source: "USAGE.md"
---

> This page is synced from `app/docs/USAGE.md` in the GitHub repository. If it differs from the source, the repository wins.
# Liri User Guide

## Overview

Liri is an AI-based assistant application that provides an interactive command-line interface and supports a wide range of tools and skills to help complete various tasks.

## Quick Start

### Installation

```bash
# Enter the project directory
cd e:\PY\CODES\Liri\backend

# Install dependencies
bun install
```

### Starting the App

```bash
# Option 1: development mode
bun run dev

# Option 2: production build and run
bun run start

# Option 3: run directly
bun --bun run src/index.ts
```

After startup, you enter the interactive REPL mode:

```
═══════════════════════════════════════════════════════════════
  Liri - Interactive REPL mode
═══════════════════════════════════════════════════════════════

Welcome to Liri - AI Agent

ℹ Enter a command to start interacting, type exit to quit

ℹ System information:
ℹ   Node.js version: v24.3.0
ℹ   Operating system: win32 x64
```

## Command System

Liri uses a command syntax that starts with `/`. Type `/help` to see all available commands.

### Core Commands

| Command | Description | Example |
|------|------|------|
| `/help` | Show help information | `/help` |
| `/exit` | Exit the application | `/exit` |
| `/clear` | Clear the screen | `/clear` |
| `/version` | Show version information | `/version` |

### Session Management

```bash
# List sessions
/session list

# Create a new session
/session create "My Project"

# Switch session
/session switch session_123456

# Delete session
/session delete session_123456

# Show current session information
/session current

# Rename session
/session rename session_123456 "New project name"
```

### Tool Management

```bash
# List all tools
/tool list

# Enable a tool
/tool enable <tool_name>

# Disable a tool
/tool disable <tool_name>
```

### Skill Management

```bash
# List all skills
/skill list

# Enable a skill
/skill enable <skill_name>

# Disable a skill
/skill disable <skill_name>
```

### Task Management

The `/task` command manages tasks through the `TaskTool` series, implemented based on the CC source code `cc_code/backend/tools/TaskTool`.

```bash
# Show task help
/task help

# Create a task
/task create "Task title" "Task description"

# List all tasks
/task list

# Filter tasks by status
/task list pending
/task list in_progress
/task list completed

# Get task details
/task get <task_id>

# Update task status (optionally update the title and description)
/task update <task_id> <status>
/task update <task_id> completed
/task update <task_id> in_progress "New title" "New description"

# Delete a task
/task delete <task_id>
```

### Todos

The `/todo` command manages todos through `TodoWriteTool`, implemented based on the CC source code `cc_code/backend/tools/TodoWriteTool`.

```bash
# Show todo help
/todo help

# Add a todo
/todo add "Finish the project documentation"

# List todos
/todo list

# Filter todos by status
/todo list pending
/todo list in_progress
/todo list completed

# Update todo status or content
/todo update <todo_id> <status>
/todo update <todo_id> completed
/todo update <todo_id> in_progress "New content"

# Delete a todo
/todo delete <todo_id>

# Clear all completed items
/todo clear-completed
```

### Background Task Management

Background tasks are asynchronous execution tasks created by Agent tools (such as `/agent` and `/subagent`). The `/tasks` command mirrors CC's BackgroundTasksDialog and provides complete task lifecycle management.

```bash
# List all background tasks (grouped by status)
/tasks

# List running tasks
/tasks running

# List pending tasks
/tasks pending

# List completed tasks
/tasks completed

# List failed tasks
/tasks failed

# List all tasks
/tasks all

# View task details
/tasks show <task-id>

# Stop a background task
/tasks stop <task-id>

# Show a statistics summary
/tasks stats

# Show command help
/tasks help

# Clean up completed tasks
/tasks clear
```

**Main features:**

- **Grouped display** — Tasks are grouped by status (running / pending / completed / failed / aborted), with a count for each group
- **Statistics header** — Shows summary counts for each category, in a style similar to CC's "X active agents · Y active shells"
- **Filtering** — Filter tasks by a specific status using subcommands: `running`, `pending`, `completed`, `failed`, `aborted`, `active`, `all`
- **Details view** — `/tasks show <task-id>` displays full task details, including execution duration, token usage, progress messages, result preview, error information, and a progress bar for running tasks
- **ANSI color output** — running (cyan), completed (green), failed (red), aborted (yellow), pending (gray)
- **Statistics summary** — `/tasks stats` shows full task statistics and the list of currently active tasks

## Built-in Tools

Liri provides a variety of built-in tools:

### File Tools
- `file_read` - Read file contents
- `file_write` - Write file contents
- `file_edit` - Edit file contents (SearchReplace mode)
- `GlobTool` - File matching
- `grep` - Text search (regex file content search)

```bash
# Edit a file (replace the first match)
/edit <file_path> <old_string> <new_string>

# Replace all matches in the file
/edit <file_path> <old_string> <new_string> -a

# Example: replace text in a file
/edit test.txt Hello Hi

# Example: global replace (all matches)
/edit src/config.json localhost 127.0.0.1 -a
```

The `/edit` command is based on the SearchReplace mode and supports the following features:

- **Uniqueness check** — By default, `old_string` must appear only once in the file to avoid accidental replacements
- **Global replace** — Use the `-a` or `--all` flag to replace all matches
- **Quote normalization** — Automatically converts between curly/smart quotes (`'` `"`) and straight quotes
- **File size limit** — Supports editing files up to 1 GiB
- **Safety validation** — Refuses to execute when `old_string` and `new_string` are exactly the same

---

The `/grep` command searches for text content in files, modeled on CC source `cc_code/backend/tools/GrepTool/GrepTool.ts`:

```bash
# Basic search
/grep <pattern>

# Case-insensitive search
/grep -i <pattern>

# Search a specific directory
/grep <pattern> <searchPath>

# Show only matching file names (default mode)
/grep --outputMode files_with_matches <pattern>

# Show the actual matching content
/grep --outputMode content <pattern>

# Show match count statistics
/grep --outputMode count <pattern>

# Show context lines
/grep -C 3 <pattern>

# Filter by file type
/grep --type ts <pattern>

# Filter by file glob
/grep --include "*.ts" <pattern>

# Page through large result sets
/grep --headLimit 50 --offset 0 <pattern>
/grep --headLimit 50 --offset 50 <pattern>
```

**Options:**

| Option | Short flag | Description |
|------|--------|------|
| `--help` | `-h` | Show help information |
| `--caseInsensitive` | `-i` | Case-insensitive search |
| `--showLineNumbers` | `-n` | Show line numbers (enabled by default) |
| `--multiline` | | Enable multiline matching mode |
| `--outputMode <mode>` | | Output mode: `content` / `files_with_matches`(default) / `count` |
| `--searchPath <path>` | | Search directory path (defaults to the current directory) |
| `--include <pattern>` | | File glob filter (e.g. `*.ts`, `*.{ts,tsx}`) |
| `--type <filetype>` | | File type filter (e.g. `ts`, `js`, `rs`, `py`) |
| `--headLimit <num>` | | Maximum number of results to return (default 250, 0=unlimited) |
| `--offset <num>` | | Result offset, used for pagination |
| `--context <num>` | `-C` | Number of lines to show before and after each match |
| `--contextBefore <num>` | `-B` | Number of lines to show before a match |
| `--contextAfter <num>` | `-A` | Number of lines to show after a match |

**Output modes:**
| Mode | Description |
|------|------|
| `content` | Show the actual matching lines (with file name and line number) |
| `files_with_matches` | Show only the names of files containing matches (default) |
| `count` | Show match count statistics for each file |

**Comparison with ripgrep:**
| Liri option | ripgrep equivalent | Description |
|-------------|--------------|------|
| `-i` | `rg -i` | Ignore case |
| `-n` | `rg -n` | Show line numbers |
| `-C <num>` | `rg -C <num>` | Context lines |
| `-B <num>` | `rg -B <num>` | Lines before |
| `-A <num>` | `rg -A <num>` | Lines after |
| `--type ts` | `rg --type ts` | File type |
| `--multiline` | `rg -U` | Multiline matching |

**Aliases:** `/search`, `/regex`

---

### System Tools

```bash
# Execute a shell command
/bash <command>
```

The `/bash` command executes shell commands and mirrors the security systems in CC source `cc_code/backend/tools/BashTool/bashSecurity.ts` and `bashPermissions.ts`:

```bash
# Execute with a timeout
/bash --timeout 10000 npm install

# Specify the working directory
/bash --cwd /home/project git status

# Set an environment variable
/bash --env NODE_ENV=production npm run build

# Multiple environment variables
/bash --env VAR1=val1 --env VAR2=val2 echo $VAR1

# Combined usage
/bash --timeout 30000 --cwd /app --env DEBUG=true node server.js

# Show help
/bash --help
```

**Options:**
| Option | Description |
|------|------|
| `-h, --help` | Show help information |
| `--timeout <ms>` | Execution timeout (default 60000ms, maximum 300000ms) |
| `--cwd <path>` | Specify the working directory (defaults to the current directory) |
| `--env <key=value>` | Set an environment variable (can be repeated) |
| `--skip-security-check` | Skip security checks (dangerous, not recommended) |

**Security features:**
The `/bash` command integrates a multi-layer security check system, based on the BashTool security implementation in the CC source:

| Check layer | Description | CC reference implementation |
|--------|------|-------------|
| Dangerous command detection | Blocks `rm -rf /`, `sudo`, system administration commands, and more | `bashSecurity.ts` - 20+ validators |
| Dangerous pattern detection | Detects command substitution, eval calls, injection attacks, and more | `bashPermissions.ts` - permission rules |
| AST-level security analysis | Parses command structure to detect deep risks | `bashCommandHelpers.ts` - pipeline segment checks |
| Sensitive path protection | Prohibits operations on critical system directories | `bashPermissions.ts` - `BARE_SHELL_PREFIXES` |
| Command classification checks | Tiered control by command category | `bashClassifier.ts` - classifier |

Commands blocked by the security system return a detailed blocking reason and a security check report.

**Output format:**
- On success, the stdout output is shown
- stderr output is prefixed with `[stderr]`
- On command failure, the exit code is shown as `[exit code: N]`
- Execution time is displayed

**Aliases:** `/sh`, `/shell`

---

- `SleepTool` - Delayed execution
- `MonitorTool` - System monitoring

### AI Tools
- `agent` - Create a subagent
- `skill` - Execute a skill

### Network Tools

The `/fetch` command fetches web page content from a given URL or calls an HTTP API, modeled on CC source `cc_code/tools/WebFetchTool.ts`.

```bash
# Fetch web page content
/fetch https://example.com

# HTML→Markdown conversion (mirrors CC htmlToMarkdown)
/fetch https://example.com --md

# Prompt-based extraction (mirrors CC applyPrompt)
/fetch https://example.com --prompt "Extract the main content"

# Fetch API data (JSON auto-formatted)
/fetch https://api.github.com/repos/vercel/next.js

# POST request
/fetch https://httpbin.org/post -X POST -d '{"key":"value"}'

# Custom request header
/fetch https://api.example.com/data -H "Authorization: Bearer token123"

# View full content (no truncation)
/fetch https://example.com --raw

# Custom timeout
/fetch https://slow-api.example.com --timeout 60000
```

#### Parameters

| Parameter | Description |
|------|------|
| `<url>` | Target URL (required) |
| `-X, --method <method>` | HTTP method (GET/POST/PUT/DELETE/PATCH/HEAD/OPTIONS, default GET) |
| `-H, --header <"Key: Value">` | Request header, can be repeated |
| `-d, --data <body>` | Request body (automatically switches to POST) |
| `--timeout <ms>` | Timeout, default 30000ms, maximum 120000ms |
| `--raw` | Show full content without truncation (truncated to 2000 characters by default) |
| `--max-length <n>` | Custom truncation length (number of characters) |
| `--md, --markdown` | HTML→Markdown conversion (modeled on CC htmlToMarkdown) |
| `--prompt, --extract <p>` | Prompt-based extraction (modeled on CC applyPrompt, default "Extract the main content") |

#### Output Format

On success, displays:
```
URL: https://example.com
Duration: 1.2s
Status: 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 45231 chars
Processing: HTML→Markdown converted
────────────────────────────────────────────────────────────
... Markdown-formatted content ...
[Content truncated. Original length: 15231 chars. Use --raw to see full content.]
```

#### Aliases

`/web_fetch`

---

### `/websearch`

```bash
# Perform a web search
/websearch <query> [-n count] [-l lang] [--allow domain] [--block domain]
```

The `/websearch` command performs web searches, retrieving internet information through the Bing search engine.

#### Features
- **Result metadata** — Shows search duration, total result count, and domain filtering information
- **Domain filtering** — Modeled on CC's `allowed_domains`/`blocked_domains` design, supports including and excluding domains
- **Parameter control** — Supports specifying the result count, language, safe search toggle, and timeout

#### Parameters

| Parameter | Description |
|------|------|
| `-n, --count <count>` | Number of results to return (1-100, default 10) |
| `-l, --lang <lang>` | Search language code (e.g. `zh-CN`, `en-US`, default `zh-CN`) |
| `--no-safe` | Disable safe search (enabled by default) |
| `--timeout <ms>` | Timeout (default 30000, maximum 120000) |
| `--allow, --allow-domain <domain>` | Search only the specified domain (can be repeated) |
| `--block, --block-domain <domain>` | Exclude the specified domain (can be repeated) |

#### Examples

```bash
# Basic search
/websearch Python async programming

# Limit the number of results
/websearch "React server components" -n 5

# Specify the language
/websearch latest AI news -l zh-CN

# Search only specified domains
/websearch TypeScript tutorial --allow github.io --allow typescriptlang.org

# Exclude specified domains
/websearch "Node.js performance" --block medium.com --block dev.to

# Disable safe search
/websearch "advanced hacking techniques" --no-safe

# Set the timeout
/websearch "large dataset" --timeout 60000
```

#### Output Format

```
Search results for "Python async programming"
Found: 10 results
Duration: 1.35s
──────────────────────────────────────────────────────────────
1. Python Async Programming: A Getting Started Guide
   URL: https://example.com/python-async
   This article introduces the basic usage and advanced features of the Python asyncio library...

2. ...
```

#### Aliases

`/web_search`

- `web_fetch` - Fetch web page content (internal tool interface)
- `web_search` - Web search (internal tool interface)

### Development Tools

The `/lsp` command performs Language Server Protocol (LSP) operations, providing code completions, go to definition, find references, find implementations, symbol search, call hierarchy analysis, and more, modeled on CC source `cc_code/backend/tools/LSPTool/LSPTool.ts`:

```bash
# Find definition
/lsp definition <file> <line> <col>

# Find references
/lsp references <file> <line> <col>

# Get hover information
/lsp hover <file> <line> <col>

# Code completion
/lsp completion <file> <line> <col>

# Find implementations
/lsp goToImplementation <file> <line> <col>

# Get the document symbol list
/lsp documentSymbol <file>

# Search workspace symbols
/lsp workspaceSymbol <query>

# Prepare the call hierarchy
/lsp prepareCallHierarchy <file> <line> <col>

# Find incoming calls
/lsp incomingCalls <file> <line> <col>

# Find outgoing calls
/lsp outgoingCalls <file> <line> <col>

# Show help (lists all operations)
/lsp help
```

**Note:** `line` and `col` use 1-based coordinates (human-friendly format); they are automatically converted to the LSP protocol's 0-based coordinates internally.

---

The `/repl_tool` command executes code in a REPL (interactive interpreter) environment and supports multiple languages:

```bash
# Execute Python code interactively
/repl_tool python "print('Hello, world!')"

# Execute JavaScript code
/repl_tool javascript "console.log('Hello, world!')"

# Execute TypeScript code
/repl_tool typescript "const x: number = 42;"

# Execute a Shell command
/repl_tool bash "ls -la"

# Execute a PowerShell command
/repl_tool powershell "Get-Process | Select-Object -First 5"

# Execute Ruby code
/repl_tool ruby "puts 'Hello'"

# Show help
/repl_tool help
```

**Supported languages:** Python, JavaScript, TypeScript, Bash, PowerShell, Ruby.

---

The `/notebook` command edits and runs Jupyter notebooks (`.ipynb` files), supporting create, open, add/edit/delete cells, run, save, and more, modeled on CC source `cc_code/backend/tools/NotebookEditTool/NotebookEditTool.ts`:

```bash
# Create a new notebook
/notebook create "My Notebook"

# Open an existing notebook
/notebook open notebook.ipynb

# Add a code cell
/notebook add code "print('Hello')"

# Add a Markdown cell
/notebook add markdown "## Section Title"

# Replace a given cell's content (cell_id supports the 0-based cell-N index format)
/notebook replace notebook.ipynb cell-0 "print('Modified')"

# Insert a new cell at a given position
/notebook insert notebook.ipynb cell-0 markdown "## New Section"

# Delete the specified cell
/notebook delete notebook.ipynb cell-2

# Run the notebook
/notebook run notebook.ipynb

# Save the notebook
/notebook save notebook.ipynb

# Show help
/notebook help
```

**Cell editing notes:**
- `replace` - Replaces the source code of the specified cell (resets execution count and outputs)
- `insert` - Inserts a new cell after the specified cell (requires a `cell_type`: code/markdown)
- `delete` - Deletes the specified cell
- `cell_id` supports the actual UUID (e.g. `cell_xxx`) and a 0-based index format (e.g. `cell-0`, `cell-2`)

### IDE Integration

```bash
# Show the status of all installed/detectable IDEs
/ide

# Open the project directory in the current IDE
/ide open
```

The `/ide` command detects IDEs installed on the system. Supported IDEs include: VS Code, Cursor, Trae, Windsurf, Zed, IntelliJ IDEA, PyCharm, WebStorm.

Detection methods (in priority order):
1. **Start menu scan** — Scans the Windows Start menu for IDE shortcuts
2. **PATH environment variable** — Checks whether the IDE's command-line tool is in PATH (e.g. the `code` command)
3. **Common install paths** — Checks the default installation paths of IDEs on Windows

`/ide open` prefers opening the project with VS Code; if it is not installed, the first detected IDE is used.

### MCP Protocol

#### `/mcp` — MCP Server Management (built in)

Manages MCP (Model Context Protocol) servers, including server listing, status monitoring, resource configuration, and tool management:

```bash
# List all MCP servers
/mcp --list

# Show MCP system status
/mcp --status

# Manage MCP servers (interactive menu)
/mcp --manage

# View MCP resources
/mcp --resources

# View MCP tools
/mcp --tools

# Test the MCP connection
/mcp --test
```

Aliases: `mcp-server`, `model-context`

#### `/mcp run` — Running MCP Operations

Executes MCP operations through the ToolManager, using the `run` subcommand to specify the action to perform:

```bash
# Get context
/mcp run get_context

# Set context
/mcp run set_context "Hello, world!"
```

> `run` is a subcommand of `/mcp`, which merges the former `/mcp_tool` functionality into the unified MCP management entry point.

## Configuration Management

```bash
# View configuration
/config

# Set a configuration item
/config set <key> <value>

# Get a configuration item
/config get <key>

# Reset the configuration
/config reset
```

Aliases: `/settings`, `/preferences`, `/opts`

## Cost Statistics

```bash
# View the API cost overview
/cost

# View the cost breakdown by model
/cost --breakdown

# View usage statistics
/cost --usage

# View statistics by time period
/cost --time
```

Aliases: `/costs`, `/usage-cost`

## Token Statistics

```bash
# View token usage statistics
/tokens

# View the token usage breakdown by model
/tokens --breakdown

# Reset session-level token statistics
/tokens --reset
```

Aliases: `/token-stats`

## Environment Variables

```bash
# View the application environment configuration
/env

# View all environment variables (including system variables)
/env --all
```

Aliases: `/environment`

## Debug Commands

```bash
# Show debug status
/debug status

# View recent logs
/debug logs

# Enable debug mode
/debug enable

# Disable debug mode
/debug disable

# Inspect the application runtime status
/debug inspect

# Show debug command help
/debug help
```

Aliases: `/dev`, `/developer`

## Bridge Remote Control

```bash
# View the Bridge connection status
/bridge status

# View Bridge configuration details
/bridge config

# Start the Bridge service
/bridge start

# Stop the Bridge service
/bridge stop

# Connect to remote control
/bridge connect [session_id]

# Show help
/bridge help
```

Subcommand aliases:
- `status` can also be `st`
- `config` can also be `cfg`
- `start` can also be `on`
- `stop` can also be `off`, `disconnect`

Aliases: `/rc`, `/remote-control`

> Note: The Bridge feature requires the `BRIDGE_MODE` feature flag to be enabled.
> Enable it by setting the environment variable `FEATURE_BRIDGE_MODE=true` or `BRIDGE_MODE=true`.

## Agent Management

The Agent system is split into three separate commands with clearly defined responsibilities:

| Command | Responsibility | Use case |
|------|------|----------|
| `/subagent-run` | Subagent task executor | Run/view/stop subagent execution tasks |
| `/subagent` | Subagent configuration manager | View/create/delete subagent definitions (.md configuration files) |
| `/agent-instance` | Agent instance manager | Create/delete named Agent instance configurations, view active subagents |

### Subagent Task Execution

```bash
# Run a new Agent task
/subagent-run run general "Write a Python script"

# Use an Agent of a specific type
/subagent-run run explore "Analyze the project structure"
/subagent-run run plan "Create a feature implementation plan"
/subagent-run run verification "Verify code quality"

# Run an Agent task in the background (does not block the terminal)
/subagent-run run general "Long-running task" --background

# Run with a specified model
/subagent-run run plan "Create a refactoring plan" --model your-model-id

# List all Agents in JSON format
/subagent-run list --json
```

Supported Agent types: `general`, `explore`, `plan`, `verification`, `code-guide`, `statusline-setup`

#### Parameters

| Parameter | Applies to subcommand | Description |
|------|------------|------|
| `--background` / `--bg` | `run` | Run the task in the background and return control immediately |
| `--model <model>` | `run` | Specify a model ID (use a registered model ID) to override the Agent definition's default model |
| `--json` | `list`, `bg-list` | Output in JSON format for programmatic processing |

### Agent Instance Management

```bash
# List all registered instances and active subagents
/agent-instance list

# Output in JSON format
/agent-instance list --json

# Create a named Agent instance
/agent-instance create my-code-reviewer

# Create an Agent instance of a specified type
/agent-instance create my-explorer --type explore

# Delete an Agent instance (or stop an active subagent)
/agent-instance delete my-code-reviewer

# Show help
/agent-instance help
/agent-instance -h
```

#### Parameters

| Parameter | Applies to subcommand | Description |
|------|------------|------|
| `--type <type>` | `create` | Specify the Agent type (default: general) |
| `--json` | `list` | Output registered instances and active subagents in JSON format |

Available types: `general`, `explore`, `plan`, `verification`, `code-guide`, `statusline-setup`

Aliases: `/agents_tool`

### Subagent Status Management

```bash
# List all active subagents, engine tasks, and background tasks
/subagent-run list

# View in JSON format (convenient for programmatic processing)
/subagent-run list --json

# View the status of a specific Agent or background task
/subagent-run status <agent_id>

# Stop a running Agent
/subagent-run stop <agent_id>

# List all background tasks (with statistics)
/subagent-run bg-list

# View background tasks in JSON format
/subagent-run bg-list --json

# Show help
/subagent-run help
/subagent-run -h
```

Aliases: `/agent_tool`

### Agent Definition Management

> The following commands belong to the `/subagent` configuration manager, not `/subagent-run`.

```bash
# List all defined Agents (grouped by source)
/subagent list

# View Agent details
/subagent info <name>

# Create a new Agent (supports --tools to specify available tools)
/subagent create <name> <description>

# Create an Agent with tool restrictions
/subagent create code-reviewer "Code review assistant" --tools "file_read,grep"

# Delete a custom Agent
/subagent delete <name>
```

### Agent Sources

Agents are grouped by source, and higher priority overrides lower priority agents with the same name:

| Source | Priority | Description |
|------|--------|------|
| User settings | High | Configuration files in the `~/.pyapp/agents/` directory |
| Project settings | Medium | Configuration files in the project's `.pyapp/agents/` directory |
| Built-in | Low | General-purpose agents built into the app (general-purpose, explore, plan, verification, etc.) |

### Custom Agent File Format

After creating an Agent with `/subagent create`, edit the generated Markdown file to configure all properties:

```yaml
---
name: my-agent
description: My custom assistant
tools: file_read, file_write, grep
model: your-model-id
memory: project
color: blue
---
```

Supported frontmatter fields: `name`, `description`, `tools`, `disallowedTools`, `model`, `memory`, `color`, `background`, `effort`, `permissionMode`.

### Subagent Architecture

Subagents are subtask execution units created on top of AgentTool, supporting:

- **Full query loop**: multiple rounds of tool calls until the task is complete or the maximum number of rounds is reached
- **Background execution**: long-running tasks are submitted to the BackgroundTaskManager for asynchronous execution
- **Implicit fork**: when no Agent type is specified, a Fork subagent is automatically created for isolated execution
- **Concurrency control**: limits the maximum number of concurrent Agents to prevent resource exhaustion
- **Interruptible**: supports aborting a running Agent via `/subagent-run stop`
- **Token statistics**: records prompt/completion token usage for each execution

## Keyboard Shortcuts

| Shortcut | Function |
|--------|------|
| `Ctrl + C` | Interrupt the current operation |
| `Ctrl + D` | Exit the application |
| `↑ / ↓` | Browse command history |
| `Tab` | Auto-complete |

## Exiting the App

```bash
# Method 1: use a command
/exit

# Method 2: keyboard shortcut
Ctrl + D

# Method 3: type exit
exit
```

## FAQ

### Q: How do I create a new session?
A: Use the `/session create "session-name"` command.

### Q: How do I view available tools?
A: Use the `/tool list` command.

### Q: What should I do if a command fails?
A: Check whether the command syntax is correct, and use `/help` to view command usage.

### Q: How can I get help?
A: Use `/help` to view all commands, and `/help <command>` to view help for a specific command.

---

**Document version**: v1.0  
**Last updated**: 2026-05-04  
**Applicable version**: Liri v1.0+
