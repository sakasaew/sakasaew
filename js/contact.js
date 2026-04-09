/* ── お問い合わせフォーム送信 ── */
const form        = document.getElementById('contact-form');
const successMsg  = document.getElementById('form-success');
const errorMsg    = document.getElementById('form-error');
const submitBtn   = document.getElementById('submit-btn');
const submitLabel = document.getElementById('submit-label');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }

  submitBtn.disabled = true;
  submitLabel.textContent = '送信中…';
  errorMsg.classList.add('hidden');

  try {
    const res = await fetch('https://formspree.io/f/mjgpdwnp', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      form.classList.add('hidden');
      successMsg.classList.remove('hidden');
    } else {
      throw new Error();
    }
  } catch {
    errorMsg.classList.remove('hidden');
    submitBtn.disabled = false;
    submitLabel.textContent = '送信する →';
  }
});
