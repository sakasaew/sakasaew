# お問い合わせフォームの営業・ボット対策 引き継ぎ資料

さかさま（sakasaew.com）で行った「お問い合わせフォームへの営業・売り込み対策」を、山村書店のサイトにも同じように入れるための資料です。
**別のリポジトリ・別の Claude Code セッションにそのまま渡せる**ように、自己完結で書いています。

- 作成日: 2026-11-24
- 元の作業: さかさまリポジトリの PR #15〜#18（フォーム側）と、GAS 側の設定
- 先に「1. Claude Code に渡すプロンプト」を、そのまま新しいセッションに貼ってください。2 以降は、その補足と、実際に使ったコードです。

---

## 1. Claude Code に渡すプロンプト（そのまま貼る）

```text
山村書店のサイト（https://www.yamamurabook.shop）のお問い合わせフォームに、営業・売り込み対策を入れてください。
同じ対策を、さかさま（sakasaew.com）のサイトで実施して、効果を確認済みです。やり方は、引き継ぎ資料
「contact-form-anti-solicitation-handoff.md」（このプロンプトと一緒に渡します）にまとめてあります。まず資料を全部読んでください。

【背景】
・お問い合わせフォーム経由で、フリーランスのコーダー・デザイナー等からの営業メールが急増しています。
  文面が似ている、計測用の utm パラメータ付きリンクがある、といった特徴から、AI・自動ツールで送られている形跡があります。
・お仕事の依頼・ご相談自体は通常どおり受け付けたいので、フォームは閉じません。営業だけを抑止します。

【やってほしいこと】
1. フォーム上部に、注意書きを追加する。文面は「営業・売り込みを目的としたご連絡はお控えください。」の1文だけ（人間向け）。
2. 送信前の必須チェックボックスを追加する。文面は「このお問い合わせは、営業・売り込みを目的としたものではありません」。
   チェック時のみ no_solicitation=yes を送信先（GAS）に送る。
3. Cloudflare Turnstile を追加する（ボット対策）。トークンは cf-turnstile-response として送信先に送る。
4. 問い合わせ種別に「その他」があれば、営業の入口になるため削除する。
   ※ 送信先（GAS）側に種別の許可リスト（CATEGORIES 等）がある場合、種別名の「変更」は、リストに無い値になり破棄されるので避ける。
     削除なら安全。削除する前に、通知メールの件名形式、送信先、スプレッドシートへの記録が、残る種別で壊れないことを確認する。
5. トークン未取得・Turnstile の読み込み失敗時は、送信を止めて、メールでの連絡先を案内する（理由は資料の「5. ハマりどころ」）。
6. 送信完了後は、注意書きも非表示にする。
7. 送信先（GAS）側の検証コードを、貼り付け用に用意する（資料にテンプレートあり）。GAS はリポジトリ外のため、あなたが書き換えることはできません。
   私が GAS のエディタに貼るので、手順を「どこで何をするか」を明記して案内してください。

【最初にやること（先に調べる）】
・このリポジトリの構成（静的 HTML か、CMS・ビルドツールを使っているか）、お問い合わせフォームの実装、送信先（GAS か別の仕組みか）を調べてください。
・資料は「静的 HTML ＋ GAS」を前提にしています。構成が違う場合（Google Forms、Shopify など）は、資料をそのまま適用せず、
  作業を止めて、どう変えるべきかを私に相談してください。
・このリポジトリの CLAUDE.md や README があれば、その規約（CSS のビルド方法、デプロイ方法など）に従ってください。

【進め方のルール】
・main への直接 push はしない。作業ブランチで PR を作る（ドラフトで作成）。マージは私が「マージして」と言ったときだけ。
・Turnstile のサイトキーは、私が Cloudflare で発行して渡します。それまでは Cloudflare 公式のテスト用キー
  （1x00000000000000000000AA。常に成功）を仮置きして、PR には「本番キー未設定」と明記してください。
  シークレットキーは絶対にチャットや GitHub に書かない。GAS のスクリプトプロパティにだけ保存します。
・GAS の検証を有効にするのは、サイトを本番デプロイして、ウィジェットの表示と送信を確認したあと。順序を逆にすると全送信が破棄されます。
・迷う点は、作業を止めずに妥当な判断で進め、最後に報告に含めてください。ただし、本番に影響する操作（マージ、GAS の有効化）の前は必ず確認してください。
・日本語で、専門用語は最小限、「どこで何をするか」を明記して案内してください。

【報告してほしいこと】
・変更したファイルと内容
・「その他」を削除したか、代替したか（理由つき）
・動作確認の方法と結果（実際の GAS へのテスト送信は、したかしていないかを明記）
・私がやる作業（Cloudflare の設定、GAS の更新など）を、順番どおりに
```

---

## 2. さかさまで実施した内容（結果）

| 対策 | 内容 |
|---|---|
| 注意書き | フォーム上部に1文。「営業・売り込みを目的としたご連絡はお控えください。」 |
| 必須チェック | 「このお問い合わせは、営業・売り込みを目的としたものではありません」。チェック時のみ `no_solicitation=yes` を送信 |
| 種別「その他」 | **削除**（フォームと GAS の `CATEGORIES` の両方） |
| Turnstile | ウィジェット追加。トークンを `cf-turnstile-response` として送信 |
| GAS 側の検証 | `no_solicitation` と Turnstile トークンを検証し、満たさなければ破棄（ブラウザを通さない直接 POST 対策） |
| 送信完了後 | 注意書きも非表示 |

### 判断の経緯
- **注意書きは1文だけにした。** 当初は「お仕事の依頼・ご相談のためのものです…返信いたしかねる場合がございます」まで書いたが、さかさまは支援活動など依頼以外の問い合わせも受けるため、「依頼のためのもの」と限定する文が合わなかった。人間向けの抑止として、1文で十分と判断。
- **「その他」は削除した。** GAS に種別の許可リスト（`CATEGORIES`）があり、一致しない種別は破棄される。名称変更だと、新しい名前がリストに無く、正規の問い合わせまで破棄される恐れがあった。削除なら、残る種別の動作は変わらない。
- **フォームの文言だけでは、ボットも直接 POST も止まらない。** そこで Turnstile と、GAS 側の検証を追加した。
- **労力をかけすぎない方針。** 営業メール対策に手間をかけたくないという意向のため、キーワードによる破棄（コーダー・デザイナー等）は入れていない。正規の依頼にも出る言葉なので、誤って破棄するリスクがある。入れるなら、実際に届いた営業メールにだけ出る確実な印（例: `utm_medium=contact_form`）に限る。

---

## 3. フォーム側の実装（静的 HTML ＋ Tailwind の例）

### 3-1. 注意書き（フォームの上）
```html
<!-- NOTICE -->
<div id="form-notice" class="mb-12 border-l border-footer bg-gray-50 px-6 py-5">
  <p class="text-sm leading-loose text-muted">
    営業・売り込みを目的としたご連絡はお控えください。
  </p>
</div>
```
色や罫線は、既存サイトのトーンに合わせて調整する。

### 3-2. 必須チェックボックス（送信ボタンの前）
```html
<div>
  <label for="no-solicitation" class="flex items-start gap-3 cursor-pointer text-sm leading-relaxed">
    <input
      type="checkbox"
      id="no-solicitation"
      name="no_solicitation"
      value="yes"
      required
      class="mt-1 md:mt-[1.5px] h-5 w-5 shrink-0 cursor-pointer accent-black"
    />
    <span>このお問い合わせは、営業・売り込みを目的としたものではありません <span class="text-muted text-xs font-normal ml-1">必須</span></span>
  </label>
</div>
```
- 位置合わせ: 1行目の文字の中心に、チェックボックスの中心を合わせる。`mt-1`（4px）だと PC 幅で約3px下がって見えたため、PC 幅（`md` 以上）だけ `mt-[1.5px]` にした。スマホ幅は `mt-1` のまま（2行に折り返すため、上揃えのほうが自然）。

### 3-3. Turnstile（送信ボタンの前、チェックボックスの後）
```html
<div class="cf-turnstile" data-sitekey="【サイトキー】" data-language="ja" data-theme="light"></div>
```
`</body>` の直前などに、スクリプトも追加する。
```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```
- ウィジェットは、`<form>` の**中**に置く。置くとトークンが hidden input（`cf-turnstile-response`）としてフォームに入り、`FormData` に自動で含まれる。
- サイトに CSP（`Content-Security-Policy`）があるときは、`challenges.cloudflare.com` を `script-src` と `frame-src` に許可する。さかさまの `_headers` には CSP が無かったため、変更不要だった。

### 3-4. 送信処理（JS）
さかさまの `js/contact.js` の、変更部分の要点は次のとおり。

```js
const notice = document.getElementById('form-notice');
const ERROR_DEFAULT = errorMsg.textContent.trim();

const showError = (text) => {
  errorMsg.textContent = text;
  errorMsg.classList.remove('hidden');
};

/* Turnstile のトークンは使い捨て。送信に失敗したら取り直す */
const resetTurnstile = () => {
  if (window.turnstile) window.turnstile.reset();
};

// submit ハンドラ内、checkValidity の直後
if (form.querySelector('.cf-turnstile')) {
  const token = form.querySelector('[name="cf-turnstile-response"]');
  if (!token || !token.value) {
    showError('ボット確認が完了していません。少し待ってから、もう一度お試しください。うまく進まない場合は 【連絡先メール】 まで、メールでご連絡ください。');
    return;
  }
}

// 送信成功時
form.classList.add('hidden');
notice.classList.add('hidden');          // 注意書きも隠す
successMsg.classList.remove('hidden');

// 送信失敗時（catch）
showError(ERROR_DEFAULT);
resetTurnstile();
```
- 既存の検証方式（`required` ＋ `checkValidity()`）に、そのまま乗せている。

### 3-5. 種別「その他」の削除
`<select name="category">` から `<option value="その他…">` を削除する。**GAS の許可リストからも削除する**（4 を参照）。

### 3-6. このリポジトリ（さかさま）固有の作業
- Tailwind v4 のビルド済み `tailwind.css` をコミットして配信しているため、クラスを変えたら `npm run build:css` で再生成する。山村書店のリポジトリで方式が違う場合は、そちらの規約に従う。

---

## 4. GAS 側の実装（貼り付け用テンプレート）

GAS のコードは、**リポジトリの外**（Google Apps Script）にある。Claude Code からは書き換えられないので、ユーザーが貼り付ける。

### 4-1. 準備（ユーザーの作業）
1. Cloudflare ダッシュボードで **Turnstile → ウィジェットを追加**する。
   - ホスト名: 山村書店のドメイン（例: `www.yamamurabook.shop`、`yamamurabook.shop`）。サブドメインも対象になるが、念のため両方の表記を確認する。
   - ウィジェットモード: Managed（標準）。
   - **さかさまのウィジェットは流用しない。** ホスト名が違うため、山村書店のドメインで動かない。新しく作る。
2. 発行された**サイトキー**（公開してよい）を、フォームの HTML に入れる。**シークレットキー**は、チャットや GitHub に貼らない。
3. GAS のエディタを開く。
   - 記録先のスプレッドシートから **拡張機能 → Apps Script** で開くか、https://script.google.com/home から探す。
   - 編集には、そのスクリプトの所有者のアカウントでのログインが必要な場合がある（さかさまでは、所有者が別アカウントだった）。
4. **プロジェクトの設定（歯車）→ スクリプト プロパティ**に、`TURNSTILE_SECRET` という名前でシークレットキーを保存する。コードには直接書かない。

### 4-2. 貼り付けるコード（関数の定義。`doPost` の外）
```js
/* ── 営業・ボット対策（Turnstile ＋ 営業目的ではない旨のチェック） ── */
// 最初は false（問題があってもログに残すだけ）で動作確認し、問題なければ true にする
const ENFORCE_BOT_CHECK = false;

function checkSubmission_(p) {
  // 1) 「営業・売り込みを目的としたものではありません」のチェック
  if (p.no_solicitation !== 'yes') return { ok: false, reason: 'no_solicitation' };

  // 2) Turnstile のトークン
  const token = p['cf-turnstile-response'];
  if (!token) return { ok: false, reason: 'no_token' };

  const secret = PropertiesService.getScriptProperties().getProperty('TURNSTILE_SECRET');
  if (!secret) {
    console.error('TURNSTILE_SECRET が未設定です');
    return { ok: true, reason: 'no_secret (skipped)' };
  }

  try {
    const res = UrlFetchApp.fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'post',
      payload: { secret: secret, response: token },
      muteHttpExceptions: true,
    });
    // Cloudflare 側の不調で、正規の問い合わせまで失われないように、通信エラーは通す
    if (res.getResponseCode() !== 200) {
      console.error('siteverify HTTP ' + res.getResponseCode());
      return { ok: true, reason: 'siteverify_http_error (skipped)' };
    }
    const result = JSON.parse(res.getContentText());
    if (result.success) return { ok: true };
    return { ok: false, reason: 'turnstile_failed: ' + (result['error-codes'] || []).join(',') };
  } catch (err) {
    console.error(err);
    return { ok: true, reason: 'siteverify_exception (skipped)' };
  }
}
```

### 4-3. `doPost` の冒頭（呼び出し）
既存の `doPost` の、honeypot の確認の直後・**上限を数える処理より前**に入れる。

```js
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const p = (e && e.parameter) || {};
    if (p.honeypot) return respond('ok');

    // 営業・ボット対策（honeypot の後、上限を数える前）
    const check = checkSubmission_(p);
    if (check.reason) console.warn((check.ok ? 'skip: ' : 'reject: ') + check.reason);
    if (!check.ok && ENFORCE_BOT_CHECK) return respond('error');

    const data = validate(p);
    // …以降は既存のまま…
```
- `respond('error')` や `honeypot` は、さかさまの GAS の書き方。山村書店の GAS に合わせて、**既存の破棄時の `return` と同じもの**にする。
- 破棄するときは、通知メールもスプレッドシートへの記録もしない。**エラーメールも出さない**（スパムの数だけ届いてしまう）。
- 上限（1日の受付件数など）を数える処理より前に置く。後ろに置くと、弾いたスパムが上限を消費する。

### 4-4. 種別の許可リスト
GAS に `CATEGORIES` のような許可リストがあれば、「その他」を削除する。ブラウザを通さない直接 POST でも、「その他」で送れなくなる。

### 4-5. `testDoPost` について
GAS に、手動確認用の `testDoPost` のような関数があれば、`ENFORCE_BOT_CHECK = true` の間は、`no_solicitation` とトークンが無いため破棄される。確認は、サイトからの実送信で行う。宛先がダミーのままなら、有効化が効いていないとメールが飛ぶので注意。

---

## 5. ハマりどころ（さかさまで実際に気づいた点）

1. **種別名の「変更」は危険、「削除」は安全。** GAS の許可リストに無い種別は破棄される。
2. **チェックボックスをブラウザ側だけで検証すると、直接 POST で素通りされる。** `name` を付けて GAS に送り、GAS でも検証する。
3. **Turnstile のホスト名に無いドメインでは、ウィジェットがエラーになり、送信できない。** `*.pages.dev` のプレビューでは、確認できない。ホスト名にプレビューのドメインを追加するか、本番で確認する。
4. **トークンが取れないときに、JS で送信を止める。** 止めないと、広告ブロッカー等で Turnstile が読み込めない人の送信が、GAS の検証で**無言で破棄**される。`mode: 'no-cors'` で送っていると、画面には「送信完了」と出てしまう。止めて、メールでの連絡先を案内する。
5. **反映の順番を守る。** ①フォーム（本番キー）をデプロイ → ②本番でウィジェットの表示と送信を確認 → ③ GAS の `ENFORCE_BOT_CHECK` を `true`。順序が逆、またはテスト用キーのまま有効にすると、全送信が破棄される。
6. **GAS は、保存しただけでは本番に反映されない。** **デプロイ → デプロイを管理 → 編集（鉛筆）→ バージョン: 新バージョン → デプロイ**で更新する。URL は変わらない。初回は、外部通信（`UrlFetchApp`）の権限の承認が要る。`appsscript.json` が権限を明示している場合は、`https://www.googleapis.com/auth/script.external_request` を追加する。
7. **成功した送信は、ログに何も出ない。** `reject:` も `skip:` も出ていないのは、「検証に通った」場合と「新コードが動いていない」場合の、どちらでも起こる。新コードが動いている証拠は、バージョンの更新日時、または有効化後の `reject:` ログで確認する。
8. **GAS の実行数の「バージョン」列は、実行した時点のバージョンではなく、今の公開バージョンを全行に表示している。** 過去の行まで、同じ番号になる。
9. **弾かれることの確認（任意）。** GAS のエディタで `testDoPost` を実行し、`reject: no_solicitation` がログに出ること、通知メールもシート記録も増えないことを見る。さかさまでは、この確認は省略した（正規の送信が通ることだけ確認）。
10. **サンドボックスから Cloudflare に接続できない場合がある。** Claude Code の実行環境では、Turnstile の本物のウィジェットが読み込めなかった。ヘッドレスブラウザ（Playwright）で、Turnstile と GAS への通信を差し替えて、次を確認した。
    - トークンが空だと送信されない
    - スクリプトが読み込めなくても送信されない
    - トークンがあれば送信され、`no_solicitation` と `cf-turnstile-response` が含まれる
    - スマホ幅（390px）で、横スクロールが出ない
    - ウィジェットの実際の見た目は、ユーザーがプレビューか本番で確認する。

---

## 6. 作業の進め方（推奨）

1. 構成の確認（静的 HTML か、送信先は GAS か）。違えば、相談のうえ方針を決める。
2. フォーム側の変更を、作業ブランチで実装し、ドラフト PR を作る（テスト用キーで仮置き）。
3. ユーザーが Cloudflare でウィジェットを作成し、サイトキーを渡す。→ 差し替えて、PR を更新。
4. ユーザーの「マージして」で、マージ（本番デプロイ）。
5. 本番で、ウィジェットの表示・スマホ幅・実送信（通知メールとシート記録）を、ユーザーが確認。
6. GAS に、4 のコードを貼る（`ENFORCE_BOT_CHECK = false`）→ 新バージョンでデプロイ → 通常送信で確認。
7. `true` に変更 → 新バージョンでデプロイ → 通常送信で確認。
8. README などのドキュメントを、実態に合わせて更新。

## 7. 注意・限界

- 対策は、「ページを読む AI・ブラウザ操作型のツール」と「直接 POST」に効く。人間が手で送る営業は防げない（注意書きと、返信しない運用で対応する）。
- 効果の確認は、営業メールが減ったかを見るのが基本。GAS の実行数のログの `reject:` も目安になる。
- ユーザーの意向: 迷惑メール対策に、手間をかけすぎたくない。過剰な対策は避け、確実で小さな変更に絞る。
- GAS を変更したら、変更後のコードを実際に確認してもらう（さかさまでは、貼り付け後の `doPost` 全体を見せてもらい、位置・戻り値・影響を確認した）。
