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
- **Formspree** — お問い合わせフォーム（contact.html）
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
- `js/about.js` — ABOUTページ固有の処理
- `js/contact.js` — Formspree 送信処理
- `js/portfolio.js` / `js/lightbox.js` — ポートフォリオ一覧・ライトボックス

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
- Stripe の申し込みボタンは現在 `COMING SOON`（disabled button）。審査通過後に TODO コメントに従って有効化する
