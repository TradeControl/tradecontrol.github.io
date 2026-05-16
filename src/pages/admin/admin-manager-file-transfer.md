---
layout: ../../layouts/Documentation.astro
title: Admin Manager – File Transfer
permalink: /admin/admin-manager-file-transfer
---

<div style="max-width: 1200px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/file-transfer.png"
      alt="Admin Manager tree showing File Transfer content types"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

The **File Transfer** module manages files that exist both on disk and in the Trade Control database.

It supports:

- viewing registered files
- synchronizing the database with the file system
- uploading new files
- downloading files
- viewing file properties
- deleting files

## Access

Open:

- **System > Admin Manager**
- select **File Transfer**
- optionally select a content type in the tree:
  - **Images**
  - **Documents**
  - **Templates**

On desktop, File Transfer opens in the right-hand pane. On mobile, it opens as a full-screen view.

## Content types

You can work with:

- **All**
- **Documents**
- **Templates**
- **Images**

You can select a specific content type from the tree or switch content type inside the module.

## Viewing the file list

The list shows:

- the current content type
- total item count
- page size
- paging controls
- actions for the selected file

## Page Size

Use **Page Size** to control how many items are shown per page.

Available values are:

- 10
- 25
- 50
- 100

## Synchronizing files

Select **Sync** to update the database registration to match the current contents of the file system.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/file-transfer-sync.png"
      alt="File Transfer Sync from the tree context menu"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

After Sync completes, the list refreshes automatically.

## Uploading files

Uploads are available when a specific content type is selected.

1. Select **Images**, **Documents**, or **Templates**
2. select **Upload**
3. choose one or more files
4. submit the upload

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager/file-transfer-upload.png"
      alt="File Transfer Upload page"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
</div>

## File actions

### Details

Use **Details** to view file properties read from the file system.

### Download

Use **Download** to save the selected file locally.

### Delete

Use **Delete** to remove the file from disk and remove its database registration.

## Navigation notes

When File Transfer is opened from Admin Manager:

- the selected content type is preserved
- page size is preserved
- mobile **Back** returns to the previous Manager node