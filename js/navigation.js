/* ═══════ NAVIGATION ═══════ */
(function () {
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
  navToggle.addEventListener('click', () => {
    navPanel.classList.toggle('is-open');
    document.body.classList.toggle('nav-open');
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
    link.addEventListener('click', () => {
      navPanel.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    });
  });
})();
