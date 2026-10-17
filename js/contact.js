/* ═══════ CONTACT ═══════ */
(function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const honey = form.querySelector('[name="_gotcha"]');
    if (honey && honey.value) return;

    btn.disabled = true;
    btn.textContent = 'Envoi en cours...';
    status.textContent = '';
    status.style.color = '';

    try {
      const res = await fetch(CONFIG.formspree, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      const json = await res.json();
      if (json.ok) {
        status.textContent = 'Message envoyé avec succès ! Je vous réponds vite.';
        status.style.color = '#73d650';
        form.reset();
      } else {
        status.textContent = 'Erreur lors de l\'envoi. Réessayez.';
        status.style.color = '#ff4f57';
      }
    } catch {
      status.textContent = 'Erreur réseau. Vérifiez votre connexion.';
      status.style.color = '#ff4f57';
    }
    btn.disabled = false;
    btn.textContent = 'Soumettre';
  });
})();
