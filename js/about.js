/* ── プロフィール アコーディオン ── */
const toggle = document.getElementById('profile-toggle');
const body   = document.getElementById('profile-body');
const icon   = document.getElementById('profile-icon');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';

  if (isOpen) {
    body.style.display = 'none';
    toggle.setAttribute('aria-expanded', 'false');
    icon.textContent = '+ もっと見る';
  } else {
    body.style.display = 'flex';
    toggle.setAttribute('aria-expanded', 'true');
    icon.textContent = '− 閉じる';
  }
});
