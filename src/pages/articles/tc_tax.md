---
layout: ../../layouts/Documentation.astro
title: Tax
permalink: articles/tc_tax
---
Published on 15 August 2021

Although the tax system threads itself indelibly throughout the [Trade Control schema](https://github.com/tradecontrol/sqlnode), it does not condition the design, but simply serves to [extract money](/articles/tc_assets#money) from a productive resource. Previous articles have described the business entity and trading conditions behind the design. Here I explain how, where and why the tax system attaches itself to the various financial exchanges associated with trade.

## Background

- [Theory of Production](/articles/tc_production)
- [Commercial Law](/articles/tc_commerce)
- The [tutorials](/tutorials/overview) will help

## Overview

In **Figure 1**, I present an overview of how the tax collection system relates to business structure and operations. You will note that each of the four monetary extraction points also intersect with the [commercial law](/articles/tc_commerce) that defines a relationship between the company and an external party. Contract type **C** is mirrored on the inputs and outputs, so there are only three relevant tax types: on income, profits and sales.

![tax overview](/images/tax_figure_1.svg)

The Companies Act (**A**) is an instance of [Primary Law](/articles/tc_commerce#primary-and-secondary-law), because it is the State itself that lends its overriding coercive power to the owner in exchange for a share in profits. For this reason, the initial investment is untaxed. Because the owner is the product of a [unitary projection](/articles/tc_assets#unitary-interface-projection), to avoid disputes, the legal framework must be defined in terms of a master/slave relation (represented by black/red in the figure); placing the productive resource in a state of [infinite debt](/articles/tc_profit_and_loss#debt) to the owner. The [Memorandum of Association](/articles/tc_profit_and_loss#incorporation) and shareholder documents that describe the owner, however, are examples of [Tertiary Law](/articles/tc_commerce#tertiary-law). These are private laws defining how a productive resource can be accessed. The Company becomes a kind of feudal replication of the State, in that it is subjugated by the territorial force field of a sovereign power that can never be overthrown (from garage to the stars). 

The law-making right of the Company is used to define the relations between its employees and customers. The mechanisms of [polarity inversion](/articles/tc_profit_and_loss#polarity-inversion) are caused by the fact that the company is on the master side of Tertiary Law and the slave side of the owner's territorial force-field projected through Primary Law. Because the State does not care which party is which, it can establish tax extraction points on both sides of the inversion (**A**) and on either side of the labour/output juncture (**B**/**C**).

### Tax Example

Serviced offices are big business, with some publicly listed corporations having a global presence, turning over billions. Maybe post-pandemic their services will prove less appealing, but they offer a clear example. Firstly, everyone knows what a tenancy agreement is. It is represented by contract **C** in **Figure 1**, where the Owner is the landlord, and the Customer is the tenant. Secondly, their business model has roots in [the capitalisation of land](/articles/tc_assets#agriculture) that set the stage for the [recursive complexities](/articles/tc_production#component-definition) of the [Industrial Revolution](/articles/tc_assets#industry) (IR), presenting a simple case.

#### Tribute

Tenancy agreements are clearly products of a master/slave relation between landlord (as sovereign law-giver) and tenant (as subjugated law-taker). Concentration of [wealth and power](/articles/tc_commerce#wealth-and-power) creates artificial scarcity. Therefore, the contract embodies a set of rules that the tenant must accept to obtain access to the property they need. The rules ensure that the property's interface is preserved and [monetary rights](/articles/tc_assets#money) are passed continuously from tenant to landlord. That gateway is a product of the unitary interface projection behind the [ancient cadastral](/articles/tc_assets#cadastral), which has no objective existence. It is a virtual map that must be enforced into being by a third-party. In consequence, a natural bifurcation formed at the dawn of civilisation between the enforcing agent and the beneficiaries of the unitary projection. In return for a system of laws and means of enforcement, the landowner paid tribute to the State in accordance with their means. The modern incarnation of such tribute is [corporation tax](#corporation-tax).

#### Spatial Folding

Tenancy agreements are rooted in the [Agricultural Revolution](/articles/tc_assets#agriculture) (AR). Ancient history may illuminate the RHS of **Figure 1**, but what about the rest? It is a strange fact that a farmhouse in C15th England would have had only one chimney, but by the C17th it would likely have had several[^1]. Around the same time as the capitalisation of land and the Enclosure Acts, farmers began to enclose their own space into private compartments that required these extra chimneys. By folding up space into new planes of abstraction, they discovered that they could create more space by increasing the number of [interfaces](/articles/tc_production#interfaces) it could support. The spatial folding of the pre-industrial farmhouse is replicated in the construction of a modern Serviced Office.  

Combining spatial folding with the post-IR state-backed corporate entity, the Serviced Office can scale the age-old exploitation of property to global dimensions. A precondition to scaling is therefore [incorporation](/articles/tc_profit_and_loss#incorporation), which provides the legislative framework presented in **Figure 1**. To do so with working capital, funds must be transferred across the cadastral of the [asset layer](/articles/tc_assets#asset-layer) and secured on the [balance sheet](/articles/tc_balance_sheet). Then the company needs to find a plot of land upon which to project a unitary interface, like the patio on [Darwin's Square](/articles/tc_assets#darwins-square), and it is ready to go. 

#### Scaling

The mentality behind the company's relation to its new plot will be identical to that of Odysseus upon finding land *never disturbed by foot of man*[^2], except it will be applied in multiple dimensions. Once the lawyers secure planning permission from the State for their Community Business Centre, the [Production Network](/articles/tc_production#production-network) is financed to begin the construction process. The land is wiped of Darwinian complexity by bulldozers to create a smooth, abstract surface upon which to build. Then space is folded up to inflate the interfaces available for unitary projection from one (AR) to many (IR). I have described the structures and process behind the construction of the building, its components, systems and connectivity, in my [Theory of Production](/articles/tc_production#workflow).  

Production necessitates a hierarchy of [interfaces](/articles/tc_production#interfaces), manifest in the components that engineer [the product](/articles/tc_production#assemblage-definition), or in a proliferation of productive units across a [supply-chain](/articles/tc_production#consumer-networks). Because the output of a Serviced Office is fully embodied in the rights issued to use its private space, no production is required to supply a User Interface to the tenants, leading to [VAT exemption](#taxing-output). Instead, it proliferates a [namespace of services](/articles/tc_production#namespaces) from the spatial folding:

```
Office1.FirstFloor.OpenPlan.Desk1
Office1.FirstFloor.OpenPlan.Desk2...
Office1.FirstFloor.Office1....
Office1.SecondFloor.Office1
Office1.SecondFloor.Office2...
Office1.ThirdFloor.ExecutiveSuite1
Office1.ThirdFloor.ExecutiveSuite2...
Office2...
```

Each namespace is assigned a gateway contract (Type **C**). Only when customers sign up to the terms on the slave side of the contract will they be given the keys.

Because a company is also a fiefdom, owners can make up the by-laws of public access to their private resources. Lawyers apply their skill in contract construction to ensure that rights and obligations preserve the master/slave relation and integrity of the property. A clever lawyer embeds contracts inside contracts, so over time the tenant slips down those snakes into ever increasing rents and service charges. It will be difficult to resist. Once corporations reach a certain scale, there is no legal redress for tenants to resolve disputes, since commercial cases are decided by [who runs out of financial steam](/articles/tc_commerce#tertiary-law-execution). Should you request assistance directly from the State, you will be told that the contracts are business-to-business arrangements and nothing to do with them. Which, returning to **Figure 1**, is untrue since they enforce the framework in which they are the principal beneficiary. They collect their taxes by attaching to exchanges over a master/slave divide, leaving the slave-side exposed. 

#### Taxing Output

The outputs of the Serviced Office are the interfaces presented by their buildings, where the licence (**C**) is embodied in the tenancy agreement. Outputs are subject to a [Value Added Tax rate](#value-added-tax) determined by the goods or services sold. The only exception is the exemptions. Commercial letting of property is VAT exempt because this pre-industrial form of trade is not connected to any supply chain where production adds value. Yet these businesses are still connected to the [Production Network](/articles/tc_production#production-network) in the provision of service. Direct, indirect and overhead costs will incur VAT. Tax exemption from their primary service means that the VAT accumulated in the Production Network must be absorbed by the business, not the taxman. 

However, because this exemption can be waived, the Serviced Office may replace rent with a vatable ‘standing charge’, enabling the corporation to claim back the VAT from the Production Network even though there is no value add on inputs. These corporations have been permitted to waiver their exemption to relieve them of the tax burden imposed by their purchases. The taxman gains from the waiver because the rent is then subject to VAT, which is, of course, now absorbed by the tenant.

## Tax Schema

Tax obligation presents several challenges to the schema design. In particular,

1. Because VAT is included in the payment system, the company bank balance is not a true reflection of available funds.
2. Although income tax is a percentage of payroll, the ratio is unknown because the State indirectly taxes employees, not the employer. 
3. Corporation tax is calculated over all transactions in a financial year, making the future cash position inaccessible.

My schema design resolves the VAT and Corporation Tax challenge. Income tax, however, is more difficult, but fortunately less critical to resolve. Here I present the tax model before delving into these three taxes in more detail.

### Types

When defining tax types it is necessary to specify when they are to be paid and how frequently, then connect them to the [exchange model](/articles/tc_production#exchange), presented in **Figure 2**. 

![tax schema](/images/tax_schema.png)

The [Cash.tbTaxType](https://github.com/TradeControl/sqlnode/blob/master/src/tcNodeDb4/Cash/Tables/tbTaxType.sql) table assigns a month number and recurrence code (yearly, quarterly etc.) to the tax type, with a CashCode for payment to the taxman using the AccountCode.  The App.tbTaxCode table lists one or more tax codes for each type (such as T1 Standard VAT) with a tax rate. The TaxCode is defaulted across the application schemas ([Project](https://github.com/tradecontrol/sqlnode/blob/master/src/tcNodeDb4/Security/Project.sql), [Subject](https://github.com/tradecontrol/sqlnode/blob/master/src/tcNodeDb4/Security/Subject.sql), [Cash](https://github.com/tradecontrol/sqlnode/blob/master/src/tcNodeDb4/Security/Cash.sql)), but ultimately specifies the actual tax rate in the Invoice schema from which VAT and Corporation Tax are calculated.

### Classification

Next, the tax algorithms need to know what transactions apply to the relevant type. For this, I can use the same technique for classifying and processing any other set of transactions. A [hierarchy of cash categories](/tutorials/cash-codes#net-profit) is assigned to the VatCategoryCode and NetProfitCode fields in [App.tbOptions](https://github.com/tradecontrol/sqlnode/blob/master/src/tcNodeDb4/App/Tables/tbOptions.sql). Applying the ```UNION ALL``` CTE statement, I recurse over the hierarchy and obtain every CashCode for the tax type:

- [Corporation Tax Cash Codes](https://github.com/tradecontrol/sqlnode/blob/master/src/tcNodeDb4/App/Views/vwCorpTaxCashCodes.sql)
- [VAT Cash Codes](https://github.com/tradecontrol/sqlnode/blob/master/src/tcNodeDb4/App/Views/vwVatTaxCashCodes.sql)

I then call the table-valued function [Cash.fnTaxTypeDueDates(@TaxTypeCode)](https://github.com/tradecontrol/sqlnode/blob/master/src/tcNodeDb/Cash/Functions/fnTaxTypeDueDates.sql) to return the payment due dates for the type based on the MonthNumber and RecurrenceCode. This process will take only a few a milliseconds. I can therefore apply [Cash Polarity](/articles/tc_production#cash-polarity) to the dataset to re-calculate these taxes on a transaction-grained basis.

## Value Added Tax

Although any business can register to collect this tax, companies with turnover above a certain threshold are legal obliged to do so, [unless exempt](#taxing-output). 
VAT is how government levies money on the increase in the value of outputs from the application of production to its inputs. For example, I buy bags of plastic granules, inject them into a moulding machine and sell the components at a much higher price than the material cost. To collect the tax, I apply the applicable rate to the goods or service when invoicing the customer. Once a quarter, I send the tax collected minus tax paid to the government on a vat return. 

### Taxing Supply-Chains

A supply chain is an instance of the [Consumption Network](/articles/tc_production#consumer-networks). Inputs from a supplier are consumed by production and passed onto the customer with a more [abstract interface](/articles/tc_production#components). The suppliers connect to form a chain, terminating at the [User Interface](/articles/tc_production#interfaces), traditionally processed by Retail. 

Here is an example VAT trail over a supply chain levied on a 20 percent tax rate. For simplicity, I assume the first production has zero cost. In a real life scenario, you would have to trace the supply chain back to fossil fuel extraction. 

| Supplier | Sector | Purchase | Vat | Sales | Vat | Vat Due | Tax Balance |
| - | - | - | - | - | - | - | - |
| Plastic Supplier | Primary | 0 | 0 | 1000 | 200 | 200 | 200 |
| Injection Moulding | Secondary | 1000 | 200 | 5000 | 1000 | 800 | 1000 |
| Assembly | Secondary | 5000 | 1000 | 8000 | 1600 | 600 | 1600 |
| Retail | Tertiary | 8000 | 1600 | 12000 | 2400 | 800 | 2400 |

Users are charged VAT, but they do not collect it. The retail company collects the tax from the end-user at the point of sale, recorded by an invoice or a receipt when coinciding with payment. From the table, we see that they send GBP 800 to HMRC, even though they charged the user GBP 2400. If we add the VAT due to the balance of tax already collected over the supply chain, we end up with the same amount collected from the user at the point of sale.

To understand the consequences of this fact, I refer you to my description of the [production process](/articles/tc_production#production-process). Here I describe the two dimensions of [workflow](/articles/tc_production#workflow): spatial and temporal. The first maps the abstract structure of the thing produced, the second maps the processes required to produce it. In my description, we see these vast rivers of production that converge upon the User Interface of the finished product. As we work through time, the tax balance shown in the above table will be ceaselessly accumulating. In consequence, we experience the following:

- Company bank balances inside the temporal workflow do not reflect the reality of their owners.
- Every exchange inside the workflow is associated with a tax collection transaction.
- Each tax collection by a supplier is countered by a reclaim from the customer.
- The actual tax available at any point in the chain is zero because it will always be claimed back.

Returning to **Figure 1**, it is the slave-side of the contractual exchange that pays the tax. This is passed on down the network until the final balance is fulfilled by the unregistered end-user, who pays it all.

### Vat Registration

Clearly, the easiest fix would be to exempt vat registered companies from tax charges on their goods and services. That would be straight forward because each VAT registered company is associated with a unique and verifiable VAT number. Returning to the example, the VAT balance would be zero until the Retail company charged the user GBP 2400 tax on the goods. One transaction then replaces all the transactions across the supply-chain - a transaction that had to be enacted anyway.

Why not apply this simple solution? Indeed, why come up with this bureaucracy in the first place? At a guess, I think it is to do with the nature of money. Previously, I have redefined [money as an allocation of rights](/articles/tc_assets#money). If the tax is gathered over the temporal workflow, the government can accumulate and apply its monetary rights from cash flow way before retail makes the final exchange. It will therefore be up to the system designer to find a technological solution instead.

### Implementation

In this light, the objective of my implementation is to:

1. Annul the VAT accounting burden by calculating the tax at transaction-grained speeds 
2. Restore the true bank balance 

To calculate VAT due in real time, I derive a VAT Statement from the following code, which can re-build each time from the genesis transaction:

``` sql
WITH vat_dates AS
(
	SELECT PayOn, PayFrom, PayTo FROM Cash.fnTaxTypeDueDates(1)
), vatPeriod AS
(
	SELECT StartOn, 
		(SELECT PayTo FROM vat_dates WHERE StartOn >= PayFrom AND StartOn < PayTo) AS VatStartOn, 
		VatAdjustment
	FROM App.tbYearPeriod 
), vat_codes AS
(
	SELECT CashCode
	FROM  Cash.tbTaxType
	WHERE (TaxTypeCode = 1)
)
, vat_results AS
(
	SELECT VatStartOn AS StartOn, SUM(VatDue) AS VatDue
	FROM Cash.vwTaxVatSummary vatCodeDue JOIN vatPeriod ON vatCodeDue.StartOn = vatPeriod.StartOn
	GROUP BY VatStartOn
), vat_adjustments AS
(
	SELECT VatStartOn AS StartOn, SUM(VatAdjustment) AS VatAdjustment
	FROM vatPeriod
	GROUP BY VatStartOn
), vat_unordered AS
(
	SELECT vat_dates.PayOn AS StartOn, VatDue - a.VatAdjustment AS VatDue, 0 As VatPaid		
	FROM vat_results r JOIN vat_adjustments a ON r.StartOn = a.StartOn
		JOIN vat_dates ON r.StartOn = vat_dates.PayTo
		UNION
	SELECT Cash.tbPayment.PaidOn AS StartOn, 0 As VatDue, ( Cash.tbPayment.PaidOutValue * -1) + Cash.tbPayment.PaidInValue AS VatPaid
	FROM Cash.tbPayment 
		JOIN vat_codes ON Cash.tbPayment.CashCode = vat_codes.CashCode	
), vat_ordered AS
(
	SELECT ROW_NUMBER() OVER (ORDER BY StartOn, VatDue) AS RowNumber,
		StartOn, VatDue, VatPaid
	FROM vat_unordered
), vat_statement AS
(
	SELECT RowNumber, StartOn, VatDue, VatPaid,
		SUM(VatDue+VatPaid) OVER (ORDER BY RowNumber ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS Balance
	FROM vat_ordered
)
SELECT RowNumber, StartOn, CAST(VatDue as float) VatDue, CAST(VatPaid as float) VatPaid, CAST(Balance as decimal(18,5)) Balance
FROM vat_statement
WHERE StartOn >= (SELECT MIN(StartOn) FROM App.tbYearPeriod p JOIN App.tbYear y ON p.YearNumber = y.YearNumber  WHERE y.CashStatusCode < 3);
```

To obtain a true bank balance, I could assign a Tax Code to each transaction in the bank statement and extract the VAT content; but that would only work for the simple case. Many customers pay off invoices at month end, sometimes even every quarter, and these invoices can contain many different classifications of cost and tax. My solution is to forward-project the current bank balance from the order book, slotting in the VAT due from the above code, and accruing future VAT liabilities on sales and purchases. Here are the accruals:

[Cash.vwTaxVatAccruals](https://github.com/tradecontrol/sqlnode/blob/master/src/tcNodeDb4/Cash/Views/vwTaxVatAccruals.sql)

I then integrate the results into the [Company Statement](https://github.com/tradecontrol/sqlnode/blob/master/src/tcNodeDb4/Cash/Views/vwStatement.sql):

``` sql
WITH vat_dates AS
(
	SELECT PayOn, PayFrom, PayTo FROM Cash.fnTaxTypeDueDates(1)
), vat_accrual_entries AS
(
	SELECT StartOn, SUM(VatDue) AS TaxDue 
	FROM Cash.vwTaxVatAccruals vat_audit
	WHERE vat_audit.VatDue <> 0
	GROUP BY StartOn
), vat_accrual_candidates AS
(
	SELECT (SELECT PayOn FROM vat_dates WHERE vat_accrual_entries.StartOn >= PayFrom AND vat_accrual_entries.StartOn < PayTo) AS TransactOn, TaxDue			
	FROM vat_accrual_entries 
), vat_accrual_totals AS
(
	SELECT TransactOn, SUM(TaxDue) AS TaxDue
	FROM vat_accrual_candidates
	GROUP BY TransactOn
)
SELECT vat_taxcode.AccountCode, vat_taxcode.CashCode EntryDescription, TransactOn, 5 AS CashEntryTypeCode, 
		(SELECT CAST(Message AS NVARCHAR) FROM App.tbText WHERE TextId = 1215) ReferenceCode,
		CASE WHEN TaxDue < 0 THEN ABS(TaxDue) ELSE 0 END AS PayIn,
		CASE WHEN TaxDue >= 0 THEN TaxDue ELSE 0 END AS PayOut
FROM vat_accrual_totals
	CROSS JOIN vat_taxcode;
	
```

## Income Tax

[Extraction point](#overview) **B** in **Figure 1** marks the gateway of [tertiary law](/articles/tc_commerce#tertiary-law-defined) through which all employees must pass to earn their right to consume. In exchange for their labour, they receive an agreed sum in accordance with the terms of the contract. The government does not tax the corporation's payroll. Instead, it taxes the slave side of the relation, such that income tax is taken off the employee's wages. The complexity of coding income tax is thereby increased dramatically. 

### Taxing Employees

The reason for taxing the employee rather than the employer is so that citizens can be individually manipulated by the State. Referring to **Figure 2**, for each active employment contract we input the agreed income into the black box. The Tax Calculator applies the various rates to the employee’s tax code, outputting the amount of NI and income tax for each employee.  Deducting the tax from the agreed income gives the wages due, which the employer transfers into the employee's bank account. Once all employees are paid, the aggregated tax bill is transferred to HMRC.

![income tax](/images/tax_figure_2.svg)

Note that it is the employer who both calculates and pays the tax, not the employee. The employees just receive the amount they can spend on themselves. From **Figure 2**, the aggregated income of all the employment contracts is **X**, which is the total cost to the business (plus employers NI). The total employee wage is **Y**. The tax percentage on payroll is therefore **Z = (X-Y)/X**. Although **ZX** gives **Y**, the percentage **Z** is unknown in advance. Each time income **X** is injected into the black box, output **Y** will be derived from the specific circumstances of every employee at the time, thereby yielding a fluctuating tax rate on payroll.

### Taxing Employers

The State strategy for taxing employees is the reason why income tax is not automatically calculated in the [Company Statement](https://github.com/tradecontrol/sqlnode/blob/master/src/tcNodeDb4/Cash/Views/vwStatement.sql), as it is with VAT and Corporation Tax. To do so, I would have to re-code that black box in **Figure 2** and constantly update the parameters in accordance with changes in tax rates and laws. A task way beyond the call of duty. If the State were not seeking to manipulate its citizens through tax incentives, income tax could be transferred to the master side of the employment contract. Employee wages **Y** would then equal the income **X** on their contract. The employer applies rate **Z** based on a simple lookup table that could be easily encoded into the schema design. **Figure 3** shows how this would work. HMRC just need to clock total earnings of the employee rather than tax for linking employment contracts to NI contributions. 

![payroll tax](/images/tax_figure_3.svg)

### Implementation

The way to account for forward payroll commitments is to accrue total payments (**X**) in a [Project](https://github.com/TradeControl/sqlnode/blob/master/src/tcNodeDb4/Project/Tables/tbProject.sql), associated with another task to cover employer NI contributions. These values are stored in the [Project schema](https://github.com/tradecontrol/sqlnode/blob/master/src/tcNodeDb4/Security/Project.sql) and paid off like any other expense. It is not ideal, for the reasons explained, but because the burden of tax is on the employee, the only variable is the employers NI. If you modify the invoice to the amount calculated by your PAYE software, the invoice and order amounts will be synchronised.

## Corporation Tax

[Extraction point](#overview) **A** in **Figure 1** is the locale of the [polarity inversion](/articles/tc_balance_sheet#polarity-inversion), where the more a company earns, the more it owes to the owner. Because the master/slave relation is enforced by the State and there is wealth extraction, in exchange for its coercive framework, the State levies tax on profit. The tax therefore reduces the possible dividend payment available to owners.

### Capital Profits

I have already explained the corporation tax calculation in previous articles because it is a levy on increases in capital, stated on the [balance sheet](/articles/tc_balance_sheet#capital). Traditional [accounting systems](/articles/tc_profit_and_loss#chartered-accounting) have developed around the owner's need to farm [production](/articles/tc_production#production). Capital is a product of the owner's rights, where company law defines rights to production; and profit, the increase in capital over an accounting period, defines their rights to consume, conforming to my [definition of money](/articles/tc_assets#money). The first is the productive capability of the business, the second is its capacity for [wealth extraction](/articles/tc_profit_and_loss#capital-extraction).  Together they provide the cornerstone of [industrial capitalism](/articles/tc_industrial_capitalism) and the formation of stock markets. But since wealth extraction is taxed, it is also why the fiefdoms of [financial capitalism](/articles/tc_financial_capitalism) often operate as non-tax paying corporations. By spending profits before they fall due and aggressively writing off assets, private corporations can retain their wealth and get stoked for public floatation. The only way round that is to tax turnover instead, like taxing the income of employees, transforming the owner sovereignty that underpins capital into a vassal of the State.

### Implementation

I had two integrated objectives when coding for corporation tax:

1. Nullify the accounting year by instantly calculating the tax 
2. Integrate future taxes into a transaction-grained forward-looking balance sheet

The advantage of meeting these objectives is tax integration into the price discovery process and job scheduling. Traditional cost accounting excludes tax because it is concealed behind its asset recording surface. My approach, however, considers tax implementations when planning and evaluating workflow. This is explained, with references to the code, in the article on [Cost Accounting](/articles/tc_industrial_capitalism#cost-accounting). Originally, my design in 2002 was motivated by a wish to include tax as a constraint in the finite scheduling algorithms applied to production. I lost access to the manpower required for such an endeavour, but it is easy to see how that would work. Because the recording surface used to calculate capital is connected to production, I could ceaselessly re-schedule production to minimise the company tax burden. Users can already do this manually by modifying the entry transaction dates on their [Company Statement](/tutorials/manufacturing#company-statement). In so doing, they would also be sealing off all fiscal output through the [Asset Layer](/articles/tc_assets#capital-creation).

## Licence

![Creative Commons](https://i.creativecommons.org/l/by-nd/4.0/88x31.png) 

Licenced by Ian Monnox under a [Creative Commons Attribution-NoDerivatives 4.0 International License](http://creativecommons.org/licenses/by-nd/4.0/) 

## References

[^1]: Description of England. Rev. Harrison 1578 
[^2]: The Odyssey book 9. Homer C7 BC
