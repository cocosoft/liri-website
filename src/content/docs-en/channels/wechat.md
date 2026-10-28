---
title: "WeChat Setup"
description: "Overview"
group: "Channels"
order: 12
source: "渠道/wechat.md"
---

> This page is synced from `app/docs/渠道/wechat.md` in the GitHub repository. If it differs from the source, the repository wins.
# WeChat Channel (Personal WeChat)

## Overview

Connect personal WeChat through the weixin-cli HTTP Bridge, supporting message sending and receiving after logging in via QR code.

## Prerequisites

```bash
npx -y @tencent-weixin/openclaw-weixin-cli@latest install
```

## Configuration

```env
WECHAT_BOT_HTTP_URL=http://localhost:7600
```

## Features

- Direct message sending and receiving
- Image sending

## Setup Steps

1. Run the install command: `npx -y @tencent-weixin/openclaw-weixin-cli@latest install`
2. Start the weixin-cli service and scan the QR code to log in
3. Make sure the HTTP service is reachable at the `WECHAT_BOT_HTTP_URL` address
4. In the Liri frontend messaging channels, fill in the Bot HTTP URL, save, and enable it
