/* ============================================================
   PRODUCT CATALOG
   Add, remove, or edit products by editing the array below.

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
   using exactly the filenames referenced below. If a file is missing,
   the site automatically falls back to a drawn icon so nothing breaks.
   Recommended: square-ish photos, at least 500x500px, under 300KB each.
   ============================================================ */

const CATEGORIES = [
  { id: "garlands", label: "Garlands" },
  { id: "loose", label: "Loose Flowers" },
  { id: "puja", label: "Puja Essentials" },
  { id: "decor", label: "Decoration" },
];

/* Available icon keys (fallback only): marigold, rose, lotus, durva, belpatra, mala, rangoli, leaf */

const PRODUCTS = [
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
];
