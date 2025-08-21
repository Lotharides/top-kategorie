/*! mk-topcats-footer.js */
(function () {
  if (window.mkTopcatsMounted) return;

  // iba homepage: /, /sk/, /cz/ alebo body.type-index
  var p = location.pathname.replace(/\/+$/,'/');
  var isHome = p === '/' || /^\/(sk|cz)\/$/i.test(p) || /\b(type-index|homepage)\b/.test(document.body.className);
  if (!isHome) return;
  window.mkTopcatsMounted = true;

  var css = `
  .mk-topcats{width:100%;margin:22px 0}
  .mk-tc-wrap{max-width:1200px;margin:0 auto;padding:0 16px;font-family:Arial,Helvetica,sans-serif}
  .mk-tc-title{margin:0 0 18px;text-align:center;font-weight:800;color:#4b3627;font-size:24px}
  .mk-tc-grid{display:grid;gap:18px;grid-template-columns:repeat(2,1fr)!important}
  @media(min-width:768px){.mk-tc-grid{grid-template-columns:repeat(3,1fr)!important;gap:20px}}
  @media(min-width:1024px){.mk-tc-grid{grid-template-columns:repeat(3,minmax(320px,1fr))!important;gap:24px}}
  .mk-tc{display:flex;flex-direction:column;align-items:center;text-decoration:none;color:#111;
         border:1px solid #e7e2db;border-radius:16px;background:#fff;padding:16px;
         box-shadow:0 1px 4px rgba(0,0,0,.06);transition:transform .15s,box-shadow .15s}
  .mk-tc:hover{box-shadow:0 8px 20px rgba(0,0,0,.10);transform:translateY(-2px)}
  .mk-tc-media{width:100%;aspect-ratio:1/1;border-radius:12px;background:#f6efe9;overflow:hidden;
               display:flex;align-items:center;justify-content:center}
  .mk-tc-media img{width:86%;height:86%;object-fit:contain}
  .mk-tc span{margin-top:12px;font-weight:800;text-align:center;font-size:18px;line-height:1.25}
  @media(min-width:1024px){.mk-tc{padding:22px}.mk-tc span{font-size:20px}}
  .mk-tc img[src=""], .mk-tc img:not([src]){display:none}
  `;

  var html = `
  <section class="mk-topcats" aria-label="Naše TOP kategórie">
    <div class="mk-tc-wrap">
      <h2 class="mk-tc-title">Naše TOP kategórie</h2>
      <div class="mk-tc-grid">
        <a class="mk-tc" href="/merino-vesty/">
          <div class="mk-tc-media"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/merino-vesty.jpg" alt="Merino vesty – ikona"></div>
          <span>Merino vesty</span>
        </a>
        <a class="mk-tc" href="/papuce-z-ovcej-vlny/">
          <div class="mk-tc-media"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/papuce.jpg" alt="Papuče z ovčej vlny – ikona"></div>
          <span>Papuče z ovčej vlny</span>
        </a>
        <a class="mk-tc" href="/ladvinove-pasy/">
          <div class="mk-tc-media"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/ladvinove-pasy.jpg" alt="Ľadvinové pásy – ikona"></div>
          <span>Ľadvinové pásy</span>
        </a>
        <a class="mk-tc" href="/vlnena-deka/">
          <div class="mk-tc-media"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/deky.jpg" alt="Vlnené deky – ikona"></div>
          <span>Vlnené deky</span>
        </a>
        <a class="mk-tc" href="/sedaky-na-mieru/">
          <div class="mk-tc-media"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/sedaky.jpg" alt="Sedáky na mieru – ikona"></div>
          <span>Sedáky na mieru</span>
        </a>
        <a class="mk-tc" href="/paplony-a-vankuse/">
          <div class="mk-tc-media"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/paplony.jpg" alt="Paplóny a vankúše – ikona"></div>
          <span>Paplóny a vankúše</span>
        </a>
      </div>
    </div>
  </section>`;

  function addStyle(){ if(!document.getElementById('mk-topcats-style')){var s=document.createElement('style');s.id='mk-topcats-style';s.textContent=css;document.head.appendChild(s);} }
  function contentWrap(){ return document.querySelector('#content .content-inner,.content-inner,main,#content') || document.body; }
  function bannerRow(){
    var row=document.querySelector('.row.banners-row');
    if(row) return row;
    var el=document.querySelector('#carousel,.carousel.slide,.extended-banner,.carousel-inner');
    return el&&el.closest ? (el.closest('.row')||el.parentElement):null;
  }

  // vlož hneď hore, potom prípadne presuň pod banner
  addStyle();
  var wrap = contentWrap();
  wrap.insertAdjacentHTML('afterbegin', html);

  var tries = 0, t = setInterval(function(){
    var row = bannerRow(), block = document.querySelector('.mk-topcats');
    if (row && block) { row.parentNode.insertBefore(block, row.nextSibling); clearInterval(t); }
    if (++tries > 50) clearInterval(t); // ~5s
  }, 100);
})();
