# EAB Marketplace

Official extension marketplace repository for **EVE Asset Builder (`eab_tools.exe`)**.

This repository hosts the catalog index (`extensions.json`), a working **Hello World** reference extension, **AI agent skills/plugins** for building extensions with AI assistants, and submission guidelines for EAB extensions—including **Apps**, **Themes**, **Widgets**, and **Launchers**.

---

## Using This Marketplace in EAB Tools

This repository is configured as the **default remote marketplace** in EAB Tools:

```
https://github.com/chungsoftvn-com/EAB-Marketplace
```

### Desktop App (GUI)
1. Open **EVE Asset Builder** (`eab_tools.exe --gui`).
2. Go to **Menu → Extensions → Browse Marketplace...** (or **Quick Settings → Browse Marketplace**).
3. Use the **Markets** card to enable/disable or check remote and local folder markets.
4. Search or filter by type (**Apps**, **Themes**, **Launchers**, **Widgets**) and click **Install**.
5. To manage installed extensions (enable, disable, update, reload, uninstall, or install `.eabapk` files), open **Menu → Extensions → Manage Extensions...**.

### Command Line (CLI)
```cmd
:: Search the marketplace
eab_tools.exe search <query> [--type app|theme|launcher|widget]

:: Install an extension package (.eabapk file or URL)
eab_tools.exe install <path-or-url>

:: List, enable, disable, or uninstall extensions
eab_tools.exe list
eab_tools.exe enable <extension_id>
eab_tools.exe disable <extension_id>
eab_tools.exe uninstall <extension_id>
```

---

## Available Extensions

| Name | ID | Type | Version | Package |
| :--- | :--- | :--- | :--- | :--- |
| **Hello World** | `com.chungsoftvn.hello-world` | `app` | `1.0.0` | [Source](./extensions/hello-world/) · [hello-world.eabapk](./packages/com.chungsoftvn.hello-world.eabapk) |

---

## Hello World Extension

New to building EAB extensions? Start with [`extensions/hello-world/`](./extensions/hello-world/):
- Demonstrates `manifest.json`, Bootstrap 5 + jQuery UI, `--eab-*` theme variables, and `API_EAB_*` host bridge calls (`API_EAB_init`, `API_EAB_getHostTheme`, `API_EAB_getWorkingDir`, `API_EAB_pickFile`, `API_EAB_log`).
- Pre-packaged as [`packages/com.chungsoftvn.hello-world.eabapk`](./packages/com.chungsoftvn.hello-world.eabapk) and listed in [`extensions.json`](./extensions.json) so you can install it directly from the Marketplace.

---

## AI Agent Skills & Plugins

Build a new EAB extension with an AI coding assistant (Antigravity, Claude Code, Cursor, GitHub Copilot, or Codex) using [`ai-skills/eab-extension-creator/`](./ai-skills/eab-extension-creator/):
- [`SKILL.md`](./ai-skills/eab-extension-creator/SKILL.md) — Complete specification for `manifest.json`, `API_EAB_*` host bridge, theme CSS variables, `.eabapk` packaging, and testing.
- [`plugin.json`](./ai-skills/eab-extension-creator/plugin.json) — Plugin manifest for AI agent plugin loaders.
- [`templates/`](./ai-skills/eab-extension-creator/templates/) — Minimal starter `manifest.json`, `ui.html`, `ui.css`, and `ui.js`.

See [`ai-skills/README.md`](./ai-skills/README.md) for installation instructions and example prompts.

---

## Extension Types

| Type | Description |
| :--- | :--- |
| `app` | Interactive tools and converters (e.g., asset converters, flashers, analyzers). |
| `theme` | Custom UI themes and color palettes for the EAB host shell and extensions. |
| `widget` | Lightweight floating or embeddable utilities. |
| `launcher` | Custom workspace launchers for organizing and starting tools. |

---

## Repository Structure

```text
EAB-Marketplace/
├── ai-skills/
│   ├── README.md
│   └── eab-extension-creator/  # AI agent skill, plugin.json, and starter templates
├── extensions/
│   └── hello-world/            # Hello World extension source
├── packages/
│   └── com.chungsoftvn.hello-world.eabapk
├── extensions.json             # Marketplace catalog index read by EAB Tools
├── CONTRIBUTING.md             # Extension packaging & submission guidelines
├── LICENSE                     # MIT License
└── README.md                   # This file
```

---

## Publishing an Extension

Want to publish your extension to the EAB Marketplace?
Read [CONTRIBUTING.md](./CONTRIBUTING.md) for the `.eabapk` package format, `manifest.json` specification, `extensions.json` entry schema, and Pull Request checklist.
