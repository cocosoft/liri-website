---
title: "FAQ"
description: "Installation-related questions."
group: "Reference"
order: 15
source: "帮助与支持/faq.md"
---

> This page is synced from `app/docs/帮助与支持/faq.md` in the GitHub repository. If it differs from the source, the repository wins.
# FAQ

## Installation

### What should I do if installing dependencies fails?

```bash
# Clean the cache and retry
bun run clean
bun install
```

### Bun is not available after installation?

Make sure `~/.bun/bin` has been added to the PATH environment variable.

## Configuration

### How do I change the AI model?

Edit the `DEEPSEEK_MODEL` entry in the `.env` file.

### How do I view the current configuration?

Enter `/config show` in the REPL to view all configuration.

## Usage

### The agent is not responding?

- Check that the AI API Key is configured correctly
- Check the network connection
- Check the log files for details

### How do I cancel a running task?

Use the `/task cancel <id>` command to cancel the task.

### How do I clear the command history?

```bash
# Delete the history file
rm data/sessions/history.json
```

## Error Handling

### What should I do when I encounter "Rate limit exceeded"?

- Reduce the request frequency
- Check the rate limit configuration
- Wait a while and try again

### What should I do when I encounter "Permission denied"?

- Check whether the file path is within the allowed range
- Check the governance policy configuration
- Contact your administrator for permissions
