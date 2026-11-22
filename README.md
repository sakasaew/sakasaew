# さかさま — Website

さかさまの公式Webサイトです。 https://sakasaew.com

## 技術スタック

- HTML / JavaScript（静的サイト。Cloudflare Pages 側のビルドは不要）
- [Tailwind CSS v4](https://tailwindcss.com/) — `@tailwindcss/cli` でビルドした `tailwind.css` をコミットして配信（CDN は使わない）
- Google Apps Script（GAS）— お問い合わせフォームの受け口（通知メール・自動返信・スプレッドシート記録）
- Stripe Payment Link — Web サービスの決済（審査通過後に有効化予定。現在は `COMING SOON`）
- Google Fonts — Poppins / Zen Kaku Gothic New / Shippori Mincho

## ページ構成

| ファイル | URL | 内容 |
|---|---|---|
| index.html | / | トップページ |
| about.html | /about | わたしのこと |
| portfolio.html | /portfolio | つくってきたもの |
| web.html | /web | Webサイト制作サービス（プラン・料金） |
| contact.html | /contact | お問い合わせ |
| tokusho.html | /tokusho | 特定商取引法に基づく表記 |
| cats.html / cats1.html / cats2.html | /cats など | ねこたち（一覧と個別ページ） |

## ファイル構成

```
sakasaew/
├── *.html                # 上記の各ページ
├── tailwind.input.css    # Tailwind のソース（@theme・カスタムクラス・アニメーション）
├── tailwind.css          # ビルド済みCSS（`npm run build:css` で生成してコミット）
├── package.json          # build:css の定義（--content に対象ページを列挙）
├── sitemap.xml / robots.txt
├── js/
│   ├── nav.js             # ハンバーガーメニュー・スクロール挙動（全ページ共通）
│   ├── parallax.js        # ヒーロー画像のパララックス
│   ├── home.js            # トップページ固有のアニメーション
│   ├── about.js           # ABOUTページ固有の処理
│   ├── reveal.js          # スクロール連動フェードイン（.reveal。index/web/cats系で共通）
│   ├── cat-walk.js        # 猫のイースターエッグ（index/about で共通）
│   ├── contact.js         # フォーム送信処理（contact.html専用）
│   ├── portfolio-data.js  # ポートフォリオのデータ＆レンダリング（portfolio.html専用）
│   └── lightbox.js        # ライトボックス（portfolio / cats1 / cats2）
└── images/               # 画像ファイル（WebP推奨。ファイル名はASCII）
```

## CSS のビルド

HTML / JS のクラスを変更したら、`tailwind.css` を再生成してコミットします。

```bash
npm install
npm run build:css
```

新しいページを作るときは、既存ページの `<head>`（`tailwind.css`・フォント）を流用し、`package.json` の `build:css` の `--content` にそのページを追加してから再ビルドします。

## カラーテーマ

テーマの値は `tailwind.input.css` の `@theme` で一元管理しています（HTML側には書きません）。

| 変数 | 値 | 使用クラス例 |
|---|---|---|
| `--color-muted` | `#4f5a7a` | `text-muted` |
| `--color-footer` | `hsl(233, 16%, 56%)` | `bg-footer` |
| `--font-sans` | Poppins / Zen Kaku Gothic New | `font-sans` |
| `--font-mincho` | Poppins / Shippori Mincho | `font-mincho` |

## ポートフォリオの更新方法

`js/portfolio-data.js` の配列に項目を追加するだけです。HTMLは触りません。

### WEB実績を追加する

```javascript
// js/portfolio-data.js の webItems 配列に追加
{
  tag:   'Corporate Site',   // タグ（Corporate Site / LP / Service Site など）
  title: '新しいプロジェクト名',
  desc:  'ディレクション／デザイン',
  url:   'https://example.com/',
},
```

### グラフィック実績を追加する

```javascript
// js/portfolio-data.js の graphicItems 配列に追加
{
  tag:      'VI',
  title:    '新しいプロジェクト名',
  desc:     'VIデザイン制作／ディレクション',
  url:      'https://example.com/',
  image:    'images/filename.png',   // images/ に画像を置いてASCIIのファイル名を使用
  imageAlt: '画像の説明',
  contain:  true,   // true → object-contain（ロゴ向き）/ 省略 → object-cover（写真向き）
},
```

## 画像ファイル

- 形式は WebP を使います。横幅は最大 1600px、hero は 1920px です。
- ファーストビュー外の `<img>` には `loading="lazy" decoding="async"` を付けます。
- `images/` に追加するファイル名は **ASCIIのみ** にしてください。日本語や記号を含むファイル名はリンク切れの原因になります。

```
OK:  tanaka-kgs-ci.png
NG:  田中工業所_CI_reg.png
```

## JavaScript の読み込み

`<script src>` には `defer` を付けます。`.reveal` の `transition` は `tailwind.input.css`（レイヤー外）で定義しているため、`delay-*` ユーティリティでは上書きされません。遅延は `style="transition-delay:…"` で指定します。

## お問い合わせフォーム（GAS）

- `js/contact.js` の `GAS_URL` に、GAS の Web アプリ（`/exec`）の URL を設定しています。
- フォームの項目は `name` / `email` / `category` / `message` と、スパム対策用の `honeypot` です。
- 悪用対策として GAS 側で、自動返信は定型文のみ・1時間30件まで（同じアドレスへは10分に1回）、受付は1日100件までに制限しています。上限を超えた送信は破棄され、`RECIPIENT` 宛てにエラーメールが届きます。
- お問い合わせ種別（`<select name="category">`）を変えたときは、GAS の `CATEGORIES` も同じ内容に直してください。ずれた種別は破棄されます。「その他のお問い合わせ」は営業対策のため、フォームと GAS の `CATEGORIES` の両方から削除済みです。
- 営業・売り込み対策として、次の3つを入れています。
  - フォーム上部の注意書き（人間向け）
  - 送信前の必須チェックボックス（`#no-solicitation`）。チェック時のみ `no_solicitation=yes` を GAS に送ります。
  - Cloudflare Turnstile。トークンは `cf-turnstile-response` として GAS に送られます。
- **Turnstile**: `contact.html` の `data-sitekey` に本番のサイトキーを設定済みです（ウィジェットのホスト名は `sakasaew.com`）。サイトキーは公開してよい値です。シークレットキーは GAS のスクリプトプロパティにのみ保存し、リポジトリには置きません。ホスト名に無いドメイン（`*.pages.dev` のプレビュー等）ではウィジェットがエラーになり、送信できません。
- **GAS 側の検証（設定済み）**: ブラウザを通らない直接 POST にも効くよう、GAS の `doPost` で次の2点を確認し、満たさないものは破棄しています（GAS のコードは本リポジトリ外）。
  1. `no_solicitation === 'yes'`
  2. `cf-turnstile-response` を Cloudflare の siteverify で検証（シークレットキーは GAS のスクリプトプロパティ `TURNSTILE_SECRET`）
  - GAS の定数 `ENFORCE_BOT_CHECK` が `true` のとき破棄し、`false` のときはログに残すだけです。
  - 破棄した送信は、GAS の「実行数」のログに `reject: …` と出ます。通信エラーやシークレット未設定のときは、正規の問い合わせを失わないよう通して `skip: …` と出ます。
  - サイトキーやウィジェットのホスト名を変えるときは、先にサイトをデプロイして、ウィジェットが表示・送信できることを確認してから GAS を更新してください。順序を誤ると、すべての送信が破棄されます。
- GAS のコードは **このリポジトリには含まれません**（Google Apps Script 側で管理）。受信先メールアドレスや記録先スプレッドシートの設定もそちらにあります。
- `mode: 'no-cors'` で送信しているため、GAS 側が失敗してもサイトには常に「送信完了」と表示されます。GAS を変更したときは、実際にテスト送信して届くことを確認してください。

## Stripe（Webサービスの決済）

`web.html` の申し込みボタンは現在 `COMING SOON`（disabled button）です。審査通過後に、各プランの TODO コメントに従って有効化します。

## デプロイ

`main` ブランチへ push すると、Cloudflare Pages で自動デプロイされます（本番: https://sakasaew.com）。プルリクエストごとにプレビュー URL も作られます。

## ナビゲーション/フッターの同期について

`<header>`〜`</header>` と `<footer>`〜`</footer>` は9つのHTMLファイル（index/about/portfolio/contact/web/tokusho/cats/cats1/cats2）に同一構造がコピーされています（意図的な非DRY構成。理由: file:// での動作保証とSEO/OGPクローラ対応を優先し、ビルド工程やJSでのinclude読み込みを避けているため）。

リンク構成やスタイルを変更する場合は、9ファイルすべてに同じ変更を手作業で反映し、`git diff` で9ファイル分の差分が揃っていることを確認してください。
