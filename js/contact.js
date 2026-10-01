/* ═══════ CONTACT ═══════ */
(function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const honey = form.querySelector('[name="website"]');
    if (honey && honey.value) return;

    btn.disabled = true;
    btn.textContent = 'Envoi en cours...';
    status.textContent = '';
    status.style.color = '';

    const data = new FormData(form);
    data.append('access_key', CONFIG.web3formsKey);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', body: data
      });
      const json = await res.json();
      if (json.success) {
        status.textContent = 'Message envoyé avec succès !';
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
