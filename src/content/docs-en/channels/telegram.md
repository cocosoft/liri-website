---
title: "Telegram Setup"
description: "Overview"
group: "Channels"
order: 10
source: "渠道/telegram.md"
---

> This page is synced from `app/docs/渠道/telegram.md` in the GitHub repository. If it differs from the source, the repository wins.
# Telegram Channel

## Overview

Supports running Liri as a Telegram Bot.

## Configuration

```env
TELEGRAM_ENABLED=true
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_WEBHOOK_URL=https://your-domain.com/webhook
```

## Features

- Message sending and receiving
- Inline queries
- Command support
- Media file handling

## Setup Steps

1. Create a Bot with @BotFather and obtain the Token
2. Configure the Webhook URL
3. Set the Bot commands

## Commands

| Command | Description |
|------|------|
| `/start` | Start a conversation |
| `/help` | View help |
| `/chat` | Enter chat mode |
| `/skill` | View skills |
