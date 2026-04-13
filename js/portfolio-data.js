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
// images[0] がサムネイル。複数枚の場合はライトボックスで全件表示
const graphicItems = [
  {
    tag:      'VI / CI',
    title:    '株式会社田中工業所',
    desc:     'CI・看板・名刺デザイン制作／ディレクション／ブランディング相談',
    url:      'https://tanaka-kgs.co.jp/',
    images:   [{ src: 'images/tanaka-kgs-ci.png', alt: '株式会社田中工業所 CI' }],
    contain:  true,
  },
  {
    tag:      'Signage',
    title:    '株式会社田中工業所',
    desc:     '養老鉄道からも見える、木戸工場に設置する看板を制作しました。',
    url:      'https://tanaka-kgs.co.jp/',
    images:   [{ src: 'images/tanaka-kgs-signage.png', alt: '株式会社田中工業所 看板' }],
  },
  {
    tag:      'Business Card',
    title:    '株式会社田中工業所',
    desc:     '名刺デザイン制作',
    url:      'https://tanaka-kgs.co.jp/',
    images:   [{ src: 'images/tanaka-kgs-namecard.jpg', alt: '株式会社田中工業所 名刺' }],
  },
  {
    tag:      'VI / Business Card',
    title:    'Little Flower Coffee',
    desc:     '変形名刺デザイン制作／ディレクション／VI・ブランディング相談',
    url:      'https://www.instagram.com/littleflowercoffee/',
    images:   [{ src: 'images/littleflower-namecard.jpg', alt: 'リトルフラワーコーヒー 変形名刺' }],
  },
  {
    tag:      'CI / Business Card',
    title:    '株式会社MEBAE',
    desc:     'CI・名刺デザイン制作／ディレクション／ブランディング相談',
    url:      'https://mebae-re.com/',
    images:   [{ src: 'images/MEBAE_CI-01.png', alt: '株式会社MEBAE CI' }],
    contain:  true,
  },
  {
    tag:      'CI / Business Card',
    title:    'KUMADE株式会社',
    desc:     'CI・名刺デザイン制作／ディレクション／ブランディング相談',
    url:      'https://kumade-kk.com/',
    images:   [{ src: 'images/KUMADE_CI-01.png', alt: 'KUMADE株式会社 CI' }],
    contain:  true,
  },
  {
    tag:      'VI',
    title:    'まるまど',
    desc:     'VIデザイン制作／ディレクション／ブランディング相談',
    url:      'https://www.instagram.com/marumado_cafe/',
    images:   [{ src: 'images/marumado-logo-01.png', alt: 'まるまど ロゴ' }],
    contain:  true,
  },
  {
    tag:      'Pamphlet / Poster',
    title:    "Ruband'or リュバンドール 緑店",
    desc:     '三つ折パンフレット・ポスターデザイン制作／ディレクション／VI・ブランディング相談',
    url:      'https://www.instagram.com/datsumou_nagoya/',
    images:   [
      { src: 'images/rubandor-poster.jpg',       alt: 'リュバンドール ポスター' },
      { src: 'images/rubandor-pamphlet-01.jpg',  alt: 'リュバンドール パンフレット 表' },
      { src: 'images/rubandor-pamphlet-02.jpg',  alt: 'リュバンドール パンフレット 中面' },
    ],
  },
  {
    tag:      'Banner',
    title:    '株式会社メイプルマーケット',
    desc:     'クラウドファンディング用画像デザイン制作／ディレクション',
    url:      'https://maple-market.com/',
    images:   [
      { src: 'images/Makuake_keyvisual.jpg',         alt: 'Maple Market クラウドファンディング' },
      { src: 'images/Makuake_10-1024x500.jpg',       alt: 'Maple Market 商品ページ' },
      { src: 'images/Makuake_04-1024x500.jpg',       alt: 'Maple Market 商品ページ' },
      { src: 'images/Makuake_03-1024x416.jpg',       alt: 'Maple Market 商品ページ' },
      { src: 'images/Makuake_09-1024x500.jpg',       alt: 'Maple Market 商品ページ' },
      { src: 'images/Makuake_05-06-1024x999.jpg',    alt: 'Maple Market 商品ページ' },
      { src: 'images/Makuake_12-1024x500.jpg',       alt: 'Maple Market 商品ページ' },
    ],
  },
];

/* ── レンダリング ── */

function renderWebItems(container) {
  webItems.forEach(({ tag, title, desc, url }) => {
    container.insertAdjacentHTML('beforeend', `
      <a href="${url}" target="_blank" rel="noopener"
         class="group bg-white p-6 flex flex-col gap-3 hover:bg-gray-50 transition-colors">
        <span class="text-xs tracking-[0.2rem] text-muted">${tag}</span>
        <h3 class="text-base font-medium group-hover:text-footer transition-colors">${title}</h3>
        <p class="text-sm text-muted leading-loose">${desc}</p>
        <span class="text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform mt-auto pt-2"><svg class="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9L9 3M5 3h4v4"/></svg></span>
      </a>
    `);
  });
}

function renderGraphicItems(container) {
  graphicItems.forEach(({ tag, title, desc, url, images, contain }) => {
    const fit = contain ? 'object-contain p-4' : 'object-cover';
    const thumb = images[0];
    const imagesJson = JSON.stringify(images).replace(/"/g, '&quot;');
    const multi = images.length > 1;
    const extIcon = `<span class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"><svg class="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9L9 3M5 3h4v4"/></svg></span>`;
    container.insertAdjacentHTML('beforeend', `
      <div class="flex flex-col gap-3">
        <div class="group relative bg-gray-50 aspect-square overflow-hidden cursor-pointer" onclick="openLightbox(JSON.parse(this.dataset.images), 0)" data-images="${imagesJson}">
          <img src="${thumb.src}" alt="${thumb.alt}"
               class="w-full h-full ${fit} group-hover:scale-105 transition-transform" />
          ${multi ? `<span class="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-1.5 py-0.5 tracking-widest">${images.length}</span>` : ''}
        </div>
        <div>
          <span class="text-xs tracking-[0.2rem] text-muted">${tag}</span>
          <a href="${url}" target="_blank" rel="noopener" class="group inline-flex items-center gap-1 mt-1 hover:text-footer transition-colors">
            <h3 class="text-sm font-medium">${title}</h3>${extIcon}
          </a>
          <p class="text-sm text-muted leading-loose mt-1">${desc}</p>
        </div>
      </div>
    `);
  });
}

/* ── 自動レンダリング ── */
document.addEventListener('DOMContentLoaded', () => {
  const webGrid     = document.getElementById('web-grid');
  const graphicGrid = document.getElementById('graphic-grid');
  if (webGrid)     renderWebItems(webGrid);
  if (graphicGrid) renderGraphicItems(graphicGrid);
});
