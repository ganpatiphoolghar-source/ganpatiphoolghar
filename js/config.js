/* ============================================================
   SITE CONFIG
   Edit the values below to customise the shop. Nothing else in
   this file needs to change — it's read by js/app.js.
   ============================================================ */

const SITE_CONFIG = {
  // --- Shop identity ---
  shopName: "Bappa Phool Bazaar",
  tagline: "Fresh flowers for Bappa's darbar, delivered to your door",
  season: "Ganesh Chaturthi 2026 · 14–23 September",
  ownerName: "Mukund Yadav",
  ownerNote:
    "I hand-pick every garland myself the same morning and deliver it to your door in time for the aarti — Ganpati Bappa Morya!",

  // --- Contact & delivery ---
  whatsappNumber: "919604062444", // country code + number, no spaces or +
  phoneDisplay: "+91 96040 62444",
  email: "hello@bappaphoolbazaar.example",
  address: "Oxford Paradise, Vidya Valley School Road, Sus Gaon, Pune 411021",
  deliveryAreas: "Delivering across Pune city during the festival",
  deliveryNote:
    "Orders placed before 6 PM are delivered the next morning. Cash on Delivery only.",
  deliveryCharge: 0, // set to a number e.g. 40 if you want to add a flat delivery fee

  // --- Orders / Google Sheet ---
  // Paste the URL you get after deploying apps-script/Code.gs as a Web App.
  // See README.md for step-by-step instructions.
  ordersEndpoint:
    "https://script.google.com/macros/s/AKfycbyyz5DjTRpUx6ehbGzalOzjsrHpmtwEIOEKehadAJTB1uU8D-764nHqu4x3A2rr-3qDIw/exec",

  // --- Misc ---
  currencySymbol: "₹",
  minOrderAmount: 0, // set e.g. 150 to enforce a minimum order value
};
