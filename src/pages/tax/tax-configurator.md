---
layout: ../../layouts/Documentation.astro
title: Tax Configurator - MTD Mapping
permalink: /tax/tax-configurator
---

Tax Configurator is where you map accounting categories and cash codes to the tax field sets used by Trade Control.

The supplied templates create a sound mapping by default. You only need to configure MTD mappings if you modify the [Category Tree](/cash/category-tree-getting-around) or build your own.

## Related technical documents

These are for implementers and advanced users. They describe the field sets and canonical mappings used by the configurator.

- [Self-Assessment mapping](/tax/self-assessment-map)
- [Company mapping](/tax/company-map)

## What Tax Configurator does

Tax Configurator lets you:

- review the selected jurisdiction, source, tag class, or tag
- add, remove, and enable mappings where the tag is mappable
- validate the selected tax source after changes
- work comfortably on desktop and mobile

## How it works

### Desktop

On desktop, Tax Configurator uses a split layout:

- left pane: tree
- right pane: details

Select a node in the tree to see the details pane update immediately.

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/tax-configurator-desktop.png"
    alt="Tax Configurator desktop view showing the tree on the left and details pane on the right"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### Mobile

On mobile, the same information is shown in a single-column layout.

A bottom action bar gives you the key actions for the selected node:

- `Details` opens the selected node in full-page mode
- `Validate` checks the selected tax source
- the back button returns you to the previously selected node

<div style="max-width: 400px; margin: 1rem 0;">
  <img
    src="/images/tax-configurator-mobile.png"
    alt="Tax Configurator mobile view showing the action bar and selected node details"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Working with the tree

The tree is organised as:

- Jurisdiction
- Tax source
- Tag class
- Tag

The selected node is always shown in the details pane.

### Tag classes

Only component tags can be mapped.

Derived and rollup tags are read-only and explain that they cannot be mapped.

### Source nodes

Source nodes can be validated. Validation shows the list of issues and warnings for the selected source.

## Working with mappings

For a mappable tag, the details pane lets you:

- choose a category mapping
- choose a cash code mapping
- enable or disable an existing mapping
- remove an existing mapping

The same selected source and tag context is preserved while you work.

## Validation

Validation is shown in the source details view.

The validation list is designed to stay readable on smaller screens. On mobile, less important columns are hidden and the message text is shortened so the list remains usable.

<div style="max-width: 900px; margin: 1rem 0;">
  <img
    src="/images/tax-configurator-validation.png"
    alt="Tax Configurator desktop view showing validation"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Common outcomes

### No selection

If nothing is selected, the details pane prompts you to choose a jurisdiction, source, tag class, or tag.

### Computed tag

If a tag is derived or a rollup, the page explains that the tag is computed and cannot be mapped.

### Validation issues

If validation finds problems, the page shows them directly under the selected source.
