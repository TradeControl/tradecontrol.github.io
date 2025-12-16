---
layout: ../../layouts/Documentation.astro
title: Production Deployment Guide
permalink: /deployment/web-deployment-production
---

🏢 Trade Control Web can be deployed into your own infrastructure—on-premises, private cloud, or behind a firewall that could withstand a siege. This guide is for IT teams who want full control over hosting, performance, and security.

---

## ✅ What You Get

- Full access to all Trade Control features
- Private hosting and database control
- Custom SMTP, backup, and scaling options
- No reliance on external cloud providers

---

## 🛠️ Typical Deployment Flow

Here’s how most infrastructure teams approach it:

1. **Provision a New VM**
   - Windows Server or Linux with .NET 6+ runtime
   - Dedicated resource allocation and monitoring

2. **Install IIS and SQL Server**
   - IIS for hosting the ASP.NET app
   - SQL Server (Standard or Enterprise) for the backend

3. **Create a Certificate and Map the IP**
   - Generate or import an SSL certificate
   - Bind the site to a custom domain or internal URL

4. **Configure Firewall Rules**
   - Open access to IIS for authorised users
   - Allow SQL Server access for internal developers and tools
   - Restrict external access as needed

5. **Deploy the App**
   - Use the [Web Deploy package (or build from source)](web-deployment-local)
   - Import into IIS and configure `appsettings.json`
   - Point to your SQL Server and SMTP credentials

6. **Initialise the Business Node**
   - Launch the app in a browser
   - Register the first user (Administrator role)
   - Complete the [Initialisation form](web-initialisation)

---

## 🔐 Security Notes

- Trade Control Web does not require internet access once deployed
- All data remains within your infrastructure
- You control backups, access policies, and update schedules

---

## 🔄 Migration Options

You can migrate to:
- PostgreSQL (coming soon) for open-source compliance
- Cloud hosting for scalability
- Multi-tenant hosting for simplicity

---

[Return to Deployment Overview](web-deployment-overview)