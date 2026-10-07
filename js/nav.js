/* ── ハンバーガーメニュー（全ページ共通） ── */
const menuBtn   = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

const MENU_DURATION = 400;
const MENU_EASING   = 'cubic-bezier(0.22, 1, 0.36, 1)'; // ふわっと減速
let menuOpen = false;
let menuAnim = null;

mobileMenu.style.overflow = 'hidden';
menuBtn.setAttribute('aria-expanded', 'false');

function animateMenu(open) {
  // 途中で連打されても現在の高さ・透明度から繋げる
  const fromHeight  = mobileMenu.classList.contains('hidden') ? 0 : mobileMenu.getBoundingClientRect().height;
  const fromOpacity = mobileMenu.classList.contains('hidden') ? 0 : parseFloat(getComputedStyle(mobileMenu).opacity);
  if (menuAnim) menuAnim.cancel();

  if (open) mobileMenu.classList.remove('hidden');
  const toHeight  = open ? mobileMenu.scrollHeight : 0;
  const toOpacity = open ? 1 : 0;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const anim = mobileMenu.animate(
    [
      { height: fromHeight + 'px', opacity: fromOpacity },
      { height: toHeight + 'px',   opacity: toOpacity },
    ],
    { duration: reduce ? 0 : MENU_DURATION, easing: MENU_EASING, fill: 'forwards' }
  );
  menuAnim = anim;
  anim.onfinish = () => {
    if (menuAnim !== anim) return;
    anim.cancel();
    menuAnim = null;
    if (!open) mobileMenu.classList.add('hidden');
  };
}

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  animateMenu(menuOpen);
  bar1.style.transform = menuOpen ? 'translateY(6px) rotate(45deg)' : '';
  bar2.style.opacity   = menuOpen ? '0' : '1';
  bar3.style.transform = menuOpen ? 'translateY(-6px) rotate(-45deg)' : '';
  menuBtn.setAttribute('aria-expanded', String(menuOpen));
});
