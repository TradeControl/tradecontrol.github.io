---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Reporting Profiles
permalink: /admin/admin-manager-reporting-profiles
---

Reporting Profiles holds the durable registrations and filing settings used when Trade Control prepares statutory submissions.

The page is jurisdiction-aware. It shows only the reporting profiles provisioned for the business, so a sole trader and a company may see different profile tabs.

## Access

Open:

- **System > Admin Manager**
- in the tree, select **Tax > Reporting Profiles**

Administrator access is required to change reporting profiles. On desktop, the editor opens in the right-hand pane. On mobile, it opens as a full-screen view with a **Back** action.

## Profile tabs

Each tab represents one statutory reporting purpose, such as indirect tax, self-employment income reporting, company tax or statutory accounts.

The badge on a tab summarises its state:

- **Ready**: the profile is active, reviewed and has no blocking readiness finding.
- **Review required**: the profile exists but is not both active and reviewed.
- **Incomplete**: statutory-context validation has found a blocking problem.
- **Not configured**: no profile record is available for that reporting purpose.

Company tax and statutory accounts are separate profiles. Completing one does not deactivate or replace the other.

## Maintaining a profile

Select a profile tab and review the fields supplied for its authority, jurisdiction and reporting purpose. Only registrations explicitly required by that reporting purpose are shown; for example, a UK company-tax profile requires a UTR but does not acquire the sole-trader NINO requirement. Depending on the reporting purpose, the fields can include:

- the reporting subject and authority;
- the Tax Source used to populate the submission;
- the authority's business reference;
- statutory registrations such as a UTR or NINO; and
- controlled settings such as accounting basis or accounts type.

Sensitive identifiers are concealed by default. Use the eye button to show or hide a value while checking it. These controls are not browser password fields, so a password manager should not substitute sign-in credentials. Clearing a stored identifier and saving makes that registration inactive without erasing its audit history; the profile will then remain incomplete until a valid identifier is supplied.

Set the effective date, select **Reviewed and active** only after checking the complete profile, and then choose **Save profile**. Readiness findings remain visible when further action is required.

## Tax Hub readiness

Tax Hub checks statutory profile readiness when it loads. If configuration is incomplete, it displays the affected reporting purpose and an actionable finding. Administrators can follow the alert link directly to this editor.

Reporting Profiles contains reusable business configuration only. Filing-period selections, submission adjustments and declarations remain part of the Tax Hub submission workflow.

## Related pages

- [Admin Manager - Overview](/admin/admin-manager-overview)
- [Admin Manager - Tax Configuration](/admin/admin-manager-tax-config)
