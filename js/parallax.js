(function () {
  const img = document.querySelector('.hero-parallax');
  if (!img) return;

  let ticking = false;

  function tick() {
    img.style.transform = 'translateY(calc(-30% + ' + (window.scrollY * 0.2) + 'px))';
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(tick);
      ticking = true;
    }
  }, { passive: true });

  tick();
})();
