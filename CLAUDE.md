# さかさま サイト — プロジェクト概要

## ホスティング・デプロイ
- **Cloudflare Pages** でホスティング
- GitHub リポジトリ `sakasaew/sakasaew` の `main` ブランチへの push で自動デプロイ
- 本番URL: https://sakasaew.com

## 技術スタック
- **静的 HTML**（Cloudflare Pages 側のビルドは不要。ビルド済み `tailwind.css` をコミットして配信）
- **Tailwind CSS v4** — `@tailwindcss/cli` でビルドした `tailwind.css` を各ページが `<link>` で読み込む
  - ソースは `tailwind.input.css`（`@theme` とカスタムクラス）。CDN（`@tailwindcss/browser`）は使わない
  - HTML / JS のクラスを変更したら `npm install && npm run build:css` で `tailwind.css` を再生成してコミットする
  - `--color-muted: #4f5a7a` / `--color-footer: hsl(233, 16%, 56%)`
- **Google Apps Script（GAS）** — お問い合わせフォーム（contact.html）。`js/contact.js` が GAS の Web アプリへ POST し、通知メール・自動返信・スプレッドシート記録を行う。GAS のコードは本リポジトリ外（Google 側）にある
- **Stripe** — Web サービスの決済（審査通過後に有効化予定）
- フォント: Poppins / Zen Kaku Gothic New / Shippori Mincho（Google Fonts）

## ページ構成
| ファイル | URL | 内容 |
|---|---|---|
| index.html | / | トップページ |
| about.html | /about | わたしのこと |
| portfolio.html | /portfolio | つくってきたもの |
| web.html | /web | WEB SERVICE（プラン・料金） |
| contact.html | /contact | お問い合わせ |
| tokusho.html | /tokusho | 特定商取引法に基づく表記 |

## JavaScript
- `js/nav.js` — ナビゲーション（ハンバーガーメニュー・スクロール挙動）
- `js/parallax.js` — ヒーロー画像のパララックス
- `js/home.js` — トップページ固有のアニメーション
- `js/reveal.js` — スクロール連動フェードイン（`.reveal`）。index / web / cats 系で共通
- `js/cat-walk.js` — 猫のイースターエッグ（index / about）。キーフレームは `tailwind.input.css`
- `js/about.js` — ABOUTページ固有の処理
- `js/contact.js` — GAS 送信処理（`mode: 'no-cors'` のため送信結果は読めず、常に完了表示になる）
- `js/portfolio-data.js` / `js/lightbox.js` — ポートフォリオ一覧・ライトボックス

## 事業者情報
- **運営**: 株式会社山村書店（さかさまは一事業部）
- **担当**: 山村真由
- **所在地**: 岐阜県安八郡神戸町神戸484番地
- **問い合わせ**: info@yamamurabook.shop
- **プライバシーポリシー**: https://www.yamamurabook.shop/privacypolicy

## 関連サービス
- **まなびやさかさま** — https://school.sakasaew.com
  - 別リポジトリ `school-sakasaew/school-sakasaew`（同じく Cloudflare Pages）
  - ファイル: `C:/Users/yamam/Documents/01_work/_sakasa_ma/school/index.html`

## 開発上の注意
- Tailwind は v4 のビルド済み CSS を使用。v3 系（`cdn.tailwindcss.com`）やブラウザ版 CDN と混在させない
- `bg-footer` / `text-muted` などのカスタムクラスは `tailwind.input.css` の `@theme` で定義
- 新規ページを作るときは既存ページの head（`tailwind.css`・フォント）を流用し、`package.json` の `build:css` の `--content` にそのページを追加して再ビルドする
- 画像は WebP（横幅 最大1600px、hero は1920px）を使う。ファーストビュー外の `<img>` には `loading="lazy" decoding="async"` を付ける
- `<script src>` は `defer` を付けて読み込む。`.reveal` の `transition` は `tailwind.input.css`（レイヤー外）で定義しているため、`delay-*` ユーティリティでは上書きされない。遅延は `style="transition-delay:…"` で指定する
- Stripe の申し込みボタンは現在 `COMING SOON`（disabled button）。審査通過後に TODO コメントに従って有効化する
- Stripe を有効化する前後や、決済・フォーム周りの JS を大きく変えたときは、`claude-security` プラグイン（`/claude-security`、`/plugin install claude-security@claude-plugins-official`）でスキャンする。静的サイトで攻撃面が小さいため、通常の更新では実施しない。GAS のコードはリポジトリ外のためスキャン対象にならない。GAS を変更したときは別途レビューする
