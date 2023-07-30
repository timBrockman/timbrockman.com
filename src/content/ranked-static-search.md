---
layout: layouts/default.liquid
draft: false
tags:
  - projects 
  - JavaScript
  - node.js
  - tf-idf
  - ranked search
date: 2015-05-30
title: "Ranked Static Search (node.js)"
subtitle: "TF-IDF indexing of static content using Node."
imagePrefix: "static-search"
imageAlt: "Ranked Static Search (node.js)"
stub: "By indexing static content with this tool, ranked search results become possible on static sites."
footerLink: "https://github.com/timBrockman/ranked-static-search"
footerText: "Node.js Ranked static search on Github"
---

By indexing static content with this tool, ranked search results become possible on static sites. It creates a json object with TF-IDF scores that allows performant search of content based on cosign similarity. In short, this is a node.js implimentation of Porter Stemmed, log normalized, TF-IDF that outputs a json object with some quick lookups.