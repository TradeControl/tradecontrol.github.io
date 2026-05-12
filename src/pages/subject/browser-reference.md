---
layout: ../../layouts/Documentation.astro
title: Subject Browser - Reference
permalink: /subject/browser-reference
---

This page summarises the key terms and common outcomes used in Subject Browser.

## Key terms

### Subject

A Subject is the core record used to represent:

- a person
- an organisation
- a department
- a team
- a role
- a structural grouping

### Namespace

A namespace is the path that shows where a Subject sits in the structure.

Example:

- `Manufacturer.PlantA.Production.ToolRoom`

### Namespace path

A namespace path is built from Subject Codes joined with `.`

It shows the route to a Subject in a given structure.

### DAG

DAG means **directed acyclic graph**.

You do not need to know the technical term to use Subject Browser well, but it explains one important idea:

- the same Subject can belong to more than one namespace
- Subject Browser works with relationships, not just a single fixed tree

### Subject classes

The main Subject classes are:

- `Structural`
- `Virtual`
- `Real`

### Default child

A default child is the preferred child for a parent in a specific namespace relationship.

Default belongs to the relationship, not to the Subject globally.

## Common outcomes

### No Subjects found

The current filter returned no matching root Subjects.

### No enquiry actions

The selected Subject does not support enquiry actions in the current context, or no suitable Subject is selected.

### Remove is blocked

The selected relationship or closure cannot be removed safely.

Typical reasons include:

- external namespace links
- invoices
- payments
- projects

### Delete is blocked

The selected Subject or closure cannot be deleted because validation failed.

### Address delete is blocked

The selected address is referenced by one or more projects.

## Example namespace patterns

### Internal departments

- `Manufacturer.PlantA.Production`
- `Manufacturer.PlantA.Production.Maintenance`
- `Manufacturer.PlantA.Production.Stores.PrimaryMaterials`
- `Manufacturer.PlantA.Production.Stores.Components`
- `Manufacturer.PlantA.Production.ToolRoom`
- `Manufacturer.PlantA.Production.ShopFloor`
- `Manufacturer.PlantA.Production.Warehouse.GoodsInwards`
- `Manufacturer.PlantA.Production.Warehouse.Despatch`

### Personnel within the structure

- `Manufacturer.PlantA.Production.ToolRoom.AndySmith`
- `Manufacturer.PlantA.Production.Warehouse.Despatch.JoeJones`
- `Manufacturer.PlantA.Production.Warehouse.Despatch.AmyJohnson`

## Related pages

- [Subject Browser overview](/subject/browser)
- [Getting around Subject Browser](/subject/browser-getting-around)
- [Enquiry mode](/subject/browser-enquiry)
- [Working with namespaces](/subject/browser-namespace)
- [Subject maintenance](/subject/browser-maintenance)
- [Managing addresses](/subject/browser-addresses)
