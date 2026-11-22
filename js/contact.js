/* ── お問い合わせフォーム送信 ── */
const GAS_URL     = 'https://script.google.com/macros/s/AKfycbwdwsM9Y2471FYWEkc3mvsRPL4aMyoghy5HwRv397PH6RmQpaRg5hKVvZOQgttL5C0SeQ/exec';
const form        = document.getElementById('contact-form');
const successMsg  = document.getElementById('form-success');
const notice      = document.getElementById('form-notice');
const errorMsg    = document.getElementById('form-error');
const submitBtn   = document.getElementById('submit-btn');
const submitLabel = document.getElementById('submit-label');
const ERROR_DEFAULT = errorMsg.textContent.trim();

const showError = (text) => {
  errorMsg.textContent = text;
  errorMsg.classList.remove('hidden');
};

/* Turnstile のトークンは使い捨て。送信に失敗したら取り直す */
const resetTurnstile = () => {
  if (window.turnstile) window.turnstile.reset();
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }

  /* Turnstile の確認が終わるまで送信しない。
     読み込みに失敗した場合（広告ブロッカー等）も止める。GAS が検証を始めると、トークン無しの送信は
     黙って破棄され「送信完了」と表示されてしまうため、メールでの連絡先を案内する */
  if (form.querySelector('.cf-turnstile')) {
    const token = form.querySelector('[name="cf-turnstile-response"]');
    if (!token || !token.value) {
      showError('ボット確認が完了していません。少し待ってから、もう一度お試しください。うまく進まない場合は info@yamamurabook.shop まで、メールでご連絡ください。');
      return;
    }
  }

  submitBtn.disabled = true;
  submitLabel.textContent = '送信中…';
  errorMsg.classList.add('hidden');

  try {
    await fetch(GAS_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: new URLSearchParams(new FormData(form)),
    });
    form.classList.add('hidden');
    notice.classList.add('hidden');
    successMsg.classList.remove('hidden');
  } catch {
    showError(ERROR_DEFAULT);
    resetTurnstile();
    submitBtn.disabled = false;
    submitLabel.textContent = '送信する →';
  }
});
