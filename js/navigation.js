/* ═══════ NAVIGATION ═══════ */
(function () {
  // Preloader — minimum 5 seconds, counter 00 → 100
  const preloader = document.getElementById('preloader');
  const fill = document.getElementById('preloaderFill');
  const percent = document.getElementById('preloaderPercent');
  if (preloader) {
    const DURATION = 5000;
    const start = performance.now();
    let pageLoaded = document.readyState === 'complete';

    window.addEventListener('load', () => { pageLoaded = true; });

    function tick(now) {
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.min(Math.round(eased * 100), pageLoaded ? 100 : 96);
      if (fill) fill.style.width = value + '%';
      if (percent) percent.textContent = String(value).padStart(2, '0');
      if (t < 1 || !pageLoaded) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => preloader.classList.add('done'), 350);
      }
    }
    requestAnimationFrame(tick);

    // Safety: never block more than 8s
    setTimeout(() => preloader.classList.add('done'), 8000);
  }

  const header = document.querySelector('.site-header');
  const navToggle = document.getElementById('navToggle');
  const navPanel = document.getElementById('navPanel');
  const themeToggle = document.getElementById('themeToggle');

  // Theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // Hamburger
  function setMenu(open) {
    navPanel.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  }
  navToggle.addEventListener('click', () => {
    setMenu(!navPanel.classList.contains('is-open'));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navPanel.classList.contains('is-open')) {
      setMenu(false);
      navToggle.focus();
    }
  });
  window.matchMedia('(min-width: 1001px)').addEventListener('change', (e) => {
    if (e.matches) setMenu(false);
  });

  // Active section
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-panel a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-panel a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));

  // Smooth scroll + close mobile menu
  navLinks.forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });
})();
