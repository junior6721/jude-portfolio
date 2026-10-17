/* ═══════ MAIN — Render dynamic content ═══════ */
(function () {
  /* ── FOND : POLYÈDRES FILAIRES FLOTTANTS ── */
  const polyVariants = [
    '<polygon points="50,6 90,29 90,71 50,94 10,71 10,29"/><polygon points="50,30 74,44 74,68 50,82 26,68 26,44"/><path d="M50 6L50 30M90 29L74 44M90 71L74 68M50 94L50 82M10 71L26 68M10 29L26 44"/><path d="M50 30L74 68M74 44L50 82M74 44L26 68M26 44L50 82M26 44L74 68M50 30L26 68"/><path d="M10 29L90 71"/>',
    '<polygon points="50,6 90,29 90,75 50,98 10,75 10,29"/><path d="M50 52L10 29M50 52L90 29M50 52L50 98"/><path d="M50 6L90 75M50 6L10 75"/>',
    '<polygon points="50,6 92,80 8,80"/><polygon points="50,36 74,64 26,64"/><path d="M50 6L50 36M92 80L74 64M8 80L26 64"/><path d="M50 36L74 64M50 36L26 64M26 64L74 64"/><path d="M50 6L8 80M50 6L92 80M8 80L92 80"/>'
  ];
  const polyLayout = [
    { x: '3%',  y: '6%',  s: 96,  o: 0.34, v: 0, t: 56, d: -4 },
    { x: '14%', y: '34%', s: 64,  o: 0.22, v: 1, t: 44, d: -12 },
    { x: '5%',  y: '62%', s: 124, o: 0.28, v: 2, t: 62, d: -20, hideSm: true },
    { x: '17%', y: '84%', s: 56,  o: 0.18, v: 0, t: 38, d: -8, hideSm: true },
    { x: '26%', y: '14%', s: 76,  o: 0.24, v: 2, t: 48, d: -16 },
    { x: '34%', y: '52%', s: 104, o: 0.20, v: 1, t: 66, d: -24, hideSm: true },
    { x: '44%', y: '26%', s: 58,  o: 0.16, v: 0, t: 40, d: -6 },
    { x: '52%', y: '74%', s: 88,  o: 0.26, v: 2, t: 54, d: -18, hideSm: true },
    { x: '61%', y: '10%', s: 68,  o: 0.22, v: 1, t: 46, d: -10 },
    { x: '68%', y: '46%', s: 116, o: 0.30, v: 0, t: 60, d: -26 },
    { x: '77%', y: '68%', s: 62,  o: 0.20, v: 2, t: 42, d: -14, hideSm: true },
    { x: '84%', y: '22%', s: 98,  o: 0.26, v: 1, t: 58, d: -22 },
    { x: '92%', y: '54%', s: 72,  o: 0.22, v: 0, t: 50, d: -9 },
    { x: '88%', y: '86%', s: 110, o: 0.18, v: 2, t: 64, d: -30, hideSm: true },
    { x: '46%', y: '5%',  s: 52,  o: 0.16, v: 1, t: 36, d: -3 },
    { x: '23%', y: '70%', s: 46,  o: 0.14, v: 0, t: 34, d: -5, hideSm: true },
    { x: '57%', y: '38%', s: 80,  o: 0.90, v: 0, t: 48, d: -11, glow: true },
    { x: '29%', y: '88%', s: 64,  o: 0.85, v: 2, t: 52, d: -17, glow: true }
  ];
  const polyHost = document.getElementById('bgPolyhedra');
  if (polyHost) {
    polyHost.innerHTML = polyLayout.map(p => `
      <span class="poly${p.glow ? ' glow' : ''}${p.hideSm ? ' hide-sm' : ''}"
        style="--x:${p.x};--y:${p.y};--s:${p.s}px;--o:${p.o};--t:${p.t}s;--d:${p.d}s">
        <svg viewBox="0 0 100 100" aria-hidden="true">${polyVariants[p.v]}</svg>
      </span>
    `).join('');
  }

  /* ── SERVICES ── */
  const services = [
    { title: "Création de sites vitrines", desc: "Un site clair, rapide et adapté à votre activité, pensé pour rassurer vos visiteurs et les transformer en clients.", icon: "monitor", color: "blue" },
    { title: "Applications web", desc: "Tableaux de bord, portails clients et outils internes : je développe ce qui simplifie vraiment votre travail au quotidien.", icon: "code", color: "violet" },
    { title: "Boutiques en ligne", desc: "Catalogue, panier, paiement mobile et suivi des commandes : votre boutique tourne sans accroc, sur mobile comme sur ordinateur.", icon: "cart", color: "emerald" },
    { title: "Intégration d'API", desc: "Paiements, formulaires, notifications et services tiers : vos outils dialoguent enfin entre eux, de façon fiable.", icon: "link", color: "cyan" },
    { title: "Refonte de site web", desc: "Votre site actuel devient plus rapide, plus clair et plus moderne, sans perdre vos contenus ni vos positions.", icon: "refresh", color: "amber" },
    { title: "Maintenance et optimisation", desc: "Mises à jour, corrections, sécurité et vitesse : je veille sur votre site pour qu'il reste fiable jour après jour.", icon: "settings", color: "rose" },
    { title: "Déploiement et hébergement", desc: "Mise en ligne, nom de domaine, HTTPS et sauvegardes : tout est configuré proprement, puis surveillé.", icon: "upload", color: "orange" },
    { title: "Référencement (SEO) technique", desc: "Structure, métadonnées et performance optimisées pour que Google comprenne — et référence — votre site.", icon: "search", color: "teal" }
  ];

  const icons = {
    monitor: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    code: '<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    cart: '<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    refresh: '<svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
    settings: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    upload: '<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
  };

  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid) {
    servicesGrid.innerHTML = services.map(s => `
      <div class="service-card reveal svc-${s.color}">
        <div class="card-icon">${icons[s.icon]}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  /* ── PROJECTS ── */
  const projects = [
    {
      id: 1, title: "TechDepot Benin", type: "E-Commerce",
      img: "images/projects/techdepot.svg",
      desc: "Marketplace technology pour l'achat et la vente de produits high-tech au Bénin.",
      features: ["Catalogue produits", "Paiement mobile", "Gestion commandes", "Interface responsive"],
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-Commerce", featured: true,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 2, title: "PhoneSecure", type: "Application Web",
      img: "images/projects/phonesecure.svg",
      desc: "Application de sécurisation et gestion de téléphones mobiles avec suivi GPS.",
      features: ["Géolocalisation", "Alertes sécurité", "Historique mouvements", "Tableau de bord"],
      tech: ["Vue.js", "PHP", "MySQL", "API GPS"],
      category: "Application", featured: false,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 3, title: "Inventix Cloud", type: "SaaS Platform",
      img: "images/projects/inventix.svg",
      desc: "Plateforme cloud de gestion d'inventaire pour entreprises.",
      features: ["Multi-utilisateurs", "Rapports analytics", "Export données", "API REST"],
      tech: ["React", "Django", "PostgreSQL", "Docker"],
      category: "SaaS", featured: false,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 4, title: "Stock Management", type: "Application Mobile",
      img: "images/projects/stock.svg",
      desc: "Application de gestion de stock temps réel pour commerçants.",
      features: ["QR Code scanning", "Alertes rupture", "Multi-entrepôts", "Offline first"],
      tech: ["React Native", "Firebase", "Node.js"],
      category: "Application", featured: false,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 5, title: "ArchivEcole", type: "Système d'information",
      img: "images/projects/archivcole.svg",
      desc: "Système de gestion des archives scolaires pour établissements éducatifs.",
      features: ["Base élèves", "Bulletins numériques", "Recherche avancée", "Sauvegarde cloud"],
      tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      category: "Éducation", featured: false,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 6, title: "Marketplace Locale", type: "E-Commerce",
      img: "images/projects/marketplace.svg",
      desc: "Place de marché en ligne connectant vendeurs locaux et acheteurs au Bénin.",
      features: ["Profil vendeur", "Chat intégré", "Paiement sécurisé", "Livraison tracking"],
      tech: ["Next.js", "Prisma", "Stripe", "Tailwind"],
      category: "E-Commerce", featured: false,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 7, title: "BizAssist", type: "Application Web",
      img: "images/projects/bizassist.svg",
      desc: "Assistant numérique pour entrepreneurs avec outils de gestion intégrés.",
      features: ["Comptabilité simplifiée", "Gestion clients", "Rapports financiers", "Rappels automatiques"],
      tech: ["React", "Python", "FastAPI", "Redis"],
      category: "Business", featured: false,
      demo: "#", github: "https://github.com/junior6721"
    }
  ];

  const featured = projects.find(p => p.featured);
  const featuredEl = document.getElementById('featuredProject');
  if (featuredEl && featured) {
    featuredEl.innerHTML = `
      <div class="project-card featured-project">
        <div class="project-shot">
          <img src="${featured.img}" alt="Aperçu de ${featured.title}" loading="lazy">
        </div>
        <div class="project-content">
          <p class="project-type">${featured.type}</p>
          <h3>${featured.title}</h3>
          <p>${featured.desc}</p>
          <ul class="feature-list">
            ${featured.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="tech-row">
            ${featured.tech.map(t => `<span>${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${featured.demo}" target="_blank" rel="noopener">Voir le projet</a>
            <a href="${featured.github}" target="_blank" rel="noopener">Code source</a>
          </div>
        </div>
      </div>
    `;
  }

  // Filters
  const categories = ['Tous', ...new Set(projects.filter(p => !p.featured).map(p => p.category))];
  const filterBar = document.getElementById('filterBar');
  if (filterBar) {
    filterBar.innerHTML = categories.map((c, i) =>
      `<button class="filter-button${i === 0 ? ' active' : ''}" data-filter="${c}">${c}</button>`
    ).join('');
    filterBar.querySelectorAll('.filter-button').forEach(btn => {
      btn.addEventListener('click', () => {
        filterBar.querySelectorAll('.filter-button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
      });
    });
  }

  function renderProjects(filter = 'Tous') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    const list = projects.filter(p => !p.featured);
    const filtered = filter === 'Tous' ? list : list.filter(p => p.category === filter);
    grid.innerHTML = filtered.map(p => `
      <div class="project-card reveal" data-category="${p.category}">
        <div class="project-shot">
          <img src="${p.img}" alt="Aperçu de ${p.title}" loading="lazy">
        </div>
        <div class="project-content">
          <p class="project-type">${p.type}</p>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="tech-row">
            ${p.tech.map(t => `<span>${t}</span>`).join('')}
          </div>
          <div class="project-links${p.demo === '#' ? ' single-link' : ''}">
            ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" rel="noopener">Démo</a>` : ''}
            <a href="${p.github}" target="_blank" rel="noopener">Code source</a>
          </div>
        </div>
      </div>
    `).join('');
    // Re-observe new reveals
    grid.querySelectorAll('.reveal').forEach(el => {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
        });
      }, { threshold: 0.08 });
      io.observe(el);
    });
  }
  renderProjects();

  /* ── SKILLS ── */
  const skills = [
    { title: "Frontend", color: "blue", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { title: "Backend", color: "violet", items: ["Node.js", "Express.js", "PHP", "Laravel"] },
    { title: "Bases de données", color: "emerald", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { title: "Outils", color: "amber", items: ["Git", "GitHub", "VS Code", "Figma", "FileZilla"] }
  ];

  const skillsGrid = document.getElementById('skillsGrid');
  if (skillsGrid) {
    skillsGrid.innerHTML = skills.map(s => `
      <div class="skill-column reveal svc-${s.color}">
        <h3>${s.title}</h3>
        <ul class="skill-list">
          ${s.items.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  /* ── PROCESS ── */
  const process = [
    { step: "01", title: "Découverte et cadrage", desc: "On échange sur vos objectifs, votre public et vos contraintes. Je clarifie le périmètre, les priorités et le calendrier avant de commencer." },
    { step: "02", title: "Conception et maquettes", desc: "Wireframes, design des écrans et validation de la direction visuelle — aucune ligne de code n'est écrite avant votre accord." },
    { step: "03", title: "Développement", desc: "Intégration de l'interface, API et base de données. Vous suivez l'avancement sur un environnement de préproduction, à chaque étape." },
    { step: "04", title: "Tests et mise en ligne", desc: "Recette sur mobile et ordinateur, optimisation des performances, déploiement, nom de domaine et HTTPS configurés proprement." },
    { step: "05", title: "Suivi et maintenance", desc: "Corrections, évolutions et accompagnement après livraison pour garder un projet fiable et à jour dans la durée." }
  ];

  const processList = document.getElementById('processList');
  if (processList) {
    processList.innerHTML = process.map(p => `
      <article>
        <h3>${p.step} — ${p.title}</h3>
        <p>${p.desc}</p>
      </article>
    `).join('');
  }

  /* ── STATS (optional) ── */
  // Add stat cards if needed

  /* ── REVEAL all dynamically created .reveal elements ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => revealObserver.observe(el));
})();
