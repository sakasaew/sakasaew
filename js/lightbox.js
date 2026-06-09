(function () {
  let images = [];
  let index = 0;

  const overlay = document.createElement('div');
  overlay.id = 'lb-overlay';
  overlay.style.cssText = [
    'display:none',
    'position:fixed',
    'inset:0',
    'background:rgba(0,0,0,0.92)',
    'z-index:1000',
    'align-items:center',
    'justify-content:center',
    'opacity:0',
    'transition:opacity 0.35s ease',
  ].join(';');

  overlay.innerHTML = `
    <button id="lb-close" aria-label="閉じる" style="position:absolute;top:1rem;right:1.25rem;color:rgba(255,255,255,0.7);font-size:2rem;background:none;border:none;cursor:pointer;line-height:1;">&times;</button>
    <button id="lb-prev" aria-label="前へ" style="position:absolute;left:1rem;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.7);font-size:2.5rem;background:none;border:none;cursor:pointer;line-height:1;">&#8249;</button>
    <div style="max-width:90vw;max-height:90vh;display:flex;flex-direction:column;align-items:center;gap:0.75rem;">
      <img id="lb-img" src="" alt="" style="max-width:90vw;max-height:82vh;object-fit:contain;opacity:0;transform:scale(0.97);transition:opacity 0.25s ease,transform 0.25s ease;" />
      <span id="lb-counter" style="color:rgba(255,255,255,0.45);font-size:0.7rem;letter-spacing:0.2rem;"></span>
    </div>
    <button id="lb-next" aria-label="次へ" style="position:absolute;right:1rem;top:50%;transform:translateY(-50%);color:rgba(255,255,255,0.7);font-size:2.5rem;background:none;border:none;cursor:pointer;line-height:1;">&#8250;</button>
  `;
  document.body.appendChild(overlay);

  const imgEl   = document.getElementById('lb-img');
  const counter = document.getElementById('lb-counter');
  const prevBtn = document.getElementById('lb-prev');
  const nextBtn = document.getElementById('lb-next');

  function show(i) {
    imgEl.style.opacity = '0';
    imgEl.style.transform = 'scale(0.97)';
    setTimeout(function () {
      index = (i + images.length) % images.length;
      imgEl.src = images[index].src;
      imgEl.alt = images[index].alt || '';
      const multi = images.length > 1;
      counter.textContent = multi ? (index + 1) + ' / ' + images.length : '';
      prevBtn.style.display = multi ? 'block' : 'none';
      nextBtn.style.display = multi ? 'block' : 'none';
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'scale(1)';
    }, 180);
  }

  window.openLightbox = function (imgs, startIndex) {
    images = imgs;
    index = startIndex || 0;
    imgEl.src = images[index].src;
    imgEl.alt = images[index].alt || '';
    const multi = images.length > 1;
    counter.textContent = multi ? (index + 1) + ' / ' + images.length : '';
    prevBtn.style.display = multi ? 'block' : 'none';
    nextBtn.style.display = multi ? 'block' : 'none';
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.style.opacity = '1';
        imgEl.style.opacity = '1';
        imgEl.style.transform = 'scale(1)';
      });
    });
  };

  function close() {
    overlay.style.opacity = '0';
    imgEl.style.opacity = '0';
    imgEl.style.transform = 'scale(0.97)';
    setTimeout(function () {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }, 350);
  }

  document.getElementById('lb-close').addEventListener('click', close);
  prevBtn.addEventListener('click', function () { show(index - 1); });
  nextBtn.addEventListener('click', function () { show(index + 1); });
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function (e) {
    if (overlay.style.display === 'none') return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
})();
