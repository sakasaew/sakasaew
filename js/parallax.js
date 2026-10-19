(function () {
  const img = document.querySelector('.hero-parallax');
  if (!img) return;

  let ticking = false;

  function tick() {
    img.style.transform = 'translateY(calc(-30% + ' + (window.scrollY * 0.2) + 'px))';
    ticking = false;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(tick);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  tick();
})();
