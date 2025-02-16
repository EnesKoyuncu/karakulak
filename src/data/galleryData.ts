export interface GalleryImage {
  src: string;
  category: string;
  alt: { tr: string; en: string };
  loaded: boolean;
}

export interface InterfaceSEO {
  title: string;
  description: string;
  keywords: string[];
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
      title: "Galeri | Karakulak Group Ürün Galeri Sayfası.",
      description:
        "Bu sayfa Karakulak Group'un ürünlerinin galeri olarak tasarlanmış bir sayfasıdır. Çöp kasaları, su tankerleri, hooklift ve diğer birçok araç üstü ekipmanlarımızın fotoğraflarını inceleyin. Araçlar hakkında daha detaylı bilgi almak için iletişim sayfamızda bulunan iletişim bilgilerimizden bize ulaşabilirsiniz.",
      keywords: [
        "karakulak galeri",
        "karakulak group galeri",
        "karakulak group ürünler galerisi",
        "karakulak ürünler galerisi",
        "karakulak ürünler görselleri",
        "karakulak group ürünler görselleri",
        "çöp kasası ürünleri",
        "çöp kasası görselleri",
        "su tankeri ürünleri",
        "su tankeri görselleri",
        "hooklift ürünleri",
        "hooklift görselleri",
        "araç üstü ekipmanlar",
        "araç üstü ekipmanlar görselleri",
        "ürün görselleri",
      ],
    },
    mainAriaLabel: "Ürün Galerisi",
    headerTitle: "Galeri",
    categoryFilterAriaLabel: "Galeri Kategorileri",
    allCategory: "Tümü",
    enlargeText: "Büyütmek için tıklayın",
  },
  en: {
    seo: {
      title: "Gallery | Karakulak Group Product Gallery Page.",
      description:
        "This page is a gallery designed for the products of Karakulak Group. Explore the photos of our garbage containers, water tankers, hooklifts, and many other vehicle-mounted equipment. For more detailed information about the vehicles, you can reach us through the contact information on our contact page.",
      keywords: [
        "karakulak gallery",
        "karakulak group gallery",
        "karakulak group products gallery",
        "karakulak products gallery",
        "karakulak products images",
        "karakulak group products images",
        "garbage container products",
        "garbage container images",
        "water tanker products",
        "water tanker images",
        "hooklift products",
        "hooklift images",
        "vehicle-mounted equipment",
        "vehicle-mounted equipment images",
        "product images",
      ],
    },
    mainAriaLabel: "Product Gallery",
    headerTitle: "Gallery",
    categoryFilterAriaLabel: "Gallery Categories",
    allCategory: "All",
    enlargeText: "Click to enlarge",
  },
};
