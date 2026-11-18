# AI Agent Skills & Plugins for EAB Extensions

Use [`eab-extension-creator`](./eab-extension-creator/SKILL.md) to let your AI coding agent (Antigravity, Claude Code, Cursor, GitHub Copilot, or Codex) scaffold, package, and test **EVE Asset Builder (`eab_tools.exe`)** extensions automatically.

## Installation

### Option 1: Copy the Skill Folder
Copy `ai-skills/eab-extension-creator/` into your agent's skills directory:
- **Project-local (all agents):** `.github/skills/eab-extension-creator/` or `.claude/skills/eab-extension-creator/`
- **Global (Antigravity / Gemini):** `~/.gemini/antigravity/skills/eab-extension-creator/`

### Option 2: Direct Prompt
Even without installing the skill, point your AI agent to `SKILL.md` and `examples/hello-world/`:

> *"Read `ai-skills/eab-extension-creator/SKILL.md` and `examples/hello-world/`, then create a new EAB extension called `<Name>` that `<does X>`, and package it as `<id>.eabapk`."*
