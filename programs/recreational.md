---
layout: default
title: Recreational
subtitle: Ages 5–14 · Fall & Spring seasons
# Intro
intro:
  title: Recreational
  lead: "Our recreational program is for players ages 5–14. We run Fall and Spring seasons. Registration opens ahead of each season."
# Registration (simple with button)
registration:
  title: Registration
  lead: "Register through our member platform. Spring 2026 registration is closed; Fall 2026 registration opens in May."
  button_title: Register
  button_link: "https://www.umpquaunited.org/Default.aspx?tabid=1903242"
# Game schedule & league rules (links)
schedule_links:
  title: Game schedule & league rules
  links:
    - title: Game Schedule
      url: "https://www.umpquaunited.org/Default.aspx?tabid=2723647"
    - title: League Rules
      url: /about/league-rules
# Field map (simple)
field_map:
  title: Field map
  lead: "View the season field map for Stewart Park."
  button_title: View field map
  button_link: /fields
---

{% include page-header.html %}
{% include content-open.html %}
{% include block-simple.html block=page.intro %}
{% include block-simple.html block=page.registration %}
{% include block-links.html block=page.schedule_links %}
{% include block-simple.html block=page.field_map %}
{% include content-close.html %}
