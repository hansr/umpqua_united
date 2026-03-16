---
layout: default
title: Our Programs
subtitle: Recreational and competitive soccer for ages 5–14
permalink: /programs/
show_register_button: true
# Intro (simple)
intro:
  title: Our Programs
  lead: "Umpqua United offers recreational soccer for ages 5–14 and competitive soccer for ages 9–14. Choose a program below."
# Program tiles (block-tiles)
programs:
  title: Our programs
  tiles:
    - title: Recreational
      ages: "Ages 5–14 · Fall & Spring"
      url: /programs/recreational
      cta: false
    - title: Competitive
      ages: "Ages 9–14 · Tryouts"
      url: /programs/competitive
      cta: false
    - title: Tryouts
      ages: "HS Winter League"
      url: /tryouts
      cta: true
# CTA text after tiles
cta_note:
  title: Registration
  lead: "Tryouts are required for competitive teams. Registration for all programs is through our member platform."
---

{% include page-header.html %}
{% include content-open.html %}
{% include block-simple.html block=page.intro %}
{% include block-tiles.html block=page.programs wide=true %}
{% include block-simple.html block=page.cta_note %}
{% include block-button.html %}
{% include content-close.html %}
