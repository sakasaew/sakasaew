/* ── プロフィール アコーディオン ── */
const toggle = document.getElementById('profile-toggle');
const body   = document.getElementById('profile-body');
const icon   = document.getElementById('profile-icon');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';

  if (isOpen) {
    body.style.maxHeight = '0';
    body.style.opacity   = '0';
    toggle.setAttribute('aria-expanded', 'false');
    icon.textContent = '+ Read more';
  } else {
    body.style.maxHeight = body.scrollHeight + 'px';
    body.style.opacity   = '1';
    toggle.setAttribute('aria-expanded', 'true');
    icon.textContent = '− Close';
  }
});
