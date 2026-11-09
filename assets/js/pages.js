/* =====================================================================
   PAGES — each returns { title, html, bind }. CakePHP: one template per action.
   ===================================================================== */
(function () {
  const SP = window.SP, t = SP.t, L = SP.L, esc = SP.esc, I = SP.icon, opt = SP.opt;
  SP.pages = {};
  const pfx = p => p == null ? t('h.soon') : t('c.from') + ' ' + SP.eur(p);
  const keyFig = m => '<div class="keys">' + m.key.map(k => '<div><strong>' + k[0] + '</strong><span>' + L(k[1]) + '</span></div>').join('') + '</div>';
  const ticker = () => { const items = ['tick.1', 'tick.2', 'tick.3', 'tick.4', 'tick.5'].map(k => '<span>' + t(k) + '</span><i>●</i>').join(''); return '<div class="ticker" aria-hidden="true"><div class="ticker__in">' + items + items + '</div></div>'; };
  const mapSrc = l => 'https://maps.google.com/maps?q=' + encodeURIComponent(l.address + ', Romania') + '&z=15&output=embed';
  const pic = (b, alt) => '<picture><source media="(max-width:760px)" srcset="' + SP.cf(b.m) + '"><img src="' + SP.cf(b.d) + '" alt="' + esc(alt) + '" onerror="this.classList.add(\'is-broken\')"></picture>';
  const tlink = (href, label, attr) => (href ? '<a class="tlink2" href="' + href + '"' + (attr || '') + '>' : '<button type="button" class="tlink2"' + (attr || '') + '>') + '<span>' + label + '</span>' + I('arrow') + (href ? '</a>' : '</button>');
  
  /* ================= HOME ================= */
  SP.pages.home = () => {
    const stock = SP.STOCK.filter(v => v.featured).slice(0, 4);
    const en = SP.lang === 'en', l0 = SP.LOCATIONS[0];
    const slides = SP.MODELS.map(m => ({ img: m.slide, e: 'GWM ' + m.name, h: L(m.slogan), href: 'model.html?m=' + m.id, id: m.id, tab: 'GWM ' + m.name }))
      .concat([{ img: SP.OFFER.img, e: t('h.campE'), h: t('h.campH'), href: 'oferte.html', id: 'offer', tab: en ? 'Promo prices' : 'Prețuri promo', offer: 1 }]);
    const slide = (x, i) => '<div class="xs' + (i ? '' : ' is-on') + '" data-slide="' + i + '">' + SP.img(x.img, 1920, x.e, 'xs__img', i ? undefined : false) + '<div class="xs__ov' + (x.offer ? ' xs__ov--ad' : '') + '"><div class="wrap xs__txt">' + (x.offer ? '<h2 class="sr">' + x.h + '</h2>' : '<p class="xs__e">' + x.e + '</p><h2 class="xs__h">' + x.h + '</h2>') +
      '<div class="btnrow"><a class="btn btn--white" href="' + x.href + '">' + (x.offer ? t('h.cta2') : t('h.cta1')) + '</a>' + (x.offer ? '' : '<a class="btn btn--ghost" href="programare.html?tip=td' + (false ? '' : '&m=' + x.id) + '">' + t('nav.td') + '</a>') + '</div></div></div></div>';
    const m0 = SP.MODELS[0];
    const show = m => '<div class="xshow__ghost" aria-hidden="true">' + m.name + '</div><a class="xshow__img" href="model.html?m=' + m.id + '">' + SP.img(m.hero, 1400, 'GWM ' + m.name) + '</a>' +
      '<div class="xshow__info"><div><p class="eyebrow">' + L(m.sub) + '</p><h3 class="xshow__h">GWM ' + m.name + '</h3><p class="xshow__s">' + L(m.slogan) + '</p></div>' + '<div class="keys keys--row">' + m.key.slice(0, 3).map(k => '<div><strong>' + k[0] + '</strong><span>' + L(k[1]) + '</span></div>').join('') + '</div>' +
      '<div class="xshow__cta"><p class="xshow__p">' + SP.priceFrom(m) + (m.soon ? '' : '<small>' + t('m.rrp') + ' · ' + t('c.vat') + '</small>') + '</p><a class="btn btn--dark" href="model.html?m=' + m.id + '">' + t('c.discover') + '</a>' + (m.soon ? '<button type="button" class="btn btn--line" data-offer="' + m.id + '">' + t('h.info') + '</button>' : '<a class="btn btn--line" href="programare.html?tip=td&m=' + m.id + '">' + t('nav.td') + '</a>') + '</div></div>';
    return {
      title: '', html:
        '<h1 class="sr">Sales Partner GWM — dealer autorizat GWM București</h1>' + '<section class="xhero" data-xhero>' + slides.map(slide).join('') + '<div class="xhero__bar"><div class="wrap xhero__tabs">' + slides.map((x, i) => '<button type="button" data-go="' + i + '" class="' + (i ? '' : 'is-on') + '"><i><b></b></i><span>' + x.tab + '</span></button>').join('') + '</div></div></section>' +
        '<section class="sec wrap xshow"><p class="eyebrow tc">' + t('h.modelsE') + '</p><div class="xshow__tabs" role="tablist">' + SP.MODELS.map((m, i) => '<button type="button" role="tab" data-sm="' + m.id + '" class="' + (i ? '' : 'is-on') + '">' + 'GWM ' + m.name + '</button>').join('') + '</div><div class="xshow__stage" data-show>' + show(m0) + '</div></section>' +
        '<section class="sec wrap"><h2 class="h2">' + t('h.range') + '</h2><div class="tabs" role="tablist">' + SP.CATS.map((c, i) => '<button type="button" role="tab" data-cat="' + c[0] + '" class="' + (i ? '' : 'is-on') + '">' + L(c[1]) + '</button>').join('') + '</div>' +
        '<div class="hgrid" data-hgrid></div><p class="note note--sm">' + I('doc') + t('m.note') + '</p></section>' + ticker() +
        '<section class="wrap sec"><div class="qtiles">' + [['pct', 'h.quickOffer', '#', 'data-offer-any'], ['wheel', 'h.quickTd', 'programare.html?tip=td'], ['wrench', 'h.quickSvc', 'programare.html?tip=svc'], ['pin', 'h.quickLoc', 'locatie.html?id=' + l0.id]].map(q =>
          (q[3] ? '<button type="button" class="qtile" ' + q[3] + '>' : '<a class="qtile" href="' + q[2] + '">') + I(q[0]) + '<span>' + t(q[1]) + '</span>' + (q[3] ? '</button>' : '</a>')).join('') + '</div></section>' +
        '<section class="sec wrap split"><div class="split__txt"><p class="eyebrow">' + t('h.campE') + '</p><h2 class="h2">' + t('h.campH') + '</h2><p>' + t('h.campP') + '</p><ul class="clist">' + SP.OFFER.models.map(id => { const m = SP.model(id); return '<li><a href="model.html?m=' + m.id + '#ver"><span>GWM ' + m.name + '</span><b>' + t('c.from') + ' ' + SP.eur(m.from) + ' <s>' + SP.eur(m.fromList) + '</s></b></a></li>'; }).join('') + '</ul>' +
        tlink('oferte.html', t('nav.offers')) + '</div><div class="split__img">' + SP.img(SP.OFFER.img, 1200, t('h.campH')) + '</div></section>' +
        '<section class="sec wrap">' + SP.shead(t('h.stockH'), t('h.stockE'), [t('h.stockAll'), 'stoc.html']) + '<div class="grid4">' + stock.map(SP.stockCard).join('') + '</div></section>' +
        '<section class="sec xtech"><div class="wrap"><p class="eyebrow">' + t('h.techE') + '</p><h2 class="h2">' + t('h.techH') + '</h2><p class="xtech__p">' + t('h.techP') + '</p><div class="grid4">' + SP.TECH.map(x => '<article class="xtile"><div class="xtile__img">' + SP.img(x[2], 900, x[0]) + '</div><h3>' + x[0] + '</h3><p>' + L(x[1]) + '</p></article>').join('') + '</div></div></section>' + '<section class="sec wrap split" id="incarcare"><div class="split__txt"><p class="eyebrow">' + t('h.chgE') + '</p><h2 class="h2">' + t('h.chgH') + '</h2><p>' + t('h.chgP') + '</p><ul class="clist"><li><a href="programare.html?tip=svc"><span>' + t('h.chg1') + '</span><b>AC 11 kW</b></a></li><li><a href="locatie.html"><span>' + t('h.chg2') + '</span><b>DC 45 – 180 kW</b></a></li></ul>' + tlink('service.html', t('c.more')) + '</div><div class="split__img">' + SP.img('https://www.gwm-eu.com/content/dam/gwm/pages/eu/eu/technology/dht/2.webp', 1100, 'GWM') + '</div></section>' +
        '<section class="sec"><div class="pro"><div class="pro__img">' + SP.img(SP.model('ora5').gallery[1], 1928, 'GWM') + '</div><div class="wrap pro__txt"><p class="eyebrow">' + t('h.proE') + '</p><h2 class="h2">' + t('h.proH') + '</h2><p>' + t('h.proP') + '</p><a class="btn btn--dark" href="programare.html?tip=svc">' + t('h.proB') + '</a></div></div></section>' +
        '<section class="sec sec--last wrap split split--rev"><div class="split__img">' + SP.img(l0.img, 1200, l0.name) + '</div><div class="split__txt"><p class="eyebrow">' + t('h.locE') + '</p><h2 class="h2">' + t('h.locH') + '</h2><p>' + t('h.locP') + '</p>' +
        '<p class="ico">' + I('pin') + '<span>' + l0.address + '</span></p><p class="ico">' + I('phone') + '<span>' + l0.phone + '</span></p><div class="btnrow"><a class="btn btn--dark" href="locatie.html?id=' + l0.id + '">' + t('l.view') + '</a><a class="btn btn--line" href="programare.html?tip=td">' + t('nav.td') + '</a></div></div></section>',
      bind(m) {
        /* hero slider */
        const hero = m.querySelector('[data-xhero]'), sl = [...hero.querySelectorAll('[data-slide]')], tabs = [...hero.querySelectorAll('[data-go]')]; let cur = 0, timer;
        const go = i => { cur = (i + sl.length) % sl.length; sl.forEach((x, k) => x.classList.toggle('is-on', k === cur)); tabs.forEach((x, k) => { x.classList.toggle('is-on', k === cur); x.classList.toggle('is-done', k < cur); }); clearTimeout(timer); timer = setTimeout(() => go(cur + 1), 6500); };
        tabs.forEach((b, i) => b.addEventListener('click', () => go(i))); go(0);
        /* model showcase */
        const stage = m.querySelector('[data-show]');
        m.querySelectorAll('[data-sm]').forEach(b => b.addEventListener('click', () => { m.querySelectorAll('[data-sm]').forEach(x => x.classList.toggle('is-on', x === b)); stage.classList.remove('is-in'); stage.innerHTML = show(SP.model(b.dataset.sm)); void stage.offsetWidth; stage.classList.add('is-in'); }));
        /* range finder */
        const g = m.querySelector('[data-hgrid]');
        const card = x => '<article class="hcard"><a class="hcard__img" href="model.html?m=' + x.id + '">' + SP.img(x.card, 520, x.name) + (x.soon ? '<span class="mbadges"><span>' + t('h.soon') + '</span></span>' : '') + '</a><div class="hcard__h"><h3>GWM ' + x.name + '</h3><button type="button" class="hcard__i" data-offer="' + x.id + '" aria-label="' + t('c.reqOffer') + '">' + I('pct') + '</button><a class="hcard__go" href="model.html?m=' + x.id + '" aria-label="' + x.name + '">' + I('arrow') + '</a></div>' +
          '<p class="hcard__p"><strong>' + SP.priceFrom(x) + '</strong></p><p class="hcard__s">' + L(x.sub) + ' · ' + t('h.range2') + ' ' + SP.nf(x.maxRange) + ' km</p></article>';
        const draw = c => { g.innerHTML = SP.MODELS.filter(x => x.cats.includes(c)).map(card).join(''); };
        m.querySelectorAll('[data-cat]').forEach(b => b.addEventListener('click', () => { m.querySelectorAll('[data-cat]').forEach(x => x.classList.toggle('is-on', x === b)); draw(b.dataset.cat); }));
        draw('all');
      }
    };
  };

  /* ================= MODELE ================= */
  SP.pages.models = () => {
    const st = { cat: SP.param('cat') || 'all' };
    return {
      title: t('m.title'), html: SP.phead(t('nav.models').toUpperCase(), t('m.title'), null, '<div class="tabs tabs--l" role="tablist">' + SP.CATS.map(c => '<button type="button" role="tab" data-mcat="' + c[0] + '">' + L(c[1]) + '</button>').join('') + '</div>') +
        '<section class="wrap"><p class="mbar__n"><strong data-mn></strong> ' + t('m.count') + '</p><div class="mgrid" data-mlist></div><p class="note">' + I('doc') + t('m.note') + '</p></section>' +
        '<section class="wrap sec sec--last" id="brosuri">' + SP.shead(t('m.brochH'), 'PDF') + '<p class="muted">' + t('m.brochP') + '</p><div class="broch">' + SP.MODELS.map(m => '<a class="bcard" href="' + m.plUrl + '" target="_blank" rel="noopener">' + SP.img(m.card, 400, m.name) + '<span><strong>GWM ' + m.name + '</strong><small>' + L(m.sub) + '</small></span>' + I('doc') + '</a>').join('') + '</div></section>',
      bind(m) {
        const list = m.querySelector('[data-mlist]');
        const draw = () => {
          m.querySelectorAll('[data-mcat]').forEach(b => b.classList.toggle('is-on', b.dataset.mcat === st.cat));
          const r = SP.MODELS.filter(x => x.cats.includes(st.cat));
          m.querySelector('[data-mn]').textContent = r.length; list.innerHTML = r.map(SP.modelCard).join('');
        };
        m.querySelectorAll('[data-mcat]').forEach(b => b.addEventListener('click', () => { st.cat = b.dataset.mcat; draw(); }));
        draw();
      }
    };
  };

  /* ================= MODEL ================= */
  SP.pages.model = () => {
    const m = SP.model(SP.param('m')) || SP.MODELS[0], en = SP.lang === 'en';
    const stock = SP.STOCK.filter(v => v.cond === 'new' && v.mid === m.id);
    const pt0 = m.fuels.includes(SP.param('pt')) ? SP.param('pt') : m.fuels[0], multi = m.fuels.length > 1;
    const ptSw = cls => multi ? '<div class="ptsw' + (cls ? ' ' + cls : '') + '" role="tablist">' + m.fuels.map(f => '<button type="button" data-pt="' + f + '" class="' + (f === pt0 ? 'is-on' : '') + '">' + L(SP.FUEL[f]) + '<small>' + pfx(m.fromBy(f)) + '</small></button>').join('') + '</div>' : '';
    const vtable = '<div class="vtable vtable--xp" role="table"><div class="vrow vrow--h" role="row"><span role="columnheader">' + t('m.trim') + '</span><span role="columnheader">' + t('m.drive') + '</span><span role="columnheader">' + t('m.power') + '</span><span role="columnheader">' + t('m.range') + '</span><span role="columnheader">' + t('m.price') + '</span><span></span></div>' +
      m.versions.map(v => '<div class="vrow" role="row" data-vpt="' + v.fuel + '"' + (multi && v.fuel !== pt0 ? ' hidden' : '') + '><span role="cell"><b>' + v.label + '</b><small>' + v.note + '</small></span><span role="cell">' + v.dr + '</span><span role="cell">' + v.kw + ' kW / ' + v.hp + ' CP</span><span role="cell">' + (v.range ? SP.nf(v.range) + ' km' : '—') + (v.rnote ? '<small>' + L(v.rnote) + '</small>' : '') + (v.reev ? '<small>' + t('m.total') + ' · ' + v.erange + ' km ' + (en ? 'electric' : 'electric') + '</small>' : '') + '</span><span role="cell"><strong>' + (v.price == null ? t('h.soon') : SP.eur(v.price)) + '</strong>' + (v.price != null && v.list > v.price ? '<small><s>' + SP.eur(v.list) + '</s></small>' : '') + '</span><span role="cell"><button type="button" class="ulink ulink--sm" data-offer="' + m.id + '">' + t('m.ask') + '</button></span></div>').join('') + '</div>';
    const c0 = m.colors[0];
    const colNote = c => (c ? (c.sur ? '+' + SP.eur(c.sur) : c.sur == null ? t('m.surAsk') : t('m.std')) : '');
    const sp = m.specs, SPEC = [['m.range', L(sp.range) || (m.versions.length ? SP.nf(Math.min.apply(null, m.versions.filter(v => !v.reev).map(v => v.range))) + ' – ' + SP.nf(m.maxRange) + ' km' : '')], ['m.battery', sp.battery], ['m.pw', m.versions.length ? m.versions.map(v => v.hp).filter((x, i, a) => a.indexOf(x) === i).join(' / ') + ' CP' : ''], ['m.torque', sp.torque], ['m.acc', sp.acc], ['m.vmax', sp.vmax],
      ['m.dc', sp.dc], ['m.dctime', sp.dctime], ['m.ac', sp.ac], ['m.energy', sp.energy], ['m.len', sp.len], ['m.wid', sp.wid], ['m.hei', sp.hei], ['m.wb', sp.wb], ['m.boot', sp.boot], ['m.seats', sp.seats], ['m.mass', sp.mass], ['m.tow', sp.tow]].filter(x => x[1]);
    const trimFrom = name => { const a = m.versions.filter(x => x.trim === name && x.price != null).map(x => x.price); return a.length ? Math.min.apply(null, a) : null; };
    const nav = [['ov', 'm.overview'], ['col', 'm.colors'], ['ver', 'm.versions'], ['dot', 'm.equip'], ['spec', 'm.specs'], ['gal', 'm.gallery'], ['stoc', 'm.stock']].filter(x => !m.soon || ['ov', 'spec', 'gal'].includes(x[0]));
    return {
      title: 'GWM ' + m.name, html:
        '<div class="subnav"><div class="wrap subnav__in"><strong>GWM ' + m.name + '</strong><nav>' + nav.map(x => '<a href="#' + x[0] + '">' + t(x[1]) + '</a>').join('') + '</nav><button type="button" class="btn btn--dark btn--sm" data-offer="' + m.id + '">' + (m.soon ? t('h.info') : t('c.reqOffer')) + '</button></div></div>' +
        '<section class="mhero mhero--xp" id="ov">' + SP.img(m.hero, 1928, m.name, '', false) + '<div class="mhero__ov"><div class="wrap"><p class="xs__e">' + 'GWM ' + m.name + '</p><h1 class="mhero__h">' + L(m.slogan) + '</h1><p class="mhero__p"><span data-hprice>' + pfx(multi ? m.fromBy(pt0) : m.from) + '</span> · ' + t('m.rrp') + ', ' + t('c.vat') + '*</p></div></div></section>' +
        '<section class="wrap mintro"><p class="eyebrow">' + L(m.sub).toUpperCase() + ' · ' + m.fuels.map(f => L(SP.FUEL[f]).toUpperCase()).join(' / ') + '</p><p class="lead">' + L(m.lead) + '</p>' +
        '<div class="btnrow btnrow--c"><button type="button" class="btn btn--dark" data-offer="' + m.id + '">' + I('pct') + (m.soon ? t('h.info') : t('c.reqOffer')) + '</button>' + (m.soon ? '' : '<a class="btn btn--line" href="programare.html?tip=td&m=' + m.id + '">' + I('wheel') + t('nav.td') + '</a>') + '</div>' + ptSw('ptsw--c') + '<div data-keys>' + keyFig(m.keyBy ? Object.assign({}, m, { key: m.keyBy[pt0] }) : m) + '</div></section>' +
        (m.soon ? '<section class="wrap sec split"><div class="split__txt"><p class="eyebrow">' + t('h.soon').toUpperCase() + '</p><h2 class="h2">' + t('m.soonH') + '</h2><p>' + t('m.soonP') + '</p></div><div class="fbox">' + SP.leadForm({ type: 'info', ctx: m.id, message: true, submit: t('h.info') }) + '</div></section>' :
        '<section class="wrap sec cstage" id="col"><div class="cstage__img cstage__img--xp" data-cimg>' + SP.img(c0.img || m.card, 1100, 'GWM ' + m.name, '', false) + '</div><div class="cstage__p"><p class="eyebrow">' + t('m.colors') + '</p><h2 class="h3" data-cname>' + c0.name + '</h2><p class="muted small" data-cnote>' + colNote(c0) + '</p>' +
        '<div class="swatches">' + m.colors.map(c => '<button type="button" class="sw' + (c === c0 ? ' is-on' : '') + '" data-c="' + c.code + '" aria-label="' + esc(c.name) + '" title="' + esc(c.name) + '"><span style="background:' + c.hex + '"></span></button>').join('') + '</div>' +
        '<p class="note note--sm">' + I('doc') + t('m.colNote') + '</p></div></section>' +
        '<section class="wrap sec" id="ver">' + SP.shead(t('m.versions'), 'GWM ' + m.name, [t('nav.brochures') + ' ↗', m.plUrl]) + ptSw() + vtable +
        (m.options ? '<h3 class="h4 mopts__h">' + t('m.options') + '</h3><ul class="mopts">' + m.options.map(o => '<li><span>' + L(o[0]) + '</span><b>+' + SP.eur(o[1]) + '</b></li>').join('') + '</ul>' : '') +
        '<p class="note note--sm">' + I('doc') + t('m.note') + '</p></section>' +
        (SP.TRIMS[m.id] ? '<section class="wrap sec" id="dot">' + SP.shead(t('m.trimsH'), t('m.equip').toUpperCase()) + '<div class="trims">' + (SP.TRIMS[m.id] || []).map(x => { const txt = L(x[1]), plus = /^(În plus|Adds): /.test(txt), pr = trimFrom(x[0]); return '<article class="trim"><h3>' + x[0] + '</h3>' + (pr ? '<p class="trim__p">' + t('c.from') + ' <strong>' + SP.eur(pr) + '</strong></p>' : '') + (plus ? '<p class="trim__plus">' + (en ? 'On top of ' : 'În plus față de ') + SP.TRIMS[m.id][0][0] + ':' + '</p>' : '') + '<ul>' + txt.replace(/^(În plus|Adds): /, '').split(' · ').map(li => '<li>' + I('check') + li + '</li>').join('') + '</ul></article>'; }).join('') + '</div></section>' : '')) +
        '<section class="wrap sec" id="spec">' + SP.shead(t('m.specs'), 'GWM ' + m.name) + '<dl class="specs">' + SPEC.map(s => '<div><dt>' + t(s[0]) + '</dt><dd>' + s[1] + '</dd></div>').join('') + '</dl><p class="note note--sm">' + I('doc') + t('m.wltp') + '</p></section>' +
        '<section class="wrap sec" id="gal">' + SP.shead(t('m.gallery')) + '<div class="mgal">' + m.gallery.slice(0, 5).map((g, i) => '<figure class="mgal__i mgal__i--' + i + '">' + SP.img(g, i ? 900 : 1400, m.name) + '</figure>').join('') + '</div></section>' +
        (m.soon ? '' : '<section class="wrap sec" id="stoc">' + SP.shead(t('m.inStock'), '', stock.length ? [t('h.stockAll'), 'stoc.html?model=' + encodeURIComponent('GWM ' + m.name)] : null) + (stock.length ? '<div class="grid4">' + stock.map(SP.stockCard).join('') + '</div>' : '<p class="note">' + I('car') + t('m.noStock') + '</p>') + '</section>') +
        '<section class="wrap sec sec--last"><div class="qtiles">' + '<a class="qtile" href="' + m.official + '" target="_blank" rel="noopener">' + I('ext') + '<span>' + t('m.official') + '</span></a>' +
        '<a class="qtile" href="programare.html?tip=td' + (m.soon ? '' : '&m=' + m.id) + '">' + I('wheel') + '<span>' + t('fab.td') + '</span></a><a class="qtile" href="' + m.plUrl + '" target="_blank" rel="noopener">' + I('doc') + '<span>' + t('nav.brochures') + '</span></a><button type="button" class="qtile" data-offer="' + m.id + '">' + I('pct') + '<span>' + t('c.reqOffer') + '</span></button></div></section>',
      bind(el) {
        el.querySelectorAll('[data-c]').forEach(b => b.addEventListener('click', () => {
          const c = m.colorOf(b.dataset.c);
          el.querySelector('[data-cname]').textContent = c.name; el.querySelector('[data-cnote]').textContent = colNote(c); if (c.img) { const im = el.querySelector('[data-cimg] img'); im.classList.remove('is-broken'); im.src = SP.cf(c.img); }
          el.querySelectorAll('[data-c]').forEach(x => x.classList.toggle('is-on', x === b));
        }));
        el.querySelectorAll('[data-pt]').forEach(b => b.addEventListener('click', () => { const f = b.dataset.pt; el.querySelectorAll('[data-pt]').forEach(x => x.classList.toggle('is-on', x.dataset.pt === f)); el.querySelectorAll('[data-vpt]').forEach(r => { r.hidden = r.dataset.vpt !== f; }); if (m.keyBy) el.querySelector('[data-keys]').innerHTML = keyFig(Object.assign({}, m, { key: m.keyBy[f] })); const hp = el.querySelector('[data-hprice]'); if (hp) hp.textContent = pfx(m.fromBy(f)); }));
      }
    };
  };

  /* ================= OFERTE ================= */
  SP.pages.offers = () => {
    const ms = SP.sellable();
    const card = (m, i) => '<article class="ocard"><p class="ocard__n"><span>' + String(i + 1).padStart(2, '0') + '</span><em>' + L(m.key[0][1]).replace('*', '') + ' · ' + m.key[0][0] + '</em></p><a class="ocard__img" href="model.html?m=' + m.id + '">' + SP.img(m.card, 700, m.name) + '</a>' +
      '<p class="ocard__k">' + L(m.sub).toUpperCase() + '</p><h3>GWM ' + m.name + '</h3><p class="muted small">' + L(m.lead) + '</p>' +
      '<div class="ocard__p"><div><small>' + t('m.rrp') + ' · ' + t('c.vat') + '</small><strong>' + t('c.from') + ' ' + SP.eur(m.from) + '</strong><small><s>' + SP.eur(m.fromList) + '</s> ' + t('m.listShort') + '</small>' + (m.fuels.length > 1 ? '<span class="obadge">EV & Hybrid EV</span>' : '') + '</div>' +
      '<a class="ibtn" href="model.html?m=' + m.id + '#ver" aria-label="' + m.name + '">' + I('arrow') + '</a></div><button type="button" class="btn btn--dark btn--sm btn--block" data-offer="' + m.id + '">' + t('o.reserve') + '</button></article>';
    const link = o => ({ app: [SP.OFFICIAL, t('c.more'), ' target="_blank" rel="noopener"'], buyback: ['programare.html?tip=bb', t('nav.book')], body: ['programare.html?tip=dmg', t('nav.book')], rabla: [null, t('c.reqOffer'), ' data-offer-any'], charge: ['programare.html?tip=svc', t('nav.book')], fin: [null, t('c.reqOffer'), ' data-offer-any'], fleet: [null, t('c.reqOffer'), ' data-offer-any'], tyres: ['stoc.html', t('h.stockAll')], warranty: ['service.html', t('c.more')], assist: ['service.html#assist', t('c.more')] }[o.id] || ['programare.html?tip=svc', t('nav.book')]);
    const svc = o => { const l = link(o); return '<article class="svcard"><div class="svcard__img">' + SP.img(o.img, 700, L(o.title)) + '<span class="obadge">' + L(o.badge) + '</span></div><div class="svcard__b"><h3>' + L(o.title) + '</h3><p class="muted small">' + L(o.lead) + '</p>' + tlink(l[0], l[1], l[2]) + '</div></article>'; };
    return {
      title: t('nav.offers'), html: '<section class="ohero ohero--xp">' + SP.img(SP.OFFER.img, 1920, t('h.campH'), 'ohero__bg', false) + '<div class="wrap ohero__in"><div><p class="eyebrow">' + t('o.eyebrow') + '</p><h1 class="ohero__h">' + t('o.title') + '</h1><p>' + t('o.sub') + '</p>' +
        '<div class="btnrow"><a class="btn btn--white" href="#oferte">' + t('o.cars') + '</a><a class="btn btn--ghost" href="stoc.html">' + t('h.stockAll') + '</a></div></div><div class="ohero__max"><p class="eyebrow">' + t('o.max') + '</p><strong>' + t('h.campH') + '</strong><p>' + t('h.campP') + '</p></div></div></section>' + ticker() +
        '<section class="wrap sec" id="oferte">' + SP.shead(t('o.cars'), '01 · ' + (SP.lang === 'en' ? 'PROMOTIONAL PRICES' : 'PREȚURI PROMOȚIONALE')) + '<div class="ogrid">' + ms.map(card).join('') + '</div></section>' +
        '<section class="wrap sec" id="fin">' + SP.shead(t('o.fin'), '02 · ' + (SP.lang === 'en' ? 'FINANCE' : 'FINANȚARE')) + '<div class="grid3">' + SP.FIN.map(svc).join('') + '</div></section>' +
        '<section class="wrap sec sec--last">' + SP.shead(t('o.svc'), '03 · ' + t('h.svcE')) + '<div class="grid3">' + SP.SERVICE_OFFERS.map(svc).join('') + '</div><p class="note">' + I('doc') + t('o.legal') + '</p></section>'
    };
  };

  /* ================= STOC ================= */
  SP.pages.stock = () => {
    const p = k => SP.param(k) || '';
    const st = { cond: p('cond') || 'all', q: '', model: p('model'), brand: '', fuel: '', range: 0, drive: '', max: 0, avail: false, sort: 'rec', page: 1 };
    const titles = [...new Set(SP.STOCK.map(v => v.title))].sort();
    const sel = (k, label, opts) => '<label class="fsel"><span>' + label + '</span><select data-s="' + k + '">' + opt('', t('c.any'), st[k]) + opts.map(o => opt(o[0], o[1], st[k])).join('') + '</select></label>';
    const rail = '<div class="rail__h"><strong>' + t('s.filters') + '</strong><button type="button" class="ulink ulink--sm" data-sreset>' + t('c.reset') + '</button></div>' +
      '<label class="fsearch">' + I('search') + '<input type="search" data-s="q" placeholder="' + t('s.search') + '" aria-label="' + t('s.search') + '"></label>' +
      sel('model', t('s.model'), titles.map(x => [x, x])) + sel('brand', t('s.brand'), [...new Set(SP.STOCK.map(v => v.brand))].map(b => [b, b])) +
      sel('fuel', t('s.fuel'), [...new Set(SP.STOCK.map(v => v.fuel))].map(f => [f, L(SP.FUEL[f])])) + sel('range', t('s.range'), [400, 450, 500, 550].map(x => [x, x + ' km'])) +
      sel('drive', t('s.drive'), [['awd', t('s.awd')], ['fwd', t('s.fwd')]]) + sel('max', t('s.max'), [20000, 40000, 50000, 60000, 80000, 90000].map(x => [x, SP.eur(x)])) +
      '<label class="cbx"><input type="checkbox" data-s="avail"><span>' + t('s.onlyAvail') + '</span></label><button type="button" class="btn btn--dark btn--block rail__apply" data-stoggle>' + t('s.show') + '</button>';
    const isAwd = v => v.drive === 'AWD';
    return {
      title: t('nav.stock'), html: SP.phead(t('s.eyebrow'), t('s.title'), t('s.sub'), '<div class="segs" role="tablist">' + [['all', t('c.all')], ['new', t('s.new')], ['used', t('s.used')]].map(x => '<button type="button" data-cond="' + x[0] + '">' + x[1] + '</button>').join('') + '</div>') +
        '<section class="wrap slay"><button class="btn btn--line btn--sm sfbtn" type="button" data-stoggle>' + I('sliders') + t('s.filters') + '</button><aside class="rail" id="rail">' + rail + '</aside>' +
        '<div><div class="sbar"><p><strong data-scount></strong> ' + t('c.results') + '</p><label class="sel"><span class="sr">' + t('s.sort') + '</span><select data-ssort>' + opt('rec', t('s.sRec')) + opt('pa', t('s.sPa')) + opt('pd', t('s.sPd')) + opt('y', t('s.sY')) + opt('k', t('s.sK')) + '</select></label></div>' +
        '<div data-slist></div><nav class="pager" data-pager aria-label="Pagination"></nav></div></section>',
      bind(m) {
        const list = m.querySelector('[data-slist]'), rail = m.querySelector('#rail'), PER = 9;
        const draw = () => {
          m.querySelectorAll('[data-cond]').forEach(b => b.classList.toggle('is-on', b.dataset.cond === st.cond));
          const q = st.q.toLowerCase();
          let r = SP.STOCK.filter(v => (st.cond === 'all' || v.cond === st.cond) && (!st.model || v.title === st.model) && (!st.brand || v.brand === st.brand) && (!st.fuel || v.fuel === st.fuel) &&
            (!st.range || (v.range || 0) >= st.range) && (!st.drive || (st.drive === 'awd') === isAwd(v)) && (!st.max || v.price <= st.max) && (!st.avail || v.status === 'avail') && (!q || (v.title + ' ' + v.version + ' ' + v.id).toLowerCase().includes(q)));
          const srt = { pa: (a, b) => a.price - b.price, pd: (a, b) => b.price - a.price, y: (a, b) => b.year - a.year, k: (a, b) => a.km - b.km }[st.sort]; if (srt) r = r.slice().sort(srt);
          m.querySelector('[data-scount]').textContent = r.length;
          const pages = Math.max(1, Math.ceil(r.length / PER)); st.page = Math.min(st.page, pages);
          list.innerHTML = r.length ? '<div class="grid3">' + r.slice((st.page - 1) * PER, st.page * PER).map(SP.stockCard).join('') + '</div>' : '<p class="empty">' + t('s.none') + '</p>';
          m.querySelector('[data-pager]').innerHTML = pages < 2 ? '' : Array.from({ length: pages }, (_, i) => '<button type="button" data-pg="' + (i + 1) + '" class="' + (i + 1 === st.page ? 'is-on' : '') + '">' + (i + 1) + '</button>').join('');
        };
        rail.addEventListener('input', e => { const k = e.target.dataset.s; if (!k) return; st[k] = e.target.type === 'checkbox' ? e.target.checked : (k === 'max' || k === 'range' ? +e.target.value : e.target.value); st.page = 1; draw(); });
        m.querySelector('[data-sreset]').addEventListener('click', () => { Object.assign(st, { q: '', model: '', brand: '', fuel: '', range: 0, drive: '', max: 0, avail: false, page: 1 }); rail.querySelectorAll('select').forEach(s => s.value = ''); rail.querySelector('[data-s=q]').value = ''; rail.querySelector('[data-s=avail]').checked = false; draw(); });
        m.querySelectorAll('[data-cond]').forEach(b => b.addEventListener('click', () => { st.cond = b.dataset.cond; st.page = 1; draw(); }));
        m.querySelector('[data-ssort]').addEventListener('change', e => { st.sort = e.target.value; draw(); });
        m.querySelector('[data-pager]').addEventListener('click', e => { const b = e.target.closest('[data-pg]'); if (b) { st.page = +b.dataset.pg; draw(); m.querySelector('.slay').scrollIntoView({ behavior: 'smooth' }); } });
        m.querySelectorAll('[data-stoggle]').forEach(b => b.addEventListener('click', () => rail.classList.toggle('is-open')));
        draw();
      }
    };
  };

  /* ================= VEHICUL ================= */
  SP.pages.vehicle = () => {
    const v = SP.car(SP.param('id')) || SP.STOCK[0], isNew = v.cond === 'new', loc = SP.loc(v.loc), a = SP.ADVISORS[v.adv], APR = .079;
    const imgs = v.img ? [['cf', v.img]].concat((v.model ? v.model.gallery.slice(1, 4) : []).map(g => ['cf', g])) : v.photos.map(k => ['u', k]);
    const big = x => x[0] === 'u' ? SP.ph(x[1], 1400, 875) : SP.cf(x[1]);
    const thumb = (x, i) => '<button type="button" class="vthumb' + (x[0] === 'cut' ? ' vthumb--cut' : '') + (i ? '' : ' is-on') + '" data-i="' + i + '">' + (x[0] === 'u' ? SP.uimg(x[1], 300, 200) : SP.img(x[1], 360)) + '</button>';
    const specs = [[t('v.year'), v.year], [t('v.km'), SP.nf(v.km) + ' km'], [t('v.fuel'), L(SP.FUEL[v.fuel])], [t('v.gear'), v.gb], [t('v.power'), v.hp + ' CP'], isNew ? [t('v.battery'), v.ver.note] : [t('v.trim'), v.version], isNew ? [t('v.range'), v.ver.range ? SP.nf(v.ver.range) + ' km WLTP' + (v.fuel === 'phev' ? ' (electric)' : '') : (v.ver.rnote ? L(v.ver.rnote) : '—')] : null, isNew ? [t('v.drive'), v.ver.dr] : null, isNew ? [t('v.trim'), v.ver.trim] : null,
      [t('v.color'), L(v.colorName)], [t('v.loc'), loc.name], [t('v.vin'), v.vin], [t('v.stockId'), v.id]].filter(Boolean);
    const sim = SP.STOCK.filter(x => x.id !== v.id && x.cond === v.cond).sort((x, y) => (y.mid === v.mid) - (x.mid === v.mid)).slice(0, 3);
    const checks = isNew ? ['v.hn', 'v.hn2'] : v.brand === 'GWM' ? ['v.h1', 'v.h2', 'v.hn'] : ['v.h1', 'v.h2', 'v.h3'];
    const trimTxt = isNew ? L(((SP.TRIMS[v.mid] || []).find(x => v.ver.trim === x[0]) || ['', { ro: '', en: '' }])[1]).replace(/^(În plus|Adds): /, '') : '';
    const priceRows = isNew ? '<p class="pbox__r"><span>' + t('v.list') + '</span><span>' + SP.eur(v.base) + '</span></p>' + (v.base > v.promo ? '<p class="pbox__r"><span>' + t('v.promoDisc') + '</span><span>−' + SP.eur(v.base - v.promo) + '</span></p>' : '') + '<p class="pbox__r"><span>' + t('v.campPrice') + ' ' + esc(v.colorName) + '</span><span>' + (v.sur ? '+' + SP.eur(v.sur) : v.surNA ? t('m.surAsk') : t('m.std')) + '</span></p>' + (v.demo ? '<p class="pbox__r"><span>' + t('v.demoDisc') + '</span><span>−' + SP.eur(1500) + '</span></p>' : '') + (v.offer ? '<p class="pbox__r pbox__r--gift"><span>' + I('check') + t('v.offer') + '</span></p>' : '') : '';
    return {
      title: v.title, html: '<section class="wrap vd"><a class="back" href="stoc.html">' + I('arrowL') + t('v.back') + '</a><div class="vd__top"><div><div class="vd__main' + (imgs[0][0] === 'cut' ? ' vd__main--cut' : '') + '" data-main>' + SP.condTag(v) + SP.stTag(v) + '<img src="' + big(imgs[0]) + '" alt="' + esc(v.title) + '" onerror="this.classList.add(\'is-broken\')"></div>' +
        '<div class="vd__thumbs">' + imgs.map(thumb).join('') + '</div><p class="vd__credit" data-credit>' + (imgs[0][0] === 'u' ? SP.credit(v.photos[0]) : '') + '</p><p class="note note--sm">' + I('camera') + t(v.img ? 'v.photosNew' : 'v.photosUsed') + '</p></div>' +
        '<div class="vd__side"><p class="eyebrow">' + (isNew ? (v.demo ? t('c.demo') : t('c.new')) : t('c.used')) + ' · ' + v.year + ' · ' + loc.city + '</p><h1 class="vd__h">' + esc(v.title) + '</h1><p class="muted">' + esc(v.version) + '</p>' +
        '<p class="chips">' + [SP.nf(v.km) + ' km', L(SP.FUEL[v.fuel]), v.drive, v.hp + ' CP'].concat(v.range ? [SP.nf(v.range) + ' km WLTP'] : []).map(x => '<span>' + x + '</span>').join('') + (isNew ? '<span class="chips__c"><i style="background:' + v.hex + '"></i>' + esc(v.colorName) + '</span>' : '') + '</p>' +
        '<div class="pbox">' + priceRows + '<p class="pbox__r pbox__r--main"><span>' + t('v.price') + '</span><strong>' + SP.eur(v.price) + '</strong></p>' +
        '<p class="pbox__r"><span class="muted">' + t('c.vat') + '</span>' + (v.list && v.list > v.price ? '<em class="save">−' + SP.eur(v.list - v.price) + '</em>' : '') + '</p><p class="pbox__st pbox__st--' + v.status + '">' + SP.statusTxt(v) + '</p></div>' +
        '<a class="btn btn--dark btn--block" href="#oferta">' + t('c.reqOffer') + '</a><a class="btn btn--line btn--block" href="programare.html?tip=td' + (v.model ? '&m=' + v.model.id : '') + '">' + t('nav.td') + '</a>' +
        '<div class="advbox"><p class="eyebrow">' + t('v.advisor') + '</p><div class="advbox__r">' + SP.advisorMini(a) + '<span class="advbox__b"><a class="ibtn" href="tel:' + a.phone.replace(/\s/g, '') + '" aria-label="' + t('c.call') + '">' + I('phone') + '</a><a class="ibtn" href="mailto:' + loc.email + '?subject=' + encodeURIComponent(v.id) + '" aria-label="Email">' + I('mail') + '</a></span></div></div>' +
        (v.model ? '<a class="ulink ulink--sm" href="model.html?m=' + v.model.id + '">' + t('v.model') + ': GWM ' + v.model.name + '</a>' : '') + '</div></div>' +
        '<div class="vd__body"><div><h2 class="h3">' + t('v.specs') + '</h2><dl class="specs">' + specs.map(s => '<div><dt>' + s[0] + '</dt><dd>' + esc(s[1]) + '</dd></div>').join('') + '</dl>' +
        (trimTxt ? '<h2 class="h3">' + t('m.equip') + ' · ' + v.ver.trim + '</h2><ul class="hist">' + trimTxt.split(' · ').map(x => '<li>' + I('check') + x + '</li>').join('') + '</ul>' : '') +
        '<h2 class="h3">' + t('v.hist') + '</h2><ul class="hist">' + checks.map(c => '<li>' + I('shield') + t(c) + '</li>').join('') + '</ul></div>' +
        '<aside class="fin"><h2 class="h4">' + t('v.fin') + '</h2><p class="muted small">' + t('v.apr') + '</p><label class="slider"><span><b>' + t('v.down') + '</b><em data-fdv></em></span><input type="range" min="0" max="50" step="5" value="20" data-fd aria-label="' + t('v.down') + '"></label>' +
        '<label class="slider"><span><b>' + t('v.term') + '</b><em data-ftv></em></span><input type="range" min="12" max="60" step="12" value="48" data-ft aria-label="' + t('v.term') + '"></label><div class="fin__res"><p class="eyebrow">' + t('v.monthly') + '</p><strong data-fm></strong></div><p class="muted small">' + t('v.finNote') + '</p></aside></div>' +
        '<div class="vd__forms" id="oferta"><div class="fbox"><h2 class="h4">' + t('v.reqT') + '</h2>' + SP.leadForm({ type: 'stock-offer', ctx: v.id, submit: t('c.reqOffer'), message: true }) + '</div><div class="fbox"><h2 class="h4">' + t('v.tdT') + '</h2>' + SP.leadForm({ type: 'testdrive', ctx: v.id, submit: t('nav.td') }) + '</div></div>' +
        '<div class="sec sec--last">' + SP.shead(t('v.similar')) + '<div class="grid3">' + sim.map(SP.stockCard).join('') + '</div></div></section>',
      bind(m) {
        const main = m.querySelector('[data-main]');
        m.querySelectorAll('[data-i]').forEach(b => b.addEventListener('click', () => { const x = imgs[+b.dataset.i]; const im = main.querySelector('img'); im.classList.remove('is-broken'); im.src = big(x);  m.querySelector('[data-credit]').innerHTML = x[0] === 'u' ? SP.credit(x[1]) : ''; m.querySelectorAll('[data-i]').forEach(y => y.classList.toggle('is-on', y === b)); }));
        const fd = m.querySelector('[data-fd]'), ft = m.querySelector('[data-ft]');
        const calc = () => { m.querySelector('[data-fdv]').textContent = fd.value + '% · ' + SP.eur(v.price * fd.value / 100); m.querySelector('[data-ftv]').textContent = ft.value + ' ' + t('v.months'); m.querySelector('[data-fm]').textContent = SP.eur(SP.monthly(v.price, fd.value / 100, +ft.value, APR)); };
        fd.addEventListener('input', calc); ft.addEventListener('input', calc); calc();
      }
    };
  };

  /* ================= SERVICE ================= */
  SP.pages.service = () => ({
    title: t('nav.service'), html: SP.phead(t('sv.eyebrow'), t('sv.title'), t('sv.sub'), '<div class="btnrow"><a class="btn btn--dark" href="programare.html?tip=svc">' + t('sv.book') + '</a><a class="btn btn--line" href="programare.html?tip=dmg">' + t('b.dmg') + '</a></div>') +
      '<section class="sec"><div class="pro"><div class="pro__img">' + SP.img(SP.model('ora5').gallery[1], 1928, 'GWM') + '</div><div class="wrap pro__txt"><p class="eyebrow">' + t('h.proE') + '</p><h2 class="h2">' + t('h.proH') + '</h2><p>' + t('h.proP') + '</p><a class="btn btn--dark" href="programare.html?tip=svc">' + t('h.proB') + '</a></div></div></section>' +
      '<section class="wrap sec">' + SP.shead(t('sv.offers')) + '<div class="grid3">' + SP.SERVICE_OFFERS.map(o => '<article class="svcard"><div class="svcard__img">' + SP.img(o.img, 700, L(o.title)) + '<span class="obadge">' + L(o.badge) + '</span></div><div class="svcard__b"><h3>' + L(o.title) + '</h3><p class="muted small">' + L(o.lead) + '</p>' + tlink('programare.html?tip=' + (o.id === 'buyback' ? 'bb' : o.id === 'body' ? 'dmg' : 'svc'), t('nav.book')) + '</div></article>').join('') + '</div></section>' +
      '<section class="wrap sec split" id="assist"><div class="split__txt"><p class="eyebrow">' + t('fab.recall').toUpperCase() + '</p><h2 class="h2">' + t('sv.assistH') + '</h2><p>' + t('sv.assistP') + '</p><p class="ico">' + I('phone') + '<a href="tel:' + SP.DEALER.phone.replace(/\s/g, '') + '"><strong>' + SP.DEALER.phone + '</strong></a></p>' +
      '<div class="btnrow"><a class="btn btn--dark" href="tel:' + SP.DEALER.phone.replace(/\s/g, '') + '">' + t('c.call') + '</a><a class="btn btn--line" href="programare.html?tip=svc">' + t('sv.book') + '</a></div></div><div class="split__img">' + SP.img('https://www.gwm-eu.com/content/dam/gwm/pages/eu/eu/models/haval-v7/acc.webp', 1100, 'GWM') + '</div></section>' +
      '<section class="wrap sec"><div class="why"><h2 class="h2">' + t('sv.why') + '</h2><div class="qtiles">' + [['bolt', 'sv.w1'], ['box', 'sv.w2'], ['shield', 'sv.w3'], ['car', 'sv.w4']].map(x => '<div class="qtile qtile--static">' + I(x[0]) + '<span>' + t(x[1]) + '</span></div>').join('') + '</div></div></section>' +
      '<section class="wrap sec sec--last split"><div class="split__txt"><p class="eyebrow">' + t('sv.parts').toUpperCase() + '</p><h2 class="h2">' + t('sv.parts') + '</h2><p>' + t('sv.partsP') + '</p></div><div class="fbox">' +
      SP.leadForm({ type: 'parts', ctx: 'parts', message: true, extra: SP.field('pvin', 'vin', t('b.vin'), '<input id="pvin" name="vin" placeholder="LFZ…">', true) }) + '</div></section>'
  });

  /* ================= PROGRAMARE (3 steps) ================= */
  SP.pages.booking = () => {
    const tip = SP.param('tip');
    const b = { step: 1, type: ['td', 'svc', 'bb', 'dmg'].includes(tip) ? tip : 'td', model: SP.model(SP.param('m')) && !SP.model(SP.param('m')).soon ? SP.param('m') : SP.sellable()[0].id, vin: '', km: '', car: '', year: '', needs: ['n1'], loc: SP.LOCATIONS[0].id, day: null, time: null, notes: '', name: '', phone: '', email: '', gdpr: false, ref: null };
    const days = []; const d0 = new Date(); d0.setHours(12, 0, 0, 0);
    for (let i = 1; days.length < 12; i++) { const d = new Date(d0); d.setDate(d0.getDate() + i); if (d.getDay() !== 0) days.push(d.toISOString().slice(0, 10)); }
    const TIMES = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];
    const busy = (di, ti) => (di * 5 + ti * 3) % 7 === 0;
    const STEPS = ['b.s1', 'b.s2', 'b.s3'];
    const TYPES = [['td', 'wheel'], ['svc', 'wrench'], ['bb', 'swap'], ['dmg', 'shield']];
    const pick = (k, v, title, desc, ic) => '<button type="button" class="pick' + (b[k] === v ? ' is-on' : '') + '" data-pick="' + k + '" data-v="' + v + '">' + (ic ? I(ic) : '') + '<strong>' + title + '</strong>' + (desc ? '<small>' + desc + '</small>' : '') + '</button>';
    const inp = (k, label, type, ph) => '<div class="field"><label for="b_' + k + '">' + label + '</label><input id="b_' + k + '" data-b="' + k + '" type="' + (type || 'text') + '" value="' + esc(b[k]) + '"' + (ph ? ' placeholder="' + ph + '"' : '') + '></div>';
    const vehLbl = () => b.type === 'td' ? 'GWM ' + SP.model(b.model).name : b.type === 'bb' ? (b.car || '—') + (b.year ? ' · ' + b.year : '') : (b.vin || '—');
    const summary = () => [[t('b.type'), t('b.' + b.type)], [t('b.vehicle'), vehLbl()], [t('b.loc'), SP.loc(b.loc).name], [t('b.when'), b.day ? SP.date(b.day, { weekday: 'short', day: 'numeric', month: 'short' }) + (b.time ? ', ' + b.time : '') : '—'], [t('b.name'), b.name || '—']];
    const body = () => {
      if (b.step === 4) return '<div class="bdone"><span class="done__i">' + I('check') + '</span><h2 class="h2">' + t('b.doneT') + '</h2><p class="muted">' + t('b.doneP') + '</p><p class="bdone__ref"><small>' + t('b.ref') + '</small><strong>' + b.ref + '</strong></p><dl class="specs specs--1">' + summary().map(s => '<div><dt>' + s[0] + '</dt><dd>' + esc(s[1]) + '</dd></div>').join('') + '</dl>' +
        '<p class="note note--sm">' + I('box') + t('b.int') + '</p><div class="btnrow btnrow--c"><button type="button" class="btn btn--dark" data-bnew>' + t('b.new') + '</button><a class="btn btn--line" href="index.html">' + t('b.home') + '</a></div></div>';
      let h = '';
      if (b.step === 1) {
        h = '<h3 class="bq">' + t('b.what') + '</h3><div class="picks picks--4">' + TYPES.map(x => pick('type', x[0], t('b.' + x[0]), t('b.' + x[0] + 'D'), x[1])).join('') + '</div>';
        if (b.type === 'td') h += '<div class="field field--full"><label for="b_model">' + t('b.model') + ' *</label><select id="b_model" data-b="model">' + SP.sellable().map(m => opt(m.id, 'GWM ' + m.name, b.model)).join('') + '</select></div><div class="tdcar">' + SP.img(SP.model(b.model).card, 700, SP.model(b.model).name) + '</div>';
        else if (b.type === 'bb') h += '<div class="fgrid">' + inp('car', t('b.car') + ' *', 'text', 'ex. Volkswagen Golf') + inp('year', t('b.year'), 'number', '2020') + inp('km', t('b.km'), 'number', '85000') + '</div>';
        else h += '<div class="fgrid">' + inp('vin', t('b.vin') + ' *', 'text', 'LFZ… / B 00 SPL') + inp('km', t('b.km'), 'number', '45000') + '</div>' + (b.type === 'svc' ? '<h3 class="bq">' + t('b.needs') + '</h3><div class="cbgrid">' + ['n1', 'n2', 'n3', 'n4', 'n5'].map(n => '<label class="cbx cbx--box"><input type="checkbox" data-need="' + n + '"' + (b.needs.includes(n) ? ' checked' : '') + '><span>' + t('b.' + n) + '</span></label>').join('') + '</div>' : '');
      } else if (b.step === 2) {
        const l = SP.loc(b.loc);
        h = '<div class="bloc">' + I('pin') + '<span><strong>' + l.name + '</strong><small>' + l.address + '</small></span></div>' +
          '<h3 class="bq">' + t('b.day') + '</h3><div class="days">' + days.map(d => '<button type="button" class="day' + (b.day === d ? ' is-on' : '') + '" data-day="' + d + '"><small>' + SP.date(d, { weekday: 'short' }) + '</small><strong>' + new Date(d + 'T12:00:00').getDate() + '</strong><small>' + SP.date(d, { month: 'short' }) + '</small></button>').join('') + '</div>' +
          '<h3 class="bq">' + t('b.time') + '</h3><div class="times">' + TIMES.map((x, ti) => { const di = days.indexOf(b.day), bz = di < 0 || busy(di, ti); return '<button type="button" class="time' + (b.time === x ? ' is-on' : '') + '" data-time="' + x + '"' + (bz ? ' disabled' : '') + '>' + x + (di >= 0 && bz ? '<small>' + t('b.busy') + '</small>' : '') + '</button>'; }).join('') + '</div>' +
          '<div class="field field--full"><label for="b_notes">' + t('b.notes') + '</label><textarea id="b_notes" data-b="notes" rows="2">' + esc(b.notes) + '</textarea></div>';
      } else {
        h = '<div class="fgrid"><div class="field field--full"><label for="b_name">' + t('b.name') + ' *</label><input id="b_name" data-b="name" autocomplete="name" value="' + esc(b.name) + '" placeholder="' + t('f.namePh') + '"></div>' + inp('phone', t('b.phone') + ' *', 'tel', t('f.phonePh')) + inp('email', t('b.email') + ' *', 'email', t('f.emailPh')) + '</div>' +
          '<label class="check"><input type="checkbox" data-b="gdpr"' + (b.gdpr ? ' checked' : '') + '><span>' + t('f.gdpr') + ' <a href="legal.html?doc=confidentialitate">' + t('f.privacy') + '</a>.</span></label>';
      }
      return '<p class="bstep">' + t('b.step') + ' ' + b.step + ' ' + t('b.of') + ' 3 · <strong>' + t(STEPS[b.step - 1]) + '</strong></p>' + h + '<p class="err" data-berr role="alert"></p><div class="bnav"><button type="button" class="btn btn--line" data-bprev' + (b.step === 1 ? ' style="visibility:hidden"' : '') + '>' + t('b.prev') + '</button><button type="button" class="btn btn--dark" data-bnext>' + (b.step === 3 ? t('b.submit') : t('b.next')) + '</button></div>';
    };
    const valid = () => b.step === 1 ? (b.type === 'td' ? !!b.model : b.type === 'bb' ? b.car.trim().length >= 3 : b.vin.trim().length >= 5) : b.step === 2 ? !!(b.day && b.time) :
      b.name.trim().length >= 3 && /^[+0-9 ()-]{9,}$/.test(b.phone.trim()) && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(b.email.trim()) && b.gdpr;
    return {
      title: t('nav.book'), html: SP.phead(t('b.eyebrow'), t('b.title'), t('b.sub')) + '<section class="wrap blay sec--last"><div class="bcard"><ol class="prog" data-prog></ol><div data-bbody></div></div><aside class="bsum" data-bsum></aside></section>',
      bind(m) {
        const box = m.querySelector('[data-bbody]'), sum = m.querySelector('[data-bsum]');
        const drawSum = () => { sum.hidden = b.step === 4; sum.innerHTML = '<h3 class="h4">' + t('b.summary') + '</h3><dl class="specs specs--1">' + summary().map(s => '<div><dt>' + s[0] + '</dt><dd>' + esc(s[1]) + '</dd></div>').join('') + '</dl><div class="bsum__loc"><strong>' + SP.loc(b.loc).name + '</strong><p class="muted small">' + SP.loc(b.loc).address + '</p><a class="small" href="tel:' + SP.loc(b.loc).phone.replace(/\s/g, '') + '">' + SP.loc(b.loc).phone + '</a></div>'; };
        const draw = () => { m.querySelector('[data-prog]').innerHTML = STEPS.map((s, i) => '<li class="' + (b.step > i + 1 ? 'is-done' : b.step === i + 1 ? 'is-on' : '') + '"><span>' + (b.step > i + 1 ? I('check') : i + 1) + '</span><em>' + t(s) + '</em></li>').join(''); box.innerHTML = body(); drawSum(); };
        box.addEventListener('click', e => {
          const p = e.target.closest('[data-pick]'); if (p) { b[p.dataset.pick] = p.dataset.v; draw(); return; }
          const dy = e.target.closest('[data-day]'); if (dy) { b.day = dy.dataset.day; b.time = null; draw(); return; }
          const tm = e.target.closest('[data-time]'); if (tm && !tm.disabled) { b.time = tm.dataset.time; draw(); return; }
          if (e.target.closest('[data-bprev]')) { b.step--; draw(); return; }
          if (e.target.closest('[data-bnew]')) { Object.assign(b, { step: 1, day: null, time: null, ref: null }); draw(); return; }
          if (e.target.closest('[data-bnext]')) {
            if (!valid()) { box.querySelector('[data-berr]').textContent = b.step === 2 ? t('b.errDay') : t('b.err'); return; }
            /* Integration point: POST /api/bookings → Sales Partner (test drive → Lead Collector; service/claims → After-Sales appointments; buy-back → used-car valuation) */
            if (b.step === 3) b.ref = (b.type === 'td' ? 'TD' : b.type === 'bb' ? 'BB' : 'SRV') + '-2026-' + String(Math.floor(1000 + Math.random() * 8999));
            b.step++; draw(); m.querySelector('.blay').scrollIntoView({ behavior: 'smooth' });
          }
        });
        box.addEventListener('input', e => { const k = e.target.dataset.b; if (k) { b[k] = e.target.type === 'checkbox' ? e.target.checked : e.target.value; if (k === 'model') draw(); else drawSum(); } const n = e.target.dataset.need; if (n) { if (e.target.checked) b.needs.push(n); else b.needs.splice(b.needs.indexOf(n), 1); } });
        draw();
      }
    };
  };

  /* ================= LOCAȚIE (single showroom) ================= */
  const hrsTable = (l, k) => '<dl class="hrs">' + l.hours[k].map(h => '<div><dt>' + t('l.' + h[0]) + '</dt><dd>' + (h[1] || t('c.closed')) + '</dd></div>').join('') + '</dl>';
  SP.pages.location = () => {
    const l = SP.loc(SP.param('id')) || SP.LOCATIONS[0], stock = SP.STOCK.filter(v => v.loc === l.id && v.featured).slice(0, 4);
    return {
      title: l.name, html: '<section class="wrap ld"><p class="eyebrow">' + t('l.eyebrow') + ' · ' + l.city.toUpperCase() + '</p><h1 class="h1">' + l.name + '</h1><div class="ld__grid"><div><div class="ld__img">' + SP.img(l.img, 1100, l.name) + '</div>' +
        '<div class="map map--sm"><iframe title="Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="' + mapSrc(l) + '"></iframe></div>' +
        '<div class="ld__info"><div><h2 class="cap">' + t('l.hours') + ' · ' + t('l.sales') + '</h2>' + hrsTable(l, 'sales') + '</div><div><h2 class="cap">' + t('l.hours') + ' · ' + t('l.service') + '</h2>' + hrsTable(l, 'service') + '</div></div>' +
        '<div class="fbox"><h2 class="h4">' + t('l.msg') + '</h2>' + SP.leadForm({ type: 'contact', ctx: l.id, model: SP.MODELS[0].id, message: true }) + '</div></div>' +
        '<aside class="ld__side"><h2 class="cap">' + t('l.contact') + '</h2><p>' + l.address + '</p><p><a href="tel:' + l.phone.replace(/\s/g, '') + '"><strong>' + l.phone + '</strong></a></p><p><a href="mailto:' + l.email + '">' + l.email + '</a></p>' +
        '<div class="btnrow"><a class="btn btn--dark btn--sm" href="tel:' + l.phone.replace(/\s/g, '') + '">' + t('c.call') + '</a><a class="btn btn--line btn--sm" href="https://wa.me/' + l.wa.replace(/\D/g, '') + '" target="_blank" rel="noopener">WhatsApp</a><a class="btn btn--line btn--sm" href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(l.address) + '" target="_blank" rel="noopener">' + t('l.dir') + '</a></div><hr>' +
        '<h2 class="cap">' + t('l.services') + '</h2><ul class="svl">' + l.tags.map(x => '<li>' + I('check') + t('tag.' + x) + '</li>').join('') + '</ul><hr><h2 class="cap">' + t('l.team') + '</h2>' + l.team.map(p => SP.advisorMini({ name: p[0], role: p[1] })).join('') +
        '<a class="btn btn--dark btn--block" href="programare.html">' + t('l.book') + '</a></aside></div>' +
        (stock.length ? '<div class="sec sec--last">' + SP.shead(t('l.stock'), '', [t('h.stockAll'), 'stoc.html']) + '<div class="grid4">' + stock.map(SP.stockCard).join('') + '</div></div>' : '') + '</section>'
    };
  };
  SP.pages.locations = SP.pages.location;

  /* ================= LEGAL / 404 ================= */
  SP.pages.legal = () => {
    const d = SP.param('doc') || 'termeni', k = { termeni: 'ft.terms', confidentialitate: 'ft.privacy', cookies: 'ft.cookies' }[d] || 'ft.terms';
    const used = [...new Set(SP.STOCK.filter(v => v.photos).flatMap(v => v.photos))];
    return { title: t(k), html: SP.phead(t('lg.title'), t(k)) + '<section class="wrap sec--last prose"><p>' + t('lg.p') + '</p><p>' + t('ft.demo') + '</p><h2 class="h3" id="foto">' + t('lg.photos') + '</h2><p>' + t('lg.photosP') + '</p><ul class="credits">' + used.map(x => '<li>' + SP.credit(x) + '</li>').join('') + '</ul></section>' };
  };
  SP.pages.notfound = () => ({ title: '404', html: SP.phead('404', t('nf.title'), t('nf.p')) + '<section class="wrap sec--last"><a class="btn btn--dark" href="index.html">' + t('b.home') + '</a></section>' });
})();
