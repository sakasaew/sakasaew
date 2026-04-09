/* ── ハンバーガーメニュー（全ページ共通） ── */
const menuBtn   = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('hidden') === false;
  bar1.style.transform = open ? 'translateY(6px) rotate(45deg)' : '';
  bar2.style.opacity   = open ? '0' : '1';
  bar3.style.transform = open ? 'translateY(-6px) rotate(-45deg)' : '';
});
