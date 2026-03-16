// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });

    mainNav.querySelectorAll('.nav-link, .dropdown a').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
      });
    });

    document.addEventListener('click', function(event) {
      if (!mainNav.contains(event.target) && !mobileMenuToggle.contains(event.target) && mainNav.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
      }
    });
  }

  // Announcement banner rotator (every 5 seconds)
  const rotator = document.querySelector('.announcement-banner-rotator');
  if (rotator) {
    const slides = rotator.querySelectorAll('.announcement-banner-slide');
    if (slides.length > 1) {
      let index = 0;
      setInterval(function() {
        slides[index].classList.remove('announcement-banner-slide--active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('announcement-banner-slide--active');
      }, 5000);
    }
  }
});
