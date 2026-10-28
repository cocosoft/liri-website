---
title: "飞书接入"
description: " 概述"
group: "渠道接入"
order: 11
source: "渠道/feishu.md"
---

> 本文同步自 GitHub 仓库：`app/docs/渠道/feishu.md`，如与源码不一致，以仓库为准。
# 飞书渠道

## 概述

支持将 Liri 接入飞书，作为飞书机器人提供交互服务。

## 配置

```env
FEISHU_ENABLED=true
FEISHU_APP_ID=your_app_id
FEISHU_APP_SECRET=your_app_secret
FEISHU_ENCRYPT_KEY=your_encrypt_key
FEISHU_VERIFICATION_TOKEN=your_verification_token
```

## 功能

- 消息收发
- 群聊与私聊支持
- 卡片消息
- 事件订阅

## 设置步骤

1. 在飞书开放平台创建应用
2. 获取 App ID 和 App Secret
3. 配置事件订阅（需要公网可访问的 Webhook 地址）
4. 启用机器人能力
5. 配置环境变量并启动
