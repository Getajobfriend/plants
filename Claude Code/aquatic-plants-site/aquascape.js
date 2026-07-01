// ── PLANT DATABASE ───────────────────────────────────────────────────────────
// zone: foreground | midground | background
// light: low | medium | high
// co2: none | optional | required
// difficulty: easy | medium | hard
// growth: slow | medium | fast
// color: hex for diagram

const PLANT_DB = {
  // FOREGROUND / CARPET
  'Monte Carlo':                { zone:'foreground', color:'#4ade80', light:'medium', co2:'optional', difficulty:'medium', growth:'medium', tip:'Plant in small clumps 1" apart. Will spread into a carpet over 4-8 weeks.' },
  'Dwarf Baby Tears':           { zone:'foreground', color:'#bbf7d0', light:'high',   co2:'required', difficulty:'hard',   growth:'slow',   tip:'The most demanding carpet plant. Needs strong light and CO2 or it will melt.' },
  'Marsilea Hirsuta':           { zone:'foreground', color:'#86efac', light:'low',    co2:'none',     difficulty:'easy',   growth:'slow',   tip:'Clover-like leaves. One of the easiest carpets — tolerates low light.' },
  'Dwarf Hairgrass':            { zone:'foreground', color:'#a3e635', light:'high',   co2:'optional', difficulty:'medium', growth:'fast',   tip:'Spreads via runners. Trim regularly to keep it dense and short.' },
  'Staurogyne Repens':          { zone:'foreground', color:'#65a30d', light:'medium', co2:'optional', difficulty:'medium', growth:'medium', tip:'Bushy foreground plant. Great alternative to HC that needs less CO2.' },
  'Sagittaria Subulata':        { zone:'foreground', color:'#86efac', light:'low',    co2:'none',     difficulty:'easy',   growth:'fast',   tip:'Spreads aggressively via runners. Great beginner carpet for low-tech tanks.' },
  'Eleocharis Parvula':         { zone:'foreground', color:'#bef264', light:'medium', co2:'optional', difficulty:'medium', growth:'medium', tip:'Fine grass-like carpet. Looks stunning but needs consistent nutrients.' },
  'Glossostigma Elatinoides':   { zone:'foreground', color:'#4ade80', light:'high',   co2:'required', difficulty:'hard',   growth:'fast',   tip:'Classic carpet plant. Needs very high light or it will grow upward instead of spreading.' },

  // MIDGROUND
  'Anubias Nana Petite':        { zone:'midground',  color:'#14532d', light:'low',    co2:'none',     difficulty:'easy',   growth:'slow',   tip:'Tie to driftwood or rock with thread. Never bury the rhizome or it will rot.' },
  'Anubias Nana':               { zone:'midground',  color:'#166534', light:'low',    co2:'none',     difficulty:'easy',   growth:'slow',   tip:'Same care as Nana Petite but larger leaves. Excellent for midground anchors.' },
  'Anubias Barteri':            { zone:'midground',  color:'#15803d', light:'low',    co2:'none',     difficulty:'easy',   growth:'slow',   tip:'Large robust anubias. Will dominate midground — give it space.' },
  'Anubias Nana on Driftwood':  { zone:'midground',  color:'#166534', light:'low',    co2:'none',     difficulty:'easy',   growth:'slow',   tip:'Ready to place immediately. Just drop it in and it will grow.' },
  "Java Fern 'Windelov'":       { zone:'midground',  color:'#16a34a', light:'low',    co2:'none',     difficulty:'easy',   growth:'slow',   tip:'Attach to hardscape. Black spots on leaves are natural propagation — not disease.' },
  'Java Fern':                  { zone:'midground',  color:'#15803d', light:'low',    co2:'none',     difficulty:'easy',   growth:'slow',   tip:'One of the most forgiving aquarium plants. Grows in almost any conditions.' },
  'Java Moss':                  { zone:'midground',  color:'#15803d', light:'low',    co2:'none',     difficulty:'easy',   growth:'medium', tip:'Tie to driftwood or rocks. Great hiding spot for shrimp and baby fish.' },
  'Christmas Moss':             { zone:'midground',  color:'#166534', light:'low',    co2:'none',     difficulty:'easy',   growth:'slow',   tip:'Looks like tiny Christmas trees. Tie to hardscape for best results.' },
  'Flame Moss':                 { zone:'midground',  color:'#1a7a4a', light:'low',    co2:'none',     difficulty:'easy',   growth:'slow',   tip:'Grows upward in flame-like spirals. Beautiful on driftwood.' },
  'Bucephalandra':              { zone:'midground',  color:'#1c6b3a', light:'low',    co2:'none',     difficulty:'easy',   growth:'slow',   tip:'Rare and colorful rhizome plant. Attach to hardscape, never plant in substrate.' },
  'Cryptocoryne Wendtii':       { zone:'midground',  color:'#a16207', light:'low',    co2:'none',     difficulty:'easy',   growth:'medium', tip:'May "melt" when first planted — normal. It will regrow from the roots stronger.' },
  'Cryptocoryne Lutea':         { zone:'midground',  color:'#854d0e', light:'low',    co2:'none',     difficulty:'easy',   growth:'medium', tip:'Compact crypt. Stays small and dense, great for foreground-midground border.' },
  'Cryptocoryne Parva':         { zone:'foreground', color:'#78350f', light:'low',    co2:'none',     difficulty:'medium', growth:'slow',   tip:'Tiniest crypt. Very slow-growing but stays short permanently. No trimming needed.' },
  'Cryptocoryne Balansae':      { zone:'background', color:'#92400e', light:'low',    co2:'none',     difficulty:'easy',   growth:'medium', tip:'Tall wavy-leaved crypt. Excellent low-light background plant.' },
  'Alternanthera Reineckii Mini':{ zone:'midground', color:'#f87171', light:'high',   co2:'optional', difficulty:'medium', growth:'medium', tip:'Needs high light to stay red. In low light it turns green and grows leggy.' },
  'Bolbitis Heudelotii':        { zone:'midground',  color:'#064e3b', light:'medium', co2:'optional', difficulty:'medium', growth:'slow',   tip:'African water fern. Stunning on driftwood in moving water.' },

  // BACKGROUND
  'Amazon Sword':               { zone:'background', color:'#22c55e', light:'medium', co2:'none',     difficulty:'easy',   growth:'fast',   tip:'Heavy root feeder — add root tabs under it. Will get very large in a 55g+.' },
  'Vallisneria':                { zone:'background', color:'#16a34a', light:'low',    co2:'none',     difficulty:'easy',   growth:'fast',   tip:'Spreads fast via runners. Can take over a tank — trim runners to control spread.' },
  'Hornwort':                   { zone:'background', color:'#15803d', light:'low',    co2:'none',     difficulty:'easy',   growth:'fast',   tip:'Grows extremely fast. Great for absorbing ammonia in new tanks.' },
  'Rotala Macrandra Green':     { zone:'background', color:'#4ade80', light:'high',   co2:'required', difficulty:'hard',   growth:'fast',   tip:'Demands high light and CO2 for best color. Trim and replant tops to fill in.' },
  'Rotala Rotundifolia':        { zone:'background', color:'#86efac', light:'medium', co2:'optional', difficulty:'medium', growth:'fast',   tip:'More forgiving than Macrandra. Gets pinkish-red under high light.' },
  'Rotala H\'Ra':               { zone:'background', color:'#f97316', light:'high',   co2:'required', difficulty:'hard',   growth:'medium', tip:'Stunning orange-red color but demands CO2 and strong light.' },
  'Ludwigia Natans':            { zone:'background', color:'#dc2626', light:'medium', co2:'none',     difficulty:'medium', growth:'fast',   tip:'Green on top, red underneath. One of the easiest red plants for beginners.' },
  'Ludwigia Repens':            { zone:'background', color:'#b91c1c', light:'medium', co2:'optional', difficulty:'medium', growth:'fast',   tip:'Classic red stem plant. Trim tops and replant for bushy growth.' },
  'Ludwigia Super Red':         { zone:'background', color:'#991b1b', light:'high',   co2:'optional', difficulty:'medium', growth:'medium', tip:'Intense red color. Needs high light to stay red — fades in low light.' },
  'Water Wisteria':             { zone:'background', color:'#22c55e', light:'medium', co2:'none',     difficulty:'easy',   growth:'fast',   tip:'Very fast grower. Great for new tanks — absorbs excess nutrients quickly.' },
  'Water Sprite':               { zone:'background', color:'#4ade80', light:'medium', co2:'none',     difficulty:'easy',   growth:'fast',   tip:'Can float or be planted. Floats work great as surface cover for fish that jump.' },
  'Pogostemon Stellatus':       { zone:'background', color:'#d946ef', light:'high',   co2:'required', difficulty:'hard',   growth:'medium', tip:'Star-shaped whorls of leaves. Stunning but demanding — needs CO2 and nutrients.' },
  'Hygrophila Polysperma':      { zone:'background', color:'#22c55e', light:'low',    co2:'none',     difficulty:'easy',   growth:'fast',   tip:'One of the fastest growers available. Good for cycling new tanks.' },
  'Hygrophila Pinnatifida':     { zone:'midground',  color:'#4ade80', light:'medium', co2:'optional', difficulty:'medium', growth:'slow',   tip:'Unique oak-leaf shape. Can be attached to hardscape like anubias.' },
  'Bacopa Caroliniana':         { zone:'background', color:'#86efac', light:'medium', co2:'none',     difficulty:'easy',   growth:'slow',   tip:'Lemon-scented leaves. Slow grower but very hardy. Good for low-tech tanks.' },
  'Limnophila Sessiliflora':    { zone:'background', color:'#22c55e', light:'medium', co2:'none',     difficulty:'easy',   growth:'fast',   tip:'Feathery green background plant. Grows fast and fills in quickly.' },
  'Myriophyllum Mattogrossense':{ zone:'background', color:'#16a34a', light:'high',   co2:'required', difficulty:'hard',   growth:'fast',   tip:'Feathery red-green stems. Needs CO2 and high light to thrive.' },
  'Echinodorus Bleheri':        { zone:'background', color:'#22c55e', light:'medium', co2:'none',     difficulty:'easy',   growth:'fast',   tip:'Another name for Amazon Sword. See Amazon Sword care notes.' },
  'Cabomba':                    { zone:'background', color:'#4ade80', light:'high',   co2:'optional', difficulty:'medium', growth:'fast',   tip:'Fan-shaped leaves. Sensitive to hard water — prefers soft, acidic water.' },
  'Egeria Densa':               { zone:'background', color:'#22c55e', light:'medium', co2:'none',     difficulty:'easy',   growth:'fast',   tip:'Classic beginner stem plant. Also called Anacharis. Very fast grower.' },
  'Moneywort':                  { zone:'background', color:'#65a30d', light:'medium', co2:'none',     difficulty:'easy',   growth:'medium', tip:'Round coin-shaped leaves. Grows upright in substrate or can float.' },
};

// Fuzzy name matching for search
function findPlants(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return Object.keys(PLANT_DB).filter(name =>
    name.toLowerCase().includes(q)
  ).slice(0, 6);
}

// Guess zone for unknown plants based on name keywords
function guessZone(name) {
  const n = name.toLowerCase();
  if (/carpet|dwarf|mini|petite|foreground|baby|hair|grass|subulata|parva|glosso|marsilea/.test(n)) return 'foreground';
  if (/sword|vallis|hornwort|rotala|ludwigia|hygrophila|bacopa|wisteria|sprite|pogostemon|cabomba|egeria|anacharis|moneywort|limnophila|myriophyllum/.test(n)) return 'background';
  return 'midground';
}

function guessCare(name) {
  const n = name.toLowerCase();
  const light  = /rotala|glosso|pogostemon|myriophyllum|cabomba|alternanthera/.test(n) ? 'high' : /amazon|sword|vallis|hornwort|anubias|java|crypto|moss/.test(n) ? 'low' : 'medium';
  const co2    = /rotala|glosso|pogostemon|hc|cuba|baby tear/.test(n) ? 'required' : /carpet|alternanthera|monte|staurogyne/.test(n) ? 'optional' : 'none';
  const diff   = co2 === 'required' ? 'hard' : light === 'high' ? 'medium' : 'easy';
  const growth = /vallis|hornwort|hygrophila|egeria|wisteria|sprite|rotala|ludwigia/.test(n) ? 'fast' : /anubias|buceph|bolbitis|moss/.test(n) ? 'slow' : 'medium';
  return { light, co2, difficulty: diff, growth, tip: 'Research this plant\'s specific needs before purchasing.' };
}

function getPlantInfo(name) {
  return PLANT_DB[name] || {
    ...guessZone(name) && { zone: guessZone(name) },
    color: '#22c55e',
    ...guessCare(name),
    zone: guessZone(name),
  };
}

// ── STYLE DATA ────────────────────────────────────────────────────────────────

const STYLES = [
  {
    id: 'nature',
    name: 'Nature Aquarium',
    difficulty: 'beginner',
    description: 'Inspired by Japanese master Takashi Amano. Uses driftwood and rocks to recreate a natural landscape. Foreground carpet, layered plants, open swimming space.',
    photos: [
      'https://aquascapinglove.com/wp-content/uploads/2019/10/aquascaping-styles-nature-aquarium-1024x357.jpg',
      'https://aquascapinglove.com/wp-content/uploads/2019/10/aquascaping-styles-nature-aquarium-focal-points-1024x445.jpg',
      'https://aquascapinglove.com/wp-content/uploads/2019/10/aquascaping-styles-nature-aquarium-layers-1024x414.jpg',
    ],
    cover: 'https://aquascapinglove.com/wp-content/uploads/2019/10/aquascaping-styles-nature-aquarium-1024x357.jpg',
    hardscape: ['driftwood', 'rocks'],
    rules: [
      'Use the rule of thirds — place your main driftwood or rock at the 1/3 or 2/3 point, never dead center.',
      'Height increases from front to back: carpet plants in front, tall stems in back.',
      'Leave open space — negative space is as important as plants.',
      'Odd number of hardscape pieces (3, 5, 7) looks more natural than even.',
      'Driftwood should angle toward the center to draw the eye inward.',
    ],
  },
  {
    id: 'iwagumi',
    name: 'Iwagumi',
    difficulty: 'intermediate',
    description: 'Pure rock formations with a carpet of low plants. Minimalist and meditative. Named from the Japanese for "rock formation." No driftwood — stones only.',
    photos: [
      'https://aquascapinglove.com/wp-content/uploads/2014/01/iwagumi-aquascape-4.jpg',
      'https://aquascapinglove.com/wp-content/uploads/2014/01/iwagumi-aquascape-3-1024x683.jpg',
      'https://aquascapinglove.com/wp-content/uploads/2014/01/iwagumi-aquascape-5-1024x607.jpg',
    ],
    cover: 'https://aquascapinglove.com/wp-content/uploads/2014/01/iwagumi-aquascape-4.jpg',
    hardscape: ['rocks'],
    rules: [
      'Always use an odd number of rocks (3, 5, or 7). Even numbers feel artificial.',
      'The main "Oyaishi" stone sits at the golden ratio point — about 2/3 across the tank.',
      'Oyaishi should be 2/3 the height of the tank. Smaller stones support it at angles.',
      'Plant only carpeting plants (like Monte Carlo or Dwarf Baby Tears). Keep it minimal.',
      'Leave large areas of open substrate — the empty space IS the design.',
    ],
  },
  {
    id: 'dutch',
    name: 'Dutch Style',
    difficulty: 'advanced',
    description: 'The oldest style, from 1930s Netherlands. No rocks or driftwood — just bold, colorful plants arranged in dense rows called "streets." Pure plant mastery.',
    photos: [
      'https://aquascapinglove.com/wp-content/uploads/2019/10/aquascaping-styles-dutch-aquarium-aquascape-1024x453.jpg',
      'https://aquascapinglove.com/wp-content/uploads/2019/10/aquascaping-styles-dutch-aquarium-aquascape-3-1024x447.jpg',
      'https://aquascapinglove.com/wp-content/uploads/2019/10/aquascaping-styles-dutch-aquarium-aquascape-2-1024x399.jpg',
    ],
    cover: 'https://aquascapinglove.com/wp-content/uploads/2019/10/aquascaping-styles-dutch-aquarium-aquascape-1024x453.jpg',
    hardscape: [],
    rules: [
      'No rocks, no driftwood — plants carry the entire design.',
      'Arrange plants in "streets": clear columns of one species flowing front to back.',
      'Mix textures aggressively — fine-leafed next to broad-leafed, red next to green.',
      'Never create a U-shape (tall on sides, short in middle). Vary heights dramatically.',
      'Each group should contain only one species — no mixing within a street.',
    ],
  },
  {
    id: 'jungle',
    name: 'Jungle Style',
    difficulty: 'beginner',
    description: 'Lush, wild, and overgrown on purpose. Dense planting with large-leaved plants and plants reaching the surface. Forgiving and dramatic.',
    photos: [
      'https://aquascapinglove.com/wp-content/uploads/2014/01/jungle-style-planted-tank-5.jpg',
      'https://aquascapinglove.com/wp-content/uploads/2014/01/jungle-style-planted-tank.jpg',
      'https://aquascapinglove.com/wp-content/uploads/2014/01/jungle-style-planted-tank-4-1024x645.jpg',
    ],
    cover: 'https://aquascapinglove.com/wp-content/uploads/2014/01/jungle-style-planted-tank-5.jpg',
    hardscape: ['driftwood', 'rocks'],
    rules: [
      'Bigger is better — large-leaved plants like Amazon Sword and Vallisneria create the canopy.',
      'Let plants grow tall and reach the surface. The overgrown look is the goal.',
      'Moss on every piece of driftwood softens the hardscape.',
      'Layer densely — there should be no visible gaps in the planting.',
      'Works best in 55+ gallon tanks where big plants have room to spread.',
    ],
  },
];

// ── STATE ─────────────────────────────────────────────────────────────────────

let selectedStyle  = null;
let selectedTank   = null;
let selectedPlants = []; // array of name strings

// ── INIT ──────────────────────────────────────────────────────────────────────

async function init() {
  renderStyles();
  bindTankButtons();
  const plants = await loadPlants();
  renderPlantPicker(plants);
  bindSearch();
  document.getElementById('generate-btn').addEventListener('click', generate);
}

async function loadPlants() {
  const res = await fetch('plants.json');
  return res.json();
}

// ── STYLES ────────────────────────────────────────────────────────────────────

function renderStyles() {
  const grid = document.getElementById('style-grid');
  grid.innerHTML = STYLES.map(s => `
    <div class="style-card" data-id="${s.id}" onclick="selectStyle('${s.id}')">
      <div class="selected-check">✓</div>
      <span class="style-difficulty ${s.difficulty}">${capitalize(s.difficulty)}</span>
      <div class="style-card-img">
        <img src="${s.cover}" alt="${s.name}" loading="lazy">
      </div>
      <div class="style-card-body">
        <h3>${s.name}</h3>
        <p>${s.description}</p>
      </div>
    </div>
  `).join('');
}

function selectStyle(id) {
  selectedStyle = STYLES.find(s => s.id === id);
  document.querySelectorAll('.style-card').forEach(el =>
    el.classList.toggle('selected', el.dataset.id === id)
  );
}

// ── TANKS ─────────────────────────────────────────────────────────────────────

function bindTankButtons() {
  document.querySelectorAll('.tank-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tank-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (btn.dataset.gallons === 'custom') {
        const w = +document.getElementById('custom-w').value;
        const h = +document.getElementById('custom-h').value;
        const d = +document.getElementById('custom-d').value;
        if (w && h && d) selectedTank = { gallons:'custom', w, h, d };
      } else {
        selectedTank = { gallons: btn.dataset.gallons, w: +btn.dataset.w, h: +btn.dataset.h, d: +btn.dataset.d };
      }
    });
  });
  ['custom-w','custom-h','custom-d'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      if (document.querySelector('.custom-tank.selected')) {
        const w = +document.getElementById('custom-w').value;
        const h = +document.getElementById('custom-h').value;
        const d = +document.getElementById('custom-d').value;
        if (w && h && d) selectedTank = { gallons:'custom', w, h, d };
      }
    });
  });
}

// ── PLANT PICKER (from plants.json) ──────────────────────────────────────────

function renderPlantPicker(plants) {
  const picker = document.getElementById('plant-picker');
  picker.innerHTML = plants.map(p => {
    const info = getPlantInfo(p.name);
    return `
      <div class="plant-chip" data-name="${p.name}" onclick="togglePlant('${p.name}', this, '${p.image}')">
        <img src="${p.image}" alt="${p.name}">
        <div>
          <div class="plant-chip-name">${p.name}</div>
          <div class="plant-chip-zone">${capitalize(info.zone)}</div>
        </div>
      </div>
    `;
  }).join('');
}

function togglePlant(name, el, img) {
  if (selectedPlants.includes(name)) {
    removePlant(name);
    if (el) el.classList.remove('selected');
  } else {
    addPlant(name, img || null);
    if (el) el.classList.add('selected');
  }
}

function addPlant(name, img) {
  if (selectedPlants.includes(name)) return;
  selectedPlants.push(name);
  renderSelectedChips(img, name);
}

function removePlant(name) {
  selectedPlants = selectedPlants.filter(n => n !== name);
  // un-highlight picker chip if present
  const chip = document.querySelector(`.plant-chip[data-name="${name}"]`);
  if (chip) chip.classList.remove('selected');
  renderSelectedChips();
}

function renderSelectedChips() {
  const wrap = document.getElementById('selected-plants-wrap');
  const container = document.getElementById('selected-chips');
  if (selectedPlants.length === 0) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';
  container.innerHTML = selectedPlants.map(name => {
    const pickerChip = document.querySelector(`.plant-chip[data-name="${name}"] img`);
    const imgSrc = pickerChip ? pickerChip.src : '';
    const imgTag = imgSrc ? `<img src="${imgSrc}" alt="${name}">` : '';
    return `
      <div class="selected-chip">
        ${imgTag}
        ${name}
        <span class="chip-remove" onclick="removePlant('${name}')">✕</span>
      </div>
    `;
  }).join('');
}

// ── SEARCH ────────────────────────────────────────────────────────────────────

function bindSearch() {
  const input    = document.getElementById('plant-search');
  const dropdown = document.getElementById('plant-search-dropdown');

  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (!q) { dropdown.classList.remove('open'); return; }

    const matches = findPlants(q);
    const showAdd = q.length > 2;

    let html = matches.map(name => {
      const info = getPlantInfo(name);
      return `
        <div class="dropdown-item" onclick="pickFromSearch('${name}')">
          <span class="dropdown-item-name">${name}</span>
          <span class="dropdown-item-zone">${capitalize(info.zone)}</span>
        </div>
      `;
    }).join('');

    if (showAdd && !matches.find(n => n.toLowerCase() === q.toLowerCase())) {
      const zone = capitalize(guessZone(q));
      html += `<div class="dropdown-add" onclick="addCustomPlant()">＋ Add "${q}" <span style="color:var(--muted);font-weight:400;margin-left:4px">— placed as ${zone}</span></div>`;
    }

    dropdown.innerHTML = html || `<div class="dropdown-add" style="color:var(--muted)">No matches found — type more to add a custom plant</div>`;
    dropdown.classList.add('open');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.plant-search-wrap')) dropdown.classList.remove('open');
  });
}

function pickFromSearch(name) {
  addPlant(name, null);
  document.getElementById('plant-search').value = '';
  document.getElementById('plant-search-dropdown').classList.remove('open');
}

function addCustomPlant() {
  const q = document.getElementById('plant-search').value.trim();
  if (!q) return;
  // Normalize to title case
  const name = q.replace(/\b\w/g, c => c.toUpperCase());
  addPlant(name, null);
  document.getElementById('plant-search').value = '';
  document.getElementById('plant-search-dropdown').classList.remove('open');
}

// ── GENERATE ──────────────────────────────────────────────────────────────────

function generate() {
  const hint = document.getElementById('generate-hint');
  if (!selectedStyle)          { hint.textContent = 'Please choose a style first.'; return; }
  if (!selectedTank)           { hint.textContent = 'Please choose a tank size.'; return; }
  if (!selectedPlants.length)  { hint.textContent = 'Please pick at least one plant.'; return; }
  hint.textContent = '';

  const section = document.getElementById('result-section');
  section.style.display = 'block';
  section.scrollIntoView({ behavior:'smooth', block:'start' });

  renderResultHeader();
  renderInspirationPhotos();
  renderCanvas();
  renderPlacementGuide();
  renderCareGuide();
  renderRules();
}

function renderResultHeader() {
  const label = selectedTank.gallons === 'custom'
    ? `${selectedTank.w}"×${selectedTank.h}"×${selectedTank.d}" custom tank`
    : `${selectedTank.gallons} gallon tank`;
  document.getElementById('result-title').textContent = `${selectedStyle.name} Layout`;
  document.getElementById('result-subtitle').textContent = `${label} · ${selectedPlants.length} plant${selectedPlants.length !== 1 ? 's' : ''}`;
}

function renderInspirationPhotos() {
  const wrap = document.getElementById('inspiration-photos');
  wrap.innerHTML = selectedStyle.photos.map(url =>
    `<img src="${url}" alt="${selectedStyle.name}" loading="lazy">`
  ).join('');
  wrap.insertAdjacentHTML('afterend',
    `<div style="font-size:11px;color:var(--muted);margin-top:8px">Photos: <a href="https://aquascapinglove.com" target="_blank" rel="noopener" style="color:var(--green-light);text-decoration:none">Aquascaping Love</a></div>`
  );
}

// ── CANVAS ────────────────────────────────────────────────────────────────────

function renderCanvas() {
  const canvas = document.getElementById('layout-canvas');
  const tank   = selectedTank;
  const W = 900;
  const H = Math.max(220, Math.round(W * (tank.h / tank.w)));
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Water bg
  const bg = ctx.createLinearGradient(0,0,0,H);
  bg.addColorStop(0,'#0a1a10');
  bg.addColorStop(1,'#0d2a18');
  ctx.fillStyle = bg;
  ctx.fillRect(0,0,W,H);

  // Substrate
  const subH = H * 0.12;
  drawSubstrate(ctx, W, H, subH);

  // Hardscape
  if (selectedStyle.id === 'iwagumi') drawIwagumiRocks(ctx, W, H, subH);
  else if (selectedStyle.id !== 'dutch') drawNatureHardscape(ctx, W, H, subH, selectedStyle.hardscape);

  // Plants
  drawPlants(ctx, W, H, subH);

  // Border
  ctx.strokeStyle = 'rgba(46,204,113,0.3)';
  ctx.lineWidth = 3;
  ctx.strokeRect(2,2,W-4,H-4);

  drawZoneLabels(ctx, W, H, subH);
  renderLegend();
}

function drawSubstrate(ctx, W, H, subH) {
  const sub = ctx.createLinearGradient(0, H-subH, 0, H);
  sub.addColorStop(0,'#2a1a0a');
  sub.addColorStop(1,'#1a0f05');
  ctx.fillStyle = sub;
  ctx.fillRect(0, H-subH, W, subH);
  ctx.fillStyle = '#251508';
  ctx.beginPath();
  ctx.moveTo(0, H-subH*1.5);
  ctx.lineTo(W*0.15, H-subH);
  ctx.lineTo(W*0.85, H-subH);
  ctx.lineTo(W, H-subH*1.3);
  ctx.lineTo(W, H); ctx.lineTo(0, H);
  ctx.closePath(); ctx.fill();
}

function drawIwagumiRocks(ctx, W, H, subH) {
  const baseY = H - subH;
  drawRock(ctx, W*0.62, baseY, (H-subH)*0.36, (H-subH)*0.65, '#4a5568','#6b7280');
  drawRock(ctx, W*0.42, baseY-10, (H-subH)*0.22, (H-subH)*0.36, '#374151','#4b5563');
  drawRock(ctx, W*0.25, baseY-5,  (H-subH)*0.14, (H-subH)*0.23, '#374151','#4b5563');
}

function drawNatureHardscape(ctx, W, H, subH, types) {
  const baseY = H - subH;
  if (types.includes('driftwood')) {
    ctx.strokeStyle = '#5c3d1e'; ctx.lineWidth = 18; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(W*0.08, baseY-20);
    ctx.quadraticCurveTo(W*0.3, baseY-H*0.3, W*0.55, baseY-H*0.55); ctx.stroke();
    ctx.lineWidth = 9;
    ctx.beginPath(); ctx.moveTo(W*0.38, baseY-H*0.38);
    ctx.quadraticCurveTo(W*0.48, baseY-H*0.25, W*0.58, baseY-H*0.2); ctx.stroke();
    ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(W*0.5, baseY-H*0.5); ctx.lineTo(W*0.65, baseY-H*0.35); ctx.stroke();
    ctx.strokeStyle = '#7c5c3a'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(W*0.1, baseY-18);
    ctx.quadraticCurveTo(W*0.3, baseY-H*0.28, W*0.54, baseY-H*0.52); ctx.stroke();
  }
  if (types.includes('rocks')) {
    drawRock(ctx, W*0.72, baseY, 80, 120,'#374151','#4b5563');
    drawRock(ctx, W*0.82, baseY, 50,  75,'#374151','#4b5563');
    drawRock(ctx, W*0.15, baseY, 60,  90,'#374151','#4b5563');
  }
}

function drawRock(ctx, cx, baseY, rw, rh, fill, highlight) {
  ctx.fillStyle = fill;
  ctx.beginPath(); ctx.ellipse(cx, baseY-rh*0.3, rw, rh*0.7, -0.1, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = highlight;
  ctx.beginPath(); ctx.ellipse(cx-rw*0.2, baseY-rh*0.55, rw*0.4, rh*0.2, -0.3, 0, Math.PI*2); ctx.fill();
}

function drawPlants(ctx, W, H, subH) {
  const baseY = H - subH;
  let fg = selectedPlants.filter(n => getPlantInfo(n).zone === 'foreground');
  let mg = selectedPlants.filter(n => getPlantInfo(n).zone === 'midground');
  let bg = selectedPlants.filter(n => getPlantInfo(n).zone === 'background');

  if (selectedStyle.id === 'iwagumi') { fg = selectedPlants; mg = []; bg = []; }

  bg.forEach((name, i) => {
    const info = getPlantInfo(name);
    const count = 6 + i * 2;
    const xStart = W * 0.05, xEnd = W * 0.95;
    const spacing = (xEnd - xStart) / count;
    for (let j = 0; j < count; j++) {
      const x = xStart + j * spacing + (Math.random()-0.5) * spacing * 0.5;
      drawStem(ctx, x, baseY, (H-subH)*(0.6+Math.random()*0.3), info.color, i);
    }
  });

  mg.forEach((name, i) => {
    const info = getPlantInfo(name);
    const count = 3 + i;
    const xStart = W*(0.1 + i*0.05);
    const spacing = (W*0.7)/count;
    for (let j = 0; j < count; j++) {
      drawBushyPlant(ctx, xStart + j*spacing, baseY, (H-subH)*(0.25+Math.random()*0.2), info.color);
    }
  });

  if (fg.length > 0) {
    fg.forEach((name, i) => {
      drawCarpet(ctx, W, baseY, getPlantInfo(name).color, i, fg.length);
    });
  }
}

function drawStem(ctx, x, baseY, stemH, color, offset) {
  ctx.strokeStyle = darken(color, 0.4); ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(x, baseY); ctx.lineTo(x+Math.sin(offset)*10, baseY-stemH); ctx.stroke();
  const leafCount = 3 + Math.floor(stemH/40);
  for (let i = 1; i <= leafCount; i++) {
    const ly = baseY - (stemH * i / leafCount);
    const dir = i%2===0 ? 1 : -1;
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.ellipse(x+dir*12, ly, 10, 5, dir*0.4, 0, Math.PI*2); ctx.fill();
  }
}

function drawBushyPlant(ctx, x, baseY, h, color) {
  const clusters = 3 + Math.floor(Math.random()*3);
  for (let i = 0; i < clusters; i++) {
    const cx = x + (Math.random()-0.5)*30;
    const cy = baseY - h*(0.3+Math.random()*0.7);
    const r  = 8 + Math.random()*12;
    ctx.fillStyle = i%2===0 ? color : lighten(color, 0.2);
    ctx.beginPath(); ctx.ellipse(cx, cy, r*1.5, r, Math.random()*Math.PI, 0, Math.PI*2); ctx.fill();
  }
}

function drawCarpet(ctx, W, baseY, color, idx, total) {
  const strip = W/total, xStart = strip*idx;
  const grad = ctx.createLinearGradient(xStart, baseY-18, xStart, baseY);
  grad.addColorStop(0, color); grad.addColorStop(1, darken(color,0.5));
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.moveTo(xStart, baseY);
  for (let x = xStart; x <= xStart+strip; x+=6) {
    ctx.lineTo(x, baseY - Math.sin((x+idx*50)*0.3)*4 - 14);
  }
  ctx.lineTo(xStart+strip, baseY); ctx.closePath(); ctx.fill();
}

function drawZoneLabels(ctx, W, H, subH) {
  ctx.font = '600 11px Inter, sans-serif'; ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillText('BACKGROUND', W*0.5, 18);
  ctx.fillStyle = 'rgba(255,255,255,0.18)'; ctx.fillText('MIDGROUND', W*0.3, H*0.55);
  ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.fillText('FOREGROUND', W*0.15, H-subH-28);
}

function renderLegend() {
  document.getElementById('diagram-legend').innerHTML = selectedPlants.map(name => {
    const info = getPlantInfo(name);
    return `<div class="legend-item"><div class="legend-dot" style="background:${info.color}"></div><span>${name}</span></div>`;
  }).join('');
}

// ── PLACEMENT GUIDE ───────────────────────────────────────────────────────────

function renderPlacementGuide() {
  const fg = selectedPlants.filter(n => getPlantInfo(n).zone === 'foreground');
  const mg = selectedPlants.filter(n => getPlantInfo(n).zone === 'midground');
  const bg = selectedPlants.filter(n => getPlantInfo(n).zone === 'background');

  const zoneHTML = (label, cls, plants, emptyMsg) => `
    <div class="zone-card">
      <div class="zone-title ${cls}">${label}</div>
      ${plants.length === 0
        ? `<div class="zone-empty">${emptyMsg}</div>`
        : plants.map(name => `
            <div class="zone-plant">
              <div class="zone-plant-dot" style="background:${getPlantInfo(name).color}"></div>
              ${name}
            </div>`).join('')
      }
    </div>`;

  document.getElementById('placement-guide').innerHTML =
    zoneHTML('Foreground', 'fg', fg, 'Consider adding a carpet plant like Monte Carlo or Dwarf Hairgrass') +
    zoneHTML('Midground',  'mg', mg, 'Consider Anubias or Java Fern tied to your driftwood') +
    zoneHTML('Background', 'bg', bg, 'Consider a tall stem plant like Vallisneria or Amazon Sword');
}

// ── CARE GUIDE ────────────────────────────────────────────────────────────────

function renderCareGuide() {
  const lightLevels = selectedPlants.map(n => getPlantInfo(n).light);
  const needsCO2    = selectedPlants.some(n => getPlantInfo(n).co2 === 'required');
  const wantsCO2    = selectedPlants.some(n => getPlantInfo(n).co2 === 'optional');
  const maxLight    = lightLevels.includes('high') ? 'high' : lightLevels.includes('medium') ? 'medium' : 'low';

  // Care cards per plant
  document.getElementById('care-grid').innerHTML = selectedPlants.map(name => {
    const info = getPlantInfo(name);
    const lightClass = info.light === 'low' ? 'good' : info.light === 'medium' ? 'ok' : 'hard';
    const co2Class   = info.co2 === 'none' ? 'good' : info.co2 === 'optional' ? 'ok' : 'hard';
    const diffClass  = info.difficulty === 'easy' ? 'good' : info.difficulty === 'medium' ? 'ok' : 'hard';
    return `
      <div class="care-card">
        <div class="care-card-header">
          <span class="care-plant-name">${name}</span>
          <span class="care-zone-badge ${info.zone}">${capitalize(info.zone)}</span>
        </div>
        <div class="care-rows">
          <div class="care-row"><span class="care-row-label">Light needed</span><span class="care-row-value ${lightClass}">${capitalize(info.light)}</span></div>
          <div class="care-row"><span class="care-row-label">CO₂</span><span class="care-row-value ${co2Class}">${capitalize(info.co2)}</span></div>
          <div class="care-row"><span class="care-row-label">Difficulty</span><span class="care-row-value ${diffClass}">${capitalize(info.difficulty)}</span></div>
          <div class="care-row"><span class="care-row-label">Growth speed</span><span class="care-row-value">${capitalize(info.growth)}</span></div>
        </div>
        ${info.tip ? `<div style="margin-top:10px;font-size:0.78rem;color:var(--muted);line-height:1.5;border-top:1px solid #1e3a28;padding-top:10px">${info.tip}</div>` : ''}
      </div>
    `;
  }).join('');

  // Overall lighting recommendation
  const lightEmoji = maxLight === 'high' ? '☀️' : maxLight === 'medium' ? '🌤️' : '🌙';
  const lightLabel = maxLight === 'high' ? 'High Light (50–80 PAR)' : maxLight === 'medium' ? 'Medium Light (20–50 PAR)' : 'Low Light (5–20 PAR)';
  const co2Text = needsCO2
    ? 'CO₂ injection is <strong>required</strong> — at least one plant on your list demands it.'
    : wantsCO2
    ? 'CO₂ injection is <strong>recommended</strong> — it will noticeably improve growth and color for some of your plants, but not strictly required.'
    : 'No CO₂ needed — all your plants can thrive on fish waste and room air alone. Great for a low-tech setup.';

  document.getElementById('lighting-rec').innerHTML = `
    <div class="lighting-icon">${lightEmoji}</div>
    <div class="lighting-text">
      <h4>Recommended lighting: ${lightLabel}</h4>
      <p>${co2Text} For fertilizers, use a liquid all-in-one fertilizer dosed ${maxLight === 'high' ? '3×' : '2×'} per week to keep your plants healthy.</p>
    </div>
  `;
}

// ── RULES ─────────────────────────────────────────────────────────────────────

function renderRules() {
  const extras = [];
  if (+selectedTank.gallons < 20 && selectedStyle.id === 'jungle') {
    extras.push('Your tank is small for Jungle style — choose 1-2 large plants as focal points rather than trying to fill everything.');
  }
  if (selectedStyle.id === 'iwagumi' && selectedPlants.some(n => getPlantInfo(n).zone === 'background')) {
    extras.push('Tip: Iwagumi traditionally uses only carpet plants. Your background plants will work — keep them sparse so the rocks stay the focus.');
  }
  document.getElementById('rules-box').innerHTML = `
    <h3>Design Rules for ${selectedStyle.name}</h3>
    <ul class="rules-list">
      ${[...selectedStyle.rules, ...extras].map(r => `<li>${r}</li>`).join('')}
    </ul>`;
}

// ── HELPERS ───────────────────────────────────────────────────────────────────

function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

function darken(hex, amount) {
  const n = parseInt(hex.replace('#',''), 16);
  const r = Math.max(0, (n>>16) - Math.round(255*amount));
  const g = Math.max(0, ((n>>8)&0xff) - Math.round(255*amount));
  const b = Math.max(0, (n&0xff) - Math.round(255*amount));
  return `rgb(${r},${g},${b})`;
}

function lighten(hex, amount) {
  const n = parseInt(hex.replace('#',''), 16);
  const r = Math.min(255, (n>>16) + Math.round(255*amount));
  const g = Math.min(255, ((n>>8)&0xff) + Math.round(255*amount));
  const b = Math.min(255, (n&0xff) + Math.round(255*amount));
  return `rgb(${r},${g},${b})`;
}

init();
