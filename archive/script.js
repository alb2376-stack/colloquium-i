const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    tabPanels.forEach((p) => p.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

const glitchToggle = document.getElementById('glitch-toggle');

if (glitchToggle) {
  glitchToggle.addEventListener('click', () => {
    const revealed = glitchToggle.classList.toggle('is-revealed');
    glitchToggle.setAttribute('aria-pressed', String(revealed));
  });

  glitchToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      glitchToggle.click();
    }
  });
}
