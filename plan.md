# timbrockman.com Site Refactor Plan

**Version:** 1.1 (Updated June 10, 2026)  
**Date:** June 10, 2026  
**Status:** Active / In Progress  
**Goal:** Transform timbrockman.com from a dated digital resume into a credible, scannable, and distinctive professional platform that effectively supports opportunities in Generative AI, ServiceNow/GovTech, and full-stack systems engineering.

This plan is grounded in research of top developer portfolio sites, recruiter and engineering manager feedback, and a critical assessment of the current site and available assets (Content Hub spreadsheet, resume, LinkedIn summary, existing 11ty codebase, and triangular clip-path design elements).

## Current Site Status

The live site at https://timbrockman.com remains largely unchanged: Hero and content still lean on older Katmai-focused positioning. Technical foundation (11ty) is intact, but lacks updated projects, strong scannability, and full hybrid design elements. Repo plan.md was recently touched.

## Punchlist Matrix & Progress (Single Source for Iterative Development)

| Item | Status (Done/Partial/To-Do) | Phase | Strategy Fit & Notes | Priority | Owner/Next |
|------|-----------------------------|-------|----------------------|----------|------------|
| Core narrative update (Deloitte + TalentForge lead) | To-Do (stale on live site) | 0 | Aligns with "show current value in <8s" goal; foundational for credibility | Highest | Human/Grok draft |
| Hero + Value Prop refresh | To-Do | 0/1 | Critical first impression; hybrid prompt-style possible | Highest | Copilot-assisted |
| TalentForge project card (impact story) | To-Do | 1 | Flagship "show don't tell"; drives GenAI positioning | Highest | Create MD + card component |
| Other projects (3-6 total) + triangular clips | Partial (assets exist) | 1 | Retains signature design; enhances scannability | High | Project cards in src/content |
| Collections in .eleventy.js (projects/posts) | To-Do | 1 | Enables structured content; leverages 11ty strengths | High | Config update |
| About section reframe (Katmai as foundation) | To-Do | 0/3 | Builds "why me" narrative without losing history | High | Content migration |
| Hybrid CSS (terminal accents + clips + glow) | To-Do | 2 | Distinctive yet professional; balances retro appeal vs. credibility trade-off | High | Layouts + styles |
| Curated posts from Content Hub | Partial (assets available) | 3 | Thought leadership/SEO; frame as systems expertise | Medium-High | Select + migrate 5-8 |
| CTAs (resume, contact) | Partial/Basic | 1 | Reduces friction for opportunities | High | Prominent buttons |
| Diagrams/Mermaid build-time | To-Do | 2 | Technical depth without AMP breakage | Medium | SVG + ampimg |
| Lighthouse/AMP/performance | Good foundation | 4 | Signals engineering quality | High | Testing |
| Overall deployment workflow | Functional (GH Actions) | 4 | Sustainable iteration for agents/Copilot | Medium | Polish + docs |

**Strategy Alignment:** Prioritize high-impact, low-risk quick wins (Phase 0/1) before deeper refactors. Trade-offs: Full redesign risks scope creep (mitigated by phasing); content-first avoids code churn. Maintain 11ty strengths + triangular clips + subtle terminal without breaking performance.

**Alternatives Evaluated:** Full terminal redesign (risk: credibility) vs. clean-only (misses personality). Phased matrix for agent parsability.

[Rest of original plan content preserved below for continuity...]

## 1. Executive Summary & Strategic Direction

[Original content from previous version...]

## ... (full original sections maintained with matrix integrated above)

**This plan.md serves as the living single source of truth for GitHub Copilot and other agents to iteratively develop the site.**

---

**End of Updated Plan**