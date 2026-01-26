---
layout: ../../layouts/Documentation.astro
title: Initialisation Templates
permalink: /deployment/web-deployment-templates
---

Templates provide a pre-configured starting point for a UK business node: a Category Tree, rollups, Cash Codes, and related defaults.

Templates are optional. You can configure everything from scratch, but templates reduce setup time and provide accountant-friendly conventions from day one.

## How templates relate to the Cash Statement

The Cash Statement is driven by the Category Tree. A template is simply a fast way to install a usable Category Tree structure so the statement is meaningful immediately.

## Depth levels (UK)

Templates are grouped by **depth**:

### Basic

For first-time use and small operations.

- A small number of Categories
- Minimal rollups
- Designed to be easy to understand and maintain

### Standard

For typical small/medium businesses.

- More granular Categories
- A fuller set of rollups (totals)
- Suitable for routine decision-making and monthly reporting

### Detailed

For finance-heavy or analysis-driven use.

- More Categories and sub-structure
- More rollups and analysis lines
- Supports deeper cost/income visibility without changing underlying data

## What a template installs (high-level)

A template typically sets up:

- Categories and their order (how the statement reads)
- Total Categories (how categories roll up)
- Cash Codes mapped into Categories
- Default settings required for common statutory/UK tax groupings (where applicable)

## Current implementation (technical note)

Templates are registered by name and executed as a stored procedure.

- Registry: `App.tbTemplate` (`TemplateName`, `StoredProcedure`)
- Example: `App.proc_TemplateCompanyHMRC2021`

(You do not need to understand these details to use templates, but they explain why templates can be implemented and improved over time.)

## Suggested UK template roadmap (dev objective)

Initial out-of-the-box set (proposed):

- UK Company — Basic
- UK Company — Standard
- UK Company — Detailed
- UK Sole Trader — Basic
- UK Sole Trader — Standard
- UK Sole Trader — Detailed

## Community templates (planned)

In future, templates can be published for specific sectors (still UK), for example:

- “Grocer — Standard”
- “Construction — Detailed”

A community template should clearly state:

- intended business type and sector
- the reporting intent (what the tree is trying to show)
- any assumptions (VAT registered, payroll complexity, etc.)

## Next

If your goal is the Cash Statement, see:

- [**Cash Statement Overview**](/docs/cash-statement-overview)
- [**Cash Statement Configuration**](/docs/cash-statement-configuration)
