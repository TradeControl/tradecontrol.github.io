---
layout: ../../layouts/Documentation.astro
title: Tax Hub Dashboard
permalink: /tax/tax-hub-dashboard
---

The Dashboard gives an at-a-glance view of the business type, active reporting regimes, current tax summaries and upcoming obligations.

<div style="max-width: 1400px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/dashboard-desktop.png"
    alt="Tax Hub dashboard showing reporting summaries, Payload Audit and Upcoming Obligations"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Read the dashboard

Summary cards show the current position for the regimes available to the business. **Payload Audit** compares aggregate accounting values with prepared payload totals and reports `PASS`, `WARN` or `FAIL`. Review any difference before relying on a prepared artifact.

**Upcoming Obligations** lists filing or payment obligations currently available to the workspace. It does not mean that Tax Hub can yet transmit a filing.

## Resolve a readiness warning

Tax Hub checks every reporting profile when it loads. If configuration is incomplete, the warning identifies the affected reporting purpose without exposing sensitive identifiers.

Administrators can follow **Open Reporting Profiles in Admin Manager**. Other users should ask an administrator to correct and review the profile.

<div style="max-width: 1000px; margin: 1rem 0;">
  <img
    src="/images/tax-hub/readiness-warning.png"
    alt="Tax Hub statutory reporting readiness warning with a link to Reporting Profiles"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>
