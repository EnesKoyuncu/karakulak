export interface ISlideContent {
  image: string;
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
}

export const slides: ISlideContent[] = [
  {
    image: "/images/slider/slider1.webp",
    title: {
      tr: "Türkiye'nin Lider Araç Üstü Ekipman Üreticisi",
      en: "Turkey's Leading Vehicle Mounted Equipment Manufacturer",
    },
    description: {
      tr: "Çöp kasası, su tankeri, vidanjör, hooklift ve diğer araç üstü ekipmanlar",
      en: "Garbage truck, water tanker, vacuum truck, hooklift and more",
    },
  },
  {
    image: "/images/slider/slider5.webp",
    title: {
      tr: "Global Pazarda Güçlü Bir Marka",
      en: "A Strong Brand in the Global Market",
    },
    description: {
      tr: "50'den fazla ülkeye ihracat yapan güvenilir çözüm ortağınız",
      en: "Your reliable solution partner exporting to more than 50 countries",
    },
  },

  {
    image: "/images/slider/slider4.webp",
    title: {
      tr: "Yenilikçi Teknolojiler",
      en: "Innovative Technologies",
    },
    description: {
      tr: "Modern üretim tesislerimizde en son teknolojilerle üretim",
      en: "Production with the latest technologies in our modern production facilities",
    },
  },
];
