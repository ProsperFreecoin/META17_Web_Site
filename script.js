// filepath: /home/freecoin/Bureau/META_web_site/script.js
let vantaEffect = null;

function initVanta() {
  if (vantaEffect) vantaEffect.destroy();
  if (window.VANTA && window.VANTA.WAVES) {
    vantaEffect = window.VANTA.WAVES({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x007bff, // primary blue
      shininess: 50.00,
      waveHeight: 18.00,
      waveSpeed: 1.20,
      zoom: 0.85
    });
  }
}

function revealCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((c, i) => {
    setTimeout(() => c.classList.add('visible'), i * 120);
  });
}

window.addEventListener('load', () => {
  initVanta();
  revealCards();
});

window.addEventListener('resize', () => {
  // optional: re-init Vanta on resize to keep it responsive
  initVanta();
});

