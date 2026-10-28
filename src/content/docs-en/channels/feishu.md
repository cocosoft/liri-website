---
title: "Feishu Setup"
description: "Overview"
group: "Channels"
order: 11
source: "渠道/feishu.md"
---

> This page is synced from `app/docs/渠道/feishu.md` in the GitHub repository. If it differs from the source, the repository wins.
# Feishu Channel

## Overview

Supports connecting Liri to Feishu and providing interactive services as a Feishu bot.

## Configuration

```env
FEISHU_ENABLED=true
FEISHU_APP_ID=your_app_id
FEISHU_APP_SECRET=your_app_secret
FEISHU_ENCRYPT_KEY=your_encrypt_key
FEISHU_VERIFICATION_TOKEN=your_verification_token
```

## Features

- Message sending and receiving
- Group chat and direct message support
- Card messages
- Event subscription

## Setup Steps

1. Create an app on the Feishu Open Platform
2. Obtain the App ID and App Secret
3. Configure event subscription (requires a publicly accessible Webhook URL)
4. Enable the bot capability
5. Configure the environment variables and start
