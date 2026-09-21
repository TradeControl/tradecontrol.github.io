---
layout: ../../layouts/Documentation.astro
title: Tax Hub Administration and Troubleshooting
permalink: /tax/tax-hub-troubleshooting
---

Most Tax Hub readiness problems are caused by incomplete business configuration rather than the reporting workspace itself.

## Common checks

- Confirm the correct jurisdiction and business template in [Admin Manager Setup](/admin/admin-manager-setup).
- Confirm financial-year and VAT settings.
- Open [Reporting Profiles](/admin/admin-manager-reporting-profiles) and supply the required authority reference and registrations.
- Check that the correct Tax Source is selected.
- Resolve every blocking readiness finding.
- Select **Reviewed and active** only after checking the completed profile.
- Review period-specific tax rates and adjustments in [Tax Configuration](/admin/admin-manager-tax-config).

When a registered address exists, Tax Hub uses it for statutory identity. Otherwise, it uses the default trading address. Correct the underlying business address rather than editing a prepared payload.

## Synthetic data

Synthetic datasets are useful for demonstrations and publishable screenshots. They are not part of normal business initialization and their conspicuous test identifiers must never be copied into a live reporting profile. See [Synthetic Datasets](/admin/admin-manager-dataset).

## When figures do not reconcile

Check the accounting period, Cash Code classifications, opening balances, adjustments and underlying transactions. Rebuild affected periods where appropriate, then reopen Tax Hub and review the Payload Audit or Accounts Validation result.

