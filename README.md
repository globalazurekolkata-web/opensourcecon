# OpenSourceCon Kolkata 2026

The redesigned official website for **OpenSourceCon Kolkata 2026** — Bengal's premier open-source event. Built using **React + Vite + Tailwind CSS + Lucide React**.

## 🚀 Quick Start

Ensure you have [Node.js](https://nodejs.org) installed.

```bash
# 1. Clone the repository
git clone https://github.com/Souvik-kundu-off/opensource-convention.git
cd opensource-convention

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Open http://localhost:5173 in your browser
```

## 📁 Folder Structure

```text
opensource-convention/
├── src/
│   ├── main.jsx                  # Entry point
│   ├── App.jsx                   # Layout & sections
│   ├── index.css                 # Custom CSS & utilities
│   ├── components/               # React components (sections & UI blocks)
│   ├── data/                     # Extracted static data configurations
│   └── utils/                    # Shared helper functions
├── public/                       # Static assets
├── tailwind.config.js            # Custom Tailwind theme tokens
└── package.json                  # Dependencies & scripts
```

## 🎨 Design System

We use tailored tokens for visual consistency:
- **Brand Green**: `#52D237` (`bg-brand-green`, `text-brand-green`)
- **Dark Background**: `#080C16` (used in dark mode)
- **Typography**: Mona Sans (Body & Headings), JetBrains Mono (Mono elements)

### Custom CSS Classes (`index.css`)
- `.section-tag` — Pills marking section labels (e.g. `SCHEDULE`, `TOPICS`).
- `.card` — Base styling for container blocks.
- `.btn-primary` — Styled green call-to-action buttons.
- `.btn-secondary` — Transparent/light border call-to-action buttons.

## 🌿 Contribution Guidelines

To ensure smooth collaboration, please follow the team's Git workflow:

### Branch Naming Convention
Branches must be named in the format:
```text
{developer-name}-{component-or-feature}
```
*Examples*: `aritra-hero`, `souvik-navbar`, `sreya-footer`, `aritra-phase1-cleanup`.

### Workflow Steps
1. Make sure you are on the latest code:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Create and switch to your feature branch:
   ```bash
   git checkout -b {your-name}-{feature}
   ```
3. Commit your changes using conventional commit messages:
   - `feat(about): add new stats counter`
   - `fix(navbar): fix menu collapse on click`
   - `refactor(data): move topics to data module`
4. Push and create a Pull Request:
   ```bash
   git push origin {your-name}-{feature}
   ```
5. Request review from teammates before merging.
