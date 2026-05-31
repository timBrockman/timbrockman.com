# timbrockman.com Site Refactor Plan

**Version:** 1.0  
**Date:** May 31, 2026  
**Owner:** Tim Brockman  
**Status:** Ready for Execution

---

## 1. Executive Summary

The goal of this refactor is to transform timbrockman.com from a dated, resume-style static site into a **credible, scannable, and distinctive professional platform** that effectively supports opportunities in Generative AI, ServiceNow/GovTech, and full-stack systems engineering.

**Core Strategic Direction (Hybrid Approach):**
- Maintain a **clean, modern, professional foundation** (inspired by top portfolios like Brittany Chiang).
- Add **subtle VT-100 terminal influences** (monospace accents, prompt-style headers, soft green glow, scanlines on interactive elements) rather than a full retro CRT gimmick.
- **Preserve and evolve** the existing triangular clip-path CSS elements as a distinctive visual signature.
- Lead with current positioning: **Deloitte + TalentForge (Generative AI)** while framing past Kubernetes/Azure/security work as strong foundational expertise.

This plan was developed after researching top developer portfolio sites, analyzing recruiter/engineering manager feedback, and critically assessing the current state of the site and available assets (Content Hub spreadsheet, resume, LinkedIn summary, existing 11ty codebase).

---

## 2. Research Insights: What Makes Top Developer Portfolios Successful

Key patterns from highly regarded sites (Brittany Chiang, Sat Naing terminal portfolio, and others):

- **Speed of Understanding**: Recruiters form an impression in ~6 seconds. Strong hero + clear value proposition + scannable projects win.
- **Show, Don’t Tell**: Impact-focused project storytelling (problem → role → tech → measurable outcome) outperforms simple lists or screenshots.
- **Credibility Signals**: Specific skills, open source contributions, speaking, certifications, and domain expertise (compliance, systems, AI applications).
- **Performance & Polish**: Fast, accessible, high Lighthouse scores signal engineering quality.
- **Personality with Professionalism**: Distinctive elements work best when they feel authentic and don’t undermine credibility (especially in GovTech/enterprise contexts).
- **Retro/Terminal Aesthetic Note**: Fully interactive terminal sites (e.g. Sat Naing) can be memorable when authentic, but clean/modern or subtle hybrid designs tend to perform better for broad professional credibility.

**Implication for this project**: A **hybrid approach** is recommended — clean professional base + subtle terminal personality + retention of triangular clip-paths.

---

## 3. Critical Assessment of Current Site

**Strengths**:
- Solid technical foundation (11ty + Liquid + AMP + existing GitHub Actions).
- Valuable content assets (Kubernetes history posts in Content Hub spreadsheet).
- Updated professional positioning available via resume and LinkedIn summary.

**Weaknesses**:
- Content is stale in places (still references Katmai heavily).
- Dense text walls with weak visual hierarchy and scannability.
- No strong, impact-focused project showcase (TalentForge is missing or under-highlighted).
- Design feels dated and resume-like rather than a dynamic professional platform.
- Lacks clear “why me now” narrative for Generative AI / GovTech opportunities.

---

## 4. Feature Priority Matrix

| Priority | Feature                        | Why It Matters                          | Current State     | Recommended Action                  |
|----------|--------------------------------|-----------------------------------------|-------------------|-------------------------------------|
| Highest  | Impact-focused Projects section | Most important section for credibility | Almost absent     | Create 4–6 strong project cards (TalentForge as flagship) |
| High     | Clear Hero + Value Proposition  | First impression in < 8 seconds        | Weak              | Rewrite with current Deloitte + GenAI focus |
| High     | About / Current Focus narrative | Builds connection and context          | Stale             | Reframe past experience as foundation |
| High     | Hybrid VT-100 + Triangular design | Distinctive yet professional           | Dated/plain       | Implement subtle terminal influences + keep clip-paths |
| Medium   | Curated Blog / Writing          | Thought leadership + SEO               | Underutilized     | Select best posts from Content Hub and reframe |
| Medium   | Build-time diagrams (SVG)       | Professional technical depth           | Not implemented   | Mermaid → SVG + amp-img shortcode   |
| High     | Easy CTAs (Resume, LinkedIn, Contact) | Reduces friction for opportunities   | Basic             | Prominent resume download + links   |

---

## 5. Detailed Phased Action Plan

### Phase 0: Foundations (Human-led, primarily outside GitHub)

**Owner**: Tim Brockman (with optional Grok assistance for drafting)

- Create a **“Site Content Brief”** Google Doc as the single source of truth.
- Draft:
  - Hero value proposition (1–2 sentences)
  - About / Current Focus narrative
  - TalentForge project description (problem → your role → tech → measurable impact)
  - 2–3 additional strong project summaries
- Review and curate 6–8 blog posts from the `timbrockman_com_content_hub` Google Sheet.
- Decide final project ordering and which posts to feature.

**Deliverable**: “Site Content Brief” Google Doc + curated post list.

---

### Phase 1: Quick Wins & Structural Setup (Copilot-assisted inside GitHub)

- Update `.eleventy.js`:
  - Add collections for `projects` and curated `posts`.
  - Add passthrough rules for assets.
  - Add shortcodes for images and diagrams.
- Create folder structure under `src/content/`:
  - `projects/` (one `.md` file per project)
  - `posts/` (curated posts)
- Create reusable `project-card.liquid` component that incorporates triangular clip-path styling.
- Add prominent “Download Resume” CTA and updated LinkedIn link.

**Goal**: Have a working skeleton with 2–3 project cards live quickly.

---

### Phase 2: Core Design & Layout Refactor (Copilot-assisted)

- Create / update Liquid layouts:
  - `default.liquid` (with terminal-inspired header, footer, and responsive grid)
  - `project.liquid`
  - `post.liquid`
- Implement hybrid VT-100 CSS system:
  - Retain and enhance existing triangular clip-path classes.
  - Add subtle scanlines, green glow, prompt indicators (`> `), and monospace accents.
  - Clean, scannable project cards and blog listing styles.
  - Responsive behavior (sidebar + main on desktop, stacked on mobile).
- Implement build-time Mermaid diagram handling (render to SVG → wrap with existing `{% ampimg %}` shortcode).

**Design Constraint**: Keep the triangular clip-path elements prominent as a visual signature.

---

### Phase 3: Content Migration & Polish

- Migrate and lightly edit selected posts from the Content Hub spreadsheet into `src/content/posts/`.
- Add proper frontmatter and ensure posts connect to current positioning where appropriate.
- Build Blog index page (curated or paginated).
- Add structured data (JSON-LD) for Person + Projects.
- Write alt text and ensure all images have proper descriptions.

---

### Phase 4: Testing, Deployment & Workflow Definition

- Update GitHub Actions workflow if needed.
- Perform Lighthouse audits + AMP validation.
- Manual testing on desktop and mobile.
- Define ongoing content workflow:
  - Google Sheet / “Site Content Brief” → Draft in Google Docs or Markdown → Grok-assisted editing → GitHub Mobile commit → Deploy.

---

## 6. Workflow Recommendations

- **Content Creation (Outside GitHub)**: Use Google Drive (Content Hub + new “Site Content Brief” Doc) as the source of truth.
- **Code Implementation (Inside GitHub)**: Use GitHub Codespaces + GitHub Copilot heavily for layouts, components, and configuration.
- **Quick Updates**: Use GitHub Mobile app for small Markdown changes and commits.
- **Diagrams**: Prefer build-time SVG rendering wrapped in `amp-img` for professionalism and AMP compatibility. ASCII rendering can be added later as an optional enhancement for terminal flavor.
- **Iteration Style**: Ship in small, reviewable chunks (Hero + About first → Projects → Blog).

---

## 7. Success Metrics

- A recruiter or engineering manager can understand your current role and primary value within 6–8 seconds.
- TalentForge is clearly presented as the flagship project with problem, role, tech, and outcome visible.
- The site feels distinctive (triangular elements + subtle terminal personality) but professional and credible for GovTech / enterprise audiences.
- Lighthouse scores remain 90+.
- Content is current and aligned with your 2024–2026 career trajectory.

---

## 8. Risks & Mitigations

| Risk                                      | Likelihood | Mitigation                                      |
|-------------------------------------------|------------|-------------------------------------------------|
| Over-committing to full retro terminal aesthetic | Medium     | Use hybrid approach; keep triangular clip-paths as main distinctive element |
| Content migration takes too long          | High       | Phase it. Launch with Hero + About + 3–4 strong projects first |
| Diagram handling adds complexity          | Medium     | Start with static SVG + amp-img. Add ASCII only if it clearly adds value |
| Scope creep                               | Medium     | Stick to the phased plan. Defer nice-to-haves |

---

## 9. Immediate Recommended Next Steps

1. **This week (Human-led)**: Create the “Site Content Brief” Google Doc and draft the Hero, About, and TalentForge sections.
2. **Next (Copilot-assisted)**: Update `.eleventy.js` with collections and create the new `project-card.liquid` component (with triangular clip-path styling).
3. **Then**: Implement the hybrid CSS system while preserving existing triangular elements.
4. Review and merge this `plan.md` into the repository.

---

**End of Plan**

*This document lives in the repository as `plan.md` and is also available in Google Drive for easy reference and collaboration.*