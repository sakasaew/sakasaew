/* ── ヒーロー テキスト入場 ── */
const heroLines = document.querySelectorAll('.hero-line');
requestAnimationFrame(() => {
  heroLines.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 180);
  });
});

/* ── パララックス ── */
const heroBg = document.getElementById('hero-bg');
let ticking = false;
let cachedScrollY = 0;

function updateHeroBg() {
  heroBg.style.transform = `scale(1.1) translateY(${cachedScrollY * 0.3}px)`;
  ticking = false;
}

window.addEventListener('scroll', () => {
  cachedScrollY = window.scrollY;
  if (!ticking) {
    requestAnimationFrame(updateHeroBg);
    ticking = true;
  }
}, { passive: true });

requestAnimationFrame(updateHeroBg);

/* ── スクロールボタン ── */
document.getElementById('scroll-btn').addEventListener('click', () => {
  document.getElementById('mission').scrollIntoView({ behavior: 'smooth' });
});
