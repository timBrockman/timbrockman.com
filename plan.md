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
