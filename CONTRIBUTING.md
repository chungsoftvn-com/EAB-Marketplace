# Contributing to EAB Marketplace

Thank you for contributing to the **EVE Asset Builder (EAB) Marketplace**! This guide explains how to package an extension and submit it to `extensions.json`.

---

## 1. Extension Package Format (`.eabapk`)

An `.eabapk` file is a standard **ZIP archive** containing your extension's files at the root (or inside a single top-level folder):

```text
my-extension.eabapk
├── manifest.json       # Required extension metadata
├── ui.html             # Required for UI extensions (apps, widgets, launchers)
├── ui.js / ui.css      # Extension frontend assets
├── icon.png / icon.svg # Optional extension icon
└── native/             # Optional native Rust DLL(s) built for EAB host
```

### Important Rules
- **Do not bundle third-party binaries** (such as `ffmpeg.exe`, `astcenc.exe`, etc.) inside your `.eabapk` or `native/` folder.
- Declare shared third-party tools in `manifest.json` under `dependencies` (e.g. `{ "astc": "^5.5" }`) so the EAB host resolves them from the shared `dependencies/` store.
- Extensions must never assume a hardcoded path or marketplace URL.

---

## 2. `manifest.json` Specification

Every extension package must include a valid `manifest.json`:

```json
{
  "id": "com.example.my-tool",
  "name": "My Tool",
  "version": "1.0.0",
  "extension_type": "app",
  "engine": "native",
  "author": "Your Name",
  "description": "Short summary of what this extension does.",
  "icon": "icon.svg",
  "permissions": [],
  "dependencies": {},
  "app_dlls": [],
  "api_version": "2.0",
  "ui": "ui.html",
  "category": "converter"
}
```

### Key Fields
- `id`: Unique reverse-domain or kebab-case identifier (e.g., `com.example.my-tool`).
- `version`: Semantic version (`MAJOR.MINOR.PATCH`, e.g., `1.0.0`).
- `extension_type`: One of `app`, `theme`, `widget`, or `launcher`.
- `engine`: `native` (Rust DLL + WebView UI) or `nodejs`.
- `api_version`: Target EAB Host API version (currently `2.0`).

---

## 3. Adding Your Extension to `extensions.json`

To list an extension in this marketplace, add an entry to the `extensions` array in [`extensions.json`](./extensions.json):

```json
{
  "id": "com.example.my-tool",
  "name": "My Tool",
  "version": "1.0.0",
  "type": "app",
  "author": "Your Name",
  "description": "Short summary of what this extension does.",
  "downloads": 0,
  "rating": 5.0,
  "icon_url": "https://raw.githubusercontent.com/<owner>/<repo>/main/icon.png",
  "package_url": "https://github.com/<owner>/<repo>/releases/download/v1.0.0/my-tool.eabapk",
  "homepage": "https://github.com/<owner>/<repo>",
  "repository": "https://github.com/<owner>/<repo>"
}
```

### Schema Reference
| Field | Required | Description |
| :--- | :--- | :--- |
| `id` | Yes | Must match `id` in `manifest.json`. |
| `name` | Yes | Display name shown in the Marketplace. |
| `version` | Yes | Semantic version string (must match the `.eabapk` manifest). |
| `type` | Yes | `app`, `theme`, `widget`, or `launcher`. |
| `author` | Yes | Author or organization name. |
| `description` | Yes | Concise 1–2 sentence description. |
| `package_url` | Yes | Direct HTTPS download URL to the `.eabapk` archive. |
| `icon_url` | No | Direct HTTPS URL to a PNG/SVG icon. |
| `homepage` | No | Project documentation or homepage URL. |
| `repository` | No | Source repository URL. |
| `downloads` | No | Initial download count (default `0`). |
| `rating` | No | Initial rating `0.0`–`5.0`. |

---

## 4. Pull Request Checklist

Before opening a Pull Request:
1. Verify `extensions.json` is valid JSON.
2. Confirm `package_url` is publicly accessible and downloads a valid `.eabapk` ZIP archive.
3. Confirm `id`, `name`, and `version` in `extensions.json` match the `manifest.json` inside the `.eabapk`.
4. Test installing and running your extension in `eab_tools.exe` (`Extensions → Install Extension...` and `Extensions → Browse Marketplace...`).
