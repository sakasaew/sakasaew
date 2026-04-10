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

function updateHeroBg() {
  heroBg.style.transform = `scale(1.1) translateY(${window.scrollY * 0.3}px)`;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateHeroBg);
    ticking = true;
  }
});

updateHeroBg();

/* ── スクロールボタン ── */
document.getElementById('scroll-btn').addEventListener('click', () => {
  document.getElementById('mission').scrollIntoView({ behavior: 'smooth' });
});

/* ── セクション入場 (IntersectionObserver) ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
