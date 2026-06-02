# さかさま サイト — プロジェクト概要

## ホスティング・デプロイ
- **Cloudflare Pages** でホスティング
- GitHub リポジトリ `sakasaew/sakasaew` の `main` ブランチへの push で自動デプロイ
- 本番URL: https://sakasaew.com

## 技術スタック
- **純粋な静的 HTML**（ビルドプロセスなし）
- **Tailwind CSS v4** — CDN 読み込み (`https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4`)
  - カスタムカラーは `<style type="text/tailwindcss">` 内の `@theme` で定義
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
  - ファイル: `f:/01_work/_sakasa_ma/school/index.html`

## 開発上の注意
- Tailwind は v4 CDN を使用。v3 系（`cdn.tailwindcss.com`）と混在させない
- `bg-footer` / `text-muted` などのカスタムクラスは各ページの `@theme` で定義
- 新規ページを作るときは既存ページの head（CDN・フォント・@theme）をそのまま流用する
- Stripe の申し込みボタンは現在 `COMING SOON`（disabled button）。審査通過後に TODO コメントに従って有効化する
