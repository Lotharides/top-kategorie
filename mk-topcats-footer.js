/*! mk-topcats-footer.js */
(function () {
  if (document.querySelector('.mk-topcats')) return;

  /* ==== STYL ==== */
  var css = `
  .mk-topcats{width:100%;margin:22px 0}
  .mk-tc-wrap{max-width:1200px;margin:0 auto;padding:0 16px;font-family:Arial,Helvetica,sans-serif}
  .mk-tc-title{margin:0 0 18px;text-align:center;font-weight:800;color:#4b3627;font-size:24px}
  .mk-tc-grid{display:grid;gap:18px;grid-template-columns:repeat(2,1fr)!important}
  @media(min-width:768px){.mk-tc-grid{grid-template-columns:repeat(3,1fr)!important;gap:20px}}
  @media(min-width:1024px){.mk-tc-grid{grid-template-columns:repeat(3,1fr)!important;gap:24px}}
  .mk-tc{display:flex;flex-direction:column;align-items:center;text-decoration:none;color:#111;
         border:1px solid #e7e2db;border-radius:16px;background:#fff;padding:14px;
         box-shadow:0 1px 4px rgba(0,0,0,.06);transition:transform .15s,box-shadow .15s}
  .mk-tc:hover{box-shadow:0 8px 20px rgba(0,0,0,.10);transform:translateY(-2px)}
  /* štvorcový vizuál */
  .mk-tc-media{width:100%;aspect-ratio:1/1;border-radius:12px;background:#f6efe9;overflow:hidden;
               display:flex;align-items:center;justify-content:center}
  .mk-tc-media img{width:78%;height:78%;object-fit:contain}
  .mk-tc span{margin-top:10px;font-weight:800;text-align:center;font-size:18px;line-height:1.25}
  @media(min-width:1024px){.mk-tc{padding:20px}.mk-tc-media img{width:82%;height:82%}.mk-tc span{font-size:20px}}
  .mk-tc img[src=""], .mk-tc img:not([src]){display:none}
  `;

  /* ==== HTML ==== */
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

  /* ==== UMIETNENIE POD BANNER ==== */
  function addStyle(){ if(!document.getElementById('mk-topcats-style')){var s=document.createElement('style');s.id='mk-topcats-style';s.textContent=css;document.head.appendChild(s);} }
  function bannerRow(){
    var row=document.querySelector('.row.banners-row');
    if(row) return row;
    var el=document.querySelector('#carousel,.carousel.slide,.extended-banner,.carousel-inner');
    return el&&el.closest ? (el.closest('.row')||el.parentElement):null;
  }
  function mount(){
    addStyle();
    var r=bannerRow();
    if(r){ r.insertAdjacentHTML('afterend',html); return; }
    var waited=0,step=200,max=5000;
    var t=setInterval(function(){
      var rr=bannerRow();
      if(rr){ rr.insertAdjacentHTML('afterend',html); clearInterval(t); return; }
      waited+=step;
      if(waited>=max){ clearInterval(t); (document.querySelector('#content .content-inner,.content-inner,main,#content')||document.body).insertAdjacentHTML('afterbegin',html); }
    },step);
  }
  if(document.readyState==='complete') mount(); else window.addEventListener('load',mount);
})();
