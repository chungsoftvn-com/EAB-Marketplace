---
name: eab-extension-creator
description: Scaffold, build, package (.eabapk), and publish extensions for EVE Asset Builder (eab_tools.exe). Use when the user asks to create, scaffold, or package an EAB extension, app, theme, widget, or launcher.
---

# EAB Extension Creator Skill

Use this skill whenever the user asks to create or package an extension for **EVE Asset Builder (`eab_tools.exe`)**.

---

## 1. Extension Structure

An EAB extension is a folder (or `.eabapk` ZIP archive) containing:

```text
my-extension/
├── manifest.json       # Required metadata & capabilities
├── ui.html             # Required for UI extensions (app, widget, launcher)
├── ui.js               # Extension logic (jQuery 3.7.1 + Bootstrap 5.3.3 available)
├── ui.css              # Theme-aware styles using --eab-* CSS variables
├── icon.svg / icon.png # Optional icon (or use an emoji in manifest.json "icon")
└── native/             # Optional: extension's own native Rust DLL (if engine uses DLL)
```

---

## 2. `manifest.json` Template

```json
{
  "id": "com.example.my-extension",
  "name": "My Extension",
  "version": "1.0.0",
  "extension_type": "app",
  "engine": "native",
  "author": "Your Name",
  "description": "Concise description of what the extension does.",
  "icon": "🧩",
  "ui": "ui.html",
  "permissions": ["gui.render", "fs.read"],
  "dependencies": {},
  "app_dlls": [],
  "api_version": "2.0",
  "category": "other",
  "start_with_eab": "no",
  "show_in_toolbar": true
}
```

### Field Reference
- `id`: Unique reverse-domain or kebab-case identifier (e.g., `com.example.my-tool`).
- `extension_type`: `"app"` | `"theme"` | `"widget"` | `"launcher"`.
- `engine`: `"native"` (HTML/CSS/JS UI + optional Rust DLL) or `"nodejs"`.
- `app_dlls`: `[]` for pure UI extensions, or `["native/my_ext.dll"]` for native DLL extensions.
- `dependencies`: Shared third-party tools (e.g., `{"astc": "^5.5", "ffmpeg": "^7.0"}`). **Never** bundle third-party `.exe`/`.dll` binaries inside the extension.
- `category`: `"converter"` | `"flashing"` | `"eve_custom"` | `"session"` | `"other"`.

---

## 3. Host-Injected Libraries & Bridge API (`eab-api.js`)

When `eab_tools.exe` loads `ui.html` in its sandboxed iframe, the host automatically injects:
- `eab-api.js` (exposes `window.API_EAB_*`)
- `eab-theme.css` (provides `--eab-*` CSS variables matching the active host theme)
- jQuery `3.7.1` and Bootstrap `5.3.3` (when referenced in `ui.html`, the host serves vendored offline copies)

### Common Host Bridge Calls (all async, returning `{ ok, ... }`)
- `API_EAB_init()` — Handshake with host.
- `API_EAB_getHostTheme()` — Returns `{ ok, theme: { id, name, mode } }`.
- `API_EAB_getWorkingDir()` / `API_EAB_getAssetDir()` — Resolve host directories.
- `API_EAB_pickFile(opts)` / `API_EAB_pickFiles(opts)` / `API_EAB_pickFolder(opts)` / `API_EAB_pickOutput(opts)` — Native file/folder dialogs.
- `API_EAB_readFileAsBase64({ path })` / `API_EAB_writeTextFile({ path, content })` / `API_EAB_writeTempFile({ name, content })` — File I/O.
- `API_EAB_openOutputLocation({ path })` / `API_EAB_openUrl({ url })` — Open folder in Explorer or URL in browser.
- `API_EAB_startJob({ command, args })` / `API_EAB_pollJob({ jobId })` / `API_EAB_cancelJob({ jobId })` — Run native DLL background jobs.
- `API_EAB_log(level, message)` — Write to host logs (`"info"`, `"warn"`, `"error"`).
- `API_EAB_onDrop(callback)` — Listen for drag-and-drop files from the host.

### Theme CSS Variables
Always style with fallbacks so the extension adapts to Dark, Light, and Legacy themes:
```css
background: var(--eab-bg, #1e1e1e);
color: var(--eab-text, #e5e5e5);
border-color: var(--eab-border, #3c3c3c);
/* Also: --eab-card-bg, --eab-surface, --eab-text-dim, --eab-accent, --eab-hover, --eab-input-bg */
```

---

## 4. Packaging & Testing

1. **Package into `.eabapk`** (standard ZIP archive with `manifest.json` at the root):
   ```bash
   python -c "import zipfile, pathlib; src=pathlib.Path('my-extension'); z=zipfile.ZipFile('my-extension.eabapk','w',zipfile.ZIP_DEFLATED); [z.write(p, p.relative_to(src)) for p in src.rglob('*') if p.is_file()]; z.close()"
   ```
2. **Test in EAB Tools**:
   - GUI: **Menu → Extensions → Install Extension...** and pick `my-extension.eabapk` (or **Manage Extensions...** to enable/disable/reload/uninstall).
   - CLI: `eab_tools.exe install path/to/my-extension.eabapk`
3. **Publish to Marketplace**:
   - Add an entry to `extensions.json` in `chungsoftvn-com/EAB-Marketplace` with `id`, `name`, `version`, `type`, `author`, `description`, and `package_url`.
