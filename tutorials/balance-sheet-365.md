---
layout: page
title: Generating a Balance Sheet (365)
permalink: /tutorials/balance-sheet-365
---

## Index

### Instructions

- [Basic Company Accounts](#basic-accounts)
- [Configuration](#configuration)
- [Current Assets](#current-assets)
- [Fixed Assets](#fixed-assets)
- [Long-term liabilities](#long-term-liabilities)
- [Accounts Review](#accounts-review)
- [Petty Cash](#cash-box)
- [Profit and Loss](#profit-and-loss)
- [Accruals and Prepayments](#accruals-and-prepayments)

### Information

- [Cash Statement](#cash-statement)
- [VAT and Corporation Tax](#tax)
- [Auditing Accounts](#audit)
- [Modifying Capital](#modifying-capital)
- [Finalised Company Accounts](#trade-statement)

# Instructions

## Requirement

- [Sql Node Installation](installing-sqlnode) [>=3.29](https://github.com/tradecontrol/sqlnode/releases)
- [Office 365 Client](installing-office) [>=3.15](https://github.com/tradecontrol/office/releases)
- [VSTO Trade Statement](installing-vsto) [>=2.2.1](https://github.com/tradecontrol/office/releases)

## Data

After installing a test company trading in fiat using the [node configurator](installing-sqlnode), install the [services tutorial](installing-sqlnode#services-tutorial) with the Pay option selected. 

## Basic Accounts

Open the [Cash Flow XLS](installing-vsto#cash-flow) and switch off accruals by only checking these options in the Action Pane:

![Action Pane]({{ site.url }}/images/balance_sheet_action_pane.png)

Set the database connection to the test company and run the cash flow routine. You will get a Trade Statement that will be similar to the Basic page in the following [sample spreadsheet]({{ site.url }}/docs/tc_balance_sheet.xlsx):  

![Basic Balance Sheet]({{ site.url }}/images/balance_sheet_basic.png)

This balance sheet at the bottom of the statement is arithmetically and legally correct. The profit on the P&L for the active period is equal to the increase in capital (from zero), so it adds up.  However, it communicates that the business has no fixed assets, stock or long-term liabilities. Also, the owner injected GBP 25k into the business at start-up. Should that money be taken out of the business in the future, the balance sheet would no longer be legally compliant, since the injection has not been recorded as a liability.  To generate a more advanced balance sheet we will add the following:

1. [Current assets](#current-assets) - physical stock and [cash box](#cash-box)
2. [Fixed assets](#fixed-assets) - premises, van and plant
3. [Long-term Liabilities](#long-term-liabilities) - bank and director loans

Also covered are explanations for dealing with [accruals](#accruals-and-prepayments) and how to include assets on the [P&L profit calculations](#profit-and-loss). Finally, we [audit the accounts](#audit). Firstly, however, we must configure the system to account for business assets.

## Configuration

### Cash Codes

Cash is classified [by three transaction types](cash-codes#types): TRADE, EXTERNAL and MONEY. Financial transactions that involve an exchange of goods and services are of type TRADE. EXTERNAL transactions relate to government taxes, which cannot appear on the P&L or balance sheet because the money is owned by the state. Type MONEY classifies all other non-trading transactions. We use the latter to create two categories for assets and liabilities and then assign cash codes with the corresponding polarity. If you have installed the tutorial data, these will be automatically created, but they are disabled by default. Open Definitions and ensure that the following categories and associated cash codes are enabled: Assets (Income), Liabilities (Expense) and Investment (Neutral):

![Cash Codes]({{ site.url }}/images/balance_sheet_cash_codes.png)

### Cash Accounts

Assets are modelled in Cash Accounts. The Cash Account Type distinguishes between CASH, DUMMY and ASSETS.  CASH types are employed in the financial side of trading. DUMMY accounts merely allow you to adjust the invoice register without impacting the bank statements. The ASSETS type is used for calculating capital. Payments for these cash accounts will not generate associated invoices. All ASSET type accounts require a Cash Code of type MONEY. The Basic Setup adds several useful asset type cash accounts which are closed by default. In Cash Account Definitions enable/open the following accounts and add XCASH for physical coins and notes. The **X** prefix ensures that it will not be the default trading account:

![Cash Accounts]({{ site.url }}/images/balance_sheet_cash_accounts.png)

Each asset account requires a liquidity level because a balance sheet is presented least liquid first (premises=50). Zero liquidity represents the most liquid asset (cash=0). It does not matter what these numbers are, only their order. You can close all these accounts, delete them or add others. 

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

For the purposes of tutorial, to modify the [basic balance sheet](#basic-implementation) we must add assets retrospectively and rebuild the period-end closedowns. From the [Cash Flow spreadsheet]({{ site.url }}/docs/tc_balance_sheet.xlsx) we see that trade began on 1 July 2020 and the current period is February 2021 (yours is likely to be different). 

The Asset Entry menu item is used to register assets, depreciate them or specify movement. 

### Current Assets

To record stock, there will be an opening stock figure, then subsequent entries specifying stock movement. Each entry corresponds with a stock take or the period end evaluation from a stock control system. We enter these movements in one go.

![Stock Movement]({{ site.url }}/images/balance_sheet_stock_movement.png)

To post, change the Payment Entry Status to Posted. The Statement page is from the Cash Statement and therefore it has the same data source as your bank accounts. Since the Cash Statement by month is not very useful when reviewing assets, here they are presented in one place. The entry balance is the stock value at that time, which goes on the balance sheet; whilst the value of the Paid In or Out is carried over onto the P&L. If there is more than one entry in a period, the last balance is always used by the Trade Statement.

![Asset Statement]({{ site.url }}/images/balance_sheet_asset_statement.png)

### Fixed Assets

To record fixed assets involves double-entry. The asset is purchased in a Pay Out transaction of type TRADE (in the same way as any other purchase), and then double-entered into a Pay In transaction of the corresponding asset account. We are going to buy a machine tool and a van.

1. Enter two new Cash Codes in Indirect Costs with Standard VAT Rate - 219 Machinery, 220 Vehicles
2. Open Organisations and use the Quick Entry to add a Van Trader and a Machine Tool Merchant
3. In the second month of trading, use Payment Entry to buy a van for GBP 2K and a machine tool for GBP 1K
4. Open Asset Entry and pay in GBP 1667 into the VEHICLE cash account and pay out (write down) GBP 416.75 each year. Post the first two entries. 
5. Pay in GBP 833K into PLANT AND MACHINERY and write off GBP 208.25 each year end, posting the opening value and the first write down.

Trading Type entry:

![Buy Fixed Asset]({{ site.url }}/images/balance_sheet_fixed_asset_buy.png)

Asset Type double-entry minus the tax content (ref. Invoice Register). Switch to datasheet view to get a running total:

![Fixed Asset]({{ site.url }}/images/balance_sheet_fixed_asset.png)

### Long-term Liabilities

Like [fixed assets](#fixed-assets), long-term liabilities are also double-entry. The process is virtually identical only the cash polarity is the other way around - pay outs are pay ins and vice versa.

The very first transaction of the current account is a director loan of GBP 10K, with a further GBP 15K reserves, which represents the initial shareholding. The loan needs be registered as a long-term liability. To demonstrate the process, we take out another loan from the bank for a further GBP 10K, which they deposit into the reserve account. We need to register the money as a long-term liability with a double-entry into an asset account that yields negative capital. In [Cash Codes](#cash-codes) we enabled the Liabilities category which has negative polarity, along with a cash code for debt repayment.

Firstly, we make a trading entry that pays in the loan into the reserve account, followed by the monthly pay outs to-date including interest (which could be entered on a different cash code representing interest payments):

![Company Loan]({{ site.url }}/images/balance_sheet_company_loan.png)

Secondly, we make the corresponding double-entry with the opposite polarity, followed by the pay offs without interest, which is a cost. In this way, the company loan means the net increase in asset value is zero. On the trading side, these debt repayments would be accrued on the Company Statement, [as explained below](#accruals-and-prepayments) and therefore the loan is not free money.

FInally, to register the Director Loan liability, we post an asset transaction to the bank loan for GBP 25K, obtaining the statement below. 

![Debt Repayment]({{ site.url }}/images/balance_sheet_debt_repayment.png)

## Accounts Review

We are now in a position to review how these assets have modified the balance sheet and P&L.  [Re-generate the closed period ends]({{ site.url }}/tutorials/cash-book#period-end) and run the Trade Statement:

![Balance Sheet]({{ site.url }}/images/balance_sheet_interim.png)

Closing capital can be calculated by adding net profit for the accounting period to the opening capital. Whilst Trade Control does not use that approach, it is a useful check for correctness. The P&L shows a net profit of GBP 3965 over the first 8 months of trading. This equals the current capital in February. The year-end capital is less because there is a corporation tax liability of 19 percent on net profit for the year. If you switch on the accruals, the payment will fall due in the tax section during the following year.

Adding these assets to the [basic implementation](#basic-implementation) has reduced our capital by GBP 22.75K on the balance sheet, and corporation tax by GBP 4.3K off the P&L.

## Cash Box

To demonstrate multiple trading accounts, we have already created a cash box in the section on [Cash Accounts](#cash-accounts). There is no operational difference between your current account and this cash box. They work the same and Trade Control classifies them both as CASH on the balance sheet. In traditional accounting, cash means physical coinage in a cash box. Today, unless you are a market-stall trader, that does not make much sense, since physical cash is likely to be a tiny proportion of your available funds. Here, CASH is your working funds, and BANK is your banked reserves. 

Although the balance sheet adds cash to the current account, the Trade Statement also lists the closing balance of the Cash Box along with the other accounts (when option Bank Balances is checked). Therefore, if you do not qualify for micro-accounts, you can decide how to communicate this category when you submit your balance sheet to Companies House - from the Closing Balances of the cash accounts or the Cash Category of the balance sheet.

### Cash Box Operation

To withdraw cash from a bank, open Transfers and move money from the current account into the cash box during the first month of trading:

![Cash Withdrawal]({{ site.url }}/images/balance_sheet_cash_withdrawal.png)

Once these entries have been posted, we have GBP 100 in cash which we can take to the market for change, book in the takings of the day, buy stuff and deposit/transfer it back into the current account. 

For the tutorial, you could enter something like this:

![Cash Box]({{ site.url }}/images/balance_sheet_cash_box.png)

The Trade Statement shows the period end closing balances (after [re-generating the closed period ends]({{ site.url }}/tutorials/cash-book#period-end)):

![Closing Balances Before]({{ site.url }}/images/balance_sheet_cash_box_balance.png)

To keep cash at around GBP 500 we must periodically deposit the money back into the current account (ALT+P posts the entry):

![Cash Deposits]({{ site.url }}/images/balance_sheet_cash_transfers.png)

The closing balances have changed, but the balance sheet CASH category is unaltered.

![Closing Balances After]({{ site.url }}/images/balance_sheet_cash_box_deposited.png)

## Profit and Loss

To obtain legal compliance, we need to add depreciation, stock movement and loan payoffs to the P&L. The system, however, is principally concerned with controlling internal operations and cash, not providing the external asset value of the business for shareholders and governments. Therefore, these two perspectives are kept separate. The first section of the Trade Statement ends with a summary that expresses performance during each period. Below that, the asset types are listed.

Changes in asset value need to be added into the calculations for capital profit. These totals are not native values but [calculated Cash Codes](cash-codes#cash-totals). The basic setup pre-configures assets in the profit calculation, by adding the asset and liability categories into one total, and then including it in pre-tax profit: 

![Gross Profit]({{ site.url }}/images/balance_sheet_cash_totals.png)

It is worth noting that all these categories, codes and calculations are configurable because you construct them from the basic building blocks offered by the design.

In the summary, the investment adds income to the P&L; while the vehicle and plant purchases deduct expenditure. The asset sections counter these transactions, which is reflected in the profit:

![Profit Summary]({{ site.url }}/images/balance_sheet_profit_summary.png)

## Accruals and Prepayments

Many of the pitfalls associated with this accounting topic can be avoided very simply because accruals are fundamental to the way Trade Control works. A classic example of accruals comes in the form of rent payments. 

### Problem  

A business pays monthly rent, but at year end, they pay late, resulting in a profit and hence capital over-statement of one month's rent.  

### Solution

There are two ways to enter a payment in Trade Control - against order-generated invoices or against a miscellaneous cash code.  If you pay the rent with a miscellaneous entry, an invoice will be automatically created to maintain the integrity of the organisation's statement. You can then retrospectively move the invoiced date into the previous period. However, a better approach is to use the MIS Mode accruals system. That way your rent will appear on the Company Statement, as well as the Trade Statement with the Live Order Book option checked. You just invoice the accruals at month end. When you eventually pay the bill, you omit the Cash Code and the outstanding invoices are automatically paid off. The same process applies for pre-payments: either move the automatic invoice from a miscellaneous payment or accrue the invoice in advance.

The following tutorial demonstrates accruals, but also introduces the additional functionality in MIS Mode.

> Requires an Sql Connection in [MIS Mode]({{ site.url }}/mis).

#### Create Project

1. Open Activities from the Maintenance menu and change the default status for Office Rent from Charged to Open.
2. Open Task Explorer, select Project from the Activities page and raise a New Task.
3. Add a new organisation called **The Landlord** and set its Payment Days to zero.
4. Enter a title and change the action on date to the start-up date. The Cash Code is unspecified, so you are creating a container for a project. Edit the task.

![new task]({{ site.url}}/images/balance_sheet_new_task.png)

#### Accrue Liability

1. Click New Task to add another Project activity task entitled **Rent 2020-21** 
2. With the new sub-project selected, add another tasks with the Activity Code set to **Office Rent**. This will automatically associate the activity with the correct Cash Code. Set the Action On when rent is due from the first month of trading, with a rent of GBP 1K pcm.
3. Clone the task for each rental period to year end, changing the Action On date. 
4. Once done, future years can be easily created by cloning the sub-project.  Select the **Rent 2020-21** project and clone it, changing the title to **Rent 2021-22**.  You then push the dates forward by a year.

![Accruals]({{ site.url }}/images/balance_sheet_accruals.png)

#### Invoice and Payment

Select each overdue rent (here Jul 20 - Jan 21), copy the Action On date and click Invoice. Paste the date into the Invoice On field and accept. Task based invoices are different to those you created in Accounts Mode, since they are associated with orders.

![Accruals]({{ site.url }}/images/balance_sheet_task_invoice.png)

Open the Company Statement from the menu. It tells us that there are sufficient funds to pay off the arrears. Select one of the invoices and click payment. The Payment Entry form will present a single entry for the landlord with the total rent due. For brevity we will accept the default and late pay the whole outstanding amount in one go. Note that no Cash Code is specified, since this is taken off the invoices.

![Accrual Payments]({{ site.url }}/images/balance_sheet_accruals_payments.png)

In Accounts Mode, we are recording historical and current transactions. The MIS is about forward planning and the financial dimension is encapsulated in the Company Statement. It shows us our future position by projecting a transaction-grained company balance and enables you to edit it:

![Company Statement]({{ site.url }}/images/balance_sheet_accruals_statement.png)

Finally, since we have made a lot of retrospective changes, [rebuild the period end close downs]({{ site.url }}/tutorials/cash-book#period-end). The Trade Statement shows the rent in their correct periods, irrespective of payment amounts or dates. The additional rent is for *use of home as office* from the Services Tutorial.

![Accrued Values]({{ site.url }}/images/balance_sheet_accruals_pl.png)

By selecting Active Period Invoices and Orders, historical transactions merge into the future order book, along with the outstanding invoices of creditors and debtors. You then have a framework that you can plan around. Any change to these orders and invoices instantly effects the Company Balance, where and when it shifts into the red or opens up investment opportunities.

# Information

## Cash Statement

Asset Type cash accounts work the same as your bank account, with a projected and current balance. The key difference between trading accounts and asset accounts is that the former generates invoices connected to Tasks. Tasks model workflows and workflows drive [trading networks]({{ site.url }}/tutorials/network). But otherwise, you can use the existing means to amend, reschedule or delete them.

![Cash Statement]({{ site.url }}/images/balance_sheet_cash_statement.png)

Here we show the Plant and Machinery accounts. The current balance reflects the write-down when we [registered fixed assets](#fixed-assets).

## Tax

Corporation Tax and VAT are dynamically calculated and presented in two respective statements. Both have corresponding audit reports that itemise taxed transactions within each financial period. 

### VAT

VAT is audited separately from the balance sheet because it is paid quarterly. The [VAT Audit Report]({{ site.url }}/docs/Cash_VatAuditAccruals.pdf) lists both forward and historical transactions. To avoid VAT accruals, companies normally ensure that a quarter always falls due at the end of their financial year.

From the Invoice Register, the VAT Totals page communicates how much is due in each month and quarter. Although VAT is paid quarterly, the monthly values and payments are projected onto the balance sheet. The reason is that the balance sheet records on-going liabilities, not when payments are due. 

For the tutorial, when paying the first two quarters using Payment Entry (specifying the VAT cash code for the HMREV account), the amount of cash will be reduced by the reduction in liability, thereby maintaining balance.

![Vat Statement]({{ site.url }}/images/balance_sheet_vat_statement.png)

### Corporation Tax

The [Corporation Tax Audit]({{ site.url }}/docs/Cash_CorpTaxAuditAccruals.pdf) is merely generated to confirm that the tax has been correctly configured (in Cash Totals) and that all relevant cash codes have been included. Rates are specified in the tax page of the Administrator.

There is no corporation tax to pay by this demonstration start-up company during its first year, and therefore balance sheet tax section is zero. The Corporation Tax Statement in the Invoice Register shows amounts due adjusted by the offset days (275 in the UK). The corporation tax on the balance sheet is entered at the end of the financial year, because it is a company liability from that point on, whether or not payment is outstanding.

## Audit

To check for correctness, you only need to do two things:

1. Verify that the current cash account balances match your bank account or bitcoin wallet
2. Ensure that your unpaid sales and purchase invoices represent your current obligations. 

If these check out, all historical balance sheets will check out too. That is why no skill is needed to generate the Trade Control version of the balance sheet. However, if there are issues, two reports can direct you to the cause: 

- The [Balance Sheet Audit Report]({{ site.url }}/docs/Org_BalanceSheetAudit.pdf) on the Information menu, showing the asset value of individual debtors and creditors for each period end. 
- The Organisation Statement can be opened as a report [by financial period]({{ site.url }}/docs/Org_AssetStatementAudit.pdf) in the Invoice Register, or [by organisation]({{ site.url }}/docs/Org_Statement.pdf) from the Enquiry form.

## Modifying Capital

Apart from general re-classifications, there are two ways to modify capital: add opening balances to the Cash Accounts or non-declared assets to the balance sheet. The first is for going concerns, where the starting capital is non-zero. The second to produce Management Accounts for equity investment purposes.

### Going Concerns

From Cash Accounts, capital can be adjusted by simply adding opening balances to various accounts, such as GBP 5K Plant and Machinery. The total at the bottom should equal your opening capital, which otherwise will be zero.

![opening capital]({{ site.url }}/images/balance_sheet_opening_capital.png)

Regenerating the Trade Statement with these values will mean that current capital differs from net profit by the total shown. For the tutorial, just add GBP 1 of called up share capital, so the P&L and balance sheet will differ by only one pound.

### Intangible Assets

You can add intangible or gifted assets that do not appear on the P&L, such as Intellectual Property. Here we gift a building to the business and write 25% off every year. To do that, you just uncheck the P&L option. The first two entries would need to be posted. 

![Premises]({{ site.url }}/images/balance_sheet_premises.png)

If you check the P&L flag back on, the asset will be added to profit and depreciation deducted. This is a legal requirement on company accounts, since it effects corporation tax liability. Therefore, if using, these cash accounts should be closed prior to generating year-end returns. 

## Trade Statement

When completed, the full Trade Statement should look like the Advanced worksheet in the [sample accounts]({{ site.url }}/docs/tc_balance_sheet.xlsx). We have introduced quite a few fairly involved transactions in addition to those already written by the Services Tutorial. However, you will note that the profit figure on the P&L plus opening capital (the 1 GBP share) equals the capital value of the last period end. And yet, the capital calculation is just summating the closing balances of its cash and tax statements. That is not how capital is derived in the text books, but you can still use these values in the year end totals column to fill in your Company Tax Return and submit the Balance Sheet.

![Balance Sheet]({{ site.url }}/images/balance_sheet_full.png)

## Licence

Trade Control Documentation by Trade Control Ltd is licenced under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) 

![Creative Commons](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)
