---
title: "Onboarding"
description: "This guide helps new users understand Liri's core concepts and workflow. If this is your first time using Liri, read it in order."
group: "Getting Started"
order: 4
source: "快速入门/onboarding.md"
---

> This page is synced from `app/docs/快速入门/onboarding.md` in the GitHub repository. If it differs from the source, the repository wins.
# Onboarding Guide

This guide helps new users understand Liri's core concepts and workflow. If this is your first time using Liri, read it in order.

---

## What is Liri?

Liri is an **AI assistant** that runs in the command-line terminal. You can ask it questions as if you were chatting, and it can:

- Answer technical questions and explain code
- Read, write, and search files
- Execute shell commands
- Search the web and fetch web pages
- Manage tasks and to-dos
- Write and debug code

---

## Core concepts

### Agent

The Agent is Liri's core AI entity, responsible for understanding user intent, calling tools, and generating replies. Each session is managed by one Agent instance.

### Tool

Tools are capability units the Agent can invoke, including file operations, web search, and code execution. The Agent automatically picks the right tool for each request.

### Skill

Skills are predefined workflow templates that combine multiple tool calls into a complete workflow. For example, the "debug analysis" skill automatically collects logs, analyzes errors, and suggests fixes.

### Session

A session represents one continuous interaction, including message history, context state, and configuration.

---

## First-time workflow

### Step 1: Start up

```bash
cd app
bun run dev
```

After starting, you will see:

```
═══════════════════════════════════════════════════════════════
  Liri - Interactive REPL
═══════════════════════════════════════════════════════════════

Welcome to Liri - AI Agent

ℹ Type a command to start, type exit to quit
```

### Step 2: Explore

Enter `/help` to see all available commands. Enter `/skill list` to see the available skills.

### Step 3: Ask questions

Just ask in natural language; the Agent handles the rest:

```
# Ask AI to read a file
Read the contents of src/main.ts

# Ask AI to search code
Search for the keyword "launch" in all TypeScript files

# Ask AI to search the web
Search the web for the latest TypeScript news

# Ask AI to run a command
Show me the files in the current directory
```

### Step 4: Use skills

```bash
/skill debug "Error: Connection refused"
/skill review src/index.ts
```

---

## Common features at a glance

### 📁 File operations

```bash
# Ask AI to read a file
Read config.json

# Ask AI to edit a file
Replace "old" with "new" in README.md
```

You can also use commands directly:

```bash
# Search file contents (like grep)
/grep "function" --type ts

# Edit a file (replace text)
/edit README.md old-text new-text
```

### 🌐 Web features

```bash
# Search the web
/websearch Python async programming tutorial

# Fetch web page content
/fetch https://example.com
```

### 📋 Task management

```bash
# List tasks
/task list

# Create a task
/task create "Finish documentation" "Write user guide"

# Update task status
/task update <task_id> completed
```

### ⚡ Running commands

```bash
# Run a shell command
/bash ls -la

# Specify timeout and working directory
/bash --timeout 10000 --cwd /project git status
```

### 🤖 Subagents (background tasks)

```bash
# Run an analysis task in the background (does not block the current session)
/subagent-run run explore "Analyze project structure" --background

# View background tasks
/subagent-run list

# Stop a task
/subagent-run stop <agent_id>
```

---

## Run modes

Liri supports several ways to start:

| Command | Mode | Use case |
|------|------|----------|
| `bun run dev` | Development mode (hot reload) | Development and debugging |
| `bun run start` | Production run | Day-to-day use |
| `bun run memory` | Memory management CLI | Managing skills and tools |
| `bun run src/index.ts` | Direct run | Quick startup |

---

## Best practices

- Use `/task` to manage long-running tasks
- Use `/config` to adjust application settings
- Check the logs regularly to understand system health
- Use the skill system to boost your productivity
