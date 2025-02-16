interface ITranslation {
  seo: {
    title: string;
    description: string;
    keywords: string;
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
      title: "Satış Sonrası Hizmetler | Ayalka Makina",
      description:
        "Ayalka Makina satış sonrası servis, garanti ve müşteri hizmetleri. Profesyonel servis ekibimiz ve yedek parça desteğimiz ile yanınızdayız.",
      keywords:
        "satış sonrası hizmet, servis hizmeti, garanti, yedek parça, müşteri hizmetleri, teknik destek",
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
      title: "After-Sales Services | Ayalka Makina",
      description:
        "Ayalka Makina after-sales service, warranty, and customer support. Our professional service team and spare parts support are at your service.",
      keywords:
        "after-sales services, service support, warranty, spare parts, customer support, technical assistance",
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
