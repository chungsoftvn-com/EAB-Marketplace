# Hello World Extension Example

A minimal, working reference extension for **EVE Asset Builder (`eab_tools.exe`)**.

## Files
- `manifest.json` — Extension metadata, permissions, and UI entry point (`ui.html`).
- `ui.html` — Extension UI using Bootstrap 5 and jQuery (auto-served by the EAB host).
- `ui.css` — Theme-aware styling using EAB CSS variables (`--eab-bg`, `--eab-card-bg`, `--eab-text`, `--eab-border`).
- `ui.js` — Demonstrates `API_EAB_init()`, `API_EAB_getHostTheme()`, `API_EAB_getWorkingDir()`, `API_EAB_pickFile()`, and `API_EAB_log()`.

## How to Run / Test
1. **Install from Marketplace:** Open **Menu → Extensions → Browse Marketplace...** in `eab_tools.exe`, search for **Hello World**, and click **Install**.
2. **Or install the package directly:** Download `packages/com.chungsoftvn.hello-world.eabapk` and use **Menu → Extensions → Install Extension...** (or `eab_tools.exe install packages/com.chungsoftvn.hello-world.eabapk`).
3. **Or copy folder:** Copy this `hello-world/` folder into `<EAB_DIR>/exts/` and restart `eab_tools.exe`.
