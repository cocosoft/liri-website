---
title: "Telegram 接入"
description: " 概述"
group: "渠道接入"
order: 10
source: "渠道/telegram.md"
---

> 本文同步自 GitHub 仓库：`app/docs/渠道/telegram.md`，如与源码不一致，以仓库为准。
# Telegram 渠道

## 概述

支持将 Liri 作为 Telegram Bot 提供服务。

## 配置

```env
TELEGRAM_ENABLED=true
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_WEBHOOK_URL=https://your-domain.com/webhook
```

## 功能

- 消息收发
- 内联查询
- 命令支持
- 媒体文件处理

## 设置步骤

1. 在 @BotFather 创建 Bot 并获取 Token
2. 配置 Webhook URL
3. 设置 Bot 命令

## 命令

| 命令 | 说明 |
|------|------|
| `/start` | 启动对话 |
| `/help` | 查看帮助 |
| `/chat` | 进入聊天模式 |
| `/skill` | 查看技能 |
