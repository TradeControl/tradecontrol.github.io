---
layout: ../../layouts/Documentation.astro
title: Modelling Bills of Materials
permalink: /tutorials/manufacturing
---

Trade Control is not a manufacturing system, it is generic; yet the design has been derived from Systems Engineering principles evolved in the manufacturing industry. To work in a factory, the design would have to include stuff like stock control, resources, tooling, quality and planning capabilities. However, it is possible to faithfully model a multi-level Bill of Materials, and generate corresponding sales, works and purchase orders from them, automatically calculating quantities and timings (in whole days) for operations and arrivals. This tutorial shows you how to do that. In so doing, you are introduced to more advanced features that can be applied when modelling any other kind of workflow.

[tutorial installation](/tutorials/installing-sqlnode#bom-tutorial)

## Index

### Work Specification

- [Project View](/tutorials/manufacturing#project-view)
- [Work Flow](/tutorials/manufacturing#workflow)
- [Operations](/tutorials/manufacturing#operations)
- [Attributes](/tutorials/manufacturing#attributes)

### Order Processing

- [Project Schedule](/tutorials/manufacturing#project-schedule)
- [Task Editing](/tutorials/manufacturing#task-editing)
- [Company Statement](/tutorials/manufacturing#company-statement)
- [Job Costing](/tutorials/manufacturing#job-costing)
- [Cash Flow](/tutorials/manufacturing#cash-flow)
  
### Invoices and Payments

- [Invoicing](/tutorials/manufacturing#invoicing)
- [Invoice Register](/tutorials/manufacturing#invoice-register)
- [Status and Performance](/tutorials/manufacturing#status-and-performance)
- [Organisation Statement](/tutorials/manufacturing#organisation-statement)
- [Payment System](/tutorials/manufacturing#payment-system)
- [Cash Statement](/tutorials/manufacturing#cash-statement)

### Project Management

- [Task Explorer](/tutorials/manufacturing#task-explorer)
- [Document Manager](/tutorials/manufacturing#document-manager)
- [Advanced Features](/tutorials/manufacturing#supply-chains)

# Instructions

## BoM Specification

### Project View

Once installed, you will have created an assembly of injection moulded components as an Activity. Opening Activities from the client you should see the following:

![BoM](/images/bom_project_view.png)

The bill of materials in the example is a shelf assembly of injection moulded parts, consisting of four components. The top level (root) of the BoM is the assembly, which has the Activity Code **M/00/70/00**. It has a blue icon to indicate it will create a Sales Order. The four components are linked in the workflow to the assembly with the required quantity used in each assembly. Their icon is green, because they do not involve financial transactions, and therefore they will generate operational Works Orders. The materials are then connected to these components, represented by a red icon for Purchase Orders.

In Trade Control, there are no native Sales, Purchase or Works Orders, but it can model them through the polarity of the [Cash Code](/tutorials/cash-codes) to which they are assigned. Because the components are not assigned any Cash Code, they function as Works Orders. Manufacturing systems work differently. They assign a Part Type (e.g. ASSEMBLY, COMPONENT or MATERIAL) and have a separate control system for production.

To the right of the Project View is the Parts Master equivalent:

![PartsListing](/images/bom_parts_listing.png)

When a row is selected, the corresponding project view is displayed. Selecting the plastic **PC/999** you get a where-used listing, because it is used by more than one component. This is just an upside-down presentation of the BoM.

![WhereUsedListing](/images/bom_where_used.png)

Tasks require a register that provides document level classification and a numbering system.

![Register](/images/bom_register.png)

This is configured in the Documents page of Administration.

### Workflow

Select **M/00/70/00** and open the Workflow tab, you will see:

![Work Flow](/images/bom_work_flow.png)

This is the list of components and activities that are required by the assembly, with the used-on-quantity needed by each one. Therefore, there are 8 sub-shelf **M/100/70/00** in every shelf. Because each child component can also become a parent, there is, at least in theory, no end to how deep or complex the BoM can be. In practice it is restricted by the technology. Recursive depth in Sql Server is exhausted at 100 for CTEs, and 32 for procedures, views and functions. This BoM is 2 levels deep.

Unlike most BoM, the workflow is sequenced, with each child activity assigned a Sync Type and offset days. Also, you can add activities to the BoM which are not a part of its actual structure, as here with **DELIVERY**, where zero UOQ switches off the BoM quantity calculation. 

Sequencing is used to schedule projects when generating sales orders (Tasks). There are three states: SYNC, ASNC and CALLOFF. The **DELIVER** activity is the last in the sequence, and because it is of type CALLOFF and offset 1, it will take place 1 calendar adjusted day before the customer wants the goods. The packing materials, **BOX/41** and **PALLET/01**, are of type ASYNC, because they will be needed at the same time as the delivery. **M/99/70/00** is marked SYNC, so is scheduled to be ready for the first operation of the assembly. The other components are ASYNC, so they would be issued to the Assembly Department at the same time. 

> NOTE: Quantity calculations can be switched off by simply setting the Used-On-Quantity to zero

### Operations

Every activity can have a set of operations, describing what needs to be done to make it happen. Here are the operations for the sub-shelf **M/100/70/00**:

![BomOperations](/images/bom_operations.png)

Like workflows, Operations also have an associated Sync Type. The sub-shelf has three operations. The first op is performed by a moulding machine. Each time the mould tool opens, the mouldings will be removed by a robot. It then attaches **INSERT/09** inside the same cycle. Therefore op 20 is ASYNC. When all the components have been completed, the Quality Controller checks they are good to go. In this way, the inserts are issued at the beginning of the job, as does the operation for inserting them; and the inspector checks the work out at the end.

Operations in a manufacturing system will have a more sophisticated handling of supply, including capabilities such as resources (e.g. the specific moulding machine and robot), tooling (mould and robot tools), labour, a data rich instruction set, production and stock control etc.

### Attributes

Attributes describe the activity, and they are an important way to communicate the product or service to those involved. By default, they are listed in the standard documents that can be viewed in the Document Manager, or Word Templates if you are using them. Here are the attributes for the assembly **M/100/70/00**:

![BoMAttributes](/images/bom_attributes.png) 

Many of these attributes would be hard coded in a manufacturing system, but in TC you just list them in the attributes page against the activity they describe, and you build up a set. They will be carried over into the orders when they are created and modified to suit.

Attributes can be hidden from the orders sent to customers and suppliers by setting the type to QUOTE. In this case, the customer would be sent a mould tool specification with the quotation, but this would not be included in the sales order.


## Order Processing

Re-run the [tutorial installation](/tutorials/installing-sqlnode#bom-tutorial) with the Create Orders option selected.

Switch to the client and open Task Explorer from the toolbar or Workflow menu. In the Activities page you will see the assembly, components and materials listed. Selecting the assembly, you can see that 5 top level sales orders have been added, a month apart in their corresponding time buckets. Select any one of these rows and edit the task. 

### Project Schedule

The left pane of the Task Editor is a tree where new tasks can be added. When selecting a task from the tree, the corresponding task editor opens.

![TaskEditView](/images/bom_task_view.png)

The installer has created a top-level project task to group all orders for this assembly into one container. This is simply achieved by adding an activity with an Activity Code set to Project, leaving the Cash Code blank, and selecting the Works Order register. You can then add a new task using this activity and assign orders by using it as a parent. 

The first order is a purchase for 50 pallets, to be received 1 day in advance of the first despatch. The cash code for the other pallet tasks have been set to blank, so their supply is scheduled but not ordered (green). The other materials are processed differently, in that each demand constitutes a Supplier Schedule.

Looking at the dates, you can see that the delivery and packing materials are 1 offset day from the customer's due date. Whereas the components are to be completed before starting the assembly operations. In turn, material arrivals are before the moulding begins. All these orders and operations are placed dynamically in the configured time buckets. Reviewing them in Task Explorer, you will notice that the material arrivals for the first order are overdue.  

You can select any task in the project and click the Schedule button, and all the tasks below will be adjusted to the Action On date. In practice, you might reschedule the Sales Order of the assembly, and subsequently move supply tasks around manually.

### Task Editing

Raising a new task causes the full activity workflow to be automatically added and scheduled from the Action By date. The installer generates the first order, then edits the suppliers, contacts and addresses that have been raised to make it. The installer then clones this order four times, schedules them 1 month apart and gives each a unique title. Try selecting a task with Activity Code **M/00/70/00** and clone it. The Task Editor will make a perfect copy of the entire BoM, ops and attributes from today. You can then amend the Action On date and Reschedule. When done, delete the sales order (or re-run the installer), and all the associated orders will be removed. 

| Field | Description |
| --| -- |
| Task Code | The Task Code uses the specified document register against the Activity and the User Id. All the codes in TC work this way, so it is possible to go offline with a different database instance, create orders etc, and subsequently synchronise the databases without internal conflicts |
| Action By | The Task Explorer has a page where all tasks relating to a specific user are listed by status. Therefore, you can assign tasks to a user by setting the Action By field |
| Reference Number | An optional field for the customer order number |
| Project Title | Because orders tasks and operations are linked into the same tree you can assign a project title to an entire collection of child tasks. The installer has renamed the toplevel titles from their default description by appending a number. If you change this title it will cascade down to all child tasks where the title was equivalent. |
| Scheduled Fields | Changing the task status quantity or Action On date triggers a series of cascading events. For example, if you cancel an order it will complete the operations and cancel all the projects open tasks as well. However normally task status changes from the lower levels up. |
| Addresses | If you select a delivery task you can see that the haulier is able to collect and deliver to any address in Organisations. Address codes are like all codes in TC alphanumeric and are automatically generated by appending an address number to the organisations Account Code. |
| Payment On | Calculated by adding the payment days or EOM if checked communicated to the customer plus the expected days extra then adjusted to the active user's calendar. |
| Profit | Job profitability is calculated each time a task is selected. The algorithm recurses over the tree gathering charges by applying the Cash Code polarity summating the result. This simplicity is possible because of the way TC is designed.  |
| Task Activity Pages | The Attributes Operations and Workflow pages are either cloned instances of the Activity or another Task. They can be amended added to or deleted in any way. Their features have been described above. |
| Quote Page | Allows you to enter quantity and price breaks to your quotations |
| Documents | You can add as many documents as you like to each task. pdf files word docs xls images cad whatever. These are stored in the Sql Database which apparently can go up to 100TB these days if you can afford it. The Azure Basic Tier is currently 4GB. These documents however are not cloneable but you can cut and paste them. All the documents are visible in the Document Warehouse from the menu. |

### Company Statement

The Company Statement is a dynamically calculated snapshot of your business's position. In accounting terms, it could be regarded as a forward-looking transaction grained balance sheet. If you modify any financial data from the past, or the future, it will impact either the opening balance, or its projection. If you have run the tutorial with the Create Orders option, you will have borrowed some start-up money from the bank (see Cash Statement) and raised several un-invoiced sales and purchase orders.

There are two projections: one for the current account and the other for an optional reserve account. Current accounts have a Cash Code of type BANK, whereas the Cash Codes of reserve accounts are left blank. The first line in each is the current balance. The forward order book is placed on the statement, along with Vat due and corporation tax, using their expected Payment On date. The forward balance is then projected from current balance across the active periods and tax horizons set in Administration.

![CSUninvoiced](/images/bom_compstat_uninvoiced.png)

From the Company Statement you can edit and reschedule orders, invoices and accruals or pay and collect from them. This gives you a great deal of control over your forward planning, because every time you amend the order book or pay an invoice, the vat and corporation tax will adjust accordingly, and there will be a new projection. And if you amend the past, the current balance changes so that it no longer matches your actual bank account, so it is easy to spot anything that requires reconciliation.

Because the Company Statement is dynamically calculated, it will depend where you are in the financial year as to how it will look for you. To amend the financial years and tax periods open the Tax and Period End pages of the Administrator where these settings can be modified. Because the tutorial installer has created an overdue order, you must borrow money or invest to prevent being overdrawn. Open the Cash Statement, which is basically a perfect reflection of your bank account and delete the Company Loan entry. The current balance is zeroised and your projected balance goes into the red. Also try cloning a project and rescheduling it to see how it impacts on the Company Statement and the P&L.

### Job Costing

The costing system of Trade Control consists of two components: real-time job costs for establishing profitability, and what-if analysis for pricing and job scheduling. 

#### Job Profit

When you select the parent task of a job using [the editor](/tutorials/manufacturing#project-schedule), profit is dynamically calculated and displayed. As you add materials, labour or services, the profit margin for each parent task will be affected. To benchmark the margin, you could add a [Cash Expression](/tutorials/cash-codes#cash-expressions) that calculates your average gross margin for each period: 

``` IF([Turnover] = 0, 0, ([Direct Cost] / [Turnover])) ```

To keep track of [performance](/tutorials/manufacturing#status-and-performance) and progress, job profitability is presented by month, showing the live invoice and payment status of its associated income and expenditure:

![Job Profit](/images/bom_job_profit.png)
    
#### Pricing and Scheduling

Trade Control employs transaction-grained algorithms for calculating vat, corporation tax, cash and organisation statements. It can therefore easily present what-if scenarios on the [Company Statement](/tutorials/manufacturing#company-statement). A quotation is identical to an order, but it is not included on the live Company Statement because it has no inherent value. The What-If page allows you to drop these quotes into the statement without impacting the live version or other user's what-if scenarios. In so doing, you can evaluate prices and costs in the context of your entire order-book and financial obligations. Because quotes are tasks like any other, they can be re-scheduled or priced to fit in with the totality of operations, ensuring costs are affordable or facilitating competitive pricing opportunities.  

For our example, the Storage Box Company would like to order an additional 10,000 boxes in the third month of trading. Can we afford it?

- Clone a **M/00/70/00** task
- Amend the quantity to 10,000
- Reduce the price by around 25% to reflect the increase in order quantity
- Set Action On to the same delivery date as the month 3 consignment
- Change the status to **Quote**
- Reschedule

The quotation status will cascade down to all the dependent orders, re-scheduling their dates and quantities:

![Quotation](/images/bom_quotation.png)

It looks like we are making a nice profit on the job, but can its production be financed given the company's commitments? From the Quotation page on the Company Statement, add the quote to the What-If: 

![Add Quote to What If](/images/bom_quote_whatif.png)

Note that you can also add quoted purchases. However, here there is no need to add dependant purchases because they are automatically added as a part of the job. Only quotes assigned to the current user will appear on their what-if analysis. The right-hand panel lists these, where they can be edited and deleted. The statement clearly shows that we cannot afford to make this job given the quantity and date constraint:

![What-if Unscheduled](/images/bom_whatif_unscheduled.png)

Many different options present themselves, such as:

- Re-arrange payment terms with the customer or suppliers
- Price incentives to re-schedule the job later
- Offer call-off quantities over subsequent months
- Increase the price
- Re-negotiate purchase costs for higher quantity requirements
- Postpone the payment of other bills and taxes

In this example, the order date is earlier than the negative company balance. We contact the customer, and they accept the new requirement on cash-with-order terms. Locate the sales order on the What If Statement and edit the task, so that Payment On is the same date as Action On. Refreshing the statement results in a positive company balance. To turn the quote into an order you just change the status to Open. This will remove the quoted job from your What If selections, turn the job into a sales order and amend the associated supplier schedules.

### Cash Flow

Even though you have not invoiced anything yet, using the accruals system, there can be a P&L to match the Company Statement. Install the Cash Flow VSTO Workbook and add the connection to the BoM database. Then set the flags to the following settings.

![CashFlowSettings](/images/bom_cash_flow_settings.png)

The Cash Flow should look something like this:

![CashFlowUninvoiced](/images/bom_cash_flow_uninvoiced.png)

> NOTE: Visible [period end dates](/tutorials/cash-book#period-end) can be adjusted.

The yellow column is the active period. Each Cash Flow generation is rendered from scratch using the Categories and Cash Code classifications, then applying the Cash Totals and Expressions specified in Definitions. The quarterly VAT, presented to the Inland Revenue in the UK, is taken from the Vat Statement in the Invoice Register, as is the Corporation Tax (both set at 20% here). The Taxes section shows the accrued Vat and Corporation Tax, adjusted by the offset days of the Tax Type. If you check out the Invoice Register Vat and Corporation Tax Statements, however, they will be empty. That is because taxes are not due on un-invoiced demands.

## Invoicing

Re-run the [tutorial installation](/tutorials/installing-sqlnode#bom-tutorial) with the Invoice First Order option selected.

Refresh the Company Statement and every order relating to the first sales order has been replaced with an invoice. The overdue order book has been resolved, but overall, the company is in the same position.
Render the Cash Flow again and you will see that, with the flag settings in the previous section, it is roughly the same. The only difference is that the overdue accruals are now in the current period, pushing the corporation tax payment into the following year. Uncheck the live order book flag and vat accruals and the invoiced project can be seen.

![CashFlowUninvoiced](/images/bom_cash_flow_invoiced.png)

### Invoice Register

Natively, there are no sales or purchase invoices, and no credit or debit notes in TC; there are only invoices with an associated polarity. Therefore, whether the invoice is received from a supplier, or sent to a customer is a difference in state rather than object. However, to make the system more in line with current thinking, the Invoice Register is presented as if they are all different objects. There is therefore a numbering system associated with each document type, which can be amended in the Documents page of Administration.

![InvoicePolarity](/images/bom_invoice_polarity.png)

The Invoice Type is then used by the Invoice Register to present the four kinds of invoices users have come to expect. Opening the Invoice Register from the Information menu gives you access to every invoice within the active financial year and allows you to edit or delete them as needed. Invoices can be raised from the Workflow menu, which has a multi-item capability; or directly from the Task Editor, where subsequent items can be added (such as miscellaneous charges like carriage). Your register should match the following:

![InvoiceRegister](/images/bom_invoice_register.png)

The pages shown are self-explanatory, except perhaps Expenses or Expenditures. These are simply purchase orders that are not related to a sales order. Which is to say, they are Tasks with a negative Cash Mode unconnected to a Workflow that contains a positive mode. 

Result sets in TC are created dynamically, except for Invoice Status. Invoices are paid on a FIFO basis as you go along, across these states: Pending, Invoiced, Partially Paid, Paid. If the invoice has been set to full or partial payment and you amend the invoice retrospectively, you must re-build the organisations account from the Org Editor. This seldom happens because you would normally expect to receive or issue a credit note. Payment amendments are more frequent, but they will re-build the Invoice Register automatically.

### Status and Performance

Check out the Status Graphs from the Information menu.  Only one period and one project has been processed, but it is starting to look the part.

![StatusGraphs](/images/bom_status_graphs.png)

From the same menu, [Job Profit](/tutorials/manufacturing#job-costing) provides performance reporting by project, available as a report or exportable dataset, which includes payment status. Costs are calculated anew using the same recursive algorithm as the [Task Editor](#task-editing).

![JobProfitReport](/images/bom_job_profit_report.png)

## Payments

### Organisation Statement

Before re-running the tutorial installation to pay these invoices, you could try out the payment system by paying the Unpaid Purchases in the Invoice Register manually. It is very straight forward.

There is a flag in Organisation Edit called Pay Balance. If it is OFF then only the earliest invoice outstanding will default, otherwise the entire balance is calculated. You can still pay any amount you want by overriding this figure. Setting the Pay Balance OFF for select accounts is useful if you pay the schedule from the Company Statement, individually relating an invoice to each payment, as does the tutorial installer; or you can pay the lot in one go, as we will do here. 

Open Payment Entry and paste in the Account Names of the Unpaid Purchase Items from the Invoice Register, and the total outstanding will be set by default. Leave the Cash Code blank and the payment system will pay off invoices on a FIFO basis.

![PaymentEntry](/images/bom_payment_entry.png)

Post the payments, then open Organisation Enquiry and locate the **PLAPRO** account (or select a **PLAPRO** order in the Company Statement and open Org Enquiry). The Enquiry includes the Organisation Statement below:

![OrganisationStatement](/images/bom_organisation_statement.png)

The Organisation Statement is presented in reverse projection because it builds up over time, and you will want to see the latest balance outstanding. Check out the statement of the **STOBOX** account. Worth noting is the fact that purchases yield a positive balance to the supplier, but negative for the customer. The Organisation Statement is therefore from the point of view of the organisation, not the business. It means that the business must register a payment with a negative polarity to address the balance, reducing the bank balance accordingly. In this instance by -6,455.16.

### Payment System

Run the [tutorial installation](/tutorials/installing-sqlnode#bom-tutorial) with the Pay Invoices option selected.

Rendering the Cash Flow again with the specified [settings](#cash-flow) returns the same results as previously, except the bank balance has increased. The same has occurred with the Company Statement; except the invoices have been removed, and their value added to the current balance.  Refreshing the Invoice Register shows that all the invoices have been set to Paid.

### Cash Statement

The Cash Statement is a mirror image of your bank account, with the additional capacity to classify transactions by Cash Code and split out the tax content. Below is the statement after you have run the tutorial installer. It is slightly different from the manual approach you have just carried out, because the installer has invoiced each demand on the Supplier Schedule, but the balances will be the same.

![CashStatement](/images/bom_cash_statement.png)

You should not need to run the Re-build function, but if you do, under normal conditions it will have no effect. It is useful to integrate imported data into the system, repair corrupted data, an impacting upgrade or because certain essential information has been changed (like moving the financial year).

## Project Management

### Task Explorer

The Task Explorer is the go-to place for:

- Amending the current schedule
- Managing your own responsibilities 
- Gaining access to historical projects
- Activity Code, Account and Contact enquiries
- Managing the active Sales and Purchase Order Books

![TaskExplorer](/images/bom_task_explorer.png)

### Document Manager

There are two document systems for communicating with other organisations:

- A Document Manager, which presents the document types in a traditional way, monitors if they have been sent, and can spool multiple orders in one generation.
- [Word VSTO Templates](/tutorials/installing-vsto) that can be modified to match your business style, populated from XML schema.

Both can email a pdf document to the contact's address directly from within the client. Reports in the Document Manager are more flexible. In manufacturing, you would probably need a Supplier Schedule, instead of lots of single line Purchase Orders. 

![DocumentManager](/images/bom_document_manager.png)

You can write your own reports, and then tell the Document Manager what report goes with which Document Type, and how it is to be communicated by default. These are listed in the Selected Report box.

There is no limit on the number of reports or Word Templates you can add to a Document Type. They are added in the Documents page of Administration. Word Templates are located locally, whereas Manager configuration is universal. Therefore, to avoid error messages, you would need to distribute your new reports.

## A few other things to try out...

Check the EU Jurisdiction flag for customer **STOBOX** and refresh the Invoice Register Vat Statement, or the Cash Flow.

Render the Cash Flow with different [settings](#cash-flow).

Open the [Status Graphs](#status-and-performance). Try cloning a few orders, invoicing and paying them. You will see how the overall tax burden and financial position reflects changes at transaction level speed. (F5 refreshes)

Why not create a bill of materials yourself, for something simple like a plastic pen? You will need to:

1. Model the BoM in Activities by first adding the top-level product code, its components and materials to the Parts Listing
2. Assign the correct Cash Code so it knows the direction of money and service. Set the Default Status to Pending
3. Link them together to create a workflow with meaningful UOQ and Sync Types
4. Add attributes to describe them
5. Insert operations to instruct the steps needed for their manufacture
6. Create a customer to buy them 
7. Suppliers to provide the materials (or use the ones in the tutorial)
8. Add a top-level Project for the customer from Task Explorer
9. Edit the Project and add the top-level product code, status Pending/Quote
10. Assign suppliers and costs to the materials and sub-contractors
11. Quote the suppliers 
12. Select the top-level and check out the cost and price for a healthy profit
13. Open the quotation for review from the Document Manager
14. If the quote is acceptable, change the project's status to Open
15. Using the Company Statement, follow through this tutorial until all the suppliers have been paid and customer's money is in the bank

In a real factory, you must do a lot more than that - exciting duties like stock control - but you will learn the basics and familiarise yourself with the system.

### Supply-Chains

Trade Control instances are nodes that can be connected, such that BOM-like workflows can operate over supply-chains. Install the [Trade Control Network](/tutorials/network) and try out the tutorial. It shows you how to schedule the entire supply chain for both customers and suppliers of the assembly.

### Bitcoin

Install the [bitcoin wallet](/tutorials/bitcoin) and follow the tutorial, replacing the [payment system](#payments) with payments from an HD Wallet.

## Licence

Trade Control Documentation by Trade Control Ltd is licenced under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) 

![Creative Commons](https://i.creativecommons.org/l/by-sa/4.0/88x31.png) 

