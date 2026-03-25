---
layout: ../../layouts/Documentation.astro
title: Cash Classification Theory
permalink: /cash/cash-polarity
---

## Overview

Cash Polarity provides the conceptual foundation for Trade Control’s unified operational and financial model. It replaces the traditional separation between:

- **double‑entry bookkeeping** (direction of money), and  
- **ERP order systems** (direction of goods),

by treating all business activity as **flows with polarity**. Every flow—financial or material—is classified recursively through the Category Tree, enabling a single structure to support Accounts Mode, MIS operations, tax recurrence, and statutory reporting.

This page introduces the theory. The formal mathematical proofs demonstrating that polarity‑driven flows produce DEBK‑consistent financial statements are available at:

- [Cash Statement Proofs (DEBK Invariants)](/technical/cash-statement-proof)

## 1. Polarity as a unifying principle

Traditional systems encode money and goods separately:

- **DEBK** uses debit/credit pairs to represent financial direction.  
- **ERP** uses purchase orders, sales orders, and inventory adjustments to represent material direction.

Both systems describe **directional flows**, but they do so using different abstractions. Cash Polarity unifies these abstractions by expressing all flows on a single axis:

- **Inflow**  
- **Outflow**

This removes the need for parallel subsystems. Money, goods, assets, liabilities, tax movements, and operational transformations all follow the same classification rules.

## 2. Why polarity generalises DEBK and ERP

### Shared structure of flows

Every business event involves something moving from one party to another. Whether it is cash, goods, labour, or tax, the underlying structure is directional.

### Recursive classification

The Category Tree allows flows to be nested at any level of detail. A single polarity rule applies consistently from high‑level rollups (e.g., “Operating Costs”) down to individual cash codes.

### Abstracted duality

Debit/credit and inbound/outbound are historical encodings of polarity. Cash Polarity abstracts these into a universal model that preserves balance without duplicating logic.

### Alignment with operational reality

Operational systems (projects, BOMs, WIP, scheduling) already behave as flows. Polarity allows financial statements to be derived directly from operational behaviour without translation layers.

## 3. Implications for system design

### Unified operational and financial engine

The same polarity rules classify:

- income and expenditure,  
- goods movements and WIP,  
- asset changes,  
- liability movements,  
- VAT and Corporation Tax recurrence.

This eliminates the traditional divide between “finance” and “operations”.

### Deterministic reconciliation

Because all flows share the same structure, reconciliation becomes a matter of verifying polarity‑consistent identities. The synthetic dataset and proof suite demonstrate that:

- the balance sheet identity holds at every snapshot,  
- the annual equity bridge is mathematically consistent,  
- VAT and CT recurrence behave correctly across periods,  
- loss carry‑forward is stable and non‑negative.

### Composable subsystems

New modules—inventory, scheduling, procurement, manufacturing—can be added without new accounting structures. They simply emit flows with polarity.

### AI‑native reasoning

Because the system is expressed as flows rather than ledgers, AI agents can reason about business behaviour without needing separate schemas for money vs goods.

## 4. Worked example

### Traditional DEBK ledger

| Transaction | Debit (Cash) | Credit (Sales) |
|-------------|--------------|----------------|
| Customer pays £100 | £100 | £100 |

### ERP order

| Transaction | Inbound (Goods) | Outbound (Goods) |
|-------------|-----------------|------------------|
| Ship 10 units | –10 units | Customer receives 10 units |

### Cash Polarity entry

| Flow Type | Polarity | Value |
|-----------|----------|-------|
| Money     | Inflow   | £100  |
| Goods     | Outflow  | 10 units |

**Interpretation:**  

- The DEBK ledger balances.
- The ERP order reconciles.
- Cash Polarity expresses both in one structure: an inflow of money and an outflow of goods.

This is the essence of the unified model.

## 5. Relationship to formal proofs

Cash Polarity is not only a conceptual framework; it is mathematically verifiable. The synthetic dataset and proof suite demonstrate that polarity‑driven flows produce:

- correct balance sheet snapshots,  
- correct annual equity movements,  
- correct VAT and CT behaviour,  
- correct loss carry‑forward,  
- and stable reconciliation across profit and loss regimes.

The proofs are documented at:

- [Cash Statement Proofs (DEBK Invariants)](/technical/cash-statement-proof)
