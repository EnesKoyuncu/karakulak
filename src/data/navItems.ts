export interface MenuItem {
  title: {
    tr: string;
    en: string;
  };
  link?: string;
  id?: string;
  category?: string;
  submenu?: MenuItem[];
}

export const navItems: MenuItem[] = [
  {
    title: {
      tr: "Anasayfa",
      en: "Homepage",
    },
    link: "/",
  },
  {
    title: {
      tr: "Kurumsal",
      en: "Corporate",
    },
    submenu: [
      {
        title: {
          tr: "Yönetim Kurulu Başkanı",
          en: "Chairman of the Board",
        },
        link: "/chairman-of-the-board",
      },
      {
        title: {
          tr: "Tarihçe",
          en: "History",
        },
        link: "/history",
      },
      {
        title: {
          tr: "İhracat Ağı",
          en: "Export Network",
        },
        link: "/export-network",
      },
    ],
  },
  {
    title: {
      tr: "Ürünler",
      en: "Products",
    },
    submenu: [
      {
        title: {
          tr: "Çöp Kamyonu - Hidrolik Sıkıştırmalı Çöp Kasası",
          en: "Garbage Truck - Hydraulic Compactor Garbage",
        },
        id: "garbage-truck",
        category: "garbage-truck",
      },
      {
        title: {
          tr: "Mini Pack",
          en: "Mini Pack",
        },
        id: "mini-pack",
        category: "mini-pack",
      },
      {
        title: {
          tr: "Su Tankeri",
          en: "Water Tank",
        },
        id: "water-tank",
        category: "water-tank",
      },
      {
        title: {
          tr: "Vidanjör",
          en: "Vacuum Truck",
        },
        id: "vacuum-truck",
        category: "vacuum-truck",
      },
      {
        title: {
          tr: "Hooklift",
          en: "Hooklift",
        },
        id: "hooklift",
        category: "hooklift",
      },
      {
        title: {
          tr: "Skip Loader | Hidrolift",
          en: "Skip Loader | Hidrolift",
        },
        id: "skip-loader",
        category: "skip-loader",
      },
      {
        title: {
          tr: "Yandan Yüklemeli Çöp Kasası",
          en: "Side Loading Garbage",
        },
        id: "side-loading-garbage",
        category: "side-loading-garbage",
      },
      {
        title: {
          tr: "Teleskopik Platform",
          en: "Telescopic Platform",
        },
        id: "telescopic-platform",
        category: "telescopic-platform",
      },
      {
        title: {
          tr: "Kanal Açma",
          en: "Canal Jetting",
        },
        id: "canal-jetting",
        category: "canal-jetting",
      },
      {
        title: {
          tr: "Yol Süpürme",
          en: "Road Sweeper",
        },
        id: "road-sweeper",
        category: "road-sweeper",
      },
      {
        title: {
          tr: "İtfaiye",
          en: "Fire Truck",
        },
        id: "fire-truck",
        category: "fire-truck",
      },
      {
        title: {
          tr: "İtfaiye Damper",
          en: "Tipper Truck",
        },
        id: "tipper-truck",
        category: "tipper-truck",
      },
      {
        title: {
          tr: "Monoblok Çöp Kamyonu",
          en: "Monoblock Garbage Truck",
        },
        id: "monoblock-garbage",
        category: "monoblock-garbage",
      },
      {
        title: {
          tr: "Konteyner Yıkama",
          en: "Container Washer",
        },
        id: "container-washer",
        category: "container-washer",
      },
      {
        title: {
          tr: "Semi Treyler",
          en: "Semi Trailer",
        },
        id: "semi-trailer",
        category: "semi-trailer",
      },
    ],
  },
  {
    title: {
      tr: "Basın Kiti",
      en: "Press Kit",
    },
    link: "/press-kit",
  },
  {
    title: {
      tr: "Galeri",
      en: "Gallery",
    },
    link: "/gallery",
  },
  {
    title: {
      tr: "Satış Sonrası Hizmetler",
      en: "After Sales Services",
    },
    link: "/after-sales-services",
  },
  {
    title: {
      tr: "İletişim",
      en: "Contact",
    },
    link: "/contact",
  },
];
