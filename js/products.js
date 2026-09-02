/* ============================================================
   FALLBACK / STARTER PRODUCT CATALOG

   As of this update, the live site normally loads its product list
   from your Google Sheet (see the "Products" tab set up via
   apps-script/Code.gs) — so Mukund can add or edit products himself
   from the spreadsheet, no code changes needed.

   The array below is only used as a fallback: if the Sheet can't be
   reached (e.g. ordersEndpoint isn't set yet, or there's a network
   issue), the site shows these items instead so it never breaks.
   Keep it roughly in sync with the Sheet if you want the fallback to
   look right, but it's not required.

   Fields:
   id          - unique short code, no spaces (used internally)
   name        - shown to customers
   category    - one of the CATEGORY ids below (controls the filter chips)
   price       - number, in rupees
   unit        - e.g. "per garland", "per kg", "per piece"
   image       - path to a photo in the images/ folder (see below)
   icon        - fallback drawn icon, used only if the image fails to load
   description - one short line shown on the card
   inStock     - true / false — set false to hide the Add button
   featured    - true / false — featured items get a small badge

   IMAGES
   Put your photo files in an "images" folder next to index.html,
   using exactly the filenames referenced below (in the Sheet, the
   "Image" column works the same way). If a file is missing, the site
   automatically falls back to a drawn icon so nothing breaks.
   Recommended: square-ish photos, at least 500x500px, under 300KB each.
   ============================================================ */

const DEFAULT_CATEGORIES = [
  { id: "garlands", label: "Garlands" },
  { id: "loose", label: "Loose Flowers" },
  { id: "puja", label: "Puja Essentials" },
  { id: "decor", label: "Decoration" },
  { id: "handmade", label: "Handmade Decor" },
];

/* Available icon keys (fallback only): marigold, rose, lotus, durva, belpatra, mala, rangoli, leaf, diya, lantern, backdrop, jute */

const DEFAULT_PRODUCTS = [
  {
    id: "marigold-haar",
    name: "Marigold Garland",
    category: "garlands",
    price: 120,
    unit: "per garland (5 ft)",
    image: "images/marigold-garland.jpg",
    icon: "marigold",
    description: "Fresh genda phool haar, hand-strung the same morning.",
    inStock: true,
    featured: true,
  },
  {
    id: "rose-haar",
    name: "Rose Garland",
    category: "garlands",
    price: 180,
    unit: "per garland (5 ft)",
    image: "images/rose-garland.jpg",
    icon: "rose",
    description: "Red rose garland for the mandap or main idol.",
    inStock: true,
    featured: false,
  },
  {
    id: "mixed-haar",
    name: "Marigold & Rose Mix",
    category: "garlands",
    price: 150,
    unit: "per garland (5 ft)",
    image: "images/marigold-rose-mix-garland.jpg",
    icon: "mala",
    description: "Alternating marigold and rose, strung with tulsi leaves.",
    inStock: true,
    featured: true,
  },
  {
    id: "loose-marigold",
    name: "Loose Marigold",
    category: "loose",
    price: 80,
    unit: "per kg",
    image: "images/loose-marigold.jpg",
    icon: "marigold",
    description: "Petals for rangoli, thali decoration, and scattering.",
    inStock: true,
    featured: false,
  },
  {
    id: "loose-rose",
    name: "Loose Rose Petals",
    category: "loose",
    price: 100,
    unit: "per kg",
    image: "images/loose-rose-petals.jpg",
    icon: "rose",
    description: "Deep red petals, good for rangoli and welcome trails.",
    inStock: true,
    featured: false,
  },
  {
    id: "lotus",
    name: "Lotus Flowers",
    category: "puja",
    price: 40,
    unit: "per piece",
    image: "images/lotus-flowers.jpg",
    icon: "lotus",
    description: "Fresh lotus for the main aarti, sold individually.",
    inStock: true,
    featured: true,
  },
  {
    id: "durva",
    name: "Durva Grass Bunch",
    category: "puja",
    price: 20,
    unit: "per bunch (21 blades)",
    image: "images/durva-grass.jpg",
    icon: "durva",
    description: "Durvankur bunches, an essential offering for Ganpati.",
    inStock: true,
    featured: false,
  },
  {
    id: "belpatra",
    name: "Bel Patra",
    category: "puja",
    price: 15,
    unit: "per bundle",
    image: "images/bel-patra.jpg",
    icon: "belpatra",
    description: "Trifoliate bel leaves for the puja thali.",
    inStock: true,
    featured: false,
  },
  {
    id: "rangoli-flowers",
    name: "Flower Rangoli Kit",
    category: "decor",
    price: 250,
    unit: "per kit (serves 2x2 ft)",
    image: "images/flower-rangoli-kit.jpg",
    icon: "rangoli",
    description: "Sorted petals in five colours, ready to lay out.",
    inStock: true,
    featured: false,
  },
  {
    id: "mandap-toran",
    name: "Marigold Toran",
    category: "decor",
    price: 90,
    unit: "per toran (door hanging)",
    image: "images/marigold-toran.jpg",
    icon: "leaf",
    description: "Marigold and mango-leaf toran for the entrance.",
    inStock: true,
    featured: false,
  },
  {
    id: "paper-flower-backdrop",
    name: "Paper Flower Mandap Backdrop",
    category: "handmade",
    price: 450,
    unit: "per backdrop (4x6 ft)",
    image: "images/paper-flower-backdrop.jpg",
    icon: "backdrop",
    description: "Handmade crepe-paper flower backdrop for the mandap wall.",
    inStock: true,
    featured: true,
  },
  {
    id: "coconut-diya-stand",
    name: "Coconut Shell Diya Stand",
    category: "handmade",
    price: 150,
    unit: "per pair",
    image: "images/coconut-diya-stand.jpg",
    icon: "diya",
    description: "Hand-painted coconut shell diyas, ready to light.",
    inStock: true,
    featured: false,
  },
  {
    id: "jute-paper-toran",
    name: "Jute & Paper Toran",
    category: "handmade",
    price: 120,
    unit: "per toran (door hanging)",
    image: "images/jute-paper-toran.jpg",
    icon: "jute",
    description: "Handwoven jute toran with paper flower accents.",
    inStock: true,
    featured: false,
  },
  {
    id: "paper-kandil-lantern",
    name: "Paper Kandil Lantern",
    category: "handmade",
    price: 90,
    unit: "per piece",
    image: "images/paper-kandil-lantern.jpg",
    icon: "lantern",
    description: "Folded paper kandil, hand-assembled and ready to hang.",
    inStock: true,
    featured: true,
  },
  {
    id: "thermocol-mandap-set",
    name: "Thermocol Mandap Decor Set",
    category: "handmade",
    price: 600,
    unit: "per set (backdrop + pillars)",
    image: "images/thermocol-mandap-set.jpg",
    icon: "backdrop",
    description: "Complete eco-friendly thermocol decor set for a home mandap.",
    inStock: true,
    featured: false,
  },
];
