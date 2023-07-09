---
layout: ../../layouts/Documentation.astro
title: Accounts and Invoicing (Web)
permalink: /tutorials/cash-book-web
---

The web app detects the device upon which it is running. In this tutorial we will be mostly using a mobile phone. A browser from any device will work fine, but some screens may be presented differently.

## Index

- [System Initialisation](#setup)
- [Going Concerns](#going-concerns)
- [Injecting Capital](#capital-injection)
- [Account Transfers](#account-transfers)
- [Invoicing](#invoicing)
- [Payments](#money)
- [Processing credit](#crediting-accounts)
- [Period and Year End](#period-end)
- [Finalised Accounts](#finalised-accounts)
- [Filing your accounts with HMRC](./accounts-filing)
- [Advanced Balance Sheet](/tutorials/balance-sheet-web)
- [Cash Boxes](/tutorials/balance-sheet-web#cash-box)

## Background

- [Organisations](#organisations)
- [Tax](#tax)
- [Maintenance and Customisation](#maintenance)

# Instructions

## Requirement

- [installation](/tutorials/installing-web) [Web App Version >=1.1.0; Node >=3.34.6;]
- [motivation](/accounts#accountancy)

## Background

### Setup

When you [initialise the business](/tutorials/installing-web#start-up), choose the latest HRMC Company Accounts template. If your business is already set up, log on as [an administrator](/tutorials/installing-web#registrations) and from the menu open **System/Initialisation**. The tutorial will be made easier if you set the start month to the current month; that way the financial year-end will be the month previous. This tutorial was constructed in June and the start month was set to May (so y/e April 31st). Once initialised, check the [Period End](#period-end) page to confirm the exact dates.

### Theory

Trade Control does not use the traditional system of double-entry book-keeping to derive company accounts. Instead, it applies Supply and Demand to money using a Cash/Quantity polarity principle. This method has distinct advantages generally. In relation to accounting:

- anyone can check the accounts for correctness
- the algorithms can calculate tax and capital on a transaction grained basis from a genesis transaction
- the accounts are fraud-resistant because any discrepancies, no matter how old, are immediately apparent in the closing balances

Because computers are very good at adding up, thousands of transactions can be processed in milliseconds. For more details on this approach read [Cash Polarity Explained](/tutorials/cash-codes#cash-polarity).

### Interface

Colour coded buttons are used to assist in navigation. For example, red always opens a deletion request, whilst grey edits. None of these buttons will perform an action directly, so you can confidently click on them to find out what they do.

![cash accounts](/images/web_cash_accounts.png)

### Transaction Dates

In a live environment, transactions will be entered as you go along. Because the tutorial must post payments retrospectively, for all transactions, specify dates in a previous month. 

## Going Concerns

### Opening Balance

For the tutorial we are going to start a new company. However, a going concern will need to set the opening balance of its bank accounts. Open **Cash Accounts/Maintenance** and set the Opening Balance of each bank account at the point of the first transaction. 

Reference [Cash Accounts](#cash-accounts)

### Classifying Transactions

If you accept the default cash codes, you can start trading straight away. However, companies that have pre-existing accounts should classify transactions in the same way for historical comparison. In DEBK accounts, nominal codes classify transactions. Trade Control does not have a nominal ledger, but you can translate nominal into cash codes very easily. However, cash codes are [structured by categories](./cash-codes#categories-and-cash-codes) and therefore it may involve re-configuring them.

Reference [Cash Codes](#cash-codes)

## Capital Injection

A business needs some money to get going, either by issuing shares or obtaining a loan. For limited companies, it is necessary to inject the share capital at the outset. Most owners issue 1 share each and transfer funds into the business account in the form of a long-term loan.

### Share Capital

The Share Capital cash code is an asset class which cannot be paid into your bank account. Instead, we pay in the capital as a Company Loan. Inject capital into your current account by opening Cash Accounts/Payment Entry.  

- Select Miscellaneous Payment, which defaults to your current account.
- Select or create a new business owner account

![cash accounts](/images/web_new_org.png)

- Select Company Loan from the investment section in the search screen
- Pay in 1 GBP on the business start-up date
- Post the payment entry

Because this is a capital transaction, we must register its effect on the asset value of the business. Open **Cash Accounts/Asset Entry**:

- Select, or create a new entry, Called Up Share Capital
- Pay out 1 GBP on the business start-up date
- From the listing click on the yellow button next to the entry and post
 
### Director Loan

The reason why owners prefer a director's loan to capital is that they can modify the corporation tax bill at year end by deciding how much to pay back. Because the loan is a long-term liability, it is processed in the same way as we have just completed for share capital. These codes and accounts are installed in the basic setup.

1. Open Payment Entry and pay in 10K into the current account from the owner. Use the Director Loan cash code.
2. Open Asset Entry and pay out 10K from the Long-Term Liabilities account.

## Account Transfers

Traditionally, businesses have held a high interest reserve account where savings and tax accruals are deposited. Whilst interest rates are now low, it is still general practice. Open Transfers from the Cash Accounts menu and move 5K into the reserve account using the relevant cash code.

![bank transfers](/images/web_bank_transfer.png)

### Review 1

Open the Balance Sheet on the Accounts menu. The Cash Account Statement will show a current account of 5,001 with reserves of 5K, a share capital account of -1 and a long-term liability of -10K.  We are also being charged 19% corporation tax on our investment. That is because the turnover includes investment in our [net profit hierarchy](/tutorials/cash-codes#net-profit). That hierarchy is a user-configured construct and can be edited from **System/Cash Totals**. 

![turnover](/images/web_cash_total.png)

## Invoicing

You do not have to invoice in order to use the cash book, you can just make [miscellaneous payments](#miscellaneous-payments) which will automatically create invoices for each transaction. However, corporations have a legal obligation to record their asset value rather than current cash position, and invoices are integral to that. Moreover, most companies will want to invoice their customers. If you do not have a separate system for order processing, you can [email invoices](./installing-web#mail-host) from the cash book and they will be paid off based on their due dates.  

Invoices are based on [document templates](./installing-web#document-templates) which can be profiled with style sheets, images and pdf attachments. There are default templates provided by the app, but most companies have their own profile. Please [contact us](/contact) for assistance.

### Raising Invoices

Open the **Invoicing/Raise** list and use the New button to create suppliers and customers. When entering customers, it is recommended that you specify payment terms and days (such as 30 days or COD), their business and email address. Specify Invoiced On dates from previous months when raising invoices. We are going to raise a few invoices fora job that assembles and despatches a widget.

> Use your own email addresses so you can send yourself invoices and credit notes 

Raise entries for supply and sales to new customers and suppliers. The unposted invoices should specify the following values (workstation view):

![unposted invoices](/images/web_invoices_unposted.png)

If you were using this capability as a kind of forward order book, you can post individually or by account. Here we just press the Post All button. [Manger and Administrator roles](/tutorials/installing-web#registrations) can post any invoice, otherwise a user can only post those they have raised themselves.

Administators can also create new cash and category codes during the invoicing process:

![new cash code](/images/web_new_cash_code.png)

If you are using an HMRC template, cash codes will need to be integrated into the P&L totals. The categories that can be safely assigned to are:

| Code | Description
| - | - |
| TC-DIRECT | Direct Costs
| CP37 | Sundry Costs
| TC-SALES | Sales |

### Emailing Invoices

Where postings include sales invoices or credit notes, the Invoice Manager is opened so you can send them off. Invoices can be modified, rescheduled and cancelled from here as well. Press the yellow button next to the sales invoice to submit an invoice to the customer.  

![submit invoice](/images/web_invoices_submit.png)

This process is dependent upon configuring a [mail host](/tutorials/installing-web#mail-host) and [document templates](/tutorials/installing-web#document-templates). Provided that has been setup, preview the document and add a contact to send yourself the email.

### Review 2

Use the **Invoicing/Register** to edit/view invoices in an accounting period, and **Invoicing/Summary** to enquire on income and expenditure by classification. It should show the following values:

![submit invoice](/images/web_invoices_summary.png)

Our new balance sheet looks a bit more interesting: 

![balance sheet](/images/web_balance_sheet1.png)

If you view the annual Profit and Loss Account, it will report a profit of 700 GBP. The balance sheet adds this to the opening capital (zero for start-ups) and deducts the corporation tax liability to obtain the balance.

## Money

> For the processing of assets and accruals, consult the tutorial on constructing a [balance sheet](/tutorials/balance-sheet).

This section explains how to mirror your bank account. Perhaps one day this process can be replaced by the Trade Control [commercial wallet](/bitcoin), which is superior to a bank account in every way. In the meantime, mirroring is still quite straight forward.

### Miscellaneous Payments

It is possible for a sole trader to produce legally compliant books by using miscellaneous payments alone. That is because the SvD algorithm automatically creates invoices, matching a supply for each demand and vice versa. If payments are retrospectively altered, then the SvD balance will be thrown out, resulting in either new creditors or debtors. This is easily repaired by editing the [Organisation Statement](#organisations). Corporations use miscellaneous payment entries for items such as consumables, expenses, salaries, tax and so on.

To make a miscellaneous payment, open Payment Entry and include a cash code in the transaction. That is all. The transactions are entered from your online bank statement. Therefore, once posted the bank balance must equal that on the corresponding cash account. If there is a mismatch, edit the [cash account statement](#cash-accounts).

Here are some purchases our start-up might need, purchased with funds from the [director's loan](#director-loan):

![miscellaneous payments](/images/web_payments_misc.png)

Once posted, open the Invoice Register and there will be paid purchase invoices in the period that match these payments (minus VAT). You can always move these invoices into different accounting periods. For example, invoices for Employers NI would normally be moved into the financial period to which they apply (although unnecessary if [manually invoiced](#invoicing) in advance).

### Paying Invoices

**Invoicing/Unpaid** lists both sales and purchase invoices where payment amounts are outstanding. Currently, our cash position is 840 GBP down on what it would be if these invoices were paid:

![unpaid invoices](/images/web_invoices_unpaid.png)

Paying outstanding invoices is the same as making a miscellaneous payment only you omit the cash code. Although this difference seems slight, the algorithm for processing the transaction is very different. Invoices are paid off in date order, so if you want to control the allocation of the money supply to specific invoices, that is the only way you can influence it. Furthermore, you can buy and sell from and to the same account, complicating the allocation process. Whatever the scenario, the algorithm will work out the outstanding balance on the account, thus deriving your debtors and creditors from the [organisation statement](#organisation-enquiry).  

![debtors and creditors](/images/web_debtors_and_creditors1.png)

When payment is incomplete, invoices are set to partially paid. For the tutorial, we pay off all the suppliers, but the customer partially pays their invoice on account. We therefore accept the default paid value for the suppliers and reduce the customer payment to half. Pressing the blue outline button from **Invoicing/Unpaid** will load the organisation into the Payment Entry form with the outstanding balance. Make sure you change the payment date to the last month of the previous financial year (April in this instance). 

Returning to the Unpaid Invoices page shows the customer's partially paid invoice and the [Organisation Statement](#organisation-enquiry) for the customer shows a negative balance for the outstanding amount. 

### Review 3

The P&L and Balance Sheet now show that the business is in a loss-making position, pays no tax and can reclaim vat on purchases. The profit on the P&L is the same as the capital because capital is initially zero in the first year of trading and there is no corporation tax liability.

![balance sheet](/images/web_balance_sheet2.png)

To make some profit, [raise an invoice](#raising-invoices) for another customer using the values below, then re-visit the balance sheet to see the effect on profit and capital:

![sales invoices](/images/web_invoices_raise.png)

### Crediting Accounts

When trades do not work out there is an application for credit. You apply for credit from a supplier on a debit note, or issue credit to customers on a credit note. For example, Customer One returns a faulty widget and asks for a credit of 120 GBP (as shown above). We email a credit note using the [same procedure](#raising-invoices) for a sales invoice, only we specify a credit note.

The credit note document is the same as that for debit applications. Often, the latter is not sent out, but credit notes from a supplier will need to be entered as a debit to correct their SvD statement.

## Period End

The web app automatically re-builds closed period ends when invoices are retrospectively modified. However, if you change the period end dates, or modify invoices externally you can re-build them from the **Financial Periods** page on the **Accounts** menu. This option merely re-runs the period-end closedown procedure for historical data, so it can be executed at any time. You can also re-build the entire company datastore from here, for example, after importing data.

The period end dates below were created during the setup procedure. Looking forward, you need to closedown each month once everything is in order. The period start on dates would only be modified if you were implementing a stock take. To enter new financial years, just the year is required.  As the years roll by, setting a financial year to archived will remove the associated months from the Cash Statements, Invoice Register and Trade Statements. It will not alter any of the projected statement balances or tax calculations.

![period end](/images/web_period_end.png)

## Finalised Accounts

Once all these steps have been completed, you will have generated a legally compliant P&L with an associated Balance Sheet. Here is the Profit and Loss Account for the year, where the codes identify the corresponding box in the government portal:

![profit and loss account](/images/web_profit_and_loss1.png) 

And here is the associated balance sheet:

![balance sheet](/images/web_balance_sheet3.png) 

Follow the tutorial on [filing your accounts with HMRC](./accounts-filing) for a step-by-step guide on submitting your annual tax return.

### Error Checking

Because the algorithms are based on Supply and Demand, to have confidence in our accounts we only need to confirm the veracity of the closing bank balance and our debtors and creditors. Before doing that, however, we need to ensure that our [category codes](/tutorials/cash-codes) have been configured correctly. Applying the formula below, we get 1971.68 - 0 + 462.49 = 2434.17, confirming that the P&L matches the Balance Sheet.

    [Current Year Capital] - [Previous Year Capital] + [Corporation Tax] = [Current Year Profit]

We then make sure that CASH + BANK on the balance sheet matches our bank statements and petty cash book. Finally, we open the Debtors and Creditors page from the **Organisation** menu and select the year end month. If there is an organisation that is showing incorrectly, check out the statement and the balance will show you where there is a mismatch between payments and invoices. Normally this will be a VAT issue, so you just edit the invoice item total value to match the corresponding payment.

![audit](/images/web_debtors_and_creditors2.png)

# Cash Book Information

    The following sections provide informational and technical guidance for generating your company accounts.

## Organisations

If you have read the tutorial on [cash polarity](/tutorials/cash-codes#cash-polarity), you will already know that there are no customers or suppliers in Trade Control, but users with Administrator privileges can add them. The **Types** page on the **Organisation** menu allows you to create your own classifications. The organisation types below were created during the basic setup routine. 

![organisation types](/images/web_organisation_types.png)

### Organisation Maintenance

The Organisation Maintenance interface also supports the MIS mode and therefore has many more options than you will need for producing your books. The key information is as follows:

- Type
- Status
- Vat Code and EU Jurisdiction (if you are VAT registered)
- Terms and Admin Address (if emailing invoices)

To create a new organisation, the only required values are the organisation name, type and status.

### Organisation Enquiry

Against each organisation in the enquiry page are four buttons giving access to details, invoices, payments and statement. Opening the statement for Customer One shows the projected balance. Positive or negative month end balances are shown on the Debtors and Creditors page and summated on the balance sheet. 

![organisation statement](/images/web_org_statement.png)

The current balance of the debtor or creditor is also used to set the payment status of the allocated invoices. In live circumstances, the SvD projection can be quite complicated, particularly if both income and expenditure are included on the same account (such as HMRC); but the principle is the same. From the Item Invoice enquiry for Customer One, you can see how the SvD algorithm has calculated the invoice and vat value paid and set the payment status to partial:

![invoice status](/images/web_invoice_status.png)

## Tax

### Settings

The default settings for tax are configured during the setup process. The **Tax Settings** page on the **Accounts** menu allows administrators to modify how taxes are calculated. Once the correct settings are established, they remain fixed unless there is some structural change to the business. The offset days is used to distinguish tax liability from payment due date. VAT is normally 1 month, and corporation tax 9 months. The cash codes assigned to control tax types must be assigned to an EXTERNAL Category. The Corporation Tax and Vat category codes assign the corresponding hierarchy in [Cash Totals](#cash-codes).

### Tax Rates

Governments change tax rates to stimulate the economy or raise money for social benefit. To deal with this, check out the government portal at the end of each financial year for the latest rates and enter them in the **Company Tax** page on the **Accounts** menu. When VAT rates change, you must enter a new code rather than modify an existing one. Trade Control calculates tax statements from the genesis transaction and therefore altering rates will instantly throw out your tax liability.

You can tweak the tax statements by adjustments. This is useful when you first start using the system as a going concern.

## Maintenance 

### Cash Accounts

A Cash Account is a set of dated paid in/out transactions, each with a corresponding balance. There are three different types: 

| Type | Description |
| - | - |
| **CASH** | Maps to your current and reserve bank accounts or bitcoin wallet |
| **ASSET** | Stores an asset and its write down transactions |
| **DUMMY** | Adjusts SvD by modifying the invoice register  |

CASH type accounts are vital to the effective running of any business. ASSET types do not apply to sole traders, only corporations. The DUMMY type is administrative only, for example, to correct a supplier invoice without a credit note, or vat anomalies.

#### Cash Statement

Because your bank account is mirrored by a cash account, the statement is a useful reference for locating historical transactions. It also allows you to edit and delete any transaction. Modifying cash payments triggers a discrete re-build on the effected organisation, ensuring invoice status matches the projected SvD balance.

You can re-build a cash account from [Period End](#period-end). However, this function should only be required if the database has been externally modified or you have retrospectively modified invoices from the Office 365 system. It may take a while, but it will not do any harm. 

### Cash Codes

Once up and running, you will seldom need to create new cash codes to classify financial transactions. There is a tutorial on [cash classification](/tutorials/cash-codes) for details on how to do this.

## Advanced

Incorporated businesses will also need to know [how to generate a balance sheet](/tutorials/balance-sheet-web).

If you are handling coinage, you will also need to [set up a cash box](/tutorials/balance-sheet-web#cash-box).

## Licence

Trade Control Documentation by Trade Control Ltd is licenced under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) 

![Creative Commons](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)
