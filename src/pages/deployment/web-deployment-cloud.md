---
layout: ../../layouts/Documentation.astro
title: Cloud Deployment Guide
permalink: /deployment/web-deployment-cloud
---

Trade Control Web supports cloud-native deployment for users who prefer to host their own business node in Azure or another cloud provider. This guide explains how to deploy the app into your own subscription and manage costs directly through your cloud account.

## Overview

Cloud deployment gives you full control over hosting, billing, and infrastructure. You get the same feature-rich experience as hosted users, but with the flexibility to manage your own environment.

## What You Get

- Full access to all Trade Control features
- Private hosting in your own cloud subscription
- Direct billing from Azure (or chosen provider)
- Control over performance, scaling, and backups

> ⚠️ **Important**: You are responsible for managing upgrades, patches, and new feature rollouts. Hosted users receive automatic updates, but cloud deployments require manual intervention to stay current.

## What You’ll Need

- An Azure account (or equivalent cloud provider)
- Basic familiarity with App Service and SQL Database setup
- Optional: SMTP details for email delivery

## Steps to Deploy

1. Tap **Deploy** from the homepage
2. Choose **Host in Your Own Cloud**
3. Sign in with your Azure account
4. Select a pricing tier (e.g. Free, Basic, Standard)
5. The app provisions automatically into your subscription
6. Once the homepage loads, register your email and password
7. Proceed to the [Initialisation form](web-initialisation) to set up your business

## Billing

Azure handles all billing directly. You pay only for the resources you use:

- **App Service**: CPU, memory, uptime
- **SQL Database**: storage and performance tier
- **Storage**: for uploaded files and backups
- **Email**: if using a third-party service like SendGrid

Most small businesses use less than 100MB of data, making cloud hosting affordable and scalable.

## Why Choose Cloud Hosting?

- Full control over your environment
- Transparent billing through Azure
- Scales with your business
- Ideal for consultants, developers, and businesses with IT support

You can migrate to hosted multi-tenant deployment later if needed, or switch between models as your needs evolve.

---

[Return to Mobile Deployment](web-deployment-mobile)