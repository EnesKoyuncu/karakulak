interface ITranslation {
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  headerTitle: string;
  service1: {
    title: string;
    description: string;
  };
  service2: {
    title: string;
    description: string;
    note: string;
  };
  service3: {
    title: string;
    description: string;
  };
}

export interface ITranslationsLanguageSupport {
  tr: ITranslation;
  en: ITranslation;
}
export const translations: ITranslationsLanguageSupport = {
  tr: {
    seo: {
      title: "Satış Sonrası Hizmetler | Karakulak Group Müşteri Memnuniyeti",
      description:
        "Karakulak Group olarak satış sonrası servis, garanti ve müşteri hizmetleri. Profesyonel servis ekibimiz ve yedek parça desteğimiz ile yanınızdayız. Baştan sona her aşamada müşteri memnuniyetini ön planda tutuyoruz. Hizmetlerimiz hakkında detaylı bilgi almak için iletişim sayfamızdaki iletişim bilgilerinden bize ulaşabilirsiniz.",
      keywords: [
        "karakulak hizmetleri",
        "karakulak group hizmetleri",
        "karakulak group satış sonrası hizmetleri",
        "karakulak satış sonrası hizmetleri",
        "araç üstü ekipman hizmetleri",
        "araç üstü ekipman satış sonrası hizmet",
        "karakulak araç üstü ekipman hizmetleri",
        "karakulak grup araç üstü ekipman hizmetleri",
        "karakulak araç üstü ekipman satış sonrası hizmet",
        "çöp kamyonu hizmetleri",
        "çöp kamyonu satış sonrası hizmet",
        "karakulak çöp kamyonu hizmetleri",
        "karakulak grup çöp kamyonu hizmetleri",
        "karakulak çöp kamyonu satış sonrası hizmet",
        "karakulak group su tankeri hizmetleri",
        "karakulak su tankeri hizmetleri",
        "karakulak su tankeri satış sonrası hizmet",
        "karakulak group su tankeri satış sonrası hizmet",
        "satış sonrası hizmet",
        "servis hizmeti",
        "garanti",
        "yedek parça",
        "araç üstü ekipman yedek parça",
        "karakulak müşteri hizmetleri",
        "müşteri hizmetleri",
        "teknik destek",
        "teknik destek hizmeti",
        "karakulak teknik destek",
        "hooklift destek",
        "mini pack destek",
        "teleskopik platform destek",
        "itfaiye aracı destek",
        "vidanjör destek",
        "kanal açma aracı destek",
        "kanal temizleme aracı destek",
      ],
    },
    headerTitle: "Satış Sonrası Hizmetler",
    service1: {
      title: "SERVİS HİZMETLERİ",
      description:
        "Ayalka, müşteri memnuniyetini kaliteden ödün vermeden karşılamayı, satış sonrası servis ile müşteriye huzur vermeyi kalite politikası olarak benimsemiştir. Firmamız bünyesinde, yurt içi ve yurt dışına servis hizmeti veren tam donanımlı uzman kadromuz, müşterilerimizin sorunlarını çözebilmek için hizmetinizdedir.",
    },
    service2: {
      title: "GARANTİ",
      description:
        "Ürettiğimiz ürünler, kullanım ve kullanıcı hataları hariç, imalat ve montaj hatalarına karşı bir yıl süre ile garantilidir.",
      note: "Yedek parça desteği: Ayalka, ürettiği her ürün için yedek parça temini desteğini müşterilerine taahhüt etmektedir.",
    },
    service3: {
      title: "MÜŞTERİ ŞİKAYET VE ÖNERİLERİ",
      description:
        "Ürünlerimizi, müşterilerimizin ihtiyaç ve beklentilerine göre geliştirmek için; şikayet ve önerilerinizi dikkatle değerlendiriyor ve sürekli iyileştirme çalışmalarımızda istatistiksel veri olarak kullanıyoruz.",
    },
  },
  en: {
    seo: {
      title: "After-Sales Services | Karakulak Group Customer Satisfaction",
      description:
        "As Karakulak Group, we provide after-sales services, warranties, and customer support. We are with you with our professional service team and spare parts support. We prioritize customer satisfaction at every stage from start to finish. For detailed information about our services, you can reach us through the contact information on our contact page.",
      keywords: [
        "karakulak services",
        "karakulak group services",
        "karakulak group after-sales services",
        "karakulak after-sales services",
        "vehicle-mounted equipment services",
        "vehicle-mounted equipment after-sales service",
        "karakulak vehicle-mounted equipment services",
        "karakulak group vehicle-mounted equipment services",
        "karakulak vehicle-mounted equipment after-sales service",
        "garbage truck services",
        "garbage truck after-sales service",
        "karakulak garbage truck services",
        "karakulak group garbage truck services",
        "karakulak garbage truck after-sales service",
        "karakulak group water tanker services",
        "karakulak water tanker services",
        "karakulak water tanker after-sales service",
        "karakulak group water tanker after-sales service",
        "after-sales service",
        "service support",
        "warranty",
        "spare parts",
        "vehicle-mounted equipment spare parts",
        "karakulak customer services",
        "customer services",
        "technical support",
        "technical support service",
        "karakulak technical support",
        "hooklift support",
        "mini pack support",
        "telescopic platform support",
        "fire truck support",
        "vacuum truck support",
        "trenching vehicle support",
        "channel cleaning vehicle support",
      ],
    },
    headerTitle: "After-Sales Services",
    service1: {
      title: "SERVICE SUPPORT",
      description:
        "Ayalka is committed to ensuring customer satisfaction without compromising quality by providing after-sales service that brings peace of mind. Our fully equipped expert service team, offering both domestic and international support, is at your service to resolve any issues.",
    },
    service2: {
      title: "WARRANTY",
      description:
        "Our products are guaranteed for one year against manufacturing and installation defects, excluding user errors.",
      note: "Spare parts support: Ayalka provides spare parts supply support for every product it manufactures.",
    },
    service3: {
      title: "CUSTOMER COMPLAINTS & SUGGESTIONS",
      description:
        "We carefully consider your complaints and suggestions to continuously improve our products according to your needs and expectations.",
    },
  },
};
