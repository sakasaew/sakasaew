(function () {
  const img = document.querySelector('.hero-parallax');
  if (!img) return;

  function tick() {
    img.style.transform = 'translateY(' + (window.scrollY * 0.2) + 'px)';
  }

  window.addEventListener('scroll', tick, { passive: true });
  tick();
})();
