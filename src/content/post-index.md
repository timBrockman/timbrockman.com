---
layout: layouts/test.liquid
title: "Post Archive"
permalink: /posts/index.html
---

<div class="archive-container" style="display: flex; gap: 2rem;">
  
  <aside class="archive-sidebar" style="width: 25%; position: sticky; top: 20px;">
    <h3>Post Years</h3>
    <ul>
      {% for group in collections.postsByYear %}
        <li><a href="#year-{{ group.year }}">{{ group.year }}</a></li>
      {% endfor %}
    </ul>
  </aside>

  <main class="archive-main" style="width: 75%;">
    {% for group in collections.postsByYear %}
      <section id="year-{{ group.year }}" style="margin-bottom: 3rem; border-top: 2px solid #eee;">
        <h2>{{ group.year }}</h2>
        <ul>
          {% for item in group.items %}
            <li>
              <span>{{ item.page.date | date: "%b %d" }}</span> — 
              <a href="{{ item.url }}">{{ item.data.title }}</a>
            </li>
          {% endfor %}
        </ul>
      </section>
    {% endfor %}
  </main>

</div>
