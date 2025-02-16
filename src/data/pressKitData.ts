// ! Çeviri Kısmı
export interface SEO {
  title: string;
  description: string;
  keywords: string;
}

export interface SocialMedia {
  title: string;
  description: string;
  followLabel?: string; // Optional çünkü Facebook ve LinkedIn'de yok
  likeLabel?: string; // Optional çünkü Instagram ve LinkedIn'de yok
  connectLabel?: string; // Optional çünkü Instagram ve Facebook'ta yok
  previewAriaLabel?: string; // Optional çünkü Facebook ve LinkedIn'de yok
}

export interface ITranslation {
  seo: SEO;
  headerTitle: string;
  mainAriaLabel: string;
  gridAriaLabel: string;
  downloadLabel: string;
  downloadAriaLabel: (title: string) => string; // Fonksiyon tipi
  fileTypeAriaLabel: (type: string) => string; // Fonksiyon tipi
  socialMediaAriaLabel: string;
  instagram: SocialMedia;
  facebook: SocialMedia;
  linkedin: SocialMedia;
}

export interface ITranslationsLanguageSupport {
  tr: ITranslation;
  en: ITranslation;
}

export const translations: ITranslationsLanguageSupport = {
  tr: {
    seo: {
      title: "Basın Kiti | Karakulak Makina",
      description:
        "Karakulak Makina kurumsal kimlik öğeleri, logolar, sosyal medya hesapları ve basın materyalleri. Markamızla ilgili tüm medya kaynaklarına buradan ulaşabilirsiniz.",
      keywords:
        "karakulak basın kiti, karakulak logo, karakulak kurumsal kimlik, karakulak sosyal medya, karakulak makina kurumsal",
    },
    headerTitle: "BASIN KİTİ",
    mainAriaLabel: "Basın Kiti İçeriği",
    gridAriaLabel: "Kurumsal Logolar ve İndirilebilir Materyaller",
    downloadLabel: "İNDİR",
    downloadAriaLabel: (title: string) => `${title} dosyasını indir`,
    fileTypeAriaLabel: (type: string) => `Dosya tipi: ${type.toUpperCase()}`,
    socialMediaAriaLabel: "Sosyal Medya Platformları",
    instagram: {
      title: "Instagram",
      description: "Araçlarımızın görsellerini takip edebilirsiniz",
      followLabel: "Takip Et",
      previewAriaLabel: "Instagram Önizleme Görselleri",
    },
    facebook: {
      title: "Facebook",
      description: "En son haberler ve güncellemeler için",
      likeLabel: "Sayfamızı Beğen",
    },
    linkedin: {
      title: "LinkedIn",
      description: "Kurumsal haberler ve iş fırsatları",
      connectLabel: "Bağlantı Kur",
    },
  },
  en: {
    seo: {
      title: "Press Kit | Karakulak Makina",
      description:
        "Karakulak Makina corporate identity assets, logos, social media accounts and press materials. Access all our media resources here.",
      keywords:
        "karakulak press kit, karakulak logo, karakulak corporate identity, karakulak social media, karakulak makina corporate",
    },
    headerTitle: "PRESS KIT",
    mainAriaLabel: "Press Kit Content",
    gridAriaLabel: "Corporate Logos and Downloadable Materials",
    downloadLabel: "DOWNLOAD",
    downloadAriaLabel: (title: string) => `${title} download`,
    fileTypeAriaLabel: (type: string) => `File type: ${type.toUpperCase()}`,
    socialMediaAriaLabel: "Social Media Platforms",
    instagram: {
      title: "Instagram",
      description: "Follow our vehicle visuals",
      followLabel: "Follow",
      previewAriaLabel: "Instagram Preview Images",
    },
    facebook: {
      title: "Facebook",
      description: "For the latest news and updates",
      likeLabel: "Like our Page",
    },
    linkedin: {
      title: "LinkedIn",
      description: "Corporate news and job opportunities",
      connectLabel: "Connect",
    },
  },
};

// ! Data Kısmı

export interface IPressKitItem {
  id: number;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  fileUrl: string;
  type: "png" | "pdf";
  preview: string;
}

export const pressKitItems: IPressKitItem[] = [
  {
    id: 1,
    title: { tr: "LOGO", en: "LOGO" },
    description: {
      tr: "Karakulak kurumsal logosu (PNG)",
      en: "Karakulak corporate logo (PNG)",
    },
    fileUrl: "/press-kit/ayalka-logo.png",
    type: "png",
    preview:
      "https://ayalka.com.tr/wp-content/uploads/2019/02/cropped-ayalkaufak.png",
  },
  {
    id: 2,
    title: { tr: "LOGO SADE", en: "SIMPLE LOGO" },
    description: {
      tr: "Karakulak sade logo versiyonu (PNG)",
      en: "Karakulak simple logo version (PNG)",
    },
    fileUrl: "/press-kit/ayalka-logo-simple.png",
    type: "png",
    preview:
      "https://ayalka.com.tr/wp-content/uploads/2019/02/cropped-ayalkaufak.png",
  },
  {
    id: 3,
    title: { tr: "LOGO PDF", en: "LOGO PDF" },
    description: {
      tr: "Karakulak vektörel logo (PDF)",
      en: "Karakulak vector logo (PDF)",
    },
    fileUrl: "/press-kit/ayalka-logo-vector.pdf",
    type: "pdf",
    preview:
      "https://ayalka.com.tr/wp-content/uploads/2019/02/cropped-ayalkaufak.png",
  },
];
