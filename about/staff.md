---
layout: default
title: Our Staff
---

<section class="page-header">
  <div class="container">
    <h1>Our Staff</h1>
    <p class="page-subtitle">Board and key contacts</p>
  </div>
</section>

<section class="page-content">
  <div class="container">
    <div class="content-main">
      <p>Meet our board and key staff. For the latest contacts, visit our office or check the registration platform.</p>
      <p>
        {{ site.contact.address }}<br>
        Phone: <a href="tel:{{ site.contact.phone }}">{{ site.contact.phone }}</a><br>
        <a href="mailto:{{ site.contact.email }}">{{ site.contact.email }}</a>
      </p>
      <p><a href="{{ '/about' | relative_url }}">Back to About</a></p>
    </div>
  </div>
</section>
