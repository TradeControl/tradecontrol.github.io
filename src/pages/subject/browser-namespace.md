---
layout: ../../layouts/Documentation.astro
title: Subject Browser - Namespaces
permalink: /subject/browser-namespace
---

Namespace mode is where you build and maintain structure.

Use it to organise Subjects into meaningful business relationships.

## What a namespace does

A namespace is the path that places a Subject into context.

That context may represent:

- your own internal structure
- customers and suppliers grouped by business area
- departments, teams, and locations
- people positioned inside the relevant part of the structure

## Why this is different from a normal tree

In many systems, a contact sits in one tree position only.

Trade Control uses a **directed acyclic graph**, or **DAG**. In practice, that means:

- a Subject can belong to more than one namespace
- the same Subject can be reused in different business contexts
- relationships matter more than a single fixed parent-child location

This is powerful, but it is also important to understand before restructuring data.

## Typical internal structure

You can model departments and locations such as:

- `Manufacturer.PlantA.Production`
- `Manufacturer.PlantA.Production.Maintenance`
- `Manufacturer.PlantA.Production.Stores.PrimaryMaterials`
- `Manufacturer.PlantA.Production.Stores.Components`
- `Manufacturer.PlantA.Production.ToolRoom`
- `Manufacturer.PlantA.Production.ShopFloor`
- `Manufacturer.PlantA.Production.Warehouse.GoodsInwards`
- `Manufacturer.PlantA.Production.Warehouse.Despatch`

You can also place people into that same structure:

- `Manufacturer.PlantA.Production.ToolRoom.AndySmith`
- `Manufacturer.PlantA.Production.Warehouse.Despatch.JoeJones`
- `Manufacturer.PlantA.Production.Warehouse.Despatch.AmyJohnson`

## Namespace mode actions

Depending on the selected Subject and path, Namespace mode can provide:

- `Add Structural`
- `Add Person`
- `Add Organisation`
- `Add Existing`
- `Move`
- `Default`
- `Remove`

## Add Structural, Add Person, Add Organisation

These actions create a new child under the selected namespace instance.

Use them when you want to grow the structure from the current point.

## Add Existing

`Add Existing` adds an already existing Subject to the selected namespace. It can also be carried out using CTL + [drag and drop](#drag-and-drop).

This is one of the clearest examples of the DAG model. Instead of copying a Subject, you add another relationship to it.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/subjects/browser-add-existing.png"
    alt="Namespace mode showing the Add Existing panel"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

A person, for example, can then participate in two businesses without duplication, and yet their respective activities are clearly distinguished.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/subjects/browser-add-existing-dag.png"
    alt="Example DAG configuration"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Move

`Move` reparents the selected namespace instance to a new parent.

This changes the namespace relationship for the selected path.

## Default

`Default` marks the selected child as the default child for its parent in that namespace.

Default is a property of the relationship, not of the Subject itself.

That means the same Subject can be default under one parent and not default under another.

The default is identified by a small glyph on their icon, coloured according to name class.

## Remove

`Remove` removes the selected namespace relationship.

If that relationship is the last path to a detached closure, the system may warn that the delete would affect more than one Subject.

A preview is shown before confirmation.

## Drag and drop

In Namespace mode, drag and drop can be used to change relationships.

The exact result depends on where the Subject is dropped:

- moving to a new parent changes the namespace relationship
- adding to another parent creates another namespace relationship. Press the CTL key during the drag/drop process to add rather than move.

Always review the resulting path and detail pane after the operation.

## Related pages

- [Subject Browser overview](/subject/browser)
- [Getting around Subject Browser](/subject/browser-getting-around)
- [Subject maintenance](/subject/browser-maintenance)
- [Subject Browser reference](/subject/browser-reference)
