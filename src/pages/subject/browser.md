---
layout: ../../layouts/Documentation.astro
title: Subject Browser - Overview
permalink: /subject/browser
---

Subject Browser is where you organise, browse, and maintain people, organisations, departments, and structural groupings in one place.

Unlike older contact lists, Subject Browser is built around a namespace model. A **namespace** is simply the path that shows where a Subject sits in your business structure.

A Subject can represent:

- a person
- an organisation
- a department
- a team
- a role
- a structural grouping

<div style="max-width: 1200px; margin: 1rem 0;">
    <a href="/subject/browser#related-pages" title="Related Pages — click to explore" >
      <img
        src="/images/subjects/browser-overview.png"
        alt="Subject Browser on a desktop"
        style="width: 100%; height: auto; display: block; border-radius: 8px;"
      />
  </a>
</div>

## Why this matters

Traditional systems usually force contacts into a simple tree. That means each contact belongs in only one place.

Trade Control uses a **relationship model** based on a directed acyclic graph, or **DAG**. In practical terms, that means:

- a Subject can appear in more than one namespace
- the same person or organisation can be used in different business contexts
- you are not limited to a single parent-child hierarchy
- you can model both your external trading relationships and your internal structure

For many users, DAG flexibility will be something they rarely need. Even so, it is important to understand that a Subject belongs to a relationship structure, not just a fixed tree.

## A simple way to think about namespaces

A namespace path is the location of a Subject in your structure.

For example:

- `Manufacturer.PlantA.Production`
- `Manufacturer.PlantA.Production.ToolRoom`
- `Manufacturer.PlantA.Production.Warehouse.Despatch`

This lets you model internal structure such as departments and locations.

You can also place people inside that structure:

- `Manufacturer.PlantA.Production.ToolRoom.AndySmith`
- `Manufacturer.PlantA.Production.Warehouse.Despatch.JoeJones`
- `Manufacturer.PlantA.Production.Warehouse.Despatch.AmyJohnson`

## Subject classes

Subject Browser works with three main Subject classes:

- `Structural` for grouping and organising
- `Virtual` for organisations and business entities
- `Real` for people

Together with cash polarity and Subject Type, this gives you enough flexibility to model almost any real-world scenario without needing separate systems for companies, contacts, departments, and internal roles.

## What you can do in Subject Browser

Subject Browser supports three working modes:

- `Enquiry` for read-only browsing and related enquiries
- `Namespace` for building and maintaining namespace relationships
- `Subject` for editing Subjects and managing addresses

## Desktop

On desktop, Subject Browser uses a split layout:

- left pane: tree and namespace filter
- right pane: details and actions

Select a Subject in the tree to update the details pane.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/subjects/browser-desktop-overview.png"
    alt="Subject Browser desktop view showing the tree on the left hand side and details on the right"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Mobile

On mobile, Subject Browser uses a single-column layout.

A bottom action bar gives quick access to the most important actions for the selected Subject. The details view opens as a full-page panel.

<div style="max-width: 420px; margin: 1rem 0;">
  <img
    src="/images/subjects/browser-mobile-overview.png"
    alt="Subject Browser mobile view showing the tree and bottom action bar"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Related pages

- [Getting around Subject Browser](/subject/browser-getting-around)
- [Enquiry mode](/subject/browser-enquiry)
- [Working with namespaces](/subject/browser-namespace)
- [Maintaining Subjects](/subject/browser-maintenance)
- [Managing addresses](/subject/browser-addresses)
- [Subject Browser reference](/subject/browser-reference)
