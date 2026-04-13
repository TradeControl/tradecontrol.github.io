---
layout: ../../layouts/Documentation.astro
title: Sole Trader Addendum
permalink: /technical/sole-trader-addendum
---

This addendum explains why the Cash Statement Proof applies equally to sole traders, with only a change in interpretation of the tax component. No new algebra, identities, or invariants are required.

## 1. Profit model

The system calculates profit using a recursive Category Tree.  
For sole traders, the Category Tree differs from that of a company, but the mechanics of flow aggregation, polarity, recursion, and profit emergence remain identical.

Therefore, the profit identity used in the main proof holds without modification.

## 2. Business tax (unified tax-on-profit concept)

For companies, the system models Corporation Tax.  
For sole traders, the system models personal tax on business profit.

Mechanically, both are simply:

**BusinessTax = Profit × BusinessTaxRate**

The difference is the meaning (and estimation quality) of the rate:

- Company: statutory Corporation Tax rate
- Sole trader: estimated effective personal tax rate until Self Assessment is filed

This substitution does not alter any algebraic identity in the proof.

## 3. Equity / capital identity

In the main proof, the equity bridge is:

**CapitalDelta = ProfitAfterTax + CapitalMovement + OpeningPosition + OpeningAccountPosition + Variance**

For sole traders:

- “Capital” represents the owner’s equity.
- `CapitalMovement` represents the net owner/financing movement required to reconcile the annual bridge (and may include drawings and personal funding).
- `OpeningAccountPosition` is important in synthetic or migrated datasets where cash/bank opening balances exist at the start of Year 1.
- `ProfitAfterTax` uses the Business Tax defined above.

The identity remains structurally identical and continues to hold.

## 4. Cash statement reconciliation

The Cash Statement is driven by flows and polarity.  
Since sole traders use the same flow engine, the reconciliation identity is unchanged.

The main variation for sole traders is the timing of Business Tax payments (e.g., payments on account). This affects when tax appears in the Cash Statement, not how it is calculated.

## 5. Virtual balance sheet

The virtual balance sheet is derived from flows and polarity, not from legal entity type.

A sole trader’s balance sheet contains the same core components found in a company dataset (bank/cash, debtors, creditors, VAT where applicable, tax control accounts, and an owner capital account). The annual equity bridge and proofs operate on the resulting derived balance sheet snapshots.

## 6. Conclusion

The Cash Statement Proof applies to sole traders without any structural changes.  
The only substitution required is:

**Corporation Tax → Business Tax (personal tax on profit)**

All invariants, identities, and reconciliations remain valid.  
The architecture is designed to support this unification.
