---
layout: ../../layouts/Documentation.astro
title: Admin Manager – HTML Templates
permalink: /admin/admin-manager-html-templates
---

HTML Templates is where you manage the HTML templates, embedded fragments, and images used by Trade Control to generate documents and emails.

This module is intended for **Administrators**.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-html-templates.png"
      alt="Admin Manager HTML Templates"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## What this module manages

Use HTML Templates to:

- Assign templates to a template type (for example, **Invoices** or **Orders**).
- Manage embedded `.tpl` fragments used by templates.
- Manage template images (linked resources), such as a logo.
- Parse templates to validate that generated output will render correctly before use.

## Access

Open:

- **Admin > Manager**
- Expand **Templates**
- Select the template type you want to configure (for example, **Invoice Templates**).

On desktop, the module opens in the right-hand pane. On mobile, it opens as a full page.

## System templates (Support Requests and User Registration)

Some system-generated emails are assigned under **System Templates**.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-system-templates.png"
      alt="System Templates assignments (Support Request and User Registration)"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

This page is where the application assigns templates for:

- Support request emails (raising support tickets)
- User registration/verification emails (new user registration notifications)

## Configure a template type (example: Invoices)

The workflow is the same pattern for any template type in Admin Manager:

1. Select the template type (for example **Invoice Templates**).
2. Select the subtype (for invoices, the **invoice type** dropdown).
3. Assign one or more HTML templates.
4. Assign images (if the HTML references `cid:[TAG]` images).
5. Parse templates to validate they will render correctly.

## Assign an HTML template (invoice example)

1. Select the invoice type from the dropdown at the top of the page.
2. Under **Assign a new template**, select a template file.
3. Select **Assign**.

Expected outcome:

- The template appears under **Assigned templates** for that invoice type.

## Validate templates (Parse)

Parsing identifies issues that would prevent output rendering correctly.

In **Assigned templates**:

- Select **Parse** for a single template, or
- Select **Parse all** to validate every assigned template for the selected subtype (invoice type).

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-html-templates-parse.png"
      alt="Parsing templates to validate output"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Parsing checks:

- Invalid field tags (unknown `[Tag]` tokens)
- Missing embedded template directives (for example `[Embed:Details=...]`, `[Embed:Tax=...]`)
- Missing embedded `.tpl` files
- Invalid embedded `.tpl` structure (required markers/placeholders)
- Missing required output tags required by the renderer
- Image usage vs assignment
- Assigned images missing their files

Expected outcome:

- Errors and warnings are shown in the parse report panel.
- The parse status is persisted and used by Admin Manager to indicate template health.

## Embedded templates (.tpl) and required structure

HTML templates can reference embedded fragments using directives such as:

- `[Embed:Details=invoice_template_std_details]`
- `[Embed:Tax=invoice_template_std_tax]`

These directives map to `.tpl` files in the templates folder.

Embedded `.tpl` fragments must contain:

- `<!--ITEM-->` and `<!--/ITEM-->` markers (the repeating row template).
- `[Items]` (where the rendered repeating rows are inserted).

If `[Items]` is missing, the embedded fragment exists but will not render repeating content.

## Template images (LOGO and other linked resources)

If the HTML template references an inline image, for example:

- `<img src="cid:[LOGO]" alt="logo">`

Then `LOGO` must be assigned to an image file for that specific template.

1. In **Assigned templates**, select the template name to open **Template Images**.
2. Under **Assign a new image**, choose an image file and select **Assign**.
3. If needed, edit the tag so it matches the tag referenced in the HTML (for example `LOGO`).

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-html-template-images.png"
      alt="Template Images management"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

Expected outcome:

- The image appears under **Assigned images** for that template.
- When output is generated, the image is embedded and renders in the document/email body.

## Navigation notes

- The Template Images page includes a **Back** button that returns to the correct parent configuration page.
- When working embedded inside Admin Manager, updates trigger refresh events so the left-hand tree stays in sync.

## Common errors

### Unknown field tag

Cause:

- The template contains a token that the renderer does not support.

Fix:

- Remove the token or replace it with a supported field tag.

### Missing embedded template directive

Cause:

- A required embed directive is missing from the HTML template.

Fix:

- Add the required embed directives for that template type.

### Embedded template invalid (missing `[Items]`)

Cause:

- The embedded `.tpl` file is missing the `[Items]` placeholder.

Fix:

- Add `[Items]` outside the `<!--ITEM--> ... <!--/ITEM-->` block.

### Image tag not assigned to template

Cause:

- The template references `cid:[TAG]` but no image with tag `TAG` is assigned.

Fix:

- Assign an image to the template and ensure the tag matches (case-insensitive).
