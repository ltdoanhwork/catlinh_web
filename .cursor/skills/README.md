# Project Skills

This directory holds [Cursor Agent Skills](https://docs.cursor.com) shared with anyone working in this repository.

## Adding a skill

Each skill lives in its own subdirectory containing a `SKILL.md` file:

```
.cursor/skills/
└── my-skill/
    ├── SKILL.md          # Required - main instructions + frontmatter
    ├── reference.md      # Optional - detailed docs
    └── scripts/          # Optional - utility scripts
```

## SKILL.md format

```markdown
---
name: my-skill
description: What the skill does and when the agent should use it (third person).
---

# My Skill

Step-by-step guidance for the agent.
```

### Frontmatter requirements

| Field         | Requirements                                                   |
| ------------- | -------------------------------------------------------------- |
| `name`        | Max 64 chars, lowercase letters/numbers/hyphens only           |
| `description` | Max 1024 chars; include both WHAT it does and WHEN to apply it |

Keep `SKILL.md` under 500 lines and put detailed reference material in separate files.
