---
layout: default
title: Tryouts
subtitle: HS Winter League Tryouts — Join Umpqua United
show_register_button: true
button_text: Register for tryouts
# Intro
intro:
  title: Tryouts
  lead: "Tryouts for our competitive teams and HS Winter League are held annually. Register through our registration platform to secure your spot."
# Dates & process
dates:
  title: Dates & process
  lead: "Check back for the latest tryout dates and age bands. All registration is handled through our member platform."
# Why Umpqua United
why:
  title: Why Umpqua United?
  lead: "We are a non-profit club founded in 1974, offering quality recreational and competitive programs for ages 5–14. Our mission is to develop outstanding individuals through quality programs and to foster a life-long passion for soccer."
  button_title: Learn more about us
  button_link: /about
# Footer links
footer_links:
  title: More information
  links:
    - title: Code of Conduct
      url: /about/code-of-conduct
---

{% include page-header.html %}
{% include content-open.html %}
{% include block-simple.html block=page.intro %}
{% include block-simple.html block=page.dates %}
{% include block-simple.html block=page.why %}
{% include block-links.html block=page.footer_links %}
{% include block-button.html %}
{% include content-close.html %}
