/* ── ハンバーガーメニュー（全ページ共通） ──
   開く: カーテン（clip-path）＋リンクが順番に浮かぶ＋背景を暗くする */
const menuBtn   = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

const MENU_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'; // ふわっと減速
const CLOSED_CLIP = 'inset(0 0 100% 0)';
const OPEN_CLIP   = 'inset(0 0 0 0)';
const items = [...mobileMenu.querySelectorAll('li')];
const desktopQuery = window.matchMedia('(min-width: 768px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// 暗幕（ヘッダーの下にだけ敷く。タップでメニューを閉じる）
const overlay = document.createElement('div');
overlay.style.cssText = 'position:fixed;left:0;right:0;top:64px;bottom:0;z-index:40;background:rgba(0,0,0,.15);display:none';
document.body.appendChild(overlay);

let menuOpen = false;
let anims = [];

menuBtn.setAttribute('aria-expanded', 'false');

function run(el, keyframes, opts) {
  const anim = el.animate(keyframes, {
    easing: MENU_EASING,
    fill: 'both',
    ...opts,
    duration: reducedMotion.matches ? 0 : opts.duration,
    delay: reducedMotion.matches ? 0 : (opts.delay || 0),
  });
  anims.push(anim);
  return anim;
}

function setBars(open) {
  bar1.style.transform = open ? 'translateY(6px) rotate(45deg)' : '';
  bar2.style.opacity   = open ? '0' : '1';
  bar3.style.transform = open ? 'translateY(-6px) rotate(-45deg)' : '';
  menuBtn.setAttribute('aria-expanded', String(open));
}

function animateMenu(open) {
  // 連打されても今の状態から繋ぐため、キャンセル前に現在値を読む
  const menuHidden = mobileMenu.classList.contains('hidden');
  const style = getComputedStyle(mobileMenu);
  const fromClip = menuHidden ? CLOSED_CLIP : (style.clipPath === 'none' ? OPEN_CLIP : style.clipPath);
  const fromOpacity = menuHidden ? 0 : parseFloat(style.opacity);
  const fromOverlay = overlay.style.display === 'none' ? 0 : parseFloat(getComputedStyle(overlay).opacity);
  anims.forEach(a => a.cancel());
  anims = [];

  if (open) {
    mobileMenu.classList.remove('hidden');
    overlay.style.display = 'block';
  }
  const duration = open ? 450 : 320;

  const menuAnim = run(mobileMenu, [
    { clipPath: fromClip, opacity: fromOpacity },
    { clipPath: open ? OPEN_CLIP : CLOSED_CLIP, opacity: open ? 1 : 0 },
  ], { duration });
  menuAnim.onfinish = () => {
    menuAnim.cancel(); // 固定値を外して自然な表示に戻す
    anims = anims.filter(a => a !== menuAnim);
    if (!menuOpen) mobileMenu.classList.add('hidden');
  };

  const overlayAnim = run(overlay, [
    { opacity: fromOverlay },
    { opacity: open ? 1 : 0 },
  ], { duration, easing: 'ease' });
  overlayAnim.onfinish = () => { if (!menuOpen) overlay.style.display = 'none'; };

  // リンクが 70ms ずつずれて下から浮かぶ（開くときのみ）
  if (open) {
    items.forEach((li, i) => {
      run(li, [
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 550, delay: 120 + i * 70, fill: 'backwards' });
    });
  }
}

function setMenu(open) {
  menuOpen = open;
  setBars(open);
  animateMenu(open);
}

menuBtn.addEventListener('click', () => setMenu(!menuOpen));
overlay.addEventListener('click', () => { if (menuOpen) setMenu(false); });

// PC 幅に広がったら、開いたままにならないよう即座に閉じる
desktopQuery.addEventListener('change', e => {
  if (!e.matches || !menuOpen) return;
  anims.forEach(a => a.cancel());
  anims = [];
  menuOpen = false;
  setBars(false);
  mobileMenu.classList.add('hidden');
  overlay.style.display = 'none';
});
