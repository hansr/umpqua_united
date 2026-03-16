---
layout: default
title: Get Involved
subtitle: Support UUSC and volunteer
# Support UUSC (steps block)
support:
  title: Support UUSC
  lead: "Support our club with <strong>Grab a Blue Bag</strong> (BottleDrop Give):"
  steps:
    - "Grab a blue bag at the club"
    - "Fill the bag with cans and bottles"
    - "Drop off the bag"
  text: "Your support helps us provide quality programs and facilities for youth soccer in Roseburg and Douglas County."
# Volunteers (simple block)
volunteers:
  title: Volunteers
  lead: "We always need <strong>coaches</strong> for our Recreational and Competitive programs. No experience? We'll help you get started."
  text: "For volunteer opportunities, contact us:"
# Volunteer contact links
volunteer_links:
  title: Contact
  links:
    - title: Email us
      url: "mailto:info@umpquaunited.org"
    - title: Call us
      url: "tel:541-672-5089"
# Platform note (simple content only)
platform_note:
  content: "You can also view volunteer opportunities on our registration platform."
---

{% include page-header.html %}
{% include block-steps.html block=page.support %}
{% include block-simple.html block=page.volunteers %}
{% include block-links.html block=page.volunteer_links %}
{% include block-simple.html block=page.platform_note %}
