---
layout: ../../layouts/Documentation.astro
title: Strategy 1 - Tax
permalink: /strategy/strategy-section-one-c-operations-tax
---

Trade Control models tax as a schema-native constraint, not a financial abstraction. It is embedded at the transaction level and distributed across the business via **Tax Extraction Points**—specific operational surfaces where tax is declared, withheld, or remitted[^1]. These include:

- Sales and purchases  
- Payroll and pensions  
- Net profit and retained earnings  
- Property, dividends, and capital movements

Each point carries its own polarity, timing, and jurisdictional logic. Tax is not inferred—it is declared, tagged, and aggregated through recursive traversal of the category hierarchy.

## Tax Extraction Points

Tax flows through the schema via tagged categories and codes:

- Cash Codes carry tax type metadata  
- Categories define reporting structure and traversal logic  
- Polarity determines direction (e.g. payment vs withholding)  
- Jurisdiction modifies treatment (e.g. EU vs non-EU)

Recursive functions resolve all relevant codes from user-defined roots (e.g. VAT, Net Profit), enabling real-time aggregation and reporting.

## VAT Logic

- Declared via invoice items and projects[^2]
- Jurisdiction-aware (domestic vs export)  
- Period-aligned using fiscal calendar and due date rules  
- Aggregated by tax code and region  
- Reconciled against payments to produce a running VAT balance

## Corporation Tax Logic

- Declared from net profit across trade and asset movements[^3]
- Calculated using period-specific tax rates and adjustments  
- Reconciled against payments to produce a live liability  
- Rendered as a balance sheet item with correct polarity

## Philosophical Clarity

Trade Control does not hard-code tax logic. It allows users to declare, tag, and calculate tax through schema-native structures. Tax is not a cost—it is a **redistribution signal**, passing through the business with forensic clarity. Every tax declaration is traceable to its operational origin.

## MTD Publishing Outline

Trade Control supports integration with UK government services for **Making Tax Digital (MTD)** and statutory filing. This includes:

### 1. VAT Submission to HMRC

- **Source**: Aggregated VAT declarations and payments  
- **Payload**: Period start/end, VAT due, VAT paid, balance  
- **Compliance**: Digital record alignment, audit traceability  
- **API Mapping**: HMRC VAT obligations and return endpoints

### 2. Company Accounts Submission

Split into two distinct declarations:

#### a. Profit & Loss (P&L) to HMRC

- **Source**: Net profit declarations and tax calculations  
- **Payload**: Revenue, expenses, corporation tax due, adjustments  
- **Compliance**: Period alignment, jurisdictional logic  
- **API Mapping**: HMRC Corporation Tax filing endpoints

#### b. Balance Sheet to Companies House

- **Source**: Asset, liability, and equity declarations  
- **Payload**: Fixed assets, current assets, liabilities, retained earnings  
- **Compliance**: Statutory format, polarity reconciliation  
- **API Mapping**: Companies House accounts filing endpoints

### 3. Publishing Logic

- **Trigger**: Period closure or manual submission  
- **Validation**: Schema-native checks, polarity and jurisdiction reconciliation  
- **Output**: Structured payloads derived from recursive views  
- **Audit Trail**: Every submission traceable to source declarations

Trade Control treats these submissions as external-facing declarations, built from internal schema logic. No flattening. No legacy journals. Just recursive clarity.

## Summary

Trade Control treats tax as a transaction-grained constraint, not a periodic abstraction. Every tax calculation is fast, directional, and embedded in the schema. Accounting periods are an artificial construct—useful for reporting but not required for calculation. This means the system can determine exact tax liability at the moment of transaction, enabling:

- Real-time tax visibility  
- Gestalt costing across operational surfaces  
- AI-driven optimisation of tax exposure—especially Corporation Tax—from inside the Production Layer

This is not just compliance—it’s architecture. Tax becomes a navigable surface for intelligence, not a retrospective burden.

---
[^1]: [Tax Schema](../articles/tc_tax#tax-schema)
[^2]: [Value Added Tax](../articles/tc_tax#value-added-tax)
[^3]: [Corporation Tax](../articles/tc_tax#corporation-tax)