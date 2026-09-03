/* ============================================================
   ICONS — small hand-drawn-style SVGs per product category.
   All self-contained, no external image files needed.
   ============================================================ */
const ICONS = {
  marigold: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="#E2891A"><circle cx="32" cy="18" r="9"/><circle cx="46" cy="26" r="9"/><circle cx="46" cy="42" r="9"/><circle cx="32" cy="50" r="9"/><circle cx="18" cy="42" r="9"/><circle cx="18" cy="26" r="9"/></g><circle cx="32" cy="34" r="11" fill="#430E17"/></svg>`,
  rose: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 10c10 2 16 10 16 18 0 10-8 18-16 22-8-4-16-12-16-22 0-8 6-16 16-18z" fill="#82273A"/><path d="M32 18c6 2 10 7 10 12 0 6-5 11-10 14-5-3-10-8-10-14 0-5 4-10 10-12z" fill="#A8384C"/><circle cx="32" cy="28" r="5" fill="#F2B84B"/></svg>`,
  lotus: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="#E7A9BE"><path d="M32 54c-4-10-4-20 0-30 4 10 4 20 0 30z"/><path d="M32 54c-10-4-17-11-20-20 10 1 17 8 20 20z"/><path d="M32 54c10-4 17-11 20-20-10 1-17 8-20 20z"/><path d="M32 54c-8-8-11-17-9-27 8 4 12 14 9 27z"/><path d="M32 54c8-8 11-17 9-27-8 4-12 14-9 27z"/></g><circle cx="32" cy="48" r="6" fill="#F2B84B"/></svg>`,
  durva: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g stroke="#3F5E34" stroke-width="3" stroke-linecap="round" fill="none"><path d="M22 54C18 38 20 22 26 10"/><path d="M32 54C30 36 32 20 36 8"/><path d="M42 54C44 38 42 22 38 10"/></g><ellipse cx="32" cy="55" rx="14" ry="4" fill="#34492C"/></svg>`,
  belpatra: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g fill="#3F5E34"><path d="M32 14c8 4 12 12 8 22-3 7-8 10-8 10s-5-3-8-10c-4-10 0-18 8-22z"/><path d="M14 30c8 0 14 5 16 12-8 2-16-2-19-9-.5-1 1-3 3-3z"/><path d="M50 30c-8 0-14 5-16 12 8 2 16-2 19-9 .5-1-1-3-3-3z"/></g><path d="M32 24v28" stroke="#26361F" stroke-width="1.5"/></svg>`,
  mala: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M8 20c8 20 40 20 48 0" stroke="#3F5E34" stroke-width="2" fill="none"/><g fill="#E2891A"><circle cx="12" cy="22" r="5"/><circle cx="22" cy="34" r="5"/><circle cx="32" cy="38" r="5"/><circle cx="42" cy="34" r="5"/><circle cx="52" cy="22" r="5"/></g><g fill="#82273A"><circle cx="17" cy="27" r="3"/><circle cx="27" cy="37" r="3"/><circle cx="37" cy="37" r="3"/><circle cx="47" cy="27" r="3"/></g></svg>`,
  rangoli: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="22" fill="none" stroke="#F2B84B" stroke-width="2"/><g fill="#E2891A"><circle cx="32" cy="14" r="5"/><circle cx="32" cy="50" r="5"/><circle cx="14" cy="32" r="5"/><circle cx="50" cy="32" r="5"/></g><g fill="#82273A"><circle cx="20" cy="20" r="4"/><circle cx="44" cy="20" r="4"/><circle cx="20" cy="44" r="4"/><circle cx="44" cy="44" r="4"/></g><circle cx="32" cy="32" r="6" fill="#3F5E34"/></svg>`,
  leaf: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M12 46C10 26 22 12 40 10c4 16-4 32-22 38-3 1-5 0-6-2z" fill="#3F5E34"/><path d="M14 44C22 32 30 22 40 12" stroke="#26361F" stroke-width="2" fill="none"/></svg>`,
  diya: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M10 38c0 9 10 16 22 16s22-7 22-16H10z" fill="#82273A"/><ellipse cx="32" cy="38" rx="22" ry="6" fill="#A8384C"/><path d="M32 26c3 4 5 8 2 12-2 2-6 2-8 0-3-4-1-8 2-12 1-1 3-1 4 0z" fill="#E2891A"/></svg>`,
  lantern: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 6v6" stroke="#82273A" stroke-width="2" stroke-linecap="round"/><path d="M20 16h24l-4 30H24z" fill="#E2891A"/><path d="M22 18h20" stroke="#430E17" stroke-width="2"/><path d="M25 46h14l-2 8h-10z" fill="#3F5E34"/></svg>`,
  backdrop: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="10" width="48" height="40" rx="2" fill="none" stroke="#82273A" stroke-width="3"/><g fill="#E2891A"><circle cx="18" cy="20" r="5"/><circle cx="32" cy="16" r="5"/><circle cx="46" cy="20" r="5"/><circle cx="18" cy="40" r="5"/><circle cx="46" cy="40" r="5"/></g><circle cx="32" cy="34" r="6" fill="#3F5E34"/></svg>`,
  jute: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M8 20c8 20 40 20 48 0" stroke="#8A6A3B" stroke-width="3" fill="none"/><g fill="#C99A3D"><circle cx="16" cy="24" r="4"/><circle cx="28" cy="34" r="4"/><circle cx="36" cy="34" r="4"/><circle cx="48" cy="24" r="4"/></g></svg>`,
};

/* ============================================================
   STATE
   ============================================================ */
let cart = []; // [{ id, qty }]
let activeCategory = "all";
let searchTerm = "";
let PRODUCTS = DEFAULT_PRODUCTS.slice();
let CATEGORIES = DEFAULT_CATEGORIES.slice();

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", async () => {
  applyConfigToDom();
  document.getElementById("productGrid").innerHTML =
    `<p class="results-count" style="grid-column:1/-1;">Loading flowers…</p>`;
  await loadProductsFromSheet();
  renderCategoryChips();
  renderGrid();
  bindGlobalEvents();
});

/* ============================================================
   LOAD PRODUCTS FROM THE GOOGLE SHEET
   Falls back silently to DEFAULT_PRODUCTS / DEFAULT_CATEGORIES
   (from js/products.js) if the Sheet can't be reached.
   ============================================================ */
async function loadProductsFromSheet() {
  const endpoint = SITE_CONFIG.ordersEndpoint;
  if (
    !endpoint ||
    endpoint.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE")
  ) {
    console.warn(
      "SITE_CONFIG.ordersEndpoint is not set — showing the built-in product list instead of the Google Sheet.",
    );
    return;
  }
  try {
    const url = `${endpoint}?action=products`;
    const res = await fetch(url);
    const data = await res.json();
    if (
      data &&
      data.status === "ok" &&
      Array.isArray(data.products) &&
      data.products.length > 0
    ) {
      PRODUCTS = data.products.map(normalizeSheetProduct);
      CATEGORIES = buildCategoriesFromProducts(PRODUCTS);
    } else {
      console.warn(
        "Products sheet returned no items — showing the built-in product list instead.",
      );
    }
  } catch (err) {
    console.warn(
      "Could not load products from the Google Sheet — showing the built-in product list instead.",
      err,
    );
  }
}

function normalizeSheetProduct(p) {
  const truthy = (v) => v === true || String(v).trim().toUpperCase() === "TRUE";
  return {
    id: String(p.id || "").trim(),
    name: String(p.name || "").trim(),
    category: String(p.category || "").trim() || "other",
    categoryLabel: String(p.categoryLabel || p.category || "Other").trim(),
    price: Number(p.price) || 0,
    unit: String(p.unit || "").trim(),
    image: String(p.image || "").trim(),
    icon: String(p.icon || "leaf").trim(),
    description: String(p.description || "").trim(),
    inStock: truthy(p.inStock),
    featured: truthy(p.featured),
  };
}

function buildCategoriesFromProducts(products) {
  const seen = new Map();
  products.forEach((p) => {
    if (!seen.has(p.category))
      seen.set(p.category, p.categoryLabel || p.category);
  });
  return [...seen.entries()].map(([id, label]) => ({ id, label }));
}

function applyConfigToDom() {
  const c = SITE_CONFIG;
  document.title = `${c.shopName} — Ganesh Chaturthi Flowers`;
  setText("brandName", c.shopName);
  setText("footerBrandName", c.shopName);
  setText("heroSeason", c.season);
  setText("heroTagline", c.tagline);
  setText("footerTagline", c.tagline);
  setText("footerAreas", c.deliveryAreas);
  setText("footerNote", c.deliveryNote);
  setText("footerSeason", c.season);
  setText("ownerNote", `“${c.ownerNote}”`);
  setText("ownerName", c.ownerName);
  setText("ownerAddress", c.address);
  setText("footerOwnerName", c.ownerName);
  setText("footerAddress", c.address);

  const phoneEl = document.getElementById("footerPhone");
  phoneEl.textContent = c.phoneDisplay;
  phoneEl.href = `https://wa.me/${c.whatsappNumber}`;

  const emailEl = document.getElementById("footerEmail");
  emailEl.textContent = c.email;
  emailEl.href = `mailto:${c.email}`;

  document.getElementById("codNote").textContent =
    `Payment: Cash on Delivery. Pay in cash when your order arrives — no online payment needed.${c.deliveryCharge ? ` A flat delivery charge of ${c.currencySymbol}${c.deliveryCharge} applies.` : ""}`;
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/* ============================================================
   CATEGORY CHIPS
   ============================================================ */
function renderCategoryChips() {
  const row = document.getElementById("categoryChips");
  const all = [{ id: "all", label: "All flowers" }, ...CATEGORIES];
  row.innerHTML = all
    .map(
      (cat) =>
        `<button type="button" class="chip" data-cat="${cat.id}" aria-pressed="${cat.id === "all"}">${cat.label}</button>`,
    )
    .join("");

  row.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    [...row.children].forEach((c) => c.setAttribute("aria-pressed", c === btn));
    renderGrid();
  });
}

/* ============================================================
   PRODUCT GRID
   ============================================================ */
function getFilteredProducts() {
  const term = searchTerm.trim().toLowerCase();
  return PRODUCTS.filter((p) => {
    const matchesCategory =
      activeCategory === "all" || p.category === activeCategory;
    const matchesSearch =
      !term ||
      p.name.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });
}

function renderGrid() {
  const grid = document.getElementById("productGrid");
  const empty = document.getElementById("emptyState");
  const list = getFilteredProducts();

  document.getElementById("resultsCount").textContent =
    `${list.length} ${list.length === 1 ? "item" : "items"}`;

  if (list.length === 0) {
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  grid.innerHTML = list.map(productCardHtml).join("");

  grid.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(btn.dataset.add));
  });
  grid.querySelectorAll("[data-inc]").forEach((btn) => {
    btn.addEventListener("click", () => changeQty(btn.dataset.inc, 1));
  });
  grid.querySelectorAll("[data-dec]").forEach((btn) => {
    btn.addEventListener("click", () => changeQty(btn.dataset.dec, -1));
  });
}

/* ============================================================
   IMAGE URL HANDLING
   Accepts either a relative path (images/photo.jpg) or a Google Drive
   share link, and converts Drive links into a URL that works directly
   in an <img> tag.
   ============================================================ */
function normalizeImageUrl(raw) {
  const value = String(raw || "").trim();
  if (!value) return "";

  // Not a Google-hosted link — use as-is (local path or another host).
  if (!value.includes("google.com")) return value;

  // Common Drive link shapes, across the different domains/formats
  // Google has used over time:
  //   https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  //   https://drive.google.com/open?id=FILE_ID
  //   https://drive.google.com/uc?id=FILE_ID&export=view
  //   https://drive.usercontent.google.com/download?id=FILE_ID&export=view
  const fileMatch = value.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  const idMatch = value.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  const fileId = fileMatch ? fileMatch[1] : idMatch ? idMatch[1] : "";

  if (!fileId) return value; // unrecognised Google URL shape — pass through

  // The "thumbnail" endpoint reliably renders inline in an <img> tag.
  // (uc?export=view can trigger a virus-scan/download page instead.)
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
}

function tileMediaHtml(p) {
  const icon = ICONS[p.icon] || ICONS.leaf;
  const fallback = `<div class="tile-fallback">${icon}</div>`;
  const src = normalizeImageUrl(p.image);
  if (!src) return fallback;
  const escapedFallback = fallback
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  return `<img class="tile-img" src="${src}" alt="${p.name}" loading="lazy" onerror="this.outerHTML='${escapedFallback}';" />`;
}

function thumbMediaHtml(p) {
  const icon = ICONS[p.icon] || ICONS.leaf;
  const src = normalizeImageUrl(p.image);
  if (!src) return icon;
  const escapedIcon = icon.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  return `<img src="${src}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;" onerror="this.outerHTML='${escapedIcon}';" />`;
}

function productCardHtml(p) {
  const qty = getQty(p.id);
  const badge = p.featured ? `<span class="card__badge">Popular</span>` : "";

  const actionHtml = !p.inStock
    ? `<span class="card__oos">Out of stock</span>`
    : qty > 0
      ? `<div class="card__stepper">
         <button type="button" data-dec="${p.id}" aria-label="Decrease quantity">&minus;</button>
         <span>${qty}</span>
         <button type="button" data-inc="${p.id}" aria-label="Increase quantity">&plus;</button>
       </div>`
      : `<button type="button" class="card__add" data-add="${p.id}">Add</button>`;

  return `
    <article class="card ${!p.inStock ? "card--out" : ""}" title="${p.description}">
      ${badge}
      <div class="card__media">${tileMediaHtml(p)}</div>
      <div class="card__overlay">
        <h3 class="card__name">${p.name}</h3>
        <p class="card__unit">${p.unit}</p>
        <div class="card__footer">
          <span class="card__price">${SITE_CONFIG.currencySymbol}${p.price}</span>
          ${actionHtml}
        </div>
      </div>
    </article>`;
}

/* ============================================================
   CART
   ============================================================ */
function getQty(id) {
  const line = cart.find((l) => l.id === id);
  return line ? line.qty : 0;
}

function addToCart(id) {
  const line = cart.find((l) => l.id === id);
  if (line) line.qty += 1;
  else cart.push({ id, qty: 1 });
  onCartChanged();
  showToast("Added to cart");
}

function changeQty(id, delta) {
  const line = cart.find((l) => l.id === id);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter((l) => l.id !== id);
  onCartChanged();
}

function removeFromCart(id) {
  cart = cart.filter((l) => l.id !== id);
  onCartChanged();
}

function cartSubtotal() {
  return cart.reduce((sum, line) => {
    const p = PRODUCTS.find((x) => x.id === line.id);
    return p ? sum + p.price * line.qty : sum;
  }, 0);
}

function cartCount() {
  return cart.reduce((sum, l) => sum + l.qty, 0);
}

function onCartChanged() {
  renderGrid();
  renderCartLines();
  updateSummary();
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById("cartCount");
  const count = cartCount();
  badge.textContent = count;
  badge.hidden = count === 0;
}

function renderCartLines() {
  const container = document.getElementById("cartLines");
  const emptyEl = document.getElementById("cartEmpty");

  if (cart.length === 0) {
    container.innerHTML = "";
    emptyEl.hidden = false;
    return;
  }
  emptyEl.hidden = true;

  container.innerHTML = cart
    .map((line) => {
      const p = PRODUCTS.find((x) => x.id === line.id);
      if (!p) return "";
      return `
        <div class="cart-line">
          <div class="cart-line__art">${thumbMediaHtml(p)}</div>
          <div class="cart-line__info">
            <div class="cart-line__name">${p.name}</div>
            <div class="cart-line__unit">${SITE_CONFIG.currencySymbol}${p.price} · ${p.unit}</div>
            <div class="cart-line__row">
              <div class="cart-line__stepper">
                <button type="button" data-dec="${p.id}" aria-label="Decrease quantity">&minus;</button>
                <span>${line.qty}</span>
                <button type="button" data-inc="${p.id}" aria-label="Increase quantity">&plus;</button>
              </div>
              <button type="button" class="cart-line__remove" data-remove="${p.id}">Remove</button>
            </div>
          </div>
        </div>`;
    })
    .join("");

  container
    .querySelectorAll("[data-inc]")
    .forEach((btn) =>
      btn.addEventListener("click", () => changeQty(btn.dataset.inc, 1)),
    );
  container
    .querySelectorAll("[data-dec]")
    .forEach((btn) =>
      btn.addEventListener("click", () => changeQty(btn.dataset.dec, -1)),
    );
  container
    .querySelectorAll("[data-remove]")
    .forEach((btn) =>
      btn.addEventListener("click", () => removeFromCart(btn.dataset.remove)),
    );
}

function updateSummary() {
  const subtotal = cartSubtotal();
  const delivery = cart.length > 0 ? SITE_CONFIG.deliveryCharge || 0 : 0;
  const total = subtotal + delivery;

  document.getElementById("subtotalAmount").textContent =
    `${SITE_CONFIG.currencySymbol}${subtotal}`;
  document.getElementById("totalAmount").textContent =
    `${SITE_CONFIG.currencySymbol}${total}`;

  const deliveryRow = document.getElementById("deliveryRow");
  if (delivery > 0) {
    deliveryRow.hidden = false;
    document.getElementById("deliveryAmount").textContent =
      `${SITE_CONFIG.currencySymbol}${delivery}`;
  } else {
    deliveryRow.hidden = true;
  }

  const primaryBtn = document.getElementById("primaryActionBtn");
  primaryBtn.disabled = cart.length === 0;
}

/* ============================================================
   DRAWER NAVIGATION
   ============================================================ */
let drawerStep = "cart"; // cart | checkout | confirm

function openDrawer() {
  document.getElementById("adminDrawer").classList.remove("is-open");
  document.getElementById("overlay").classList.add("is-open");
  document.getElementById("cartDrawer").classList.add("is-open");
  document.body.style.overflow = "hidden";
  goToStep("cart");
}

function closeDrawer() {
  document.getElementById("cartDrawer").classList.remove("is-open");
  if (!document.getElementById("adminDrawer").classList.contains("is-open")) {
    document.getElementById("overlay").classList.remove("is-open");
    document.body.style.overflow = "";
  }
}

function goToStep(step) {
  drawerStep = step;
  ["stepCart", "stepCheckout", "stepConfirm"].forEach((id) => {
    document.getElementById(id).classList.remove("is-active");
  });
  const map = {
    cart: "stepCart",
    checkout: "stepCheckout",
    confirm: "stepConfirm",
  };
  document.getElementById(map[step]).classList.add("is-active");

  const title = document.getElementById("drawerTitle");
  const footer = document.getElementById("drawerFooter");
  const primaryBtn = document.getElementById("primaryActionBtn");

  if (step === "cart") {
    title.textContent = "Your cart";
    footer.style.display = "block";
    primaryBtn.textContent = "Proceed to checkout";
    primaryBtn.disabled = cart.length === 0;
  } else if (step === "checkout") {
    title.textContent = "Delivery details";
    footer.style.display = "block";
    primaryBtn.textContent = "Place order (Cash on Delivery)";
    primaryBtn.disabled = false;
  } else if (step === "confirm") {
    title.textContent = "Order confirmed";
    footer.style.display = "none";
  }
}

/* ============================================================
   CHECKOUT FORM VALIDATION
   ============================================================ */
function validateCheckoutForm() {
  const fields = [
    { id: "custName", key: "field-name", test: (v) => v.trim().length >= 2 },
    {
      id: "custPhone",
      key: "field-phone",
      test: (v) => /^[0-9]{10}$/.test(v.trim()),
    },
    {
      id: "custAddress",
      key: "field-address",
      test: (v) => v.trim().length >= 8,
    },
    {
      id: "custPincode",
      key: "field-pincode",
      test: (v) => /^[0-9]{6}$/.test(v.trim()),
    },
  ];

  let allValid = true;
  fields.forEach(({ id, key, test }) => {
    const input = document.getElementById(id);
    const wrapper = document.getElementById(key);
    const valid = test(input.value);
    wrapper.classList.toggle("has-error", !valid);
    if (!valid) allValid = false;
  });

  document
    .getElementById("formErrorBanner")
    .classList.toggle("is-visible", !allValid);
  return allValid;
}

/* ============================================================
   ORDER SUBMISSION
   ============================================================ */
function buildOrderPayload() {
  const orderId = generateOrderId();
  const items = cart.map((line) => {
    const p = PRODUCTS.find((x) => x.id === line.id);
    return {
      name: p ? p.name : line.id,
      qty: line.qty,
      unit: p ? p.unit : "",
      price: p ? p.price : 0,
      lineTotal: p ? p.price * line.qty : 0,
    };
  });
  const subtotal = cartSubtotal();
  const delivery = SITE_CONFIG.deliveryCharge || 0;

  return {
    orderId,
    orderDate: new Date().toISOString(),
    customerName: document.getElementById("custName").value.trim(),
    phone: document.getElementById("custPhone").value.trim(),
    address: document.getElementById("custAddress").value.trim(),
    pincode: document.getElementById("custPincode").value.trim(),
    deliveryDate: document.getElementById("custDate").value || "",
    notes: document.getElementById("custNotes").value.trim(),
    paymentMethod: "Cash on Delivery",
    items,
    itemsSummary: items.map((i) => `${i.name} x${i.qty}`).join(", "),
    subtotal,
    deliveryCharge: delivery,
    total: subtotal + delivery,
  };
}

function generateOrderId() {
  const now = new Date();
  const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `BPB-${stamp}-${rand}`;
}

function pad(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

async function submitOrder(payload) {
  const endpoint = SITE_CONFIG.ordersEndpoint;
  if (
    !endpoint ||
    endpoint.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE")
  ) {
    console.warn(
      "SITE_CONFIG.ordersEndpoint is not set — the order was NOT saved to Google Sheets. See README.md to connect it.",
    );
    return;
  }
  try {
    // Apps Script web apps don't return CORS headers for cross-origin reads,
    // so we fire the request in no-cors mode. The row is still appended
    // server-side; we just can't read a response back here.
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("Could not reach the orders endpoint:", err);
  }
}

/* ============================================================
   EVENT BINDING
   ============================================================ */
function bindGlobalEvents() {
  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderGrid();
  });

  document.getElementById("custPhone").addEventListener("input", (e) => {
    const digits = e.target.value.trim();
    if (/^[0-9]{10}$/.test(digits)) {
      lookupReturningCustomer(digits);
    }
  });

  document.getElementById("cartBtn").addEventListener("click", openDrawer);
  document.getElementById("drawerClose").addEventListener("click", closeDrawer);
  document.getElementById("overlay").addEventListener("click", () => {
    closeDrawer();
    closeAdminDrawer();
  });
  document
    .getElementById("backToCart")
    .addEventListener("click", () => goToStep("cart"));
  document.getElementById("confirmDoneBtn").addEventListener("click", () => {
    closeDrawer();
  });

  document
    .getElementById("adminBtn")
    .addEventListener("click", openAdminDrawer);
  document
    .getElementById("adminDrawerClose")
    .addEventListener("click", closeAdminDrawer);
  document
    .getElementById("adminLoginBtn")
    .addEventListener("click", submitAdminLogin);
  document.getElementById("adminSearchInput").addEventListener("input", (e) => {
    adminSearchTerm = e.target.value;
    renderAdminProductList();
  });
  document.getElementById("adminImageFile").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    handleAdminImageUpload(file);
  });
  document.getElementById("adminPassword").addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitAdminLogin();
  });
  document.getElementById("adminLogoutBtn").addEventListener("click", () => {
    adminAuthed = false;
    adminPassword = "";
    adminSearchTerm = "";
    document.getElementById("adminPassword").value = "";
    document.getElementById("adminSearchInput").value = "";
    goToAdminStep("login");
  });
  document.getElementById("adminAddToggle").addEventListener("click", () => {
    editingProductId = null;
    document.getElementById("adminFormTitle").textContent = "Add a new product";
    document.getElementById("adminSaveBtn").textContent = "Save product";
    document.getElementById("adminAddForm").hidden = false;
    document.getElementById("adminAddToggle").hidden = true;
  });
  document
    .getElementById("adminCancelAdd")
    .addEventListener("click", resetAdminAddForm);
  document
    .getElementById("adminSaveBtn")
    .addEventListener("click", submitNewProduct);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
      closeAdminDrawer();
    }
  });

  document
    .getElementById("primaryActionBtn")
    .addEventListener("click", async () => {
      if (drawerStep === "cart") {
        goToStep("checkout");
        return;
      }
      if (drawerStep === "checkout") {
        if (!validateCheckoutForm()) return;

        const btn = document.getElementById("primaryActionBtn");
        btn.disabled = true;
        btn.textContent = "Placing order…";

        const payload = buildOrderPayload();
        await submitOrder(payload);

        document.getElementById("confirmOrderId").textContent = payload.orderId;
        cart = [];
        onCartChanged();
        document.getElementById("checkoutForm").reset();
        lastLookedUpPhone = "";
        goToStep("confirm");

        btn.disabled = false;
        btn.textContent = "Place order (Cash on Delivery)";
      }
    });
}

/* ============================================================
   ADMIN CONSOLE
   Password is checked server-side (see apps-script/Code.gs) — it is
   never stored in this file or in the page source, so it stays out of
   your public GitHub repo. Login state is kept in memory only and is
   lost on page reload, by design.
   ============================================================ */
let adminAuthed = false;
let adminPassword = "";
let adminIconsPopulated = false;
let editingProductId = null;
let adminSearchTerm = "";

function openAdminDrawer() {
  document.getElementById("cartDrawer").classList.remove("is-open");
  document.getElementById("overlay").classList.add("is-open");
  document.getElementById("adminDrawer").classList.add("is-open");
  document.body.style.overflow = "hidden";
  populateAdminDropdowns();
  goToAdminStep(adminAuthed ? "panel" : "login");
  if (adminAuthed) renderAdminProductList();
}

function closeAdminDrawer() {
  document.getElementById("adminDrawer").classList.remove("is-open");
  if (!document.getElementById("cartDrawer").classList.contains("is-open")) {
    document.getElementById("overlay").classList.remove("is-open");
    document.body.style.overflow = "";
  }
}

function goToAdminStep(step) {
  document
    .getElementById("adminStepLogin")
    .classList.toggle("is-active", step === "login");
  document
    .getElementById("adminStepPanel")
    .classList.toggle("is-active", step === "panel");
  document.getElementById("adminLoginError").classList.remove("is-visible");
}

function populateAdminDropdowns() {
  if (adminIconsPopulated) return;
  const select = document.getElementById("adminIcon");
  select.innerHTML = Object.keys(ICONS)
    .map((key) => `<option value="${key}">${key}</option>`)
    .join("");
  adminIconsPopulated = true;
}

function refreshAdminCategoryOptions() {
  const list = document.getElementById("adminCategoryOptions");
  list.innerHTML = CATEGORIES.map(
    (c) => `<option value="${c.id}">${c.label}</option>`,
  ).join("");
}

async function submitAdminLogin() {
  const pwInput = document.getElementById("adminPassword");
  const password = pwInput.value;
  const errorBanner = document.getElementById("adminLoginError");
  const btn = document.getElementById("adminLoginBtn");
  const endpoint = SITE_CONFIG.ordersEndpoint;

  if (
    !endpoint ||
    endpoint.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE")
  ) {
    errorBanner.textContent =
      "The order/admin endpoint isn't set up yet — see README.md.";
    errorBanner.classList.add("is-visible");
    return;
  }
  if (!password) {
    errorBanner.textContent = "Please enter the admin password.";
    errorBanner.classList.add("is-visible");
    return;
  }

  btn.disabled = true;
  btn.textContent = "Logging in…";
  errorBanner.classList.remove("is-visible");

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ type: "adminLogin", password }),
    });
    const data = await res.json();

    if (data && data.authorized) {
      adminAuthed = true;
      adminPassword = password;
      pwInput.value = "";
      refreshAdminCategoryOptions();
      goToAdminStep("panel");
      renderAdminProductList();
    } else {
      errorBanner.textContent = "Incorrect password. Please try again.";
      errorBanner.classList.add("is-visible");
    }
  } catch (err) {
    errorBanner.textContent =
      "Could not reach the server. Please check your connection and try again.";
    errorBanner.classList.add("is-visible");
  } finally {
    btn.disabled = false;
    btn.textContent = "Log in";
  }
}

function renderAdminProductList() {
  const container = document.getElementById("adminProductList");
  const term = adminSearchTerm.trim().toLowerCase();
  const list = !term
    ? PRODUCTS
    : PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          (p.category || "").toLowerCase().includes(term) ||
          (p.categoryLabel || "").toLowerCase().includes(term),
      );

  if (PRODUCTS.length === 0) {
    container.innerHTML = `<p class="admin-intro">No products found yet.</p>`;
    return;
  }
  if (list.length === 0) {
    container.innerHTML = `<p class="admin-intro">No products match "${adminSearchTerm}".</p>`;
    return;
  }

  container.innerHTML = list
    .map(
      (p) => `
    <div class="admin-product-row">
      <div class="admin-product-row__thumb">${thumbMediaHtml(p)}</div>
      <div class="admin-product-row__meta">
        <div class="admin-product-row__name">${p.name}</div>
        <div class="admin-product-row__sub">${p.categoryLabel || p.category} · ${p.unit}</div>
        <span class="admin-badge ${p.inStock ? "admin-badge--in" : "admin-badge--out"}">${p.inStock ? "In stock" : "Out of stock"}</span>
      </div>
      <div class="admin-product-row__price">${SITE_CONFIG.currencySymbol}${p.price}</div>
      <button type="button" class="admin-edit-btn" data-edit-id="${p.id}">Edit</button>
    </div>
  `,
    )
    .join("");

  container.querySelectorAll("[data-edit-id]").forEach((btn) => {
    btn.addEventListener("click", () => startEditProduct(btn.dataset.editId));
  });
}

function startEditProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;

  editingProductId = id;
  document.getElementById("adminFormTitle").textContent = `Edit: ${p.name}`;
  document.getElementById("adminSaveBtn").textContent = "Save changes";
  document.getElementById("adminSaveError").classList.remove("is-visible");

  document.getElementById("adminName").value = p.name || "";
  document.getElementById("adminCategory").value = p.category || "";
  document.getElementById("adminCategoryLabel").value = p.categoryLabel || "";
  document.getElementById("adminPrice").value = p.price || "";
  document.getElementById("adminUnit").value = p.unit || "";
  document.getElementById("adminImage").value = p.image || "";
  document.getElementById("adminIcon").value = p.icon || "leaf";
  document.getElementById("adminDescription").value = p.description || "";
  document.getElementById("adminInStock").checked = p.inStock !== false;
  document.getElementById("adminFeatured").checked = !!p.featured;

  const preview = document.getElementById("adminImagePreview");
  const existingSrc = normalizeImageUrl(p.image);
  if (existingSrc) {
    preview.src = existingSrc;
    preview.hidden = false;
  } else {
    preview.hidden = true;
    preview.removeAttribute("src");
  }
  document.getElementById("adminImageUploadStatus").hidden = true;

  document.getElementById("adminAddForm").hidden = false;
  document.getElementById("adminAddToggle").hidden = true;
  document
    .getElementById("adminAddForm")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetAdminAddForm() {
  document.getElementById("adminAddForm").reset();
  document.getElementById("adminAddForm").hidden = true;
  document.getElementById("adminAddToggle").hidden = false;
  document.getElementById("adminSaveError").classList.remove("is-visible");
  document.getElementById("adminInStock").checked = true;
  document.getElementById("adminFormTitle").textContent = "Add a new product";
  document.getElementById("adminSaveBtn").textContent = "Save product";
  document.getElementById("adminImagePreview").hidden = true;
  document.getElementById("adminImagePreview").removeAttribute("src");
  document.getElementById("adminImageUploadStatus").hidden = true;
  document.getElementById("adminImageFile").value = "";
  editingProductId = null;
}

async function submitNewProduct() {
  const errorBanner = document.getElementById("adminSaveError");
  const name = document.getElementById("adminName").value.trim();
  const category = document.getElementById("adminCategory").value.trim();
  const price = document.getElementById("adminPrice").value;

  if (!name || !category || !price || Number(price) <= 0) {
    errorBanner.textContent =
      "Product name, category ID, and a price above 0 are required.";
    errorBanner.classList.add("is-visible");
    return;
  }
  errorBanner.classList.remove("is-visible");

  const product = {
    name,
    category,
    categoryLabel:
      document.getElementById("adminCategoryLabel").value.trim() || category,
    price: Number(price),
    unit: document.getElementById("adminUnit").value.trim(),
    image: document.getElementById("adminImage").value.trim(),
    icon: document.getElementById("adminIcon").value,
    description: document.getElementById("adminDescription").value.trim(),
    inStock: document.getElementById("adminInStock").checked,
    featured: document.getElementById("adminFeatured").checked,
  };

  const isEditing = !!editingProductId;
  const btn = document.getElementById("adminSaveBtn");
  btn.disabled = true;
  btn.textContent = isEditing ? "Saving changes…" : "Saving…";

  try {
    const body = isEditing
      ? {
          type: "updateProduct",
          password: adminPassword,
          id: editingProductId,
          product,
        }
      : { type: "addProduct", password: adminPassword, product };

    const res = await fetch(SITE_CONFIG.ordersEndpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(body),
    });
    const data = await res.json();

    if (data && data.status === "ok") {
      showToast(isEditing ? "Product updated" : "Product added");
      resetAdminAddForm();
      await loadProductsFromSheet();
      renderCategoryChips();
      renderGrid();
      renderAdminProductList();
      refreshAdminCategoryOptions();
    } else {
      errorBanner.textContent =
        (data && data.message) ||
        "Could not save the product. Please try again.";
      errorBanner.classList.add("is-visible");
    }
  } catch (err) {
    errorBanner.textContent =
      "Could not reach the server. Please check your connection and try again.";
    errorBanner.classList.add("is-visible");
  } finally {
    btn.disabled = false;
    btn.textContent = isEditing ? "Save changes" : "Save product";
  }
}

/* ============================================================
   ADMIN IMAGE UPLOAD
   Resizes the chosen photo client-side (so uploads stay small and
   fast), converts it to base64, and sends it to Apps Script, which
   saves it into a "images" folder in Google Drive next to your
   spreadsheet and returns a link the site can use directly.
   ============================================================ */
function resizeImageForUpload(file, maxDim, quality) {
  maxDim = maxDim || 1000;
  quality = quality || 0.82;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round(height * (maxDim / width));
            width = maxDim;
          } else {
            width = Math.round(width * (maxDim / height));
            height = maxDim;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          (blob) =>
            blob
              ? resolve(blob)
              : reject(new Error("Could not process the image.")),
          "image/jpeg",
          quality,
        );
      };
      img.onerror = () => reject(new Error("Could not read that image file."));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error("Could not read the file."));
    reader.readAsDataURL(file);
  });
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = () => reject(new Error("Could not encode the image."));
    reader.readAsDataURL(blob);
  });
}

async function handleAdminImageUpload(file) {
  const statusEl = document.getElementById("adminImageUploadStatus");
  const preview = document.getElementById("adminImagePreview");
  const label = document.getElementById("adminImageUploadLabel");
  const fileInput = document.getElementById("adminImageFile");

  statusEl.hidden = true;
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    statusEl.textContent = "Please choose an image file.";
    statusEl.hidden = false;
    return;
  }
  if (file.size > 8 * 1024 * 1024) {
    statusEl.textContent =
      "That photo is quite large — please choose one under 8MB.";
    statusEl.hidden = false;
    return;
  }

  label.textContent = "Uploading…";
  fileInput.disabled = true;

  try {
    const resizedBlob = await resizeImageForUpload(file);
    const base64 = await blobToBase64(resizedBlob);

    const res = await fetch(SITE_CONFIG.ordersEndpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        type: "uploadImage",
        password: adminPassword,
        filename: file.name,
        mimeType: "image/jpeg",
        data: base64,
      }),
    });
    const data = await res.json();

    if (data && data.status === "ok" && data.url) {
      document.getElementById("adminImage").value = data.url;
      preview.src = data.url;
      preview.hidden = false;
      showToast("Photo uploaded");
    } else {
      statusEl.textContent =
        (data && data.message) ||
        "Could not upload the photo. Please try again.";
      statusEl.hidden = false;
    }
  } catch (err) {
    statusEl.textContent =
      "Could not upload the photo. Please check your connection and try again.";
    statusEl.hidden = false;
  } finally {
    label.textContent = "Upload a photo";
    fileInput.disabled = false;
  }
}

/* ============================================================
   RETURNING CUSTOMER AUTO-FILL
   ============================================================ */
let lastLookedUpPhone = "";

async function lookupReturningCustomer(phone) {
  if (phone === lastLookedUpPhone) return; // already checked this number
  lastLookedUpPhone = phone;

  const endpoint = SITE_CONFIG.ordersEndpoint;
  if (!endpoint || endpoint.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"))
    return;

  try {
    const res = await fetch(
      `${endpoint}?action=customer&phone=${encodeURIComponent(phone)}`,
    );
    const data = await res.json();
    const customer = data && data.customer;
    if (!customer) return;

    const nameField = document.getElementById("custName");
    const addressField = document.getElementById("custAddress");
    const pincodeField = document.getElementById("custPincode");

    // Only fill in fields the customer hasn't already typed something into.
    if (!nameField.value.trim() && customer.name)
      nameField.value = customer.name;
    if (!addressField.value.trim() && customer.address)
      addressField.value = customer.address;
    if (!pincodeField.value.trim() && customer.pincode)
      pincodeField.value = customer.pincode;

    if (customer.name || customer.address) {
      showToast("Welcome back! We've filled in your details.");
    }
  } catch (err) {
    console.warn("Could not look up returning customer.", err);
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}
