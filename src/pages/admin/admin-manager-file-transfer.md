---
layout: ../../layouts/Documentation.astro
title: Admin Manager – File Transfer
permalink: /admin/admin-manager-file-transfer
---

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-file-transfer.png"
      alt="Admin Manager tree showing File Transfer content types"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

The **File Transfer** module provides a simple way to manage server-side files that are also registered in the Trade Control database. It supports:

- Viewing files already registered in the database
- Synchronizing the database with the file system (**Sync**)
- Uploading new files (**Upload**)
- Downloading files
- Viewing file properties (**Details**)
- Deleting files

This module is accessed from the **Admin Manager** tree.

## Accessing File Transfer

1. Navigate to **Admin → Manager** (Configuration Manager).
2. In the tree, expand **File Transfer**.
3. Select one of the content types:
   - **Images**
   - **Documents**
   - **Templates**

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-file-transfer-type.png"
      alt="Selecting a File Transfer content type node in the tree"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

On desktop, the File Transfer list opens in the right-hand pane. On mobile, it opens as a full page.

## Viewing the file list (Index)

The Index page shows:

- The current content type selection
- Total item count
- Paging controls (**Prev / Next**)
- Actions per-file

<!--![File Transfer Index page showing paging and actions](/docs/assets/admin/admin-manager/file-transfer/index-paging-actions.png)-->

### Page Size

Use **Page Size** to control how many items are shown per page.

<!--![Changing File Transfer page size](/docs/assets/admin/admin-manager/file-transfer/index-page-size.png)-->

## Synchronizing (Sync)

**Sync** updates the database to match the current contents of the file system.

### Where Sync is available

Sync can be executed from:

- The File Transfer Index page (**Sync** button)
- The Admin Manager tree context menu (**Sync**)

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-file-transfer-sync.png"
      alt="File Transfer Sync from the tree context menu"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

After Sync completes, the file list refreshes and shows the updated results.

## Uploading files

Uploads are available when a specific content type is selected (**Images**, **Documents**, or **Templates**).

1. Select a content type (do not use **All**).
2. Click **Upload**.
3. Choose one or more files and submit.

<div style="max-width: 900px; margin: 1rem 0;">
    <img
      src="/images/admin-manager-file-transfer-upload.png"
      alt="File Transfer Upload page"
      style="width: 100%; height: auto; display: block; border-radius: 8px;"
    />
  </a>
</div>

## File actions

Each file row provides:

### Details

Use **Details** to show file properties read directly from the file system (for example: size and last modified time).

<!--![File Transfer Details page](/docs/assets/admin/admin-manager/file-transfer/details-page.png)-->

### Download

Downloads the selected file to the client.

<!--![Download button in the file list](/docs/assets/admin/admin-manager/file-transfer/index-download-button.png)-->

### Delete

Deletes the file from disk and removes its registration from the database. A confirmation screen is shown prior to deletion.

<!--![File Transfer Delete confirmation](/docs/assets/admin/admin-manager/file-transfer/delete-confirmation.png)-->

## Navigation and return behavior

When the File Transfer module is opened from the Admin Manager tree:

- Using **Back** returns you to the Admin Manager and re-selects the corresponding **File Transfer / Content Type** node.
- Paging information (page size and page number) is preserved where applicable.

<!--![Back returns to the correct File Transfer node](/docs/assets/admin/admin-manager/file-transfer/back-selects-node.png)-->

## Mobile notes

- The tree supports a mobile context menu (long-press) for node actions such as Sync/Upload.
- The File Transfer list is designed to work in a narrow layout; paging and actions remain available.

<!--![Mobile long-press context menu in the Admin Manager tree](/docs/assets/admin/admin-manager/file-transfer/mobile-long-press-context-menu.png)-->