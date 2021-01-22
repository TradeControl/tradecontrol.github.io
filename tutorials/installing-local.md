---
layout: page
title: Basic Single User Installation
permalink: /tutorials/installing-local
---

Instructions for installing a local copy suitable for [entry-level use]({{ site.url }}/accounts). Presuming you are already an Office 365 Business subscriber, there are no software costs.

## Instructions

### Service

Trade Control is a multi-user [scalable environment]({{ site.url }}#scalable-solution). Whilst installing it locally is a good place to start (or end if there will only be one user), the server components still need to be set up. This could prove frustrating if you are not an IT professional. Please [contact support]({{ site.url }}/contact) for assistence.

### Downloads

Download and install the latest releases of the following:

#### Environment

- Office 365 Business 64 bit
- SQL Server Express
- SQL Server Management Studio
- ODBC Driver for SQL Server (>=17)

#### Trade Control

- [Sql Node - tcNodeConfig.zip](https://github.com/tradecontrol/sqlnode/releases)
- [Office Client - tcOfficeClient.zip](https://github.com/tradecontrol/office/releases)
- [Trade Statement - tcOfficeCashFlow.zip](https://github.com/tradecontrol/office/releases)

For Vat registered companies:

- [Trade Statement - tcOfficeMTD.zip](https://github.com/tradecontrol/office/releases)

### Configuration

#### Sql Node

1. Open Sql Management Studio and create a new database, choosing an approriate database name.
2. Run the Node Configurator from the start menu and [establish a connection]({{ site.url }}/tutorials/installing-sqlnode#connection) to the server. Because the server is running locally, the server name will likely be your computer name with Windows Authentication (There is a search button that may locate it automatically).
3. A successful connection installs the database and requests your [business details]({{ site.url }}/tutorials/installing-sqlnode#business-details). Make sure the Unit of Account is correct.
4. Complete the [basic setup]({{ site.url }}/tutorials/installing-sqlnode#basic-setup) form.  

#### ODBC Connection

The ODBC connection tells office where and in what format the database can be located.

1. Open ODBC Connection 64 bit.
2. Add User DSN and select ODBC Driver for SQL Server.
3. Name the DSN and specify the Sql Server name.
4. Accept Integrated Windows Authentication.
5. Change the default database to the name of the configured node.

#### Office Client

Open the Office Client from the start menu. Close the splash screen and trust the app by selecting Enable. You will be presented with the connection dialog. Replace these values with your own and select Connect to Accounts.

![ODBC Connection]({{ site.url }}/images/accounts_connection.png)

You may need to re-open the client to re-set the ribbon visibility. 

#### Trade Statement

The Trade Statement is a VSTO XLS template, extension xltx. It does not open directly, but each time opens a new xlsx instance. After having [installed the template]({{ site.url }}/tutorials/installing-vsto), open the xltx, specify the connection details as below, saving the xlsx for general use.

![Action Pane]({{ site.url}}/images/accounts_action_pane.png) 

You can now work through the [Company Accounts tutorial]({{ site.url }}/tutorials/cash-book).

## Licence

Trade Control Documentation by Trade Control Ltd is licenced under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) 

![Creative Commons](https://i.creativecommons.org/l/by-sa/4.0/88x31.png) 



