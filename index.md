---
layout: home

# Hero slider (one or more slides; prev/next buttons show if more than one)
hero_slides:
  - title: "Central Oregon Youth Soccer"
    tagline: "Competitive and recreational soccer for ages 5–14"
    cta_primary_text: Register
    cta_primary_url: "https://www.umpquaunited.org/Default.aspx?tabid=1903242"
    cta_secondary_text: Get to know us
    cta_secondary_url: /about
    image: hero/soccer-kids.jpg
  - title: "Join Umpqua United"
    tagline: "Recreational & Competitive"
    text: "Ages 5–14 rec, ages 9–14 competitive. Fall and spring seasons."
    cta_primary_text: View programs
    cta_primary_url: /programs
    cta_secondary_text: Tryouts
    cta_secondary_url: /tryouts
    image: hero/soccer-field.jpg

# Announcement banner (header; leave empty to hide)
announcements:
  - "Rec season practices begin the week of March 30th!"
  - "Coaches wanted! We need 1 coach for U6, 2 coaches for U8, and 1 coach for U14!"

# Sponsors (logos in assets/images/sponsors/)
sponsors:
  - name: In-N-Out Burger
    url: https://www.in-n-out.com/
    image: inandout.png
  - name: Lowe's Home Improvement
    url: https://www.lowes.com/
    image: lowes.jpg
  - name: DC Farms Coop
    url: https://douglascountyfarmerscoop.com/
    image: dcfarmers.jpg
  - name: Sherm's Thunderbird
    url: https://www.shermsmarkets.com/
    image: sherms.png
  - name: Roseburg Forest Products
    url: https://www.roseburg.com/
    image: rfp.png

# Featured CTA block
cta:
  heading: "2026 Spring Rec — Registration closed"
  text: "Fall 2026 registration opens in May. <strong>HS Winter League Tryouts</strong> — register now."
  button_title: Tryouts
  button_link: /tryouts

# Location section (simple-content block)
location:
  title: Location
  lead: "Practices and home game fields are at Fir Grove Park in Roseburg, Oregon."
  text: "576 W Stewart Park Dr, Roseburg, OR 97471"
  button_title: Directions
  button_link: https://maps.app.goo.gl/sBSXhnc9PTryRgYw9

# Programs section (tiles; urls are fixed in layout)
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

# Field map section (simple-content block)
field_map:
  title: Season Field Map
  lead: "2026 Spring Field Map — Stewart Park, Roseburg"
  button_title: View map
  button_link: /fields

# Support UUSC section (steps block)
support:
  title: Support UUSC
  lead: "Support our club with <strong>Grab a Blue Bag</strong> (BottleDrop Give):"
  steps:
    - "Grab a blue bag at the club"
    - "Fill the bag with cans and bottles"
    - "Drop off the bag"
  button_title: Read more
  button_link: /get-involved/#support

# Upcoming events section (button_link falls back to site.stack_sports_register in layout)
events:
  title: Upcoming events
  lead: "Game schedules and full calendar are on our registration platform."
  button_title: View schedule

# Important club information links
club_info_links:
  - title: Game Schedule
    url: https://www.umpquaunited.org/Default.aspx?tabid=2723647
  - title: League Rules
    url: /about/league-rules
  - title: Registration & Forms
    url: https://www.umpquaunited.org/Default.aspx?tabid=1903238
  - title: Field Map
    url: /fields
  - title: Code of Conduct
    url: /about/code-of-conduct

# Helpful links
helpful_links:
  - title: Oregon Youth Soccer Association
    url: https://oregonyouthsoccer.org/
  - title: Available Programs
    url: /programs
  - title: Volunteer Opportunities
    url: /get-involved/#volunteers
  - title: OYSA COVID-19 Resource Page
    url: https://oregonyouthsoccer.org/about-oysa/covid-19-info/
---

{% include hero.html %}
{% include sponsors.html %}
{% include block-cta.html block=page.cta %}
{% include block-simple.html block=page.location wide=true %}
{% include block-tiles.html block=page.programs wide=true %}
{% include block-simple.html block=page.field_map %}
{% include block-steps.html block=page.support %}
{% assign events_button_link = page.events.button_link | default: page.events.button_url | default: site.stack_sports_register %}
{% include block-simple.html block=page.events button_link=events_button_link %}
{% include block-links.html title="Important club information" links=page.club_info_links background="secondary" %}
{% include block-links.html title="Helpful links" links=page.helpful_links background="primary" %}
