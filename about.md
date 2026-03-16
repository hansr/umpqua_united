---
layout: default
title: About
---

<section class="page-header">
  <div class="container">
    <h1>About Umpqua United</h1>
    <p class="page-subtitle">Who we are</p>
  </div>
</section>

<section class="page-content">
  <div class="container">
    <div class="content-grid">
      <div class="content-main">
        <h2>Our story</h2>
        <p>Founded in {{ site.founded }}, Umpqua United is a non-profit soccer club serving Roseburg and Douglas County. We offer recreational soccer for ages 5–14 and competitive soccer for ages 9–14. We are affiliated with the Oregon Youth Soccer Association (OYSA).</p>

        <h2>Mission</h2>
        <p>{{ site.mission }}</p>

        <h2>Vision</h2>
        <p>{{ site.vision }}</p>

        <h2>Our Values</h2>
        <p>Our logo embodies our core values and represents our community.</p>
        <figure class="about-icon-figure">
          <img src="{{ '/assets/images/UUSC_ICON.jpg' | relative_url }}" alt="Umpqua United Soccer Club icon" class="about-icon-img">
        </figure>
        <p>Each branch of the Douglas Fir tree represents a core value:</p>
        <ul class="values-list">
          <li><strong>Passion</strong></li>
          <li><strong>Resilience</strong></li>
          <li><strong>Respect</strong></li>
          <li><strong>Teamwork</strong></li>
          <li><strong>Commitment</strong></li>
        </ul>
        <p>The &ldquo;74&rdquo; represents the year soccer was founded in our community.</p>
        <p>The green circle represents our community and our families—both where we come from and who we represent.</p>

        <h2>Contact</h2>
        <p>
          {{ site.contact.address }}<br>
          Phone: <a href="tel:{{ site.contact.phone }}">{{ site.contact.phone }}</a><br>
          <a href="mailto:{{ site.contact.email }}">{{ site.contact.email }}</a>
        </p>
      </div>

      <div class="content-sidebar">
        <div class="sidebar-card">
          <h3>Information</h3>
          <ul class="facts-list">
            <li><strong>Founded:</strong> {{ site.founded }}</li>
            <li><strong>Location:</strong> {{ site.location }}</li>
            <li><strong>Recreational:</strong> Ages 5–14</li>
            <li><strong>Competitive:</strong> Ages 9–14</li>
          </ul>
          <p class="sidebar-links">
            <a href="{{ '/about/staff' | relative_url }}">Our Staff</a><br>
            <a href="{{ '/brand-guidelines.html' | relative_url }}">Brand guidelines</a><br>
            <a href="{{ '/about/code-of-conduct' | relative_url }}">Code of Conduct</a>
          </p>
        </div>
        <div class="sidebar-card">
          <h3>Get involved</h3>
          <p>Volunteer as a coach or help support the club.</p>
          <a href="{{ '/get-involved' | relative_url }}" class="btn btn-primary">Get involved</a>
        </div>
      </div>
    </div>
  </div>
</section>
