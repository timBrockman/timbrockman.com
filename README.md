# timbrockman.com

**Full-Stack Engineer | Generative AI for Public Sector | Deloitte**

> A personal portfolio and technical platform built to showcase systems thinking, practical Generative AI work, and secure platform delivery.

[![Live Site](https://img.shields.io/badge/Live-timbrockman.com-00ff00?style=flat-square)](https://timbrockman.com)
[![Plan](https://img.shields.io/badge/Refactor-Plan.md-00cc00?style=flat-square)](https://github.com/timBrockman/timbrockman.com/blob/master/plan.md)
[![11ty](https://img.shields.io/badge/Static-11ty-00ff00?style=flat-square)](https://www.11ty.dev/)

---

## About This Project

This repository contains the source code for [timbrockman.com](https://timbrockman.com) — my personal portfolio and professional platform.

The site is currently undergoing a significant refactor (see [plan.md](https://github.com/timBrockman/timbrockman.com/blob/master/plan.md)) to better reflect my current work at **Deloitte** building **TalentForge**, a Generative AI application (Claude on AWS Bedrock) that converts documentation into competency models for public sector clients.

The goal is to move from a static digital resume into a **scannable, credible, and distinctive** professional platform that supports opportunities in:

- Generative AI systems for government
- ServiceNow HRSD platform work
- Secure, compliant full-stack systems (Kubernetes, Azure, compliance frameworks)

## Design Direction

**Hybrid Professional + Subtle Terminal Aesthetic**

- Clean, modern foundation with excellent typography and generous whitespace
- Subtle VT-100 / terminal influences: monospace accents, prompt-style headers, soft green glow on interactive elements
- **Signature element preserved**: Triangular `clip-path` CSS on cards, sections, and hero (a distinctive visual motif from earlier versions)
- Dark professional palette with phosphor green accents (`#00ff00` / `#00cc00` on near-black)
- Fully responsive with strong visual hierarchy
- AMP-compatible where it adds value; performance-first (target Lighthouse 90+)

This approach balances distinctiveness with professional credibility — especially important for GovTech and enterprise audiences.

## Tech Stack

| Layer              | Technology                          | Notes |
|--------------------|-------------------------------------|-------|
| Core               | [Eleventy (11ty)](https://www.11ty.dev/) | Static site generator |
| Templating         | Liquid + Nunjucks                   | Reusable layouts & components |
| Styling            | Custom CSS (VT-100 inspired)        | Triangular clip-paths, scanlines, glow |
| Components         | eleventy-plugin-amp                 | AMP shortcodes (`ampimg`, `ampyoutube`, etc.) |
| Diagrams           | Build-time Mermaid → SVG            | Wrapped in `amp-img` for AMP safety |
| Deployment         | GitHub Pages + GitHub Actions       | Automatic on push to `master` |
| Content            | Markdown + Google Sheets (Content Hub) | Structured drafting before export |

## Project Structure

```
/
├── src/
│   ├── _includes/          # Layouts & reusable snippets (Liquid)
│   ├── content/            # Markdown pages & posts
│   ├── _data/              # Site metadata
│   ├── cp/                 # Static assets copied to root
│   └── img/                # Images & optimized assets
├── .eleventy.js          # Core configuration + shortcodes + collections
├── package.json
├── plan.md                 # Detailed refactor plan
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Local Development

```bash
git clone https://github.com/timBrockman/timbrockman.com.git
cd timbrockman.com
npm install
npm run serve
```

Open http://localhost:8080 (or the port shown).

### Build for Production

```bash
npm run build
```

Output goes to `_site/` and is deployed automatically via GitHub Actions.

## Content & Publishing Workflow

We use a **hybrid human + AI-assisted** workflow:

1. **Planning & Drafting** (outside GitHub)
   - Primary source of truth: `timbrockman_com_content_hub` Google Sheet
   - Major sections drafted in a "Site Content Brief" Google Doc
2. **Implementation** (inside GitHub)
   - Use GitHub Codespaces + GitHub Copilot for layouts, components, and CSS
   - Quick Markdown updates via GitHub Mobile app
3. **Diagrams**
   - Prefer build-time rendered SVG (via Mermaid CLI) wrapped with the existing `ampimg` shortcode
4. **Review & Deploy**
   - Push to `master` → GitHub Actions builds and deploys to GitHub Pages

See [plan.md](https://github.com/timBrockman/timbrockman.com/blob/master/plan.md) for the full phased roadmap.

## Current Focus & Roadmap

**Primary Goal (2026):** Complete the refactor so the site clearly communicates:

- Current role at Deloitte building practical Generative AI systems
- Deep expertise in secure platforms, ServiceNow, and large-scale infrastructure
- Systems thinking that informs current AI work (Kubernetes history posts reframed as foundational expertise)

**Phased Approach** (see plan.md for details):
- **Phase 0**: Content strategy & narrative (Hero, About, TalentForge project)
- **Phase 1**: Quick wins — collections, project cards with triangular styling
- **Phase 2**: Full structural + visual refactor (CSS, layouts)
- **Phase 3**: Content migration & polish
- **Phase 4**: Testing, deployment, and sustainable workflow

## Key Assets

- Live site: https://timbrockman.com
- Refactor Plan: [plan.md](https://github.com/timBrockman/timbrockman.com/blob/master/plan.md)
- Content Hub: Google Sheet (timbrockman_com_content_hub)
- Resume & Positioning: Google Drive ("5-21-26 resume" and LinkedIn summary)

## Contributing & Updates

This is a personal portfolio, but structured for maintainability:

- Content changes: Prefer drafting in Google Docs/Sheets first, then port to Markdown
- Code changes: Use Copilot in Codespaces for speed and consistency
- Small fixes: GitHub Mobile is excellent for quick commits

Pull requests and suggestions are welcome if you see opportunities to improve clarity or technical execution.

## License

Personal portfolio. Content and code are available for reference and inspiration.

---

Built with precision. Designed to be scannable. Optimized for the next opportunity in Generative AI and GovTech.