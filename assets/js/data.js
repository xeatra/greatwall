/* =====================================================================
   DATA — demo content. In production:
     DEALER / LOCATION / TEAM → Sales Partner DMS (organisation, users)
     MODELS (versions, list + promo prices, colours) → importer price list / IMS
     OFFERS / SERVICE OFFERS → dealer CMS · STOCK → DMS stock feed
   Sources (November 2026): gwm-motor.de (ORA 5 prices + GO-WITH-MORE deal, WEY 03/05 UVP and promo discount,
   ORA 5 technical data, warranty), GWM WEY 03 press kit, GWM ORA 03 price list (Jan 2024), ORA 07 launch prices
   (electrive.net, 2024). Dealer data is FICTIONAL. Images hot-linked from gwm-eu.com and gwm-motor.de.
   ===================================================================== */
window.SP = window.SP || {};
(function (SP) {
  const R = (ro, en) => ({ ro, en: en || ro });
  const EU = 'https://www.gwm-eu.com/content/dam/gwm/pages/eu/eu/', DE = 'https://www.gwm-motor.de/hubfs/';
  SP.cf = p => p;
  SP.BRAND = 'GWM';
  SP.OFFICIAL = 'https://www.gwm-eu.com/eu';
  SP.LOGO = EU + 'home/logo/gwm-black-pc.svg';
  SP.LOGO_W = EU + 'home/logo/gwm-white-pc.svg';
  SP.PRICELIST = 'modele.html#brosuri';

  SP.DEALER = {
    name: 'Sales Partner GWM', short: 'Sales Partner', phone: '+40 21 000 6000', email: 'contact@demo-salespartner-gwm.ro',
    legal: { company: 'Sales Partner GWM SRL (demo)', reg: 'J40/0000/2026', cui: 'RO00000006' },
    importer: 'GWM'
  };

  SP.LOCATIONS = [
    { id: 'bucuresti', city: 'București', name: 'Sales Partner GWM București', address: 'Bd. Timișoara 100, Sector 6, București', phone: '+40 21 000 6000', wa: '+40 700 000 600', email: 'contact@demo-salespartner-gwm.ro',
      img: EU + 'home/partner-pc.webp', geo: [44.4231, 26.0187], tags: ['sales', 'used', 'service', 'parts', 'body', 'buyback', 'ev'],
      hours: { sales: [['mon', '09:00 – 19:00'], ['sat', '10:00 – 15:00'], ['sun', null]], service: [['mon', '08:00 – 18:00'], ['sat', '09:00 – 13:00'], ['sun', null]] },
      team: [['Andrei Ionescu', 'gm'], ['Bianca Pop', 'sales'], ['Radu Matei', 'sales'], ['Sorina Vlad', 'used'], ['Cătălin Dima', 'service'], ['Paul Neagu', 'workshop']] }
  ];
  SP.ADVISORS = { bp: { name: 'Bianca Pop', role: 'sales', phone: '+40 700 600 611' }, rm: { name: 'Radu Matei', role: 'sales', phone: '+40 700 600 612' }, sv: { name: 'Sorina Vlad', role: 'used', phone: '+40 700 600 613' } };

  SP.FUEL = { ev: R('100% electric', '100% electric'), hev: R('Hybrid (HEV)', 'Hybrid (HEV)'), phev: R('Plug-in Hybrid', 'Plug-in Hybrid'), petrol: R('Benzină', 'Petrol'), diesel: R('Diesel', 'Diesel'), fhev: R('Full Hybrid', 'Full Hybrid'), reev: R('Range extender', 'Range extender') };
  SP.CATS = [['all', R('Toate', 'All')], ['ora', R('GWM ORA', 'GWM ORA')], ['wey', R('GWM WEY', 'GWM WEY')], ['ev', R('100% electric', '100% electric')], ['hyb', R('Hibrid & Plug-in', 'Hybrid & plug-in')], ['suv', R('SUV', 'SUV')], ['awd', R('Tracțiune integrală', 'All-wheel drive')]];

  /* versions: code, trim, version name, fuel, drive, kW, CP, WLTP km (EV / PHEV electric), battery kWh, list price (UVP), promo price; note = short tech line */
  const V = (code, trim, vn, fuel, dr, kw, hp, range, batt, list, price, extra) => Object.assign({ code, trim, vn, fuel, dr, kw, hp, range, batt, list, price, reev: 0 }, extra || {});
  /* colours: code, name, hex, surcharge (null = la cerere), image */
  const C = (code, name, hex, sur, img) => ({ code, name, hex, sur, img });
  const O5 = DE + '2_WEBSITE/GWM_ORA_5/', O3 = DE + '2_WEBSITE/GWM%20ORA%2003%20Redesign/', O7 = DE + '2_WEBSITE/GWM%20ORA%2007%20Redesign/';

  SP.MODELS = [
    { id: 'ora5', name: 'ORA 5', series: 'ora', sub: R('SUV compact · benzină, hibrid sau electric', 'Compact SUV · petrol, hybrid or electric'), slogan: R('Stylish Premium SUV', 'Stylish Premium SUV'), fuels: ['petrol', 'hev', 'ev'], cats: ['all', 'ora', 'ev', 'hyb', 'suv'], badges: [R('Nou', 'New'), R('Design of the Year', 'Design of the Year')],
      key: [['24.990 €', R('ofertă GO-WITH-MORE, de la', 'GO-WITH-MORE deal, from')], ['223 CP', R('sistem hibrid DHT', 'DHT hybrid system')], ['7,7 s', R('0–100 km/h (Hybrid și EV)', '0–100 km/h (Hybrid and EV)')], ['7 ani', R('garanție vehicul (150.000 km)', 'vehicle warranty (150,000 km)')]],
      keyBy: { petrol: [['24.990 €', R('ofertă GO-WITH-MORE, de la', 'GO-WITH-MORE deal, from')], ['160 CP', R('1.5 Turbo, DCT 7 trepte', '1.5 Turbo, 7-speed DCT')], ['9,3 s', R('0–100 km/h', '0–100 km/h')], ['1.200 kg', R('sarcină remorcabilă frânată', 'braked towing capacity')]],
        hev: [['26.990 €', R('ofertă GO-WITH-MORE, de la', 'GO-WITH-MORE deal, from')], ['223 CP', R('sistem hibrid DHT, 476 Nm', 'DHT hybrid system, 476 Nm')], ['5,1 l', R('consum mixt WLTP /100 km', 'combined WLTP /100 km')], ['1.000+ km', R('autonomie cu un plin', 'range on one tank')]],
        ev: [['435 km', R('autonomie WLTP, până la', 'WLTP range, up to')], ['58 kWh', R('baterie LFP', 'LFP battery')], ['30 min', R('încărcare DC 10–80% (120 kW)', 'DC charge 10–80% (120 kW)')], ['7,7 s', R('0–100 km/h', '0–100 km/h')]] },
      lead: R('Noul GWM ORA 5 este SUV-ul compact premium cu trei propulsii la alegere: 1.5 Turbo pe benzină (160 CP), Hybrid DHT (223 CP, peste 1.000 km cu un plin) și, în curând, 100% electric (58 kWh, până la 435 km WLTP). 7 ani garanție vehicul, 8 ani garanție baterie.', 'The new GWM ORA 5 is the premium compact SUV with a choice of three powertrains: 1.5 Turbo petrol (160 hp), DHT Hybrid (223 hp, over 1,000 km on a tank) and, soon, 100% electric (58 kWh, up to 435 km WLTP). 7-year vehicle warranty, 8-year battery warranty.'),
      versions: [V('O5-T', 'Premium', '1.5 Turbo', 'petrol', 'FWD', 118, 160, null, null, 26990, 24990, { note: '1.5 Turbo · DCT 7 trepte · 6,9 l/100 km', dc: null }),
        V('O5-H', 'Premium', 'Hybrid DHT', 'hev', 'FWD', 164, 223, null, 1.09, 28990, 26990, { note: '1.5 Turbo + motor electric · DHT 2 trepte · 5,1 l/100 km', rnote: R('peste 1.000 km cu un plin', 'over 1,000 km per tank') }),
        V('O5-E', 'Premium', 'Electric', 'ev', 'FWD', 150, 204, 435, 58.3, null, null, { note: '58,3 kWh LFP · DC 120 kW · AC 11 kW', soon: 1 })],
      specs: { range: 'EV până la 435 km · Hybrid peste 1.000 km cu un plin', len: '4.471 mm', wid: '1.833 mm', hei: '1.641 mm', wb: '2.720 mm', boot: '422 – 1.120 L (Hybrid 390 – 1.088 L)', seats: '5', battery: 'Hybrid 1,09 kWh · EV 58,3 kWh LFP', torque: '260 – 476 Nm', acc: '7,7 – 9,3 s', vmax: '170 – 190 km/h', dc: 'EV 120 kW', dctime: 'EV ~30 min (10–80%)', ac: 'EV 11 kW', energy: '6,9 l (Turbo) · 5,1 l (Hybrid) · 15,5 kWh (EV) /100 km', tow: '750 – 1.200 kg' },
      hero: EU + 'models/ora-5/0630/kv.webp', slide: EU + 'models/ora-5/0630/kv.webp', card: O5 + 'ORA5_Green_Visualizer_oT.png', menu: O5 + 'ORA5_Green_Visualizer_oT.png',
      gallery: [EU + 'models/ora-5/0630/exterior/1.webp', EU + 'models/ora-5/0630/exterior/2.webp', EU + 'models/ora-5/0630/exterior/3.webp', EU + 'models/ora-5/0630/interior-es-0702.webp', EU + 'models/ora-5/0630/exterior/4.webp'],
      official: 'https://www.gwm-eu.com/eu/models/ora-5',
      colors: [C('DW', 'Dover White', '#f1f1ef', 0, O5 + 'ORA5_Dover_White_Visualizer_oT.png'), C('FG', 'Forest Green', '#24493a', null, O5 + 'ORA5_Green_Visualizer_oT.png'), C('NB', 'Night Black', '#141414', null, O5 + 'ORA5_Black_Visualizer_oT.png'), C('GG', 'Glacier Grey', '#b9bdc0', null, O5 + 'ORA5_Glacier_Grey_Visualizer_oT.png'),
        C('AG', 'Ayers Grey', '#6b6f73', null, O5 + 'ORA5_Ayers_Grey_Visualizer_oT.png'), C('CW', 'Cloud White', '#e9e9e4', null, O5 + 'ORA5_Cloud_White_Visualizer_oT.png'), C('SB', 'Sea Blue', '#3f6f93', null, O5 + 'ORA5_Blue_Visualizer_oT.png')] },

    { id: 'ora03', name: 'ORA 03', series: 'ora', sub: R('Hatchback compact 100% electric', '100% electric compact hatchback'), slogan: R('Electric, cu personalitate', 'Electric, with personality'), fuels: ['ev'], cats: ['all', 'ora', 'ev'], badges: [],
      key: [['420 km', R('autonomie WLTP (63 kWh)', 'WLTP range (63 kWh)')], ['171 CP', R('motor electric, 250 Nm', 'electric motor, 250 Nm')], ['8,2 s', R('0–100 km/h', '0–100 km/h')], ['5', R('versiuni: 300 – GT', 'versions: 300 – GT')]],
      lead: R('GWM ORA 03 este hatchback-ul electric cu design retro și echipare bogată: baterie de 48 sau 63 kWh, până la 420 km autonomie WLTP, 171 CP și cinci versiuni, de la 300 la GT.', 'GWM ORA 03 is the electric hatchback with retro design and rich equipment: a 48 or 63 kWh battery, up to 420 km WLTP range, 171 hp and five versions from 300 to GT.'),
      versions: [V('O3-300', '300', '300', 'ev', 'FWD', 126, 171, 310, 48, 38990, 26990, { note: '48 kWh · DC 64 kW · AC 11 kW' }), V('O3-300P', '300 Pro', '300 Pro', 'ev', 'FWD', 126, 171, 310, 48, 40990, 40990, { note: '48 kWh · DC 64 kW · AC 11 kW' }),
        V('O3-400P', '400 Pro', '400 Pro', 'ev', 'FWD', 126, 171, 420, 63, 44490, 44490, { note: '63 kWh · DC 67 kW · AC 11 kW' }), V('O3-400PP', '400 Pro+', '400 Pro+', 'ev', 'FWD', 126, 171, 420, 63, 47490, 47490, { note: '63 kWh · DC 67 kW · pompă de căldură' }),
        V('O3-GT', 'GT', 'GT', 'ev', 'FWD', 126, 171, 400, 63, 49490, 49490, { note: '63 kWh · DC 67 kW · pompă de căldură' })],
      specs: { range: '310 – 420 km', len: '4.235 mm (GT 4.254 mm)', wid: '1.825 mm', hei: '1.603 mm', wb: '2.650 mm', boot: '228 – 858 L', seats: '5', battery: '48 / 63 kWh', torque: '250 Nm', acc: '8,2 – 8,3 s', vmax: '160 km/h', dc: '64 / 67 kW', dctime: '43 – 48 min (15–80%)', ac: '11 kW', energy: '16,5 – 16,8 kWh/100 km', mass: '1.615 – 1.655 kg' },
      hero: O3 + 'ora_03_mlp/ORA03_1920x9403.jpeg', slide: O3 + 'ora_03_mlp/ORA03_1920x9403.jpeg', card: O3 + 'visualizer/exterior/gwm_24_ora03_proplus_3_4_front_frei_galaxy_beige%402x.png', menu: O3 + 'visualizer/exterior/gwm_24_ora03_proplus_3_4_front_frei_galaxy_beige%402x.png',
      gallery: [O3 + 'ora_03_mlp/ORA03_1920x9403.jpeg', O3 + 'ora_03_mlp/Bento_Box_852x2953.jpg', O3 + 'ora_03_mlp/Content%20Slider_407x2672.jpg', O3 + 'visualizer/interior/gwm_ora_03_interior_brown-beige.jpg', O3 + 'ora_03_mlp/Probefahrt_852x495px.jpg'],
      official: 'https://www.gwm-motor.de/ora-03',
      colors: [C('GB', 'Galaxy Beige', '#d8cbb3', 0, O3 + 'visualizer/exterior/gwm_24_ora03_proplus_3_4_front_frei_galaxy_beige%402x.png'), C('AU', 'Aurora Green', '#8fb5a5', 690, O3 + 'visualizer/exterior/gwm_24_ora03_proplus_3_4_front_frei_aurora_green%402x.png'),
        C('MW', 'Moonlight White', '#efefec', 690, O3 + 'visualizer/exterior/gwm_24_ora03_proplus_3_4_front_frei_moonlight_white%402x.png'), C('CB', 'Celestial Blue', '#8fb1cf', 690, O3 + 'visualizer/exterior/gwm_24_ora03_proplus_3_4_front_frei_celestial_blue%402x.png'),
        C('MR', 'Mars Red', '#a8292d', 690, O3 + 'visualizer/exterior/gwm_24_ora03_proplus_3_4_front_frei_mars_red%402x.png'), C('SK', 'Starry Black', '#141414', 690, O3 + 'visualizer/exterior/gwm_24_ora03_proplus_3_4_front_frei_starry_black%402x.png'),
        C('MG', 'Meteorite Grey (GT)', '#6d7074', 0, O3 + 'visualizer/exterior/gwm_24_ora03_gt_3_4_front_frei_meteroite_grey%402x.png')] },

    { id: 'ora07', name: 'ORA 07', series: 'ora', sub: R('Fastback 100% electric', '100% electric fastback'), slogan: R('Eleganță electrică, până la 408 CP', 'Electric elegance, up to 408 hp'), fuels: ['ev'], cats: ['all', 'ora', 'ev', 'awd'], badges: [],
      key: [['520 km', R('autonomie WLTP (GT, 86 kWh)', 'WLTP range (GT, 86 kWh)')], ['408 CP', R('GT, tracțiune integrală', 'GT, all-wheel drive')], ['4,5 s', R('0–100 km/h (GT)', '0–100 km/h (GT)')], ['67 / 86', R('kWh, două baterii', 'kWh, two batteries')]],
      lead: R('GWM ORA 07 este fastback-ul electric al gamei ORA: baterie de 67 kWh cu 204 CP (Pure și Pro, 440 km WLTP) sau GT cu 86 kWh, două motoare, 408 CP, tracțiune integrală și 0–100 km/h în 4,5 s.', 'GWM ORA 07 is the electric fastback of the ORA range: a 67 kWh battery with 204 hp (Pure and Pro, 440 km WLTP) or the GT with 86 kWh, two motors, 408 hp, all-wheel drive and 0–100 km/h in 4.5 s.'),
      versions: [V('O7-PU', 'Pure', 'Pure', 'ev', 'FWD', 150, 204, 440, 67, 41990, 41990, { note: '67 kWh · 340 Nm · DC 10–80% în 36 min' }), V('O7-PR', 'Pro', 'Pro', 'ev', 'FWD', 150, 204, 440, 67, 44490, 44490, { note: '67 kWh · 340 Nm · DC 10–80% în 36 min' }),
        V('O7-GT', 'GT', 'GT', 'ev', 'AWD', 300, 408, 520, 86, 53490, 53490, { note: '86 kWh · 680 Nm · 0–100 km/h în 4,5 s' })],
      specs: { range: '440 – 520 km', battery: '67 / 86 kWh', torque: '340 / 680 Nm', acc: '4,5 s (GT)', dctime: '36 – 43 min (10–80%)', seats: '5' },
      hero: O7 + 'keyvisual/gwm_ora_03_keyvisual_d_1920x940%402x-1.jpg', slide: DE + '2_WEBSITE/GMW%20ORA%2007/keyvisual/gwm_ora_07_keyvisual_renaming_d_1920x940.jpg', card: O7 + 'visualizer/gwm_24_ora07_pro_3_4_front_frei_gray%402x.jpg', menu: O7 + 'visualizer/gwm_24_ora07_pro_3_4_front_frei_gray%402x.jpg',
      gallery: [DE + '2_WEBSITE/GMW%20ORA%2007/gwm_ora_07_design2_d_1920.jpg', O7 + 'image-slider_interior/gwm_ora_07_image-slider_exterior_1_640x420px%402x.jpg', O7 + 'image-slider_interior/gwm_ora_07_image-slider_exterior_2_640x420px%402x.jpg', O7 + 'visualizer/gwm_ora_07_interior_brown%402.jpg', O7 + 'image-slider_interior/gwm_ora_07_image-slider_exterior_3_640x420px%402x.jpg'],
      official: 'https://www.gwm-motor.de/ora-07',
      colors: [C('SW', 'Snow White', '#f1f1ef', null, O7 + 'visualizer/gwm_24_ora07_pure_3_4_front_frei_white%402x.jpg'), C('SG', 'Steel Grey', '#7d8186', null, O7 + 'visualizer/gwm_24_ora07_pro_3_4_front_frei_gray%402x.jpg'), C('GP', 'Purple (GT)', '#5a4766', null, O7 + 'visualizer/gwm_24_ora07_gt_3_4_front_frei_purple%402x.jpg')] },

    { id: 'wey03', name: 'WEY 03', series: 'wey', sub: R('SUV premium Plug-in Hybrid', 'Premium plug-in hybrid SUV'), slogan: R('Plug-in Hybrid până la 442 CP', 'Plug-in hybrid up to 442 hp'), fuels: ['phev'], cats: ['all', 'wey', 'hyb', 'suv', 'awd'], badges: [R('Ultimele unități', 'Last units')],
      key: [['124 km', R('autonomie electrică WLTP, până la', 'electric WLTP range, up to')], ['442 CP', R('Luxury AWD, sistem', 'Luxury AWD, system')], ['5,3 s', R('0–100 km/h (AWD)', '0–100 km/h (AWD)')], ['−5.500 €', R('discount promoțional', 'promotional discount')]],
      lead: R('GWM WEY 03 este SUV-ul premium Plug-in Hybrid: motor 2.0 Turbo și baterie de 34 kWh, până la 124 km autonomie electrică WLTP, 367 CP (FWD) sau 442 CP (AWD) și 517 L portbagaj. Model în ieșire din gamă — ultimele unități, cu discount promoțional de 5.500 €.', 'GWM WEY 03 is the premium plug-in hybrid SUV: a 2.0 Turbo engine and 34 kWh battery, up to 124 km electric WLTP range, 367 hp (FWD) or 442 hp (AWD) and a 517 L boot. Run-out model — last units, with a €5,500 promotional discount.'),
      versions: [V('W3-PF', 'Premium', 'Premium FWD', 'phev', 'FWD', 270, 367, 113, 34, 47900, 42400, { note: '2.0 Turbo + 34 kWh · DC 50 kW · AC 11 kW' }), V('W3-LF', 'Luxury', 'Luxury FWD', 'phev', 'FWD', 270, 367, 113, 34, 51900, 46400, { note: '2.0 Turbo + 34 kWh · DC 50 kW · AC 11 kW' }),
        V('W3-LA', 'Luxury', 'Luxury AWD', 'phev', 'AWD', 325, 442, 124, 34, 55900, 50400, { note: '2.0 Turbo + 2 motoare electrice · 34 kWh' })],
      specs: { range: '113 – 124 km (electric)', len: '4.670 mm', hei: '1.730 mm', wb: '2.750 mm', boot: '517 – 1.289 L', seats: '5', battery: '34 kWh', torque: '500 / 685 Nm', acc: '7,3 / 5,3 s', vmax: '230 km/h', dc: '50 kW', ac: '11 kW', energy: '25,1 – 25,5 kWh + 0,5 – 0,6 l /100 km (ponderat)' },
      hero: DE + 'WEY%2003%20f%C3%A4hrt%20in%20der%20Stadt.jpg', slide: DE + 'E-PR%C3%A4mie/WEY_03_E_Foerderung.jpg', card: DE + 'GWM%20WEY%2003%20Deep%20Sea%20Blue%20Metallic.png', menu: DE + 'GWM%20WEY%2003%20Deep%20Sea%20Blue%20Metallic.png',
      gallery: [DE + 'WEY%2003%20f%C3%A4hrt%20in%20der%20Stadt.jpg', DE + 'GWM-WEY-03_P09_02.jpg', DE + 'WEY_COFFEE_B22_03_39L_v2.jpg', DE + 'WEY_COFFEE_B12_02_Heller_klein_39L.jpg', DE + 'WEY_Kofferaum_848x848.jpg'],
      official: 'https://www.gwm-motor.de/wey-03',
      colors: [C('DB', 'Deep Sea Blue', '#1f3550', null, DE + 'GWM%20WEY%2003%20Deep%20Sea%20Blue%20Metallic.png'), C('LB', 'Lava Black', '#151515', null, DE + 'GWM_WEY_03_2024_Lava_Black.png')] },

    { id: 'wey05', name: 'WEY 05', series: 'wey', sub: R('SUV mare Plug-in Hybrid, AWD', 'Large plug-in hybrid SUV, AWD'), slogan: R('Lux Plug-in Hybrid, 476 CP', 'Plug-in hybrid luxury, 476 hp'), fuels: ['phev'], cats: ['all', 'wey', 'hyb', 'suv', 'awd'], badges: [R('Ultimele unități', 'Last units')],
      key: [['476 CP', R('putere de sistem, AWD', 'system output, AWD')], ['132 km', R('autonomie electrică, până la', 'electric range, up to')], ['AWD', R('3 motoare: 2.0 Turbo + 2 electrice', '3 motors: 2.0 Turbo + 2 electric')], ['−5.500 €', R('discount promoțional', 'promotional discount')]],
      lead: R('GWM WEY 05 este SUV-ul mare Plug-in Hybrid cu tracțiune integrală: 2.0 Turbo de 204 CP plus două motoare electrice, 476 CP putere de sistem și până la 132 km autonomie electrică. Model în ieșire din gamă — ultimele unități, cu discount promoțional de 5.500 €.', 'GWM WEY 05 is the large all-wheel-drive plug-in hybrid SUV: a 204 hp 2.0 Turbo plus two electric motors, 476 hp system output and up to 132 km of electric range. Run-out model — last units, with a €5,500 promotional discount.'),
      versions: [V('W5-P', 'Premium', 'Premium AWD', 'phev', 'AWD', 350, 476, 132, null, 59900, 54400, { note: '2.0 Turbo 150 kW + motoare 120 / 135 kW' }), V('W5-L', 'Luxury', 'Luxury AWD', 'phev', 'AWD', 350, 476, 132, null, 63900, 58400, { note: '2.0 Turbo 150 kW + motoare 120 / 135 kW' })],
      specs: { range: 'până la 132 km (electric)', seats: '5', energy: '25,5 kWh + 0,5 l /100 km (ponderat) · 8,0 l cu bateria descărcată' },
      hero: DE + 'Headerbild_Update0112.jpg', slide: DE + 'WEY_05_E_Foerderung%20komprimiert.jpg', card: DE + 'WEY05_blau_950_418.png', menu: DE + 'WEY05_blau_950_418.png',
      gallery: [DE + 'Headerbild_Update0112.jpg', DE + 'WEY%2005%20auf%20langer%20Landstra%C3%9Fe%20Heckansicht.jpg', DE + '25-wey-interieur-presskit-highres.jpg', DE + 'WEY05_Komfort_1280x600.png', DE + '22-wey-interieur-presskit-highres.jpg'],
      official: 'https://www.gwm-motor.de/wey-05',
      colors: [C('SW', 'Snow White', '#f1f1ef', null, DE + 'WEY05_weiss_950_418.png'), C('DB', 'Deep Sea Blue', '#1f3550', null, DE + 'WEY05_blau_950_418.png'), C('LB', 'Lava Black', '#151515', null, DE + 'WEY05_schwarz_950_418.png')] }
  ];

  SP.TRIMS = {
    ora5: [['Premium', R('Scaune tapițate textil · interior Dark Grey · Turbo, Hybrid sau Electric · 7 ani garanție vehicul / 8 ani baterie', 'Fabric seats · Dark Grey interior · Turbo, Hybrid or Electric · 7-year vehicle / 8-year battery warranty')],
      ['Luxury', R('În plus: scaune în imitație de piele · interior Beige/Brown disponibil · plafon panoramic', 'Adds: leather-look seats · Beige/Brown interior available · panoramic roof')]],
    ora03: [['300', R('Baterie 48 kWh · 310 km WLTP · 171 CP · încărcare DC 64 kW · AC 11 kW trifazat', '48 kWh battery · 310 km WLTP · 171 hp · 64 kW DC · 11 kW three-phase AC')],
      ['400 Pro', R('În plus: baterie 63 kWh · 420 km WLTP · DC 67 kW · vopsea bicoloră disponibilă', 'Adds: 63 kWh battery · 420 km WLTP · 67 kW DC · two-tone paint available')],
      ['400 Pro+', R('În plus: pompă de căldură de serie', 'Adds: heat pump as standard')], ['GT', R('În plus: design GT · Meteorite Grey de serie · interior GT roșu-negru', 'Adds: GT styling · Meteorite Grey as standard · red-black GT interior')]]
  };

  SP.MODELS.forEach(m => {
    const priced = m.versions.filter(v => v.price != null);
    m.from = Math.min.apply(null, priced.map(v => v.price));
    m.fromList = Math.min.apply(null, priced.map(v => v.list));
    m.fromBy = f => { const a = m.versions.filter(v => v.fuel === f && v.price != null); return a.length ? Math.min.apply(null, a.map(v => v.price)) : null; };
    m.maxRange = Math.max.apply(null, m.versions.map(v => v.range || 0));
    m.colorOf = code => m.colors.find(c => c.code === code) || m.colors[0];
    m.colorsFor = () => m.colors;
    m.plUrl = m.official;
    m.versions.forEach(v => { v.eng = v.note; v.label = v.trim === v.vn || v.vn.indexOf(v.trim) === 0 ? v.vn : v.trim + ' ' + v.vn; });
  });
  SP.model = id => SP.MODELS.find(m => m.id === id);
  SP.sellable = () => SP.MODELS;
  /* "Models" panel (gwm-eu.com): All Models / GWM ORA / GWM WEY */
  SP.MENU = {
    all: SP.MODELS.map(m => ['GWM ' + m.name, m.id, 'card']),
    ora: SP.MODELS.filter(m => m.series === 'ora').map(m => ['GWM ' + m.name, m.id, 'card']),
    wey: SP.MODELS.filter(m => m.series === 'wey').map(m => ['GWM ' + m.name, m.id, 'card'])
  };

  SP.OFFER = { end: '2026-12-31', img: EU + 'models/ora-5/kv-1.webp', models: ['ora5', 'ora03', 'wey03', 'wey05'] };
  SP.TECH = [['GWM DHT', R('Sistemul hibrid dedicat GWM: eficiență inteligentă, performanță constantă, construit să dureze.', 'GWM\'s dedicated hybrid system: smart efficiency, steady performance, built to last.'), EU + 'technology/dht/1.webp'],
    [R('Siguranță', 'Safety'), R('Caroserie sudată tip cușcă și sisteme de asistență la condus de nivel 2.', 'Cage-style welded body and level 2 driver assistance systems.'), EU + 'models/ora-5/cage-style.webp'],
    [R('Cercetare & dezvoltare', 'R&D'), R('Rețea globală de cercetare, testare și producție: GWM, Go With More.', 'A global research, testing and production network: GWM, Go With More.'), EU + 'technology/dht/2.webp'],
    [R('Tehnologie inteligentă', 'Intelligent tech'), R('Ecrane mari, comenzi vocale, încărcare wireless 50W și actualizări software.', 'Large screens, voice control, 50W wireless charging and software updates.'), EU + 'models/ora-5/0630/video-0702.webp']];

  SP.PHOTOS = {
    golf1: ['1572811298797-9eecadf6cb24', 'SuD4h8Gpgok', 'Martin Katler'], golf2: ['1767949374162-5cbb31071b8f', 'jLba2Etjp8A', 'Autotrader UK'],
    oct1: ['1673822317390-d1a8c15ad656', 'gJb_AJhONsE', 'Simon Rathgeb'], oct2: ['1727790621990-3a7a2623d564', 'Px_kPSV8rdY', 'Olivie Zemanova'],
    rav1: ['1617469767053-d3b523a0b982', 'PmSwFm4Lw1c', 'Krish Parmar'], rav2: ['1785900103411-b846f4a7d65e', 'dQiQlArXn-o', 'Zion C'],
    x1a: ['1680298255666-6071fc905870', 'SaY7EkQMuBo', 'serjan midili'], x1b: ['1677517859847-0e750bfd13a9', 'lQPo7cXxQF0', 'Amine Ben Mohamed']
  };
  SP.ph = (k, w, h) => SP.PHOTOS[k] ? 'https://images.unsplash.com/photo-' + SP.PHOTOS[k][0] + '?auto=format&fit=crop&q=72&w=' + w + (h ? '&h=' + h : '') : '';

  const N = (id, mid, code, color, adv, extra) => Object.assign({ id, cond: 'new', mid, code, color, loc: 'bucuresti', adv, year: 2026, km: 0, status: 'avail' }, extra || {});
  const U = (id, brand, title, version, year, km, fuel, gb, hp, price, photos, color, extra) => Object.assign({ id, cond: 'used', brand, title, version, year, km, fuel, gb, hp, price, photos, color, loc: 'bucuresti', adv: 'sv', status: 'avail' }, extra || {});
  SP.STOCK = [
    N('GW-26101', 'ora5', 'O5-T', 'DW', 'bp', { featured: 1 }),
    N('GW-26102', 'ora5', 'O5-T', 'FG', 'rm'),
    N('GW-26103', 'ora5', 'O5-H', 'GG', 'bp', { featured: 1 }),
    N('GW-26104', 'ora5', 'O5-H', 'SB', 'rm', { status: 'incoming', eta: '2026-11-28' }),
    N('GW-26105', 'ora03', 'O3-300', 'GB', 'bp', { featured: 1 }),
    N('GW-26106', 'ora03', 'O3-400P', 'AU', 'rm'),
    N('GW-26107', 'ora07', 'O7-PR', 'SG', 'bp'),
    N('GW-26108', 'ora07', 'O7-GT', 'GP', 'rm', { demo: 1, km: 3200 }),
    N('GW-26109', 'wey03', 'W3-PF', 'LB', 'bp', { featured: 1, last: 1 }),
    N('GW-26110', 'wey03', 'W3-LA', 'DB', 'rm', { last: 1, status: 'reserved' }),
    N('GW-26111', 'wey05', 'W5-P', 'LB', 'bp', { last: 1 }),
    U('GH-25301', 'GWM', 'GWM WEY 05', 'Premium AWD · Plug-in Hybrid · 476 CP', 2025, 12400, 'phev', 'AT', 476, 39990, null, { ro: 'Snow White', en: 'Snow White' }, { cut: 'wey05', cert: 1 }),
    U('GH-24303', 'Volkswagen', 'Volkswagen Golf', 'Life 1.5 eTSI', 2021, 64300, 'petrol', 'DSG7', 150, 18400, ['golf1', 'golf2'], { ro: 'Alb', en: 'White' }, { trade: 1 }),
    U('GH-24304', 'Toyota', 'Toyota RAV4', 'Style 2.5 Hybrid AWD-i', 2021, 73900, 'fhev', 'e-CVT', 222, 27800, ['rav1', 'rav2'], { ro: 'Argintiu', en: 'Silver' }, { trade: 1, status: 'reserved' }),
    U('GH-24305', 'Skoda', 'Škoda Octavia Combi', 'Style 2.0 TDI', 2020, 118000, 'diesel', 'DSG7', 150, 15900, ['oct1', 'oct2'], { ro: 'Argintiu', en: 'Silver' }, { trade: 1 }),
    U('GH-24306', 'BMW', 'BMW X1', 'sDrive18i xLine', 2020, 69500, 'petrol', 'DCT7', 136, 21900, ['x1a', 'x1b'], { ro: 'Argintiu', en: 'Silver' }, { trade: 1 })
  ];
  SP.STOCK.forEach((v, i) => {
    v.vin = (v.brand === 'GWM' || v.cond === 'new' ? 'LGW' : 'WVW') + ['AA', 'JY', 'EZ', 'YB', 'MX'][i % 5] + String(1000000 + i * 7919).slice(1) + String(100000 + i * 3571).slice(-6);
    if (v.cond === 'new') {
      const m = SP.model(v.mid), ver = m.versions.find(x => x.code === v.code), c = m.colorOf(v.color), sur = c.sur || 0;
      v.model = m; v.ver = ver; v.title = 'GWM ' + m.name; v.version = ver.label + ' · ' + ver.dr + ' · ' + ver.hp + ' CP';
      v.fuel = ver.fuel; v.gb = 'AT'; v.hp = ver.hp; v.base = ver.list; v.promo = ver.price; v.sur = sur; v.list = ver.list + sur; v.price = ver.price + sur - (v.demo ? 1500 : 0); v.brand = 'GWM'; v.colorName = c.name; v.hex = c.hex; v.surNA = c.sur == null; v.img = c.img || m.card; v.drive = ver.dr; v.range = ver.range;
    } else { v.colorName = v.color; v.drive = /AWD|4x4|AWD-i/i.test(v.version) ? 'AWD' : 'FWD'; if (v.cut) { v.model = SP.model(v.cut); v.img = v.model.card; } }
  });

  SP.SERVICE_OFFERS = [
    { id: 'warranty', badge: R('Garanție', 'Warranty'), title: R('Garanția GWM: 7 + 8 ani', 'GWM warranty: 7 + 8 years'), lead: R('7 ani garanție de producător pentru vehicul (până la 150.000 km) și 8 ani pentru bateria de tracțiune (până la 160.000 km), conform carnetului de garanție.', '7-year manufacturer warranty on the vehicle (up to 150,000 km) and 8 years on the traction battery (up to 160,000 km), per the warranty booklet.'), img: EU + 'technology/dht/3.webp' },
    { id: 'rev', badge: R('Revizie', 'Service'), title: R('Revizie periodică', 'Periodic service'), lead: R('Revizii pentru benzină, hibrid, plug-in și electric, cu prețul comunicat înainte de programare.', 'Servicing for petrol, hybrid, plug-in and electric models, with the price confirmed before you book.'), img: EU + 'models/haval-v7/interior-2.webp' },
    { id: 'parts', badge: R('Piese', 'Parts'), title: R('Piese originale GWM', 'Genuine GWM parts'), lead: R('Piese și accesorii originale GWM, comandate și montate în service-ul nostru.', 'Genuine GWM parts and accessories, ordered and fitted in our workshop.'), img: EU + 'models/a07/acc.webp' },
    { id: 'assist', badge: R('Asistență', 'Assistance'), title: R('Asistență rutieră', 'Roadside assistance'), lead: R('Asistență rutieră pentru modelele GWM noi, în România și în Europa.', 'Roadside assistance for new GWM models in Romania and Europe.'), img: EU + 'models/haval-v7/phev-4wd.webp' },
    { id: 'body', badge: R('Daune', 'Claims'), title: R('Centru de daune', 'Body & claims centre'), lead: R('Constatare, reparație în vopsitoria proprie și relația cu asigurătorul, într-un singur loc.', 'Inspection, repair in our own body shop and insurer liaison in one place.'), img: EU + 'models/a07/hero-banner/2.webp' },
    { id: 'buyback', badge: R('Buy-back', 'Buy-back'), title: R('Evaluare gratuită pentru buy-back', 'Free buy-back valuation'), lead: R('Aduci mașina actuală, de orice marcă — o evaluăm pe loc și o scădem din prețul GWM-ului nou.', 'Bring your current car, any brand — we value it on the spot and deduct it from your new GWM.'), img: EU + 'models/a07/hero-banner/1.webp' }
  ];
  SP.FIN = [
    { id: 'deal', badge: R('GO-WITH-MORE', 'GO-WITH-MORE'), title: R('ORA 5 de la 24.990 €', 'ORA 5 from €24,990'), lead: R('Discount promoțional de 2.000 € la ORA 5 Turbo și Hybrid, până la 31.12.2026, în limita stocului.', '€2,000 promotional discount on ORA 5 Turbo and Hybrid, until 31.12.2026, while stocks last.'), img: EU + 'models/ora-5/kv-1.webp' },
    { id: 'fin', badge: R('Finanțare', 'Finance'), title: R('Leasing și credit auto', 'Leasing and car loans'), lead: R('Leasing financiar sau operațional și credit auto pentru persoane fizice și juridice, cu ofertă în 24 de ore.', 'Finance or operating lease and car loans for private and business customers, with an offer within 24 hours.'), img: EU + 'models/ora-5/0630/interior-es-0702.webp' },
    { id: 'fleet', badge: R('Flote', 'Fleet'), title: R('GWM pentru companii', 'GWM for business'), lead: R('Oferte dedicate pentru flote: ORA 5 Hybrid și WEY Plug-in Hybrid, cu service prioritar.', 'Dedicated fleet offers: ORA 5 Hybrid and WEY plug-in hybrids, with priority service.'), img: EU + 'home/partner-pc.webp' }
  ];
})(window.SP);
