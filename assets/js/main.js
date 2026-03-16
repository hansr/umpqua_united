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

  // Hero slider (optional buttons, auto-advance when multiple slides)
  const heroSlider = document.querySelector('.hero-slider');
  if (heroSlider) {
    const heroSlides = heroSlider.querySelectorAll('.hero-slide');
    const total = heroSlides.length;
    if (total > 1) {
      let heroIndex = 0;
      function goToHeroSlide(i) {
        heroIndex = (i + total) % total;
        heroSlides.forEach(function(s, idx) {
          s.classList.toggle('hero-slide--active', idx === heroIndex);
        });
      }
      const prevBtn = heroSlider.querySelector('.hero-slider-prev');
      const nextBtn = heroSlider.querySelector('.hero-slider-next');
      if (prevBtn) prevBtn.addEventListener('click', function() { goToHeroSlide(heroIndex - 1); });
      if (nextBtn) nextBtn.addEventListener('click', function() { goToHeroSlide(heroIndex + 1); });
      setInterval(function() { goToHeroSlide(heroIndex + 1); }, 6000);
    }
  }

  // Portrait: sponsor logos carousel (single line, advance every 3s)
  const sponsorsGrid = document.getElementById('sponsors-grid');
  if (sponsorsGrid) {
    const links = sponsorsGrid.querySelectorAll('.sponsor-link');
    const count = links.length;
    let sponsorIndex = 0;
    let sponsorInterval = null;
    function getItemWidth() {
      const first = links[0];
      if (!first || !first.offsetWidth) return 156;
      const gap = parseInt(getComputedStyle(sponsorsGrid).gap, 10) || 16;
      return first.offsetWidth + gap;
    }
    function updateSponsorSlide() {
      if (window.innerWidth > 767) return;
      const offset = -sponsorIndex * getItemWidth();
      sponsorsGrid.style.transform = 'translateX(' + offset + 'px)';
    }
    function startSponsorCarousel() {
      if (window.innerWidth <= 767 && count > 0) {
        updateSponsorSlide();
        if (!sponsorInterval) {
          sponsorInterval = setInterval(function() {
            sponsorIndex = (sponsorIndex + 1) % count;
            updateSponsorSlide();
          }, 3000);
        }
      } else {
        if (sponsorInterval) { clearInterval(sponsorInterval); sponsorInterval = null; }
        sponsorsGrid.style.transform = '';
      }
    }
    startSponsorCarousel();
    window.addEventListener('resize', startSponsorCarousel);
  }

  // Doc page TOC: build from h2 headings when .doc-toc is present
  const docToc = document.getElementById('doc-toc');
  const docContent = document.querySelector('.doc-content');
  if (docToc && docContent) {
    const list = docToc.querySelector('.doc-toc__list');
    const h2s = docContent.querySelectorAll('h2');
    if (list && h2s.length > 0) {
      h2s.forEach(function(h2) {
        var id = h2.id;
        if (!id) {
          id = h2.textContent.replace(/\s+/g, '-').replace(/[^\w-]/g, '').toLowerCase();
          h2.id = id;
        }
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + id;
        a.textContent = h2.textContent;
        li.appendChild(a);
        list.appendChild(li);
      });
    } else if (list && h2s.length === 0) {
      docToc.style.display = 'none';
    }
  }
});
