---
layout: layouts/default.liquid
draft: false
title: Layout & Shortcode Testing
description: Comprehensive testing page for Eleventy plugins and AMP components
---

# Layout & Shortcode Testing

This page tests various Eleventy plugins and AMP shortcodes to ensure robust functionality across the site.



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

## Tables

| Feature | Status | Priority |
|---------|--------|----------|
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


- ✅ RSS feed generation
- ✅ Navigation plugin
- ✅ Markdown-it with HTML enabled

**Last Updated:** November 10, 2025