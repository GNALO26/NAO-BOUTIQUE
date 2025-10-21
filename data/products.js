export const products = [
  {
    id: 1,
    name: "PC Gamer Elite RTX 4080",
    slug: "pc-gamer-elite-rtx-4080",
    price: 1250000,
    oldPrice: 1450000,
    category: "pc-gamer",
    images: [
      "/images/products/pc-gamer-1/photo-avant.jpg",
      "/images/products/pc-gamer-1/photo-arriere.jpg",
      "/images/products/pc-gamer-1/photo-cote.jpg",
      "/images/products/pc-gamer-1/interieur.jpg"
    ],
    features: [
      "Processeur Intel Core i9-13900K (24 cœurs, 5.8 GHz Max Turbo)",
      "Carte graphique NVIDIA GeForce RTX 4080 16GB GDDR6X",
      "32GB RAM DDR5 5600MHz (2x16GB)",
      "2TB SSD NVMe Gen4 (Lecture 7000MB/s)",
      "Alimentation 850W 80+ Gold Modulaire",
      "Watercooling CPU 240mm RGB"
    ],
    description: "PC Gamer ultime pour les joueurs et créateurs exigeants. Configuration haut de gamme garantissant des performances exceptionnelles dans les jeux les plus récents en 4K.",
    specifications: {
      "Processeur": "Intel Core i9-13900K",
      "Carte graphique": "NVIDIA GeForce RTX 4080 16GB",
      "Mémoire": "32GB DDR5 5600MHz",
      "Stockage": "2TB NVMe SSD + 2TB HDD",
      "Alimentation": "850W 80+ Gold",
      "Connectivité": "WiFi 6E, Bluetooth 5.2",
      "Ports": "USB 3.2, Thunderbolt 4, HDMI 2.1"
    },
    rating: 4.8,
    reviewCount: 47,
    stock: 5,
    whatsapp: "0156035888",
    sku: "PCG-001-2024",
    tags: ["gaming", "rtx-4080", "intel-i9", "haut-de-gamme"]
  },
  {
    id: 2,
    name: "Laptop Gaming MSI Katana",
    slug: "laptop-gaming-msi-katana",
    price: 850000,
    category: "laptops",
    images: [
      "/images/products/laptop-1/face.jpg",
      "/images/products/laptop-1/dos.jpg",
      "/images/products/laptop-1/ouvert.jpg",
      "/images/products/laptop-1/clavier.jpg"
    ],
    features: [
      "Processeur Intel Core i7-13650H",
      "Carte graphique RTX 4060 8GB",
      "16GB RAM DDR5",
      "1TB SSD NVMe",
      "Écran 15.6\" FHD 144Hz",
      "Clavier RGB rétroéclairé"
    ],
    description: "Laptop gaming performant et portable. Idéal pour le gaming nomade et le travail créatif.",
    specifications: {
      "Processeur": "Intel Core i7-13650H",
      "Carte graphique": "NVIDIA GeForce RTX 4060 8GB",
      "Écran": "15.6\" FHD 144Hz",
      "Mémoire": "16GB DDR5",
      "Stockage": "1TB SSD NVMe",
      "Batterie": "4 cellules, 65Wh",
      "Poids": "2.2 kg"
    },
    rating: 4.6,
    reviewCount: 23,
    stock: 8,
    whatsapp: "0156035888",
    sku: "LAP-002-2024",
    tags: ["laptop", "gaming", "portable", "msi"]
  }
]

export const categories = [
  {
    slug: "pc-gamer",
    name: "PC Gamer",
    description: "Configurations gaming hautes performances",
    image: "/images/categories/pc-gamer.jpg",
    productCount: 15
  },
  {
    slug: "laptops",
    name: "Laptops",
    description: "Ordinateurs portables gaming et professionnels",
    image: "/images/categories/laptops.jpg",
    productCount: 12
  },
  {
    slug: "pc-bureau",
    name: "PC de Bureau",
    description: "Ordinateurs de bureau pour tous les usages",
    image: "/images/categories/pc-bureau.jpg",
    productCount: 20
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    description: "Périphériques et composants informatiques",
    image: "/images/categories/accessoires.jpg",
    productCount: 50
  }
]