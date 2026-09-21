---
layout: ../../layouts/Documentation.astro
title: Tax Hub Accounts
permalink: /tax/tax-hub-accounts
---

The Accounts workspace helps a company review the accounting evidence used for its statutory projection.

## Review accounts

- **Annual P&L** compares the selected financial year with the previous year and provides Cash Code Details.
- **Monthly P&L** compares the selected month with the previous period.
- **Balance Sheet** shows the selected period and identifies a year-end balance sheet with the **Year end** marker.
- **Validation** shows the equity-bridge reconciliation and its tolerance.

Use **Set final period in year** to select the final displayed accounting period before reviewing year-end figures.

## Prepared statutory packages

The Objective 3 preparation layer can create populated statutory accounts and accounts iXBRL, Corporation Tax computation and CT600 packages, and Companies House accounts packages. The present TCWeb Accounts workspace exposes the accounting and validation views; user-facing controls for opening those exact package previews are not yet part of this workspace.

Corporation Tax computation-taxonomy assets and Companies House Filing TIS validation assets remain external gates. Do not treat a prepared package as production-sendable or authority-approved.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/accounts-validation.png"
    alt="Tax Hub Accounts Validation tab showing the equity bridge reconciliation"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>
