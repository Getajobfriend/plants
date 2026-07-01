const LAST_UPDATED = "June 29, 2026";
const LIGHT_ORDER  = { Low: 1, Medium: 2, High: 3 };

const TANK_OPTIONS = {
  US: [
    { value: "5",  label: "5 gallons"   },
    { value: "10", label: "10 gallons"  },
    { value: "20", label: "20 gallons"  },
    { value: "55", label: "55+ gallons" }
  ],
  UK: [
    { value: "20",  label: "20 litres"   },
    { value: "40",  label: "40 litres"   },
    { value: "75",  label: "75 litres"   },
    { value: "200", label: "200+ litres" }
  ]
};

const TAGLINES = {
  US: "Compare prices across the top US aquatic plant sellers — updated weekly",
  UK: "Compare prices across the top UK aquatic plant sellers — updated weekly"
};

const FOOTER = {
  US: 'Prices sourced live from <a href="https://buceplant.com" target="_blank" rel="noopener">Buce Plant</a>, <a href="https://shop.glassaqua.com" target="_blank" rel="noopener">Glass Aqua</a>, <a href="https://www.aquariumcoop.com" target="_blank" rel="noopener">Aquarium Co-Op</a>, <a href="https://aquariumplantsfactory.com" target="_blank" rel="noopener">Aquarium Plants Factory</a>, and <a href="https://www.modernaquarium.com" target="_blank" rel="noopener">Modern Aquarium</a>. Always verify before purchasing.',
  UK: 'Prices sourced live from <a href="https://www.aquariumgardens.co.uk" target="_blank" rel="noopener">Aquarium Gardens</a> and <a href="https://aquaessentials.co.uk" target="_blank" rel="noopener">Aqua Essentials</a>. Always verify before purchasing.'
};

const BUNDLES = [
  {
    name: "10 Gallon Beginner",
    icon: "🪣",
    desc: "Three easy, low-light plants that thrive together with zero CO2.",
    plants: ["Java Moss", "Anubias Nana Petite", "Java Fern"]
  },
  {
    name: "Low Light Easy Setup",
    icon: "💡",
    desc: "Hardy, fast-growing plants that handle low light and bounce back from neglect.",
    plants: ["Amazon Sword", "Vallisneria", "Hornwort"]
  },
  {
    name: "Color Pop Tank",
    icon: "🎨",
    desc: "Mix of red, pink, and green mid-level plants that make a 20g look professional. Monte Carlo carpets best with moderate light — a basic planted LED works, but it'll fill in faster under stronger light.",
    plants: ["Ludwigia Repens", "Alternanthera Reineckii Mini", "Monte Carlo"]
  },
  {
    name: "Shrimp & Nano Tank",
    icon: "🦐",
    desc: "Tiny plants that shelter shrimp, fit a 5–10g, and need almost nothing.",
    plants: ["Java Moss", "Cryptocoryne Parva", "Bucephalandra"]
  }
];

let currentCountry = 'US';
let allPlants = [];

async function loadPlants() {
  const res = await fetch('plants.json?v=10');
  if (!res.ok) throw new Error('Failed to load plants.json: ' + res.status);
  return res.json();
}

function lowestPrice(sellers) {
  return Math.min(...sellers.map(s => s.price));
}

function imageCredit(url) {
  if (url.includes('aquariumcoop.com'))         return { label: 'Aquarium Co-Op',        href: 'https://www.aquariumcoop.com' };
  if (url.includes('buceplant.com'))             return { label: 'Buce Plant',             href: 'https://buceplant.com' };
  if (url.includes('glassaqua.com'))             return { label: 'Glass Aqua',             href: 'https://shop.glassaqua.com' };
  if (url.includes('modernaquarium.com'))        return { label: 'Modern Aquarium',        href: 'https://www.modernaquarium.com' };
  if (url.includes('aquariumplantsfactory.com')) return { label: 'Aquarium Plants Factory',href: 'https://aquariumplantsfactory.com' };
  if (url.includes('bigcommerce.com'))           return { label: 'Modern Aquarium',        href: 'https://www.modernaquarium.com' };
  return null;
}

function priceChangeHTML(price, prevPrice) {
  if (!prevPrice || prevPrice === price) return '';
  if (price < prevPrice)
    return '<span class="price-change down">▼ was $' + prevPrice.toFixed(2) + '</span>';
  return '<span class="price-change up">▲ was $' + prevPrice.toFixed(2) + '</span>';
}

function formatPrice(price, country) {
  return country === 'UK' ? '£' + price.toFixed(2) : '$' + price.toFixed(2);
}

const ALL_STORES = {
  US: [
    { name: 'Buce Plant',             url: 'https://buceplant.com/collections/aquarium-plants' },
    { name: 'Glass Aqua',             url: 'https://shop.glassaqua.com/collections/top-sellers' },
    { name: 'Aquarium Co-Op',         url: 'https://www.aquariumcoop.com/collections/plants' },
    { name: 'Aquarium Plants Factory',url: 'https://aquariumplantsfactory.com/collections/aquarium-plants' },
    { name: 'Modern Aquarium',        url: 'https://www.modernaquarium.com/' }
  ],
  UK: [
    { name: 'Aquarium Gardens', url: 'https://www.aquariumgardens.co.uk/aquarium-plants-15-c.asp' },
    { name: 'Aqua Essentials',  url: 'https://aquaessentials.co.uk/collections/aquarium-plants' }
  ]
};

function buildCard(plant) {
  const sellers = currentCountry === 'UK' ? (plant.ukSellers || []) : plant.sellers;
  if (!sellers || sellers.length === 0) return '';

  const minPrice = lowestPrice(sellers);
  const bestSeller = sellers.reduce((a, b) => a.price <= b.price ? a : b);
  const creditHTML = '<a class="photo-credit" href="' + bestSeller.url + '" target="_blank" rel="noopener">Photo: ' + bestSeller.store + '</a>';

  const sellerMap = {};
  sellers.forEach(s => { sellerMap[s.store] = s; });

  const priceRows = ALL_STORES[currentCountry].map(storeInfo => {
    const seller = sellerMap[storeInfo.name];
    if (seller) {
      const isBest     = seller.price === minPrice && sellers.length > 1;
      const changeHTML = currentCountry === 'US' ? priceChangeHTML(seller.price, seller.prevPrice) : '';
      return `
        <a class="price-row ${isBest ? 'best-price' : ''}" href="${seller.url}" target="_blank" rel="noopener">
          <span class="store-name">
            ${seller.store}
            ${isBest ? '<span class="best-tag">Best Price</span>' : ''}
          </span>
          <span class="price-right">
            ${changeHTML}
            <span class="price-amount">${formatPrice(seller.price, currentCountry)}</span>
          </span>
        </a>`;
    } else {
      return `
        <div class="price-row unavailable">
          <span class="store-name">${storeInfo.name}</span>
          <span class="unavailable-text">Not available</span>
        </div>`;
    }
  }).join('');

  const tankAttr = currentCountry === 'UK' ? plant.minTankLitres : plant.minTankGallons;

  return `
    <div class="card" data-difficulty="${plant.difficulty}" data-lighting="${plant.lighting}" data-tank="${tankAttr}" data-name="${plant.name}">
      <div class="card-img">
        <img src="${plant.image}" alt="${plant.name}" loading="lazy">
        <span class="difficulty-badge ${plant.difficulty}">${plant.difficulty}</span>
      </div>
      <div class="card-body">
        <div>
          <h2>${plant.name}</h2>
          <div class="scientific">${plant.scientific}</div>
          ${creditHTML}
        </div>
        <p>${plant.description}</p>
        <div class="prices">${priceRows}</div>
      </div>
    </div>`;
}

// ── Best Deals Strip ─────────────────────────────────────────
function renderDealsStrip(plants) {
  const sellers = p => currentCountry === 'UK' ? (p.ukSellers || []) : p.sellers;

  const deals = plants
    .filter(p => sellers(p).length > 1)
    .map(p => {
      const s      = sellers(p);
      const prices = s.map(x => x.price);
      const spread = Math.max(...prices) - Math.min(...prices);
      return { plant: p, spread, low: Math.min(...prices), high: Math.max(...prices) };
    })
    .sort((a, b) => b.spread - a.spread)
    .slice(0, 4);

  if (!deals.length) { document.getElementById('deals-strip').innerHTML = ''; return; }

  const sym = currentCountry === 'UK' ? '£' : '$';
  document.getElementById('deals-strip').innerHTML = `
    <div class="deals-inner">
      <div class="deals-heading">
        <span class="deals-label">🔥 Best Deals Right Now</span>
        <span class="deals-sub">Biggest price gap between stores</span>
      </div>
      <div class="deals-cards">
        ${deals.map(d => `
          <div class="deal-card" data-scroll-to="${d.plant.name}">
            <img src="${d.plant.image}" alt="${d.plant.name}">
            <div class="deal-info">
              <div class="deal-name">${d.plant.name}</div>
              <div class="deal-range">${sym}${d.low.toFixed(2)} – ${sym}${d.high.toFixed(2)}</div>
              <div class="deal-save">Save up to ${sym}${d.spread.toFixed(2)}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;

  document.querySelectorAll('.deal-card').forEach(card => {
    card.addEventListener('click', () => {
      const target = document.querySelector(`.card[data-name="${card.dataset.scrollTo}"]`);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

// ── Starter Bundles ──────────────────────────────────────────
function renderBundles(plants) {
  const byName = {};
  plants.forEach(p => { byName[p.name] = p; });

  const sym = currentCountry === 'UK' ? '£' : '$';

  document.getElementById('bundles-grid').innerHTML = BUNDLES.map((bundle, i) => {
    const found    = bundle.plants.filter(n => byName[n]);
    const sellers  = p => currentCountry === 'UK' ? (p.ukSellers || p.sellers) : p.sellers;
    const totalLow = found.reduce((sum, n) => sum + lowestPrice(sellers(byName[n])), 0);

    return `
      <div class="bundle-card" data-idx="${i}">
        <div class="bundle-header">
          <div>
            <div class="bundle-name">${bundle.name}</div>
            <div class="bundle-price">Est. from ${sym}${totalLow.toFixed(2)}</div>
          </div>
        </div>
        <p class="bundle-desc">${bundle.desc}</p>
        <div class="bundle-plants">
          ${bundle.plants.map(n => `<span class="bundle-tag">${n}</span>`).join('')}
        </div>
        <button class="bundle-btn">Show these plants</button>
      </div>`;
  }).join('');

  document.querySelectorAll('.bundle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx   = parseInt(btn.closest('.bundle-card').dataset.idx, 10);
      const names = BUNDLES[idx].plants.map(n => n.toLowerCase());
      document.querySelectorAll('.card').forEach(card => {
        const cardName = card.dataset.name.toLowerCase();
        card.classList.toggle('hidden', !names.some(n => cardName.includes(n) || n.includes(cardName)));
      });
      updateResultsCount();
      document.getElementById('plant-grid').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ── Tank size quiz options ────────────────────────────────────
function updateTankOptions() {
  const select = document.getElementById('q-tank');
  const prev   = select.value;
  select.innerHTML = '<option value="">Any size</option>' +
    TANK_OPTIONS[currentCountry].map(o =>
      `<option value="${o.value}"${o.value === prev ? ' selected' : ''}>${o.label}</option>`
    ).join('');
}

// ── Re-render everything for country switch ───────────────────
function switchCountry(country) {
  currentCountry = country;
  document.getElementById('header-tagline').textContent = TAGLINES[country];
  document.getElementById('footer-text').innerHTML = FOOTER[country];
  updateTankOptions();
  quizTank = '';
  document.getElementById('q-tank').value = '';

  const grid = document.getElementById('plant-grid');
  grid.innerHTML = allPlants.map(buildCard).join('');
  renderDealsStrip(allPlants);
  renderBundles(allPlants);
  applyFilters();
}

// ── Filtering ─────────────────────────────────────────────────
let activeFilter = 'All';
let searchTerm   = '';
let quizTank     = '';
let quizLight    = '';
let quizExp      = '';

function updateResultsCount() {
  const cards   = document.querySelectorAll('.card');
  const visible = document.querySelectorAll('.card:not(.hidden)').length;
  const countEl = document.getElementById('results-count');
  countEl.textContent = visible === cards.length ? '' : visible + ' of ' + cards.length + ' plants match';
}

function applyFilters() {
  document.querySelectorAll('.card').forEach(card => {
    const diff   = card.dataset.difficulty;
    const light  = card.dataset.lighting;
    const tank   = parseInt(card.dataset.tank, 10);
    const name   = card.querySelector('h2').textContent.toLowerCase();
    const sci    = card.querySelector('.scientific').textContent.toLowerCase();

    const passFilter = activeFilter === 'All' || diff === activeFilter;
    const passSearch = !searchTerm || name.includes(searchTerm) || sci.includes(searchTerm);
    const passTank   = !quizTank  || (!isNaN(tank) && tank <= parseInt(quizTank, 10));
    const passLight  = !quizLight || LIGHT_ORDER[light] <= LIGHT_ORDER[quizLight];
    let   passExp    = true;
    if (quizExp === 'Easy')   passExp = diff === 'Easy';
    if (quizExp === 'Medium') passExp = diff === 'Easy' || diff === 'Medium';

    card.classList.toggle('hidden', !(passFilter && passSearch && passTank && passLight && passExp));
  });
  updateResultsCount();
}

function filterCards(difficulty) {
  activeFilter = difficulty;
  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.filter === difficulty)
  );
  applyFilters();
}

// ── Init ──────────────────────────────────────────────────────
async function init() {
  document.getElementById('last-updated').textContent = LAST_UPDATED;

  try {
    allPlants = await loadPlants();
  } catch (err) {
    document.getElementById('plant-grid').innerHTML =
      '<p class="load-error">Couldn\'t load plant data. Please refresh the page or try again later.</p>';
    return;
  }
  updateTankOptions();

  const grid = document.getElementById('plant-grid');
  grid.innerHTML = allPlants.map(buildCard).join('');

  renderDealsStrip(allPlants);
  renderBundles(allPlants);

  // Country toggle
  document.querySelectorAll('input[name="country"]').forEach(radio => {
    radio.addEventListener('change', () => switchCountry(radio.value));
  });

  // Difficulty filters
  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.addEventListener('click', () => filterCards(btn.dataset.filter))
  );

  // Search
  document.getElementById('plant-search').addEventListener('input', e => {
    searchTerm = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  // Quiz
  document.getElementById('q-tank').addEventListener('change', e => { quizTank  = e.target.value; applyFilters(); });
  document.getElementById('q-light').addEventListener('change', e => { quizLight = e.target.value; applyFilters(); });
  document.getElementById('q-exp').addEventListener('change', e => { quizExp   = e.target.value; applyFilters(); });

  document.getElementById('quiz-clear').addEventListener('click', () => {
    quizTank = quizLight = quizExp = '';
    ['q-tank','q-light','q-exp'].forEach(id => document.getElementById(id).value = '');
    applyFilters();
  });
}

init();
