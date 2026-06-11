# timbrockman.com Site Refactor Plan

**Version:** 1.2 (Updated June 11, 2026)  
**Date:** June 11, 2026  
**Status:** Active / In Progress  
**Goal:** Transform timbrockman.com from a dated digital resume into a credible, scannable, and distinctive professional platform that effectively supports opportunities in Generative AI, ServiceNow/GovTech, and full-stack systems engineering.

This plan is grounded in research of top developer portfolio sites, recruiter and engineering manager feedback, and a critical assessment of the current site and available assets (Content Hub spreadsheet, resume, LinkedIn summary, existing 11ty codebase, and triangular clip-path design elements).

## Current Site Status

The live site at https://timbrockman.com is still running the older baseline design. The `layout-refactor` branch now contains the major structural updates: data-driven navigation, a reusable project card component, card-based list pages at `/articles/` and `/projects/`, hero CTA metadata, shared layout shells, and a modern AMP-ready style layer. A local Eleventy build succeeds, but the branch changes are not yet merged or deployed to production.

## Punchlist Matrix & Progress (Single Source for Iterative Development)

| Item | Status (Done/Partial/To-Do) | Phase | Strategy Fit & Notes | Priority | Owner/Next |
|------|-----------------------------|-------|----------------------|----------|------------|
| Core narrative update (Deloitte + TalentForge lead) | Partial | 0 | Homepage content now reflects Deloitte/GenAI positioning, but narrative polish is ongoing | Highest | Refine content and merge |
| Hero + Value Prop refresh | Done | 0/1 | New hero CTA support and responsive header structure are implemented in branch | Highest | Validate UX across breakpoints |
| TalentForge project card (impact story) | Partial | 1 | List/page framework is built, but a dedicated TalentForge case study page is still pending | Highest | Create focused project markdown |
| Other projects (3-6 total) + triangular clips | Partial | 1 | Existing project pages moved into `src/content/projects/` and card previews are wired | High | Add remaining content and review visuals |
| Collections in .eleventy.js (projects/posts/learning) | Done | 1 | `projects`, `posts`, and `learning` collections are configured | High | Verify collection outputs in templates |
| About section reframe (Katmai as foundation) | Partial | 0/3 | Homepage framing is updated, but the biography and historical narrative need review | High | Refine messaging and timeline |
| Hybrid CSS (terminal accents + clips + glow) | Done | 2 | New AMP-friendly `amp-custom-style-modern.liquid` and theme foundation are in place | High | Continue visual polish and maintain accessibility |
| Curated posts from Content Hub | Partial | 3 | Post content moved into `src/content/posts/`; more editorial curation remains | Medium-High | Publish selected notes and essays |
| CTAs (resume, contact) | Done | 1 | Call-to-action buttons are now driven from `site.heroActions` | High | Confirm canonical target behavior |
| Diagrams/Mermaid build-time | To-Do | 2 | AMP-safe diagram workflow has not yet been fully implemented | Medium | Add Mermaid/SVG tooling once core layout stabilizes |
| Lighthouse/AMP/performance | Partial | 4 | Local build passes with non-fatal AMP optimizer warnings; further validation is required | High | Run AMP validator and fix any issues |
| Overall deployment workflow | Partial | 4 | GitHub Pages pipeline exists, but the branch still needs merge and release | Medium | Prepare PR and deployment checks |

**Strategy Alignment:** Continue the phase-based rollout. Finish the current refactor before adding new visual or content experiments. Keep the design distinctive yet professional by focusing on structured content, AMP compatibility, and lightweight interactions.

**Alternatives Evaluated:** Full terminal redesign (risk: credibility) vs. content-first hybrid (preferred). Current work preserves the clip-path motif while moving the site toward a cleaner, more maintainable architecture.

## 1. Executive Summary & Strategic Direction

The `layout-refactor` branch has moved the site from legacy resume scaffolding to a structured portfolio platform. The branch now includes the primary architecture and style work necessary to support a modern portfolio experience.

Key branch achievements:
- Shared site shell layout with `site-shell` and `site-wrapper`
- Data-driven sidebar navigation and hero CTA metadata
- Reusable project card component and list-driven content rendering
- Dedicated list pages at `/articles/` and `/projects/`
- AMP-ready styling through `amp-custom-style-modern.liquid`
- Eleventy collections for `projects`, `posts`, and `learning`
- Local Eleventy build success with new branch assets

This plan now shifts from pure layout refactor to validation, content refinement, and merge preparedness.

## 2. Current Priorities

- Finalize content migration and add a dedicated TalentForge/GenAI case study page
- Verify list page rendering and collection outputs for `/articles/` and `/projects/`
- Complete AMP validation and address any warnings or accessibility gaps
- Prepare the branch for merge into `master`
- Maintain the distinctive visual language while keeping the site professional and accessible

## Session Refactor Plan

6/11/2026

The current session is focused on branch stabilization, validation, and content readiness for merge.

### Phases
1. Layout/collection/style refactor — Completed
2. Content migration and editorial polish — In progress
3. Validation and accessibility review — Next
4. Merge readiness and deployment checks — Next

### Work items
- Confirm the updated site scaffold:
  - `src/_includes/layouts/default.liquid`
  - `src/_includes/layouts/list.liquid`
  - `src/_includes/layouts/profile.liquid`
- Verify shared header and hero CTA behavior:
  - `src/_includes/snippets/header/id-header.liquid`
  - `src/_includes/snippets/header/page-header.liquid`
- Validate reusable content components and collection rendering:
  - `src/_includes/components/project-card.liquid`
  - `src/_data/site.json`
- Review and validate the AMP style layer:
  - `src/_includes/snippets/meta/amp-head.liquid`
  - `src/_includes/snippets/meta/amp-custom-style-modern.liquid`
- Confirm sidebar navigation is data-driven with fallback behavior:
  - `src/_includes/snippets/sidebar/amp-sidebar.liquid`
- Validate content structure and routing:
  - `src/articles.md`
  - `src/projects.md`
  - `src/content/posts/*.md`
  - `src/content/projects/*.md`
- Prepare the branch for merge and deployment
- Address any remaining AMP and accessibility issues

### Verification
- `npm run build` completes successfully with the new layout and list pages
- `/articles/` and `/projects/` render correctly from list pages
- hero CTA buttons render from `site.heroActions`
- AMP head uses modern fonts and the new style include
- project/post collections render correctly in the list layout
- no duplicate or outdated plan sections remain in this document
- branch is ready for merge with clear content and layout separation