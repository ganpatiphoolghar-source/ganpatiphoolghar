/* ============================================================
   PRODUCT CATALOG
   Add, remove, or edit products by editing the array below.

   Fields:
   id          - unique short code, no spaces (used internally)
   name        - shown to customers
   category    - one of the CATEGORY ids below (controls the filter chips)
   price       - number, in rupees
   unit        - e.g. "per garland", "per kg", "per piece"
   icon        - one of the icon keys drawn in js/app.js (see ICONS list below)
   description - one short line shown on the card
   inStock     - true / false — set false to hide the Add button
   featured    - true / false — featured items get a small badge
   ============================================================ */

const CATEGORIES = [
  { id: "garlands", label: "Garlands" },
  { id: "loose", label: "Loose Flowers" },
  { id: "puja", label: "Puja Essentials" },
  { id: "decor", label: "Decoration" }
];

/* Available icon keys: marigold, rose, lotus, durva, belpatra, mala, rangoli, leaf */

const PRODUCTS = [
  {
    id: "marigold-haar",
    name: "Marigold Garland",
    category: "garlands",
    price: 120,
    unit: "per garland (5 ft)",
    icon: "marigold",
    description: "Fresh genda phool haar, hand-strung the same morning.",
    inStock: true,
    featured: true
  },
  {
    id: "rose-haar",
    name: "Rose Garland",
    category: "garlands",
    price: 180,
    unit: "per garland (5 ft)",
    icon: "rose",
    description: "Red rose garland for the mandap or main idol.",
    inStock: true,
    featured: false
  },
  {
    id: "mixed-haar",
    name: "Marigold & Rose Mix",
    category: "garlands",
    price: 150,
    unit: "per garland (5 ft)",
    icon: "mala",
    description: "Alternating marigold and rose, strung with tulsi leaves.",
    inStock: true,
    featured: true
  },
  {
    id: "loose-marigold",
    name: "Loose Marigold",
    category: "loose",
    price: 80,
    unit: "per kg",
    icon: "marigold",
    description: "Petals for rangoli, thali decoration, and scattering.",
    inStock: true,
    featured: false
  },
  {
    id: "loose-rose",
    name: "Loose Rose Petals",
    category: "loose",
    price: 100,
    unit: "per kg",
    icon: "rose",
    description: "Deep red petals, good for rangoli and welcome trails.",
    inStock: true,
    featured: false
  },
  {
    id: "lotus",
    name: "Lotus Flowers",
    category: "puja",
    price: 40,
    unit: "per piece",
    icon: "lotus",
    description: "Fresh lotus for the main aarti, sold individually.",
    inStock: true,
    featured: true
  },
  {
    id: "durva",
    name: "Durva Grass Bunch",
    category: "puja",
    price: 20,
    unit: "per bunch (21 blades)",
    icon: "durva",
    description: "Durvankur bunches, an essential offering for Ganpati.",
    inStock: true,
    featured: false
  },
  {
    id: "belpatra",
    name: "Bel Patra",
    category: "puja",
    price: 15,
    unit: "per bundle",
    icon: "belpatra",
    description: "Trifoliate bel leaves for the puja thali.",
    inStock: true,
    featured: false
  },
  {
    id: "rangoli-flowers",
    name: "Flower Rangoli Kit",
    category: "decor",
    price: 250,
    unit: "per kit (serves 2x2 ft)",
    icon: "rangoli",
    description: "Sorted petals in five colours, ready to lay out.",
    inStock: true,
    featured: false
  },
  {
    id: "mandap-toran",
    name: "Marigold Toran",
    category: "decor",
    price: 90,
    unit: "per toran (door hanging)",
    icon: "leaf",
    description: "Marigold and mango-leaf toran for the entrance.",
    inStock: true,
    featured: false
  }
];
