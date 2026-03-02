---
layout: ../../layouts/Documentation.astro
title: Admin Manager - Classifications
permalink: /admin/admin-manager-classifications
---

Classifications covers two simple, foundational configuration areas:

- Invoice Settings (next document numbers)
- Subject Types (how organizations are classified)

These are shared concepts across the system and rely on [**cash polarity**](/articles/tc_cash_codes) (the direction of value flow) to distinguish sales vs purchases, and customers vs suppliers.

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-classifications-tree.png"
    alt="Admin Manager tree showing Invoice Settings and Subject Types"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Access

Open:

- **System > Admin Manager**
- In the tree: **Classifications**
  - **Invoice Settings**
  - **Subject Types**

On desktop, modules open in the right-hand pane (embedded). On mobile devices, modules open as full pages.

---

## 1) Invoice Settings (next invoice numbers)

Invoice Settings controls the **next number** used when Trade Control creates each invoice/document type.

This affects numbering only. It does not change existing invoices.

Open:

- In the tree: **Classifications > Invoice Settings**

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-invoice-settings-index.png"
    alt="Invoice Settings page showing invoice types and their next numbers"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### Change the next number (Administrator)

1. Find the document type you want to change.
2. Select the **Edit** button.
3. Enter the new Next number.
4. Select **Update**.

### When should you change next numbers?

Common reasons:

- You are migrating from another system and want numbering continuity.
- You want separate number “bands” per document type.
- You are resetting a demo/trial environment.

---

## 2) Subject Types (customers, suppliers, banks, etc.)

Subject Types are labels that classify organizations in the system, such as Customer, Supplier, Bank, or any categories that match how you run the business.

Each type has a **cash polarity** to describe whether it behaves like income-flow (typical customers) or cost/outgoing-flow (typical suppliers).

Open:

- In the tree: **Classifications > Subject Types**

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-subject-types-index.png"
    alt="Subject Types page showing subject type list and actions"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### Create a subject type (Administrator)

1. Select **New Type**.
2. Enter a name (for example: “Customer”, “Supplier”, “Bank”, “Prospect”).
3. Select the cash polarity.
4. Select **Create**.

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-subject-types-create.png"
    alt="New Subject Type page showing Type name and Polarity selection"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### Edit a subject type (Administrator)

1. Select **Edit**.
2. Update the name and/or polarity.
3. Select **Update**.

### Delete a subject type (Administrator)

You can delete a subject type only if it is not currently used by any subjects.

1. Select **Delete**.
2. Review the number of accounts/subjects using the type.
3. If deletion is allowed, select **Delete** to confirm.

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/admin-manager-subject-types-delete.png"
    alt="Delete Subject Type confirmation page showing usage count and delete action"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>
