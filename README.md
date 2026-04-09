# さかさま — Website

さかさまの公式Webサイトです。

## 技術スタック

- HTML / CSS / JavaScript（ビルドなし、静的サイト）
- [Tailwind CSS v4 Browser Build](https://tailwindcss.com/) — CDN経由で利用
- [Formspree](https://formspree.io/) — お問い合わせフォーム（フォームID: `mjgpdwnp`）
- Google Fonts — Noto Sans JP

## ファイル構成

```
sakasaew/
├── index.html          # ホーム
├── about.html          # アバウト
├── portfolio.html      # ポートフォリオ
├── contact.html        # お問い合わせ
├── style.css           # カスタムCSS（アニメーション等）
├── js/
│   ├── nav.js              # ハンバーガーメニュー（全ページ共通）
│   ├── home.js             # ヒーロー・パララックス・スクロールアニメーション（index.html専用）
│   ├── contact.js          # フォーム送信処理（contact.html専用）
│   └── portfolio-data.js   # ポートフォリオデータ＆レンダリング（portfolio.html専用）
└── images/             # 画像ファイル（ファイル名はすべてASCII）
```

## ポートフォリオの更新方法

`js/portfolio-data.js` の配列に項目を追加するだけです。HTMLは触りません。

### WEB実績を追加する

```javascript
// js/portfolio-data.js の webItems 配列に追加
{
  tag:   'WEB',           // タグ（WEB / LP など）
  title: '新しいプロジェクト名',
  desc:  'ディレクション／デザイン',
  url:   'https://example.com/',
},
```

### グラフィック実績を追加する

```javascript
// js/portfolio-data.js の graphicItems 配列に追加
{
  tag:      'VI・CI',
  title:    '新しいプロジェクト名',
  desc:     'VIデザイン制作／ディレクション',
  url:      'https://example.com/',
  image:    'images/filename.png',   // images/ に画像を置いてASCIIのファイル名を使用
  imageAlt: '画像の説明',
  contain:  true,   // true → object-contain（ロゴ向き）/ 省略 → object-cover（写真向き）
},
```

### ギャラリー画像を追加する

```javascript
// js/portfolio-data.js の galleryImages 配列に追加
{ src: 'images/filename.jpg', alt: '説明文' },
```

## カラーテーマ

テーマカラーは各HTMLファイルの `<style type="text/tailwindcss">` 内 `@theme` で管理しています。
色を変更する場合は4ファイル全て更新してください。

| 変数              | 値                   | 使用クラス例              |
|-------------------|----------------------|---------------------------|
| `--color-navy`    | `rgb(11, 69, 119)`   | `text-navy`, `bg-navy`    |
| `--color-muted`   | `rgb(114, 138, 160)` | `text-muted`              |
| `--color-footer`  | `hsl(233, 16%, 56%)` | `bg-footer`               |

## 画像ファイルの命名規則

`images/` に追加する画像ファイルは **ASCIIのみのファイル名** を使用してください。
日本語や記号を含むファイル名はGitHub Pages上でリンク切れになります。

```
OK:  tanaka-kgs-ci.png
NG:  田中工業所_CI_reg.png
```

## デプロイ

`main` ブランチへpushすると GitHub Pages（`https://sakasaew.github.io/sakasaew/`）に自動反映されます。
