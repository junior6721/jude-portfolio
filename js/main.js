/* ═══════ MAIN — Render dynamic content ═══════ */
(function () {
  /* ── SERVICES ── */
  const services = [
    { title: "Création de sites vitrines", desc: "Présentez votre activité avec un site clair, rapide et optimisé pour convertir les visiteurs.", icon: "monitor", color: "red" },
    { title: "Applications web", desc: "Des interfaces interactives, tableaux de bord et outils métier adaptés à vos workflows.", icon: "code", color: "blue" },
    { title: "E-commerce", desc: "Boutiques en ligne avec catalogue, panier, paiement et gestion simplifiée des commandes.", icon: "cart", color: "green" },
    { title: "Intégration API", desc: "Connexion de vos outils, paiements, formulaires, notifications et services externes.", icon: "link", color: "amber" },
    { title: "Refonte de sites web", desc: "Modernisation de l'expérience, de la structure, des performances et de l'image de marque.", icon: "refresh", color: "red" },
    { title: "Maintenance et optimisation", desc: "Corrections, mises à jour, sécurité, vitesse de chargement et suivi technique régulier.", icon: "settings", color: "blue" },
    { title: "Déploiement et hébergement", desc: "Mise en ligne, configuration domaine, SSL, sauvegardes et choix d'hébergement durable.", icon: "upload", color: "green" },
    { title: "SEO technique", desc: "Structure HTML, métadonnées, accessibilité, performance et indexation mieux préparée.", icon: "search", color: "amber" }
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
      <div class="service-card reveal">
        <div class="card-icon ${s.color}">${icons[s.icon]}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  /* ── PROJECTS ── */
  const projects = [
    {
      id: 1, title: "TechDepot Benin", type: "E-Commerce",
      desc: "Marketplace technology pour l'achat et la vente de produits high-tech au Bénin.",
      features: ["Catalogue produits", "Paiement mobile", "Gestion commandes", "Interface responsive"],
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-Commerce", featured: true,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 2, title: "PhoneSecure", type: "Application Web",
      desc: "Application de sécurisation et gestion de téléphones mobiles avec suivi GPS.",
      features: ["Géolocalisation", "Alertes sécurité", "Historique mouvements", "Tableau de bord"],
      tech: ["Vue.js", "PHP", "MySQL", "API GPS"],
      category: "Application", featured: false,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 3, title: "Inventix Cloud", type: "SaaS Platform",
      desc: "Plateforme cloud de gestion d'inventaire pour entreprises.",
      features: ["Multi-utilisateurs", "Rapports analytics", "Export données", "API REST"],
      tech: ["React", "Django", "PostgreSQL", "Docker"],
      category: "SaaS", featured: false,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 4, title: "Stock Management", type: "Application Mobile",
      desc: "Application de gestion de stock temps réel pour commerçants.",
      features: ["QR Code scanning", "Alertes rupture", "Multi-entrepôts", "Offline first"],
      tech: ["React Native", "Firebase", "Node.js"],
      category: "Application", featured: false,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 5, title: "ArchivEcole", type: "Système d'information",
      desc: "Système de gestion des archives scolaires pour établissements éducatifs.",
      features: ["Base élèves", "Bulletins numériques", "Recherche avancée", "Sauvegarde cloud"],
      tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      category: "Éducation", featured: false,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 6, title: "Marketplace Locale", type: "E-Commerce",
      desc: "Place de marché en ligne connectant vendeurs locaux et acheteurs au Bénin.",
      features: ["Profil vendeur", "Chat intégré", "Paiement sécurisé", "Livraison tracking"],
      tech: ["Next.js", "Prisma", "Stripe", "Tailwind"],
      category: "E-Commerce", featured: false,
      demo: "#", github: "https://github.com/junior6721"
    },
    {
      id: 7, title: "BizAssist", type: "Application Web",
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
          <div class="project-image-placeholder">
            <span class="placeholder-text">${featured.title}</span>
          </div>
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
          <div class="project-image-placeholder" style="min-height:180px;">
            <span class="placeholder-text" style="font-size:1.1rem;">${p.title}</span>
          </div>
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
    { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { title: "Backend", items: ["Node.js", "Express.js", "PHP", "Laravel"] },
    { title: "Bases de données", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { title: "Outils", items: ["Git", "GitHub", "VS Code", "Figma", "FileZilla"] }
  ];

  const skillsGrid = document.getElementById('skillsGrid');
  if (skillsGrid) {
    skillsGrid.innerHTML = skills.map(s => `
      <div class="skill-column reveal">
        <h3>${s.title}</h3>
        <ul class="skill-list">
          ${s.items.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  /* ── PROCESS ── */
  const process = [
    { step: "01", title: "Sites web réalisés", desc: "Conception d'interfaces professionnelles, responsives et adaptées à l'identité de chaque client." },
    { step: "02", title: "Applications développées", desc: "Création d'outils web pour simplifier la gestion, centraliser les informations et gagner du temps." },
    { step: "03", title: "Résolution de problèmes techniques", desc: "Correction de bugs, amélioration des performances, optimisation mobile et remise en état de sites." },
    { step: "04", title: "Accompagnement des clients", desc: "Écoute, conseils, documentation et suivi après livraison pour garder un projet fiable dans le temps." }
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
