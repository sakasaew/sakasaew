/* ============================================================
   ポートフォリオ データ
   新しい実績を追加する際はこのファイルのみ編集してください。
   ============================================================ */

const webItems = [
  {
    tag:   'Corporate Site',
    title: 'KUMADE株式会社コーポレートサイト',
    desc:  'サイト設計／ディレクション／デザイン／CMS管理／CI制作',
    url:   'https://kumade-kk.com/',
  },
  {
    tag:   'Corporate Site',
    title: '株式会社MEBAEコーポレートサイト',
    desc:  'サイト設計／ディレクション／デザイン／CMS管理／CI制作',
    url:   'https://mebae-re.com/',
  },
  {
    tag:   'LP',
    title: 'モレラ岐阜感染症対策LP',
    desc:  'ディレクション／デザイン／コーディング',
    url:   'https://malera-gifu.jp/covid19/',
  },
  {
    tag:   'LP',
    title: '弱酸性除菌水ステリパワーLP',
    desc:  'ディレクション／デザイン／マーケティング相談',
    url:   'https://tnd.co.jp/lp/stp/',
  },
  {
    tag:   'LP',
    title: '立体プランターポールポテトLP',
    desc:  'ディレクション／デザイン／マーケティング相談',
    url:   'https://paulpotato-jp.com/',
  },
  {
    tag:   'LP',
    title: 'トウモロコシBBQ専用炭マイスターLP',
    desc:  'ディレクション／デザイン／マーケティング相談',
    url:   'https://maister-bbq-jp.com/',
  },
  {
    tag:   'LP',
    title: 'アスリート向けジャケットモントリートLP',
    desc:  'ディレクション／デザイン／マーケティング相談',
    url:   'https://montreet-jp.com/',
  },
  {
    tag:   'Service Site',
    title: '伸整体院サービスサイト',
    desc:  'サイト設計／ディレクション／デザイン',
    url:   'https://www.shin-baki2.com/',
  },
];

// contain: true → object-contain（ロゴ・CI向き）、省略 → object-cover（写真向き）
const graphicItems = [
  {
    tag:      'VI / CI',
    title:    '株式会社田中工業所',
    desc:     'CI・看板・名刺デザイン制作／ディレクション／ブランディング相談',
    url:      'https://tanaka-kgs.co.jp/',
    image:    'images/tanaka-kgs-ci.png',
    imageAlt: '株式会社田中工業所 CI',
    contain:  true,
  },
  {
    tag:      'Signage',
    title:    '株式会社田中工業所',
    desc:     '養老鉄道からも見える、木戸工場に設置する看板を制作しました。',
    url:      'https://tanaka-kgs.co.jp/',
    image:    'images/tanaka-kgs-signage.png',
    imageAlt: '株式会社田中工業所 看板',
  },
  {
    tag:      'Business Card',
    title:    '株式会社田中工業所',
    desc:     '名刺デザイン制作',
    url:      'https://tanaka-kgs.co.jp/',
    image:    'images/tanaka-kgs-namecard.jpg',
    imageAlt: '株式会社田中工業所 名刺',
  },
  {
    tag:      'VI / Business Card',
    title:    'Little Flower Coffee',
    desc:     '変形名刺デザイン制作／ディレクション／VI・ブランディング相談',
    url:      'https://www.instagram.com/littleflowercoffee/',
    image:    'images/littleflower-namecard.jpg',
    imageAlt: 'リトルフラワーコーヒー 変形名刺',
  },
  {
    tag:      'CI / Business Card',
    title:    '株式会社MEBAE',
    desc:     'CI・名刺デザイン制作／ディレクション／ブランディング相談',
    url:      'https://mebae-re.com/',
    image:    'images/MEBAE_CI-01.png',
    imageAlt: '株式会社MEBAE CI',
    contain:  true,
  },
  {
    tag:      'CI / Business Card',
    title:    'KUMADE株式会社',
    desc:     'CI・名刺デザイン制作／ディレクション／ブランディング相談',
    url:      'https://kumade-kk.com/',
    image:    'images/KUMADE_CI-01.png',
    imageAlt: 'KUMADE株式会社 CI',
    contain:  true,
  },
  {
    tag:      'VI',
    title:    'まるまど',
    desc:     'VIデザイン制作／ディレクション／ブランディング相談',
    url:      'https://www.instagram.com/marumado_cafe/',
    image:    'images/marumado-logo-01.png',
    imageAlt: 'まるまど ロゴ',
    contain:  true,
  },
  {
    tag:      'Pamphlet / Poster',
    title:    "Ruband'or リュバンドール 緑店",
    desc:     '三つ折パンフレット・ポスターデザイン制作／ディレクション／VI・ブランディング相談',
    url:      'https://www.instagram.com/datsumou_nagoya/',
    image:    'images/rubandor-poster.jpg',
    imageAlt: 'リュバンドール ポスター',
  },
  {
    tag:      'Banner',
    title:    '株式会社メイプルマーケット',
    desc:     'クラウドファンディング用画像デザイン制作／ディレクション',
    url:      'https://maple-market.com/',
    image:    'images/Makuake_keyvisual.jpg',
    imageAlt: 'Maple Market クラウドファンディング',
  },
];

const galleryImages = [
  { src: 'images/rubandor-pamphlet-01.jpg', alt: '三つ折りパンフレット' },
  { src: 'images/rubandor-pamphlet-02.jpg', alt: '三つ折りパンフレット' },
  { src: 'images/Makuake_10-1024x500.jpg',      alt: 'クラファン商品ページ' },
  { src: 'images/Makuake_04-1024x500.jpg',      alt: 'クラファン商品ページ' },
  { src: 'images/Makuake_03-1024x416.jpg',      alt: 'クラファン商品ページ' },
  { src: 'images/Makuake_09-1024x500.jpg',      alt: 'クラファン商品ページ' },
  { src: 'images/Makuake_05-06-1024x999.jpg',   alt: 'クラファン商品ページ' },
  { src: 'images/Makuake_12-1024x500.jpg',      alt: 'クラファン商品ページ' },
];

/* ── レンダリング ── */

function renderWebItems(container) {
  webItems.forEach(({ tag, title, desc, url }) => {
    container.insertAdjacentHTML('beforeend', `
      <a href="${url}" target="_blank" rel="noopener"
         class="group bg-white p-6 flex flex-col gap-3 hover:bg-gray-50 transition-colors">
        <span class="text-xs tracking-[0.2rem] text-muted">${tag}</span>
        <h3 class="text-base font-medium group-hover:text-navy transition-colors">${title}</h3>
        <p class="text-sm text-muted leading-loose">${desc}</p>
        <span class="text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform mt-auto pt-2"><svg class="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9L9 3M5 3h4v4"/></svg></span>
      </a>
    `);
  });
}

function renderGraphicItems(container) {
  graphicItems.forEach(({ tag, title, desc, url, image, imageAlt, contain }) => {
    const fit = contain ? 'object-contain p-4' : 'object-cover';
    container.insertAdjacentHTML('beforeend', `
      <a href="${url}" target="_blank" rel="noopener" class="group flex flex-col gap-3">
        <div class="relative bg-gray-50 aspect-square overflow-hidden">
          <img src="${image}" alt="${imageAlt}"
               class="w-full h-full ${fit} group-hover:scale-105 transition-transform" />
          <span class="absolute top-2 right-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"><svg class="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9L9 3M5 3h4v4"/></svg></span>
        </div>
        <div>
          <span class="text-xs tracking-[0.2rem] text-muted">${tag}</span>
          <h3 class="text-sm font-medium mt-1 group-hover:text-navy transition-colors">${title}</h3>
          <p class="text-sm text-muted leading-loose mt-1">${desc}</p>
        </div>
      </a>
    `);
  });
}

function renderGallery(container) {
  galleryImages.forEach(({ src, alt }) => {
    container.insertAdjacentHTML('beforeend', `
      <img src="${src}" alt="${alt}" class="w-full object-cover aspect-[4/3]" />
    `);
  });
}

/* ── 自動レンダリング ── */
document.addEventListener('DOMContentLoaded', () => {
  const webGrid     = document.getElementById('web-grid');
  const graphicGrid = document.getElementById('graphic-grid');
  const galleryGrid = document.getElementById('gallery-grid');
  if (webGrid)     renderWebItems(webGrid);
  if (graphicGrid) renderGraphicItems(graphicGrid);
  if (galleryGrid) renderGallery(galleryGrid);
});
