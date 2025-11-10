---
layout: layouts/default.liquid
draft: false
title: Layout & Shortcode Testing
description: Comprehensive testing page for Eleventy plugins and AMP components
---

# Layout & Shortcode Testing

This page tests various Eleventy plugins and AMP shortcodes to ensure robust functionality across the site.

## Mermaid Diagrams

### Standard Mermaid (Plugin v2.x)

{% raw %}
```mermaid
graph TD
  A[Start] --> B{Decision}
  B -->|Yes| C[Action 1]
  B -->|No| D[Action 2]
  C --> E[End]
  D --> E
```
{% endraw %}

### Custom Mermaid Shortcode

{% mermaidamp "Kubernetes Architecture Diagram" %}
graph LR
  A[Legacy PHP App] --> B[Docker Container]
  B --> C[Kubernetes Cluster]
  C --> D[Azure GCC High]
  A -->|Helm Charts| E[Deployment]
  E --> C
  C --> F[Load Balancer]
  F --> G[Users]
{% endmermaidamp %}

## AMP Components

### YouTube Embed

{% youtube "dQw4w9WgXcQ" %}

### Twitter Embed (Example)

{% twitter "20" %}

### Instagram Post (Example)

{% instagram "CxxxxXXXXXX" %}

### GitHub Gist (Example)

{% gist "octocat/6cad326836d38bd3a7ae" %}

## Markdown Features

### Typography

This tests **bold text**, *italic text*, ***bold italic***, ~~strikethrough~~, and `inline code`.

### Lists

Unordered list:
- Item one
- Item two
  - Nested item
  - Another nested
- Item three

Ordered list:
1. First step
2. Second step
3. Third step

### Links & Images

[External link](https://example.com)

[Internal link](/content/kubernetes/)

### Blockquotes

> This is a blockquote.
> It can span multiple lines.
>
> And have multiple paragraphs.

### Code Blocks

```javascript
// JavaScript code block
const greeting = "Hello, world!";
console.log(greeting);
```

```python
# Python code block
def hello():
    print("Hello, world!")
```

```bash
# Shell commands
npm install
npm run build
```

## Complex Mermaid Diagrams

### Sequence Diagram

{% raw %}
```mermaid
sequenceDiagram
  participant User
  participant App
  participant Database
  User->>App: Request Data
  App->>Database: Query
  Database-->>App: Return Results
  App-->>User: Display Data
```
{% endraw %}

### Gantt Chart

{% raw %}
```mermaid
gantt
  title Project Timeline
  dateFormat YYYY-MM-DD
  section Phase 1
  Planning       :a1, 2025-01-01, 30d
  Development    :a2, after a1, 60d
  section Phase 2
  Testing        :a3, after a2, 20d
  Deployment     :a4, after a3, 10d
```
{% endraw %}

### Flowchart with Subgraphs

{% raw %}
```mermaid
graph TB
  subgraph Frontend
    A[React App]
    B[State Management]
  end
  subgraph Backend
    C[API Gateway]
    D[Microservices]
  end
  subgraph Database
    E[PostgreSQL]
    F[Redis Cache]
  end
  A --> C
  B --> A
  C --> D
  D --> E
  D --> F
```
{% endraw %}

## Tables

| Feature | Status | Priority |
|---------|--------|----------|
| Mermaid | ✅ Working | High |
| AMP | ✅ Working | High |
| RSS | ✅ Working | Medium |
| Navigation | ✅ Working | High |

## HTML Elements (AMP-safe)

<details>
<summary>Click to expand</summary>

This is hidden content that can be toggled.

</details>

---

## Testing Notes

- ✅ Mermaid plugin v2.2.1 (CommonJS compatible)
- ✅ AMP plugin with validation disabled
- ✅ Custom mermaidamp shortcode for SVG output
- ✅ RSS feed generation
- ✅ Navigation plugin
- ✅ Markdown-it with HTML enabled

**Last Updated:** November 10, 2025