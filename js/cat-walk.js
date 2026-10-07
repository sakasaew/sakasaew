/* ── 猫のイースターエッグ（index / about 共通） ── */
(function () {
  var walk = document.getElementById('cat-walk');
  var catImg = document.getElementById('cat-img');
  if (!walk || !catImg) return;
  var cats = [
    'images/cats/reli_silhouette.svg',
    'images/cats/lulu_silhouette.svg'
  ];
  function go() {
    catImg.src = cats[Math.floor(Math.random() * cats.length)];
    walk.style.display = 'block';
    walk.style.animation = 'catWalkX 13s linear forwards';
    setTimeout(function () {
      walk.style.display = 'none';
      walk.style.animation = '';
      setTimeout(go, 25000 + Math.random() * 35000);
    }, 13000);
  }
  setTimeout(go, 8000);
})();
