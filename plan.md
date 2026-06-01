# timbrockman.com Site Refactor Plan

**Version:** 1.0  
**Date:** May 31, 2026  
**Status:** Draft for Review  
**Goal:** Transform timbrockman.com from a dated digital resume into a credible, scannable, and distinctive professional platform that effectively supports opportunities in Generative AI, ServiceNow/GovTech, and full-stack systems engineering.

This plan is grounded in research of top developer portfolio sites, recruiter and engineering manager feedback, and a critical assessment of the current site and available assets (Content Hub spreadsheet, resume, LinkedIn summary, existing 11ty codebase, and triangular clip-path design elements).

## 1. Executive Summary & Strategic Direction

The current site has a solid technical foundation (Eleventy + Liquid + AMP) and valuable assets, but it reads as stale and resume-heavy. The updated professional positioning from the resume and LinkedIn summary (Deloitte role, TalentForge Generative AI work) is not yet reflected on the live site.

**Recommended Design Direction (Hybrid Approach):**  
A clean, modern, professional foundation with **subtle VT-100 terminal influences** (monospace accents for code/prompts, soft green glow on interactive elements, subtle scanlines on accents) rather than a full retro CRT gimmick. This balances distinctiveness with broad professional credibility, especially important for GovTech and enterprise audiences.

**Key Retained Element:** Keep and evolve the existing **triangular clip-path** CSS design elements. They are a distinctive visual signature and will be integrated thoughtfully into project cards, section headers, and the hero.

**Core Narrative to Communicate:**  
"Full-stack engineer building practical Generative AI systems for the public sector, with deep expertise in secure platforms, ServiceNow, and large-scale infrastructure."

## 2. Research Insights: What Makes Top Developer Portfolios Successful

Analysis of high-performing sites (Brittany Chiang, Sat Naing terminal portfolio, and others) and recruiter/EM feedback reveals consistent patterns:

- **Clarity in the first 6–8 seconds**: Strong hero with role + value proposition wins.
- **Show, don’t tell**: Impact-focused project storytelling (problem → role → tech → measurable outcome) is the most important section.
- **Credibility signals**: Specific skills, open source, speaking, and domain expertise (compliance, systems, AI applications) matter more than generic lists.
- **Performance & polish**: Fast, accessible, high Lighthouse scores signal engineering quality.
- **Personality with professionalism**: Distinctive but not gimmicky. Full retro terminal works when authentic (e.g., Sat Naing), but clean/hybrid designs win more consistently for enterprise roles.
- **Scannability**: Generous whitespace, strong visual hierarchy, and curated content outperform dense text walls.

**Implication for this project:** We will use a hybrid design — clean modern base + subtle terminal personality + prominent triangular clip-path elements.

## 3. Critical Assessment of Current Site

**Strengths:**

- Solid 11ty + Liquid + AMP technical foundation with 281+ commits.
- Existing image assets and triangular clip-path styling.
- High-quality drafted content in the `timbrockman_com_content_hub` Google Sheet (Kubernetes history series).
- Updated positioning available via resume and LinkedIn summary.

**Weaknesses:**

- Content is stale in places (still references Katmai heavily).
- Dense text walls with weak visual hierarchy and scannability.
- No strong, impact-focused project showcase (TalentForge is missing or under-emphasized).
- Lacks a clear, current "why me" narrative for GenAI/GovTech opportunities.
- Design is functional but not distinctive or optimized for quick scanning by recruiters and hiring managers.

## 4. Feature Matrix: What Will Make the Site Great & Credible

| Category | Feature | Why It Matters (Research-Backed) | Current State | Priority | Recommendation |
|---|---|---|---|---|---|
| Hero / Value Proposition | Clear role + distinctive hook | First 6–8 seconds decide attention | Weak | High | Prompt-style or clean statement highlighting Deloitte + TalentForge + GovTech |
| Projects / Case Studies | Impact-focused cards with story | Most important section — "Show, don’t tell" | Almost absent | Highest | Flagship: TalentForge. 4–6 total with problem → role → tech → outcome |
| About / Story | Narrative + current positioning | Builds human connection + credibility | Stale | High | Reframe Katmai as foundation; lead with Deloitte + GenAI work |
| Blog / Thought Leadership | Curated high-signal posts | Adds depth & SEO; Kubernetes content is an asset | Underutilized | Medium-High | Curate 5–8 best posts; frame as systems expertise informing GenAI work |
| Visual Design | Hybrid professional + terminal | Stands out without hurting credibility | Dated / plain | High | Clean base + subtle terminal influences + retain triangular clip-paths |
| Technical Excellence | Performance, a11y, AMP, SEO | Signals engineering quality | Good foundation | High | Maintain 11ty strengths; target Lighthouse 90+ |
| Conversion | Easy CTAs (resume, contact, LinkedIn) | Reduces friction for opportunities | Basic | High | Prominent resume download + clear contact |
| Media / Diagrams | Build-time rendered (SVG preferred) | Supports technical depth without breaking AMP | Not implemented | Medium | Use Mermaid CLI → SVG → wrap with existing ampimg shortcode |

## 5. Detailed Phased Action Items

### Phase 0: Foundations & Content Strategy (Human-led, primarily outside GitHub)

- Review and finalize the core narrative using resume and LinkedIn summary.
- Audit the `timbrockman_com_content_hub` Google Sheet. Select and prioritize 6–8 blog posts for inclusion.
- Write or refine: Hero value proposition, About section narrative, and detailed project descriptions (starting with TalentForge).
- Create a "Site Content Brief" Google Doc as the single source of truth for all new/updated copy.
- Decide final project selection and ordering.

### Phase 1: Quick Wins (High Impact, Lower Effort)

- Update `.eleventy.js` to add collections for `projects` and curated `posts`.
- Add passthrough rules and basic folder structure under `src/content/projects/` and `src/content/posts/`.
- Populate the first 3 project Markdown files (TalentForge as priority #1).
- Create a reusable `project-card.liquid` component that incorporates triangular clip-path styling.
- Add prominent "Download Resume" button and updated LinkedIn link.

### Phase 2: Core Structural & Design Refactor

- Finalize full `.eleventy.js` configuration (collections, shortcodes, passthrough).
- Create/update Liquid layouts: `default.liquid`, `project.liquid`, `post.liquid`.
- Implement the hybrid VT-100 CSS system while preserving and enhancing triangular clip-path classes.
- Implement build-time Mermaid diagram handling (render to SVG → `{% ampimg %}` shortcode).
- Build responsive terminal-style grid layout.

### Phase 3: Content Migration & Polish

- Migrate and lightly edit selected blog posts from the Content Hub.
- Build Blog index page with pagination or featured posts.
- Add structured data (JSON-LD) for Person and Projects.
- Write alt text and ensure all projects have clear impact statements.

### Phase 4: Testing, Deployment & Workflow

- Update GitHub Actions workflow if needed.
- Perform manual testing (desktop, mobile, AMP validation).
- Run Lighthouse audits and address any issues.
- Define ongoing content workflow: Google Sheet / Doc → Copilot-assisted Markdown drafts → GitHub Mobile commit → deploy.

## 6. Workflow Recommendations

- **Content Creation (Outside GitHub):** Use the existing Content Hub spreadsheet and a new "Site Content Brief" Google Doc as the source of truth. Draft major sections here first.
- **Code Implementation (Inside GitHub + Copilot):** Use GitHub Codespaces + GitHub Copilot heavily for layouts, components, CSS, and configuration.
- **Mobile Updates:** Use the GitHub Mobile app for quick Markdown tweaks and commits.
- **Diagrams:** Prefer build-time SVG rendering wrapped in the existing `ampimg` shortcode for AMP compatibility and professionalism. ASCII rendering can be added later as an optional terminal-flavored enhancement.
- **Iteration:** Ship in small, reviewable chunks (Hero + About first, then Projects, then Blog).

## 7. Success Metrics

- Recruiters and engineering managers can understand current role and value proposition within 6–8 seconds.
- Clear flagship project (TalentForge) with problem, role, tech, and outcome visible.
- Site feels distinctive (triangular clip-path elements + subtle terminal personality) yet professional and credible.
- Lighthouse scores remain high (90+).
- Content is current and aligned with 2024–2026 professional trajectory.

## 8. Risks & Mitigations

- **Risk:** Over-committing to full retro terminal aesthetic reduces perceived credibility.  
  **Mitigation:** Hybrid approach with triangular clip-paths as the primary distinctive visual element.
- **Risk:** Content migration takes too long.  
  **Mitigation:** Phase the work. Launch with Hero + About + 3–4 strong projects first.
- **Risk:** Mermaid/diagram handling adds complexity.  
  **Mitigation:** Start with static SVG + ampimg. Add ASCII only if it clearly adds value.

## 9. Recommended Immediate Next Steps

1. **This week (Human-led):** Create the "Site Content Brief" Google Doc and draft Hero + About + TalentForge project description.
2. **Next (Copilot-assisted):** Update `.eleventy.js` with collections and create the new `project-card.liquid` component with triangular clip-path styling.
3. **Then:** Implement the hybrid CSS system while preserving existing triangular elements.

---

**This plan is ready for discussion and phased execution.**
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
