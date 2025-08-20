/*! mk-topcats-footer.js */
(function(){
  try{
    if (window.mkTopcatsMounted) return;
    window.mkTopcatsMounted = true;

    var css = `
    .mk-topcats{width:100%;margin:18px 0;padding:0 12px;font-family:Arial,Helvetica,sans-serif}
    .mk-tc-title{margin:0 0 14px;text-align:center;font-weight:800;color:#4b3627;font-size:clamp(20px,2.6vw,28px)}
    .mk-tc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:14px}
    @media (min-width:600px){.mk-tc-grid{grid-template-columns:repeat(3,minmax(0,1fr)) !important;gap:16px}}
    @media (min-width:1024px){.mk-tc-grid{grid-template-columns:repeat(6,minmax(0,1fr)) !important;gap:18px}}
    .mk-tc{display:flex;align-items:center;gap:10px;min-width:0;padding:12px;border:1px solid #e7e2db;border-radius:14px;background:#fff;text-decoration:none;color:#111;box-shadow:0 1px 4px rgba(0,0,0,.05);transition:transform .15s,box-shadow .15s}
    .mk-tc:hover{box-shadow:0 6px 18px rgba(0,0,0,.10);transform:translateY(-2px)}
    .mk-tc img{width:44px;height:44px;border-radius:10px;object-fit:cover;background:#f6efe9;flex:0 0 auto}
    .mk-tc span{font-weight:700;font-size:clamp(14px,1.8vw,16px);line-height:1.25}
    @media (min-width:1024px){.mk-tc{padding:14px}.mk-tc img{width:50px;height:50px}}
    .mk-tc img[src=""], .mk-tc img:not([src]){display:none}
    `;

    var html = `
    <section class="mk-topcats" aria-label="Naše TOP kategórie">
      <h2 class="mk-tc-title">Naše TOP kategórie</h2>
      <div class="mk-tc-grid">
        <a class="mk-tc" href="/merino-vesty/"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/merino-vesty.jpg" alt="Merino vesty – ikona"><span>Merino vesty</span></a>
        <a class="mk-tc" href="/papuce-z-ovcej-vlny/"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/papuce.jpg" alt="Papuče z ovčej vlny – ikona"><span>Papuče z ovčej vlny</span></a>
        <a class="mk-tc" href="/ladvinove-pasy/"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/ladvinove-pasy.jpg" alt="Ľadvinové pásy – ikona"><span>Ľadvinové pásy</span></a>
        <a class="mk-tc" href="/vlnena-deka/"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/deky.jpg" alt="Vlnené deky – ikona"><span>Vlnené deky</span></a>
        <a class="mk-tc" href="/sedaky-na-mieru/"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/sedaky.jpg" alt="Sedáky na mieru – ikona"><span>Sedáky na mieru</span></a>
        <a class="mk-tc" href="/paplony-a-vankuse/"><img loading="lazy" src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/paplony.jpg" alt="Paplóny a vankúše – ikona"><span>Paplóny a vankúše</span></a>
      </div>
    </section>`;

    function inject() {
      var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

      // dočasne hore v obsahu
      var wrap = document.querySelector('#content .content-inner, .content-inner, main, #content') || document.body;
      wrap.insertAdjacentHTML('afterbegin', html);

      // presuň POD banner keď sa objaví
      var tries = 0, max = 30;
      var timer = setInterval(function(){
        tries++;
        var banner = document.querySelector('.hp-slider, .homepage-banners, .banner-slider, .hero, .banners, .slider, #banner, .box.banners');
        var block = document.querySelector('.mk-topcats');
        if (banner && block) {
          banner.parentNode.insertBefore(block, banner.nextSibling);
          clearInterval(timer);
        }
        if (tries >= max) clearInterval(timer);
      }, 200);
    }

    if (document.readyState==='loading') {
      document.addEventListener('DOMContentLoaded', inject);
    } else {
      inject();
    }
  }catch(e){}
})();
