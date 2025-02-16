export interface GalleryImage {
  src: string;
  category: string;
  alt: { tr: string; en: string };
  loaded: boolean;
}

export interface InterfaceSEO {
  title: string;
  description: string;
  keywords: string;
}

export interface ITranslation {
  seo: InterfaceSEO;
  mainAriaLabel: string;
  headerTitle: string;
  categoryFilterAriaLabel: string;
  allCategory: string;
  enlargeText: string;
}

export interface ITranslationsLanguageSupport {
  tr: ITranslation;
  en: ITranslation;
}

// Çeviri sözlüğü: SEO, başlık, kategori filtreleri, overlay metni ve aria-label’lar
export const translations: ITranslationsLanguageSupport = {
  tr: {
    seo: {
      title: "Galeri | Ayalka Makina",
      description:
        "Ayalka Makina ürün galerisi. Çöp kasaları, su tankerleri ve diğer araç üstü ekipmanlarımızın fotoğraflarını inceleyin.",
      keywords:
        "ayalka galeri, ürün görselleri, çöp kasası görselleri, su tankeri görselleri",
    },
    mainAriaLabel: "Ürün Galerisi",
    headerTitle: "Galeri",
    categoryFilterAriaLabel: "Galeri Kategorileri",
    allCategory: "Tümü",
    enlargeText: "Büyütmek için tıklayın",
  },
  en: {
    seo: {
      title: "Gallery | Ayalka Makina",
      description:
        "Ayalka Makina product gallery. Browse photos of garbage compactor bodies, water tankers, and other equipment.",
      keywords:
        "ayalka gallery, product images, garbage compactor images, water tanker images",
    },
    mainAriaLabel: "Product Gallery",
    headerTitle: "Gallery",
    categoryFilterAriaLabel: "Gallery Categories",
    allCategory: "All",
    enlargeText: "Click to enlarge",
  },
};
