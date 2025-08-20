<!-- Matesko – TOP kategórie (6 boxov, 2 na mobile, 6 na PC) -->
<section class="mk-topcats" aria-label="Naše TOP kategórie">
  <h2 class="mk-tc-title">Naše TOP kategórie</h2>
  <div class="mk-tc-grid">
    <a class="mk-tc" href="/merino-vesty/">
      <img src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/merino-vesty.jpg" alt="Merino vesty – ikona">
      <span>Merino vesty</span>
    </a>
    <a class="mk-tc" href="/papuce-z-ovcej-vlny/">
      <img src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/papuce.jpg" alt="Papuče z ovčej vlny – ikona">
      <span>Papuče z ovčej vlny</span>
    </a>
    <a class="mk-tc" href="/ladvinove-pasy/">
      <img src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/ladvinove-pasy.jpg" alt="Ľadvinové pásy – ikona">
      <span>Ľadvinové pásy</span>
    </a>
    <a class="mk-tc" href="/vlnena-deka/">
      <img src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/deky.jpg" alt="Vlnené deky – ikona">
      <span>Vlnené deky</span>
    </a>
    <a class="mk-tc" href="/sedaky-na-mieru/">
      <img src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/sedaky.jpg" alt="Sedáky na mieru – ikona">
      <span>Sedáky na mieru</span>
    </a>
    <a class="mk-tc" href="/paplony-a-vankuse/">
      <img src="https://cdn.myshoptet.com/usr/www.matesko.sk/user/documents/upload/icons/paplony.jpg" alt="Paplóny a vankúše – ikona">
      <span>Paplóny a vankúše</span>
    </a>
  </div>
</section>

<style>
  .mk-topcats{width:100%;margin:18px 0;padding:0 12px;font-family:Arial,Helvetica,sans-serif}
  .mk-tc-title{margin:0 0 12px;text-align:center;font-weight:800;color:#4b3627;font-size:clamp(20px,2.6vw,28px)}

  .mk-tc-grid{display:grid;gap:14px;grid-template-columns:repeat(2,minmax(0,1fr))}
  @media (min-width:600px){.mk-tc-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}}
  @media (min-width:1024px){.mk-tc-grid{grid-template-columns:repeat(6,minmax(0,1fr));gap:18px}}

  .mk-tc{display:flex;align-items:center;gap:10px;padding:12px;border:1px solid #e7e2db;border-radius:14px;background:#fff;
         text-decoration:none;color:#111;box-shadow:0 1px 4px rgba(0,0,0,.05);transition:.2s}
  .mk-tc:hover{box-shadow:0 4px 14px rgba(0,0,0,.08);transform:translateY(-1px)}
  .mk-tc img{width:40px;height:40px;border-radius:8px;object-fit:cover;background:#f6efe9}
  @media (min-width:1024px){.mk-tc{padding:14px}.mk-tc img{width:48px;height:48px}}
  .mk-tc span{font-weight:700;font-size:clamp(14px,1.8vw,16px)}
</style>
