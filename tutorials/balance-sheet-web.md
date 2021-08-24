---
layout: page
title: Generating a Balance Sheet (Web)
permalink: /tutorials/balance-sheet-web
---

## Index

### Instructions

- [Basic Company Accounts](#basic-accounts)
- [Configuration](#configuration)
- [Current Assets](#current-assets)
- [Fixed Assets](#fixed-assets)
- [Long-term liabilities](#long-term-liabilities)
- [Accounts Review](#review-5)
- [Petty Cash](#cash-box)
- [VAT](#vat)
- [Company Tax](#company-tax)

# Instructions

## Requirements

- [installation]({{ site.url}}/tutorials/installing-web) [Web App Version >=1.1.0; Node >=3.34.6;]
- [Accounting Tutorial]({{ site.url}}/tutorials/cash-book-web)

## Basic Accounts

After working through the accounting tutorial, we arrived at a verifiable [P&L and Balance Sheet]({{ site.url}}/tutorials/cash-book-web#finalised-accounts). Both capital and profit are arithmetically and legally correct. The profit on the P&L for the active period is equal to the increase in capital (from zero), so it adds up. However, it communicates that the business has no fixed assets or stock. Also, the owner injected a GBP 10k loan into the business at start-up. Should that money be taken out of the business in the future, the balance sheet would no longer be legally compliant unless the liability is reduced.  To generate a more advanced balance sheet we will add the following:

1. [Current assets](#current-assets) - physical stock and [cash box](#cash-box)
2. [Fixed assets](#fixed-assets) - premises, van and plant
3. [Long-term Liabilities](#long-term-liabilities) - processing bank and director loans

Also covered are explanations for dealing with [accruals](#accruals-and-prepayments) and how to include assets on the [P&L profit calculations](#profit-and-loss). Finally, we [audit the accounts](#audit). Firstly, however, we must configure the system to account for business assets.

## Configuration

### Cash Codes

Cash is classified [by three transaction types](cash-codes#types): TRADE, EXTERNAL and MONEY. Financial transactions that involve an exchange of goods and services are of type TRADE. EXTERNAL transactions relate to government taxes, which cannot appear on the P&L or balance sheet because the money is owned by the state. Type MONEY classifies all other non-trading transactions. We use the MONEY type categories to create additional cash accounts for assets by assigning cash codes with the corresponding polarity. 

### Cash Accounts

Assets are modelled in Cash Accounts, like your bank statement. The Cash Account Type distinguishes between CASH, DUMMY and ASSETS.  CASH types are employed in the financial side of trading. DUMMY accounts merely allow you to adjust the invoice register without impacting the bank statements. The ASSETS type is used for calculating capital. Payments for these cash accounts will not generate associated invoices. All ASSET type accounts require a Cash Code of type MONEY. Each asset account requires a liquidity level because a balance sheet is presented least liquid first (Property=60). Zero liquidity represents the most liquid asset (Cash=0). It does not matter what these numbers are, only their order. You can close all these accounts, delete them or add others. 

Filter the Maintenance page by Asset and un-close the following template accounts:

![asset accounts]({{ site.url}}/images/web_asset_accounts.png)

Going concerns will have opening asset balances, equivalent to the ongoing business capital. We cover this in a [later section](#modifying-capital).

### Assets and Liabilities

In conventional accounting practice there are two capital categories representing assets and liabilities. Trade Control only needs a single asset type because it models assets in a projected cash account, not ledgers.  Therefore, you just enter liabilities the opposite way round. For example:

CASH ACCOUNT | REF | PAID IN | PAID OUT | CASH CODE
-- | -- | -- | -- | --
LONLIA | A long term debt | - | 50,000 | Debt Repayment
LONLIA | First instalment | 10,000 | - | Debt Repayment
PLAMAC | A machine | 2,000 | - | Depreciation
PLAMAC | write-down | - | 500 | Depreciation

The algorithm knows the first entries constitute a liability because the asset value yields negative capital, and it will automatically appear at the bottom of the statement. We only need to know the payment entry is non-trading, which the cash account type ASSET provides. Therefore, we do not need this extra classification from traditional accounting practices. We can create as many asset/liability categories and associated cash codes as needed. We just set the required cash polarity against the category. If, for some obscure reason, you enter contrary to this polarity you will generate negative capital yield on an asset or positive yield on a liability.

## Asset Entry

Open the Cash Accounts Maintenance page, filter by the Asset type and un-close Stock, Vehicles and Plant and Machinery. These are closed by default and therefore inaccessible.

Normally, asset entries take place over several years. For the purposes of tutorial, however, we must add assets retrospectively and rebuild the period-end closedowns. The **Financial Periods** page on the **Accounts** menu communicates the current period and the financial year. The [basic tutorial]({{ site.url}}/tutorials/cash-book-web) ended its financial year m/e April, but yours will likely be different.

The Cash Account Asset Entry page is where you register assets, depreciate them or specify movement.

### Current Assets

To record stock, there will be an opening stock figure, then subsequent entries specifying stock movement. Each entry corresponds with a stock take or the period end evaluation from a stock control system. We must enter these movements in one go.

![Stock Movement]({{ site.url }}/images/web_stock_movement.png)

To post, press the yellow button. The Statement button takes you to the Cash Statement. Since the Cash Statement by month is not very useful when reviewing assets, the projected balance will be presented for all transactions. The entry balance is the stock value at that time, which goes on the balance sheet; whilst the value of the Paid In or Out is [carried over onto the P&L](#review-4). If there is more than one entry in a period, the last balance is always used for the accounts.

![stock projection]({{ site.url }}/images/web_stock_projection.png)


### Fixed Assets

To record fixed assets involves double-entry. The asset is purchased in a Pay Out transaction of type TRADE (in the same way as any other purchase), and then double-entered into a Pay In transaction of the corresponding asset account. We are going to buy a machine tool and a van. According to the Cash Statement, the current balance is 3.5K GBP, with 5K reserves.

1. Open **Payment Entry** from the **Cash Accounts** menu. In the last month of trading make two miscellaneous payments to buy a van for GBP 2K and a machine tool for GBP 1K. Use the New buttons to create two new organisations and associated Cash Codes in Indirect Costs with Standard VAT Rate - Machinery and Vehicles.
2. From **Asset Entry**, pay in GBP 1667 into the VEHICLE cash account and pay out (write down) GBP 416.75 each year. Post the first two entries. 
3. Pay in GBP 833K into PLANT AND MACHINERY and write off GBP 208.25 each year end, posting the opening value and the first write down.

Trading Type entry:

![buy fixed assets]({{ site.url }}/images/web_fixed_asset_buy.png)

Asset Type double-entry minus the tax content (ref. Invoice Register). Here is the van: 

![fixed asset entry]({{ site.url }}/images/web_fixed_asset_entry.png)

Since it is our year end in April, post the vehicle and plant depreciation for that period along with the asset pay in.

### Long-term Liabilities

Like [fixed assets](#fixed-assets), long-term liabilities are also double-entry. The process is virtually identical only the cash polarity is the other way around - pay outs are pay ins and vice versa.

From Cash Statement, Show All, we can see that the first two transactions of the current account are the director loan of GBP 10K, plus GBP 1 share capital, which represents the initial shareholding. The loan is registered as a long-term liability and needs to be paid off. To demonstrate the process, we take out another loan from the bank for a further GBP 10K plus 1.5K interest payable quarterly over 3 years. They deposit the loan into the reserve account. We therefore need to register the money as a long-term liability with a double-entry into an asset account that yields negative capital. By default, in [Cash Codes](#cash-codes) there is a Liabilities category which has negative polarity, along with a cash code for debt repayment.

Firstly, we make a trading entry on the first month of our financial year that pays in the loan into the reserve account. We follow this by quarterly pay outs to-date including interest (which would normally be entered on a different cash code representing interest payments and paid out of your current account):

![bank loan]({{ site.url }}/images/web_bank_loan.png)

Secondly, we make the corresponding double-entry with the opposite polarity, followed by the pay offs without interest, which is a cost. In this way, the company loan means the net increase in asset value is zero.

![Debt Repayment]({{ site.url }}/images/web_debt_repayment.png)

## Review 4

We are now in a position to review how these assets have modified the balance sheet and P&L [from the previous tutorial]({{ site.url }}/tutorials/cash-book-web#finalised-accounts).  [Re-generate the closed period ends]({{ site.url }}/tutorials/cash-book-web#period-end) and review the accounts.

The revised Profit and Loss Account for the year should be:

![profit and loss account]({{ site.url }}/images/web_profit_and_loss2.png) 

And the corresponding balance sheet:

![balance sheet]({{ site.url }}/images/web_balance_sheet4.png) 

Re-applying the [error checking process]({{ site.url }}/tutorials/cash-book-web#error-checking) to these figures confirms its continued correctness.

## Cash Box

There is no operational difference between your current account and a cash box. They work the same and Trade Control classifies them both as CASH on the balance sheet. In traditional accounting, cash means physical coinage in a cash box. Today, unless you are a market-stall trader, that does not make much sense, since physical cash is likely to be a tiny proportion of your available funds. Here, CASH is your working funds, and BANK is your banked reserves. The Cash Box has its own balance, so you can employ the traditional classification if you like.

In Cash Account Maintenance add XCASH for physical coins and notes. The **X** prefix ensures that it will not be the default trading account.

![cash box account]({{ site.url}}/images/web_cash_box_account.png)

### Cash Box Operation

To withdraw cash from a bank, open Transfers and move money from the current account into the cash box on the sixth month of trading:

![cash withdrawal]({{ site.url }}/images/web_cash_withdrawal.png)

Once these entries have been posted, we have GBP 100 in cash which we can take to the market for change, book in the takings of the day, buy stuff and deposit/transfer it back into the current account. 

For the tutorial, enter the following, starting 7 months before year end:

![cash box]({{ site.url }}/images/web_cash_box.png)

The balance sheet will now show a new cash balance. However, we should periodically deposit the petty cash back into the current account. Open the Cash Statement and show all transactions against the cash box. Make two transfers so that the balance never exceeds 2K. Transferring this money between the petty cash and your bank account will not change the balance sheet, since both are trading accounts.

## Review 5

The new transactions alter the amount of cash we have and affect the company tax and VAT owing. This changes the capital value of the business. Open the [Period End]({{ site.url }}/tutorials/cash-book-web#period-end) and re-build the retrospectively altered financial year. 

There are three components to your annual accounts - the balance sheet, the profit and loss account and the company tax return. For a detailed explanation, consult the tutorial on [filing your accounts]({{ site.url }}/tutorials/accounts-filing).

### Balance Sheet

Your updated balance sheet should match the following:

![balance sheet]({{ site.url }}/images/web_balance_sheet5.png) 

### Profit and Loss Account

The Debtors and Creditors Listing should remain unchanged. If there is a mismatch due to rounding, you can view the organisation statement and modify the incorrect invoice. There are three sections to the P&L.

The first section presents your year-end accounts. Because we have used the HMRC template, the codes correspond to the required boxes on the government portal. The codes relating to accounts begin with the letters **AC**. Any codes prefixed with **TC** are internal to Trade Control and are not entered into the portal.

![profit and loss account]({{ site.url }}/images/web_profit_and_loss3.png) 

### Company Tax Totals

Tax totals and category details are required for completing the corporation tax computation, as well as submitting the assorted information to government that they want to collect. These codes begin with **CP**. 

![company tax totals]({{ site.url }}/images/web_tax_totals.png) 

### Cash Code and Category Totals

Clicking on Details loads a long list of the categories and cash code details that make up the accounts. 

![company tax details]({{ site.url }}/images/web_tax_details.png) 

If you are running the website as an Azure App Service, you can also dynamically generate the Trade Statement from Excel. You can then view the whole year by period, as well as tax values and bank balances.

[Download the Trade Statement for this tutorial]({{ site.url }}/docs/tc_accounts_hmrc.xlsx)

## Tax

VAT and company tax are calculated on a transaction-grained basis and presented as SvD style statements. The outstanding balance at period end appears on the corresponding balance sheet. These statements are projected in real time from the set of all transactions. Any retrospective changes to an historical transaction will instantly impact the outstanding tax balance.

### VAT

From the **Accounts** menu, the VAT statement shows when the values are due to be paid. The final balance is on the year-end balance sheet before it falls due because the liability was incurred during that period. 

![vat statement]({{ site.url }}/images/web_vat_statement.png)

When you pay off the VAT, the balance is reduced accordingly. You can adjust the VAT balance by pressing the yellow button on the VAT totals page.

![vat totals]({{ site.url }}/images/web_vat_totals.png)

The information button opens the page that provides the quarterly totals you need to communicate to the taxman. If you are below the VAT threshold, you can apparently still use the government portal to enter these values. There is no functional reason therefore why a business must use a third-party accounting package provided by the banks. You can, however, work round that with a [simple export service]({{ site.url }}/tutorials/digital-tax).

### Company Tax

The Company Tax statement communicates how much tax is owing and when it must be paid. Post a payment to HMRC using the Corporation Tax cash code and a payment date after the end of the financial year. 

![company tax statement]({{ site.url }}/images/web_company_tax_statement.png)

Like VAT, adjust company tax by using the yellow button. This is necessary for going concern to initialise the tax statement with the outstanding obligation.

![company tax totals]({{ site.url }}/images/web_company_tax_totals.png)

If the company has made losses in previous financial years, the Company Tax statement automatically presents that in the projected balance. However, the statement presents a negative tax due rather than the total losses required by the government portal. The Losses C/F button presents a page that communicates how much losses can offset against your year-end obligation.

## Filing

Follow the instructions for [filing company accounts]({{ site.url }}/tutorials/accounts-filing#instructions)

## Licence

Trade Control Documentation by Trade Control Ltd is licenced under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) 

![Creative Commons](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)

