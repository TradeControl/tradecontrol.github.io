---
layout: page
title: Installing an Office 365 client
permalink: /tutorials/installing-office
---

The client interface is a thin Access database that uses ODBC linked tables, Pass Through Queries and ADO to interact with the business entity. The Access database does not contain any business logic or queries; these are processed by Sql Server. It is therefore both a practical tool, but also a fully specified model for future developments, such as a mobile app or ASP.NET website. The client is documented in the [tutorials]({{ site.url }}/tutorials/services).

The first section describes how to install the client locally, [the second section](#azure-installation) sets up a connection to Azure Sql and includes the [VSTO templates]({{ site.url }}/tutorials/installing-vsto).

## Installation

Pre-requisite: Office 365 Business 64 bit. 

> If your machine is 32 bit, [clone the repository](https://github.com/tradecontrol/office)  and re-compile the solution with an alternative build target.

First, if not already available, [install and configure]({{ site.url }}/tutorials/installing-sqlnode) an instance of Trade Control in Azure Sql and add data users. Use Azure Portal to register your fixed IP Address with the database firewall. Install the Office Client on your machine.

[office client - tcOfficeClient.zip](https://github.com/tradecontrol/office/releases)

### Options

The Trade Control client is installed into the user's local _AppData_ folder. There are two open modes: compiled and un-compiled. If you are using the [Bitcoin Wallet]({{ site.url }}/tutorials/bitcoin), you must use the Native Version, since Bitcoin is not supported by the Windows OS as a Unit of Account and the client must re-configure itself locally.

#### Native Version

The un-compiled database is called _TCnode_3_ with the file extension _.accdb_. When you first open it, the Trust Centre may disable the app. If you close any open forms and enable it manually, trust should be established. By default, the database opens in run mode, with a limited development interface. Press F11 to open the Navigation Pane where you can modify or add objects. Press the SHIFT key down to open the database in non-execution mode. Even if you are not a developer, this mode allows you to hard-code changes to column orders, styling and the like. 

> **Note:**
> 
>Modifying the native version may result in your changes being overwritten by an upgrade. An empty container is provided for this purpose in the compiled version.  

#### Compiled Version

By default, the installed location is untrusted. To remove the opening dialog, add the Trade Control folder to the trusted locations from the Access Trust Centre available in Options.

The compiled database is called _TCnode3.accde_. It is referenced by _CTnode_3.accdr_, which, other than the standard reports, is an empty run-time container where you can add your own custom developments. To do this, copy the container and change the extension to _.accdb_. Any objects that you create will be visible to the menu system through the project name _TradeCustom_.

From the _Menus_ page of the Administration form, create a new menu or add your forms to those that already exist. Users can have more than one menu, so you just add the new menu to the users that require it using the + button on the _Users_ page.


### Connection

When you load the client for the first time you will be presented with the connection dialog below. The dialog is available from the menus so you can switch between companies and/or the tutorials.

![Connection]({{ site.url }}/images/tc_office_connection.jpg)

There are two pre-loaded connections; one for Azure Sql and another for Windows Authentication. You need to create an ODBC data source and replace the tags with your own settings.

The User Name just identifies the connection. It is useful if you are connecting to Azure and more than one-person logs onto the client from the same Windows account. 

The second setting specifies an ODBC Data Source (32 bit), which is also the name of the Windows program where it is specified. Add a data source using ODBC Driver 17 for Sql Server or higher. 

The Data Source is for Access to link tables and pass-through queries. The ADO connection string is used by VBA to call stored procedures; and the last connection is passed to a COM interop assembly in the GAC to output XML, consumed by the Word templates. 

## Azure Installation

The following is a record of the pre-release installation test for Trade Control. You require an Office 365 Business subscription. Consult the installation documentation for more details.

### Backend

1. Log into the Azure Portal and add a new Sql database called **tcNode**, configured to Basic (You may have to create a new Sql Server with an admin username and password first).
2. Commission a new Virtual Machine: Windows Server 2019 Standard DS1 v2 (1 vcpus, 3.5 GiB memory). Networking inbound security RDP enabled.
3. Open the **tcNode** database and add the VM IP Address to the firewall.
4. Login and turn off IE Enhanced Security and and follow [the node configuration instructions]({{ site.url }}/tutorials/installing-sqlnode) until you have installed one of the tutorials. 

### Frontend

1. Log into your 365 account and install the 64-bit version of Office.
2. Install ODBC Driver 17 for Sql Server and create a 64-bit ODBC Data Source.
3. Download and extract the following zip files from the [latest release](https://github.com/tradecontrol/office/releases): tcOfficeClient.zip, tcOfficeTemplates.zip and tcOfficeMTD.zip
4. Install the Office Client and the MTD. Open the Office Client.
5. Specify the Data Source: delete the default Windows connection and modify the Azure template by replacing the tags with their actual values.
6. Connect and accept the Administration settings.
7. From _tcOfficeTemplates\CashFlow_ open the Excel Template, accepting the installation request. 
8. In the new workbook's action pane, enter the connection details (the same entered for the backend configuration). Press the Cash Flow button to test, then save the xlsx on the Desktop.
9. Copy _tcOfficeTemplates\Templates_ to a shared location. Open the templates required and install them. Ignore the missing XML dialog.
10. From the client open the Administrator/Documents page. For each document type, use Open Template to specify the location and name of its associated Word templates.
11. Open the Invoice Register. Edit an invoice and try printing it out as a Word document.
