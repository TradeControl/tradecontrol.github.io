---
layout: ../../layouts/Documentation.astro
title: Local Deployment Guide
permalink: /deployment/web-deployment-local
---

Trade Control Web can be installed locally on your PC or laptop using the pre-built Web Deploy package. This gives you full access to the system with zero hosting costs and no cloud setup.

Ideal for:

- Sole traders and freelancers
- Developers and consultants
- Anyone wanting to run the app privately or offline

---

## What You Get

- Full access to all Trade Control features
- No monthly fees or cloud billing
- Local SQL Server database
- Private file storage
- Optional email delivery via SMTP

---

## What’s Included

- Web Deploy package (`TradeControlweb-x.x.x.zip`)
- IIS-ready deployment manifest
- Sample SQL script for database setup
- This guide (`README.md`)

---

## Prerequisites

Before deploying, make sure your PC has:

- Windows 10 or 11
- IIS installed and running
- [ASP.NET Core Hosting Bundle](https://dotnet.microsoft.com/en-us/download) (matching the app’s framework)
- SQL Server Express or full edition
- SMTP credentials (optional, for email delivery)

📦 Download the latest Web Deploy package from the [Web Deploy folder](https://github.com/TradeControl/tradecontrol.web/releases)

Includes:

- IIS-ready `.zip` package
- Sample SQL script
- This guide

---

## Installation Steps

### 1. Install Prerequisites

- Enable IIS via Windows Features
- Install the ASP.NET Core Hosting Bundle
- Install SQL Server Express (free) or use an existing instance

### 2. Restore the Database

- Open `database.sql` in SQL Server Management Studio
- Run the script to create the initial database
- Note the database name and credentials

### 3. Import the Web Deploy Package

- Open IIS Manager
- Right-click **Sites** → **Import Application**
- Select the `.zip` package and follow the wizard
- Point the app to your SQL Server connection string in `appsettings.json`

### 4. Launch the App

- Navigate to the deployed site in your browser
- Register your first user (you’ll be assigned the Administrator role)
- Proceed to the [Initialisation form](/admin/admin-manager-init) to set up your business

---

## Configuration Notes

- You can run the app entirely offline if email delivery isn’t required
- SMTP settings can be added later via the admin interface
- Logs and uploads are stored locally unless redirected

---

## Migration Options

You can migrate to:

- Cloud hosting (Azure) for scalability
- Multi-tenant hosting for simplicity
- PostgreSQL (coming soon) for full open-source compliance

---

[Return to Deployment Overview](/deployment/web-deployment-overview)
