---
layout: page
title: Installing Office VSTO templates
permalink: /tutorials/installing-vsto
---

A VSTO is an Office 365 document coded in C# that functions as an automated template. When opened, it creates a new instance by running the initialisation events and subsequently controls user interaction. In Trade Control there are two:

1. The Excel VSTO is an essential template because it presents the company's Trade Statement. It consists of the P&L, Balance Sheet, and Cash Flow Forecast with forward accruals.
2. Word VSTO documents for customer and supplier communications. These are loaded from the Office Client from a COM interface in the .NET GAC and receive data via XML. They are optional and enable the company to use Word to profile PDF outputs to external organisations.

Download the templates from the [latest office client release - tcOfficeTemplates.zip](https://github.com/tradecontrol/office/releases).

### Cash Flow

The VSTO Excel P&L and Balance Sheet should automatically request installation when opened for the first time, or just run setup.exe.

To the right of the spread sheet is an Action Pane. Upon first use, specify the server name (e.g. tradecontrol.database.windows.net), the authentication mode and credentials. If the connection is successful, save the document so you will only need to enter your password next time around.

### Templates

1. Copy the Templates folder onto a shared drive
2. Open System Admin from the client and select the Documents page
3. From the Word tab, for each document type, use the Open File button to specify the template file name. These file pointers are stored locally since network mappings are not always universal.

When you open templates for the first time, like the P&L, they should automatically request installation. Alternatively run the setup.exe directly.
