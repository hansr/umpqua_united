---
layout: default
title: About
subtitle: Who we are
# Our Values (block-list with image)
values:
  title: Our Values
  lead: "Our logo embodies our core values and represents our community."
  image: UUSC_ICON.jpg
  image_alt: Umpqua United Soccer Club icon
  items:
    - "Passion"
    - "Resilience"
    - "Respect"
    - "Teamwork"
    - "Commitment"
  text_after: "The \"74\" represents the year soccer was founded in our community. The green circle represents our community and our families—both where we come from and who we represent."
---

{% include page-header.html %}
{% include about-open.html %}
{% include about-intro.html %}
{% include block-list.html block=page.values %}
{% include about-contact.html %}
{% include about-close.html %}
