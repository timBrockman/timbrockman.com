---
layout: layouts/default.liquid
templateEngineOverride: liquid,md
tags:
  - root
date: Last Modified
title: "Professional Profile"
subtitle: "Recent Experience"
imagePrefix: "1"
imageAlt: "Professional Profile"
stub: "Recent Experience"
footerLink: "./dl/dev-res.pdf"
footerText: "Developer Resume (pdf)"
---


<section id="bio" class="full-height-section">
      <header class="section-header">#BIO</header>
      <div class="section-body">
        <h1>Professional Summary</h1>
        <div class="columned">
          <p>
          I build the kinds of systems governments actually need —reliable enough to run in production, transparent enough to audit, and maintainable enough that a team can own them for years. To best serve Government clients I maintain an active security clearance.
          </p><p>
          With experience ranging from deep bare metal infrastructure, to front end optimization —running production Kubernetes clusters on bare metal to strategic react caching strategies —I was in a unique position to bring the same engineering discipline (observability, auditability, and long-term maintainability) to Generative AI and proprietary platforms at Deloitte.
          </p><p>
          I actively contribute to open-source projects and am completing an M.S. in Data Science at the University of Colorado Boulder (4.0 GPA) with a second master’s in Artificial Intelligence underway. I've recently open sourced projects focusing on multi-agent systems, ML observability, and accessibility.
          </p>
        </div>
      </div>
      <footer class="section-footer">end BIO <a href="#bio">TOP</a></footer>
    </section>

<section id="experience" class="full-height-section">
  <header class="section-header">#EXP</header>
  <div class="section-body">
    <h1>Recent Experience</h1>
    <ul class="section-list">
      <li>

**Full Stack Developer | Deloitte**  
*February 2024 – Present*

- Developed and deployed a custom Python application leveraging Generative AI (Claude on AWS Bedrock) to automatically convert large volumes of client documentation into competency models (TalentForge).  
- Trusted to impliment a high-visibility initial release of ServiceNow HRSD.  
- Performed a complete rewrite of the Talent Trace career pathing tool to align with new business requirements, playing a pivotal role in securing an exceptional contract performance rating.  
- Conducted technical discovery and documented technical specifications for client-required system customizations.
- Completed preliminary development work for business development demonstration environments quickly and significantly under budget.
- Worked hand and hand with major Department of War, Federal Heathcare, and State clients 

</li>
<li>

**Full Stack Web Developer | Katmai Government Services | Orlando, FL**  
*May 2017 – February 2024*

- Managed the full software development lifecycle for business-critical line-of-business applications while progressively owning broader responsibilities as de facto cloud architect, database administrator, DevSecOps engineer, and site reliability contributor.  
- Built, deployed, and administered a production Kubernetes cluster on bare-metal VMware/vSphere infrastructure for over six years, along with a GitLab Enterprise instance.  
- Developed and supported React front-ends served from Nginx in Docker containers and GraphQL/RESTful APIs on Node.js in Docker.  
- Administered production MySQL, Microsoft SQL Server, and PostgreSQL databases.  
- Led containerization of applications and migration of critical workloads into secure Azure Government Cloud High (GCC High) environments, including authentication migration from on-prem LDAP to Entra ID and implementation of GitHub Enterprise.  
- Authored Katmai’s Secure System Engineering Principles to meet ISO 27001 requirements and performed STRIDE threat modeling for legacy projects.  
- Supported ongoing compliance alignment with FedRAMP, NIST 800-171, and CMMC frameworks while contributing to open-source projects including the AMP Project and Kubernetes.io, with emphasis on security, Section 508 accessibility, and long-term maintainability.

</li><li>

**IT Manager | Republic First Management / Republic Equity | Winter Park, FL**  
*January 2013 – May 2017*

- Directed IT strategy, acquisition, deployment, and support across 13 businesses operating in 4 states to meet diverse operational objectives.  
- Proposed, authored, implemented, and audited information systems and technology policies that reduced average per-company IT spend by 16%, improved productivity, and strengthened data protection.

</li><li>

**Education**

- Master of Science, Data Science (in progress, 4.0 GPA maintained) — University of Colorado Boulder  
- Master of Science, Artificial Intelligence (in progress) — Woolf University via Udacity  
- Bachelor of Fine Arts, Graphic Design — University of Central Florida

</li><li>

**Certifications**

- ServiceNow Certified System Administrator (CSA)  
- ServiceNow Certified Application Developer (CAD)  
- ServiceNow Professional HRSD Implementation Specialist  
- Certified Ethical Hacker (CEH)  
- EC-Council Certified Security Analyst (ECSA)  
- Computer Hacking Forensic Investigator (CHFI)  
- Anthropic Claude on Bedrock Certification  
- Microsoft Azure Fundamentals (AZ-900)

      </li>
    </ul>
  </div>
</div>
<footer class="section-footer">end EXP <a href="#experience">EXP</a> <a href="#bio">TOP</a></footer>
</section>

<section id="projects" class="full-height-section">
  <header class="section-header">#DEV</header>
  <div class="section-body">
    <h1>Projects</h1>
<ul class="section-list">
<li>

**TalentForge (Deloitte – GenAI Application)**  
I was an early stage developer on TalentForge, taking the product from proof of concept to pilot with Government clients. This is a proprietary application built on AWS Bedrock with Claude that converts large volumes of client documentation into structured competency models.

</li><li>

**ServiceNow HRSD Platform (Deloitte)**  
I was trusted with the implementation of a high-visibility ServiceNow HRSD platform for major DoW account under tight timelines and strict compliance requirements.

</li><li>

**Career Pathing Tool (Deloitte)**  
I performed a complete rewrite of the TalentTrace career pathing tool for federal healthcare client to align with new business requirements, contributing to an exceptional contract performance rating.

</li><li>

**DAGonLayer (Open Source – Python)**  
I built DAGonLayer, a lightweight async multi-agent orchestrator using declarative YAML blueprints, Pydantic validation, self-healing loops, and human intervention fallbacks (available on PyPI). <br/> [DAGonLayer on GitHub](https://github.com/timBrockman/DAGonLayer) (also [on PyPI](https://pypi.org/project/dagonlayer/))

</li><li>

**SnowBoots (Open Source – SCSS)**  
I created SnowBoots, a drop-in CSS/SCSS enhancement layer for ServiceNow’s Bootstrap 3.3.6 that adds performance, theming, and WCAG AAA accessibility improvements without breaking legacy widgets. <br/> [SnowBoots on GitHub](https://github.com/timBrockman/SnowBoots)

</li><li>

**mlflow-alerts (Open Source – Python/MLflow)**  
I am developing mlflow-alerts, an asynchronous alerting plugin for MLflow that handles metrics, run failures, and registry events via background queues with zero impact on training performance. <br/>[mlflow-alerts on GitHub](https://github.com/timBrockman/mlflow-alerts)

</li><li>

**Kubernetes**  
As an early open-source contributor to Kubernetes, I fixed issues related to Docker port assignment on macOS in the project’s initial versions, improving developer experience on that platform. <br/>[Kubernetes Website Repo](https://github.com/kubernetes/website)

</li><li>

**AMP Project**  
As an early member of the Accelerated Mobile Pages (AMP) Project, I helped compose and edit early guides and worked on original templates that advanced faster web performance standards. <br/>[AMP Project](https://amp.dev/)

</li>
</ul>
  </div>
  <footer class="section-footer">end DEV<a href="#projects">DEV</a> <a href="#bio">TOP</a></footer>
</section>

<section id="documents" class="full-height-section">
  <header class="section-header">#DOX</header>
  <div class="section-body">
    <h1>Documents</h1>
    <div style="text-align: center;">

    *****[&#10515; Download Resume](/dl/dev-res.pdf)*****
    
    
  </div>
  </div>
  <footer class="section-footer">end DOX <a href="#documents">DOX</a> <a href="#bio">TOP</a></footer>
</section>

