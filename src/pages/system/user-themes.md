---
layout: ../../layouts/Documentation.astro
title: Theme Selection
permalink: /system/user-themes
---

## User Themes

Users can personalise the interface colour scheme. There are several in-built themes to choose from:

- Blue
- Dark
- Green
- Orange (Default)
- Pink
- Red

### Instructions

1. Click your username at the top right to open your profile.
2. Choose a theme from the **Theme** dropdown.
3. Click **Save** — your choice is stored and applied across all devices.

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/system/user-profile-themes.png"
    alt="User Profile - theme selection"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Samples

### Blue Theme

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/system/user-profile-blue-theme.png"
    alt="User Profile - blue theme"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

### Pink Theme

<div style="max-width: 1200px; margin: 1rem 0;">
  <img
    src="/images/system/user-profile-pink-theme.png"
    alt="User Profile - blue theme"
    style="width: 100%; height: auto; display: block; border-radius: 8px;"
  />
</div>

## Admin Themes

Administrators can add or modify themes.

1. Create a new CSS file in `/wwwroot/css/themes/` by copying an existing theme.
2. Ask AI to provide a theme e.g. coral
3. Add a record to `Usr.tbTheme` using the standard SQL insert format:

   ```sql
   INSERT INTO Usr.tbTheme (ThemeCode, ThemeName, CssFile)
   VALUES ('CORAL', 'Coral', 'theme-coral.css');
   ```
