# EAB Marketplace

Official extension marketplace repository for **EVE Asset Builder (`eab_tools.exe`)**.

This repository hosts the catalog index (`extensions.json`) and submission guidelines for EAB extensions—including **Apps**, **Themes**, **Widgets**, and **Launchers**.

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
├── extensions.json     # Marketplace catalog index read by EAB Tools
├── packages/           # Optional directory for hosted .eabapk packages
├── CONTRIBUTING.md     # Extension packaging & submission guidelines
├── LICENSE             # MIT License
└── README.md           # This file
```

---

## Publishing an Extension

Want to publish your extension to the EAB Marketplace?
Read [CONTRIBUTING.md](./CONTRIBUTING.md) for the `.eabapk` package format, `manifest.json` specification, `extensions.json` entry schema, and Pull Request checklist.
