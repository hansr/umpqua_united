---
layout: default
title: Age Groups
subtitle: How to tell which age group your child belongs to
# Intro
intro:
  title: Age groups
  lead: "Your child's age group is determined by their **birth year** (or age as of the season's cutoff date, depending on the league). Umpqua United follows age groupings used for recreational and competitive play."
# How it works (list)
how_it_works:
  title: How it works
  items:
    - "**\"U\" means \"under.\"** So U8 = under 8, U10 = under 10, and so on."
    - "The **age group is usually based on how old your child is at the start of the season** (or on a fixed cutoff date set by the league)."
    - "If your league uses **birth year**, the season year and birth year together determine the group (e.g., for a Fall 2026 season, a child born in 2018 might be in U8)."
# Age groups table
age_groups:
  title: Age groups we use
  headers:
    - Group
    - Typical ages
    - Notes
  rows:
    - ["**U6**", "5–6", "Small-sided; no scores kept"]
    - ["**U8**", "7–8", "Small-sided; build-out line"]
    - ["**U10**", "9–10", "7v7; build-out line; no heading"]
    - ["**U12**", "11–12", "9v9; no heading"]
    - ["**U14**", "13–14", "11v11; full rules"]
# Example by birth year
example:
  title: Example by birth year
  lead: "For a **season that uses calendar year** (e.g., 2026):"
  items:
    - "**U6** — born in 2020 or 2021"
    - "**U8** — born in 2018 or 2019"
    - "**U10** — born in 2016 or 2017"
    - "**U12** — born in 2014 or 2015"
    - "**U14** — born in 2012 or 2013"
  text_after: "Exact cutoff dates can vary by season. When you register, our platform or league materials will show the correct age group for your child's birth date."
# Need the exact cutoff
need_cutoff:
  title: Need the exact cutoff?
  lead: "For the current season's cutoff date and exact placement, check our registration platform or contact us — we'll confirm which age group your child belongs to based on their birthdate."
# Footer links
back_links:
  title: More information
  links:
    - title: League Rules
      url: /about/league-rules
    - title: Back to About
      url: /about
---

{% include page-header.html %}
{% include content-open.html %}
{% include block-simple.html block=page.intro %}
{% include block-list.html block=page.how_it_works %}
{% include block-table.html block=page.age_groups %}
{% include block-list.html block=page.example %}
{% include block-simple.html block=page.need_cutoff %}
{% include block-links.html block=page.back_links %}
{% include content-close.html %}
