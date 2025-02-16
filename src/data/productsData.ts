// ! Product type and products data
export interface IProduct {
  id: number;
  name: {
    tr: string;
    en: string;
  };
  category: {
    tr: string;
    en: string;
  };
  image: string;
  description: {
    tr: string;
    en: string;
  };
  routeCategory?: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    name: {
      tr: "Çöp Kamyonu - Hidrolik Sıkıştırmalı Çöp Kasası",
      en: "Garbage Truck - Hydraulic Compactor",
    },
    category: {
      tr: "Atık Yönetimi",
      en: "Waste Management",
    },
    image: "/images/products/cop-kamyonu.webp",
    description: {
      tr: "Yüksek kapasiteli hidrolik sıkıştırma sistemi",
      en: "High capacity hydraulic compaction system",
    },
    routeCategory: "garbage-truck",
  },
  {
    id: 2,
    name: {
      tr: "Mini Pack",
      en: "Mini Pack",
    },
    category: {
      tr: "Atık Yönetimi",
      en: "Waste Management",
    },
    image: "/images/products/mini-pack.webp",
    description: {
      tr: "Kompakt boyutlu atık toplama çözümü",
      en: "Compact waste collection solution",
    },
    routeCategory: "mini-pack",
  },
  {
    id: 3,
    name: {
      tr: "Su Tankeri",
      en: "Water Tanker",
    },
    category: {
      tr: "Su Sistemleri",
      en: "Water Systems",
    },
    image: "/images/products/su-tankeri.webp",
    description: {
      tr: "Yüksek kapasiteli su taşıma ve püskürtme sistemi",
      en: "High capacity water transport and spraying system",
    },
    routeCategory: "water-tank",
  },
  {
    id: 4,
    name: {
      tr: "Vidanjör",
      en: "Vacuum Truck",
    },
    category: {
      tr: "Su Sistemleri",
      en: "Water Systems",
    },
    image: "/images/products/vidanjor.webp",
    description: {
      tr: "Profesyonel atık su ve kanalizasyon temizleme aracı",
      en: "Professional waste water and sewage cleaning vehicle",
    },
    routeCategory: "vacuum-truck",
  },
  {
    id: 5,
    name: {
      tr: "Hooklift",
      en: "Hooklift",
    },
    category: {
      tr: "Yükleme Sistemleri",
      en: "Loading Systems",
    },
    image: "/images/products/hooklift.webp",
    description: {
      tr: "Çok amaçlı kanca yükleme sistemi",
      en: "Multi-purpose hook loading system",
    },
    routeCategory: "hooklift",
  },
  {
    id: 6,
    name: {
      tr: "Skip Loader | Hidrolift",
      en: "Skip Loader | Hidrolift",
    },
    category: {
      tr: "Yükleme Sistemleri",
      en: "Loading Systems",
    },
    image: "/images/products/skip-loader.webp",
    description: {
      tr: "Konteyner taşıma ve boşaltma sistemi",
      en: "Container transport and unloading system",
    },
    routeCategory: "skip-loader",
  },
  {
    id: 7,
    name: {
      tr: "Teleskopik Platform",
      en: "Telescopic Platform",
    },
    category: {
      tr: "Platform Sistemleri",
      en: "Platform Systems",
    },
    image: "/images/products/teleskopik-platform.webp",
    description: {
      tr: "Yüksek erişimli çalışma platformu",
      en: "High access working platform",
    },
    routeCategory: "telescopic-platform",
  },
  {
    id: 8,
    name: {
      tr: "Kanal Açma",
      en: "Canal Jetting",
    },
    category: {
      tr: "Su Sistemleri",
      en: "Water Systems",
    },
    image: "/images/products/kanal-acma.webp",
    description: {
      tr: "Profesyonel kanal açma ve temizleme aracı",
      en: "Professional canal opening and cleaning vehicle",
    },
    routeCategory: "canal-jetting",
  },
  {
    id: 9,
    name: {
      tr: "Yol Süpürme",
      en: "Road Sweeper",
    },
    category: {
      tr: "Yükleme Sistemleri",
      en: "Loading Systems",
    },
    image: "/images/products/yol-supurme.webp",
    description: {
      tr: "Profesyonel yol süpürme aracı",
      en: "Professional road sweeper vehicle",
    },
    routeCategory: "road-sweeper",
  },
  {
    id: 10,
    name: {
      tr: "İtfaiye",
      en: "Fire Truck",
    },
    category: {
      tr: "Tümü",
      en: "All",
    },
    image: "/images/products/itfaiye.webp",
    description: {
      tr: "Profesyonel itfaiye aracı",
      en: "Professional fire truck",
    },
    routeCategory: "fire-truck",
  },
  {
    id: 11,
    name: {
      tr: "İtfaiye Damper",
      en: "Fire Truck Tipper",
    },
    category: {
      tr: "Tümü",
      en: "All",
    },
    image: "/images/products/itfaiye-damper.webp",
    description: {
      tr: "Profesyonel itfaiye damper sistemi",
      en: "Professional fire truck tipper system",
    },
    routeCategory: "tipper-truck",
  },
  {
    id: 12,
    name: {
      tr: "Monoblok Çöp Kamyonu",
      en: "Monoblock Garbage Truck",
    },
    category: {
      tr: "Tümü",
      en: "All",
    },
    image: "/images/products/monoblok-cop-kamyonu.webp",
    description: {
      tr: "Monoblok çöp kamyonu sistemi",
      en: "Monoblock garbage truck system",
    },
    routeCategory: "monoblock-garbage",
  },
  {
    id: 13,
    name: {
      tr: "Konteyner Yıkama",
      en: "Container Washer",
    },
    category: {
      tr: "Tümü",
      en: "All",
    },
    image: "/images/products/konteyner-yikama.webp",
    description: {
      tr: "Profesyonel konteyner yıkama sistemi",
      en: "Professional container washing system",
    },
    routeCategory: "container-washer",
  },
  {
    id: 14,
    name: {
      tr: "Semi Treyler",
      en: "Semi Trailer",
    },
    category: {
      tr: "Tümü",
      en: "All",
    },
    image: "/images/products/semi-treyler.webp",
    description: {
      tr: "Profesyonel semi treyler sistemleri",
      en: "Professional semi trailer systems",
    },
    routeCategory: "semi-trailer",
  },
];

// ! Category types and category data
export interface ICategories {
  tr: string[];
  en: string[];
}

export const categories: ICategories = {
  tr: [
    "Tümü",
    "Atık Yönetimi",
    "Su Sistemleri",
    "Yükleme Sistemleri",
    "Platform Sistemleri",
  ],
  en: [
    "All",
    "Waste Management",
    "Water Systems",
    "Loading Systems",
    "Platform Systems",
  ],
};
