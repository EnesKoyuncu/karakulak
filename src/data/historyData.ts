// data/historyData.ts
export interface IHistoryTexts {
  title: {
    tr: string;
    en: string;
  };
  sections: {
    history: {
      mainText: {
        tr: string;
        en: string;
      };
    };
    facility: {
      title: {
        tr: string;
        en: string;
      };
      description: {
        tr: string;
        en: string;
      };
    };
    quality: {
      title: {
        tr: string;
        en: string;
      };
      description: {
        tr: string;
        en: string;
      };
    };
    customer: {
      description: {
        tr: string;
        en: string;
      };
    };
  };
  seo: {
    title: {
      tr: string;
      en: string;
    };
    description: {
      tr: string;
      en: string;
    };
    keywords: {
      tr: string;
      en: string;
    };
  };
}

export const historyTexts: IHistoryTexts = {
  title: {
    tr: "TARİHÇE",
    en: "History of Karakulak",
  },
  sections: {
    history: {
      mainText: {
        tr: "Şirketimiz, 1998 yılında belediye ve özel sektör kuruluşlarına yönelik araç üstü ekipman üretimi amacıyla kurulmuştur.",
        en: "Our company was established in 1998 to produce upper equipment for municipalities and private sector organizations.",
      },
    },
    facility: {
      title: {
        tr: "Üretim Tesisimiz",
        en: "Our Production Facility",
      },
      description: {
        tr: "Yenmiş Fabrika Yolu Küme evler No:31 Kemalpaşa Organize Sanayi Bölgesi'ndeki modern tesisimizde, ISO9001:2000 ve CE kalite standartlarında, alanında uzman personeliyle üretim yapmaktayız.",
        en: "In our modern facility located at Yenmiş Factory Road Cluster Houses No: 31 Kemalpaşa Organized Industrial Zone, we produce with expert personnel in ISO9001:2000 and CE quality standards.",
      },
    },
    quality: {
      title: {
        tr: "Kalite Anlayışımız",
        en: "Our Understanding of Quality",
      },
      description: {
        tr: "Belediyelerimiz ve değerli halkımızın hizmetinde, güvenilir, çevre dostu ve üstün hizmet anlayışına dayalı faaliyet göstermekteyiz. Ürünlerimiz, hizmet kalitesini yükseltmek amacıyla özenle tasarlanmaktadır.",
        en: "We operate based on a reliable, environmentally friendly, and superior service understanding in the service of our municipalities and valuable people. Our products are carefully designed to improve service quality.",
      },
    },
    customer: {
      description: {
        tr: "AYALKA olarak, müşterilerimize en kaliteli ürünleri, en uygun ödeme koşullarıyla sunmaktayız. Bizimle çalışan değerli müşterilerimiz, uygun fiyatlar ve üstün hizmet anlayışıyla her alanda AYALKA ayrıcalıklarını yaşamaktadır.",
        en: "As AYALKA, we offer our customers the highest quality products with the most suitable payment terms. Our valuable customers working with us experience AYALKA privileges in every field with affordable prices and superior service understanding.",
      },
    },
  },
  seo: {
    title: {
      tr: "Tarihçe | Ayalka Makina",
      en: "History | Ayalka Makina",
    },
    description: {
      tr: "1998'den günümüze Ayalka Makina'nın kuruluş ve gelişim hikayesi. ISO9001:2000 ve CE kalite standartlarında üretim yapan modern tesisimiz ve kalite anlayışımız hakkında bilgi edinin.",
      en: "From 1998 to the present, the story of Ayalka Makina's establishment and development. Learn about our modern facility producing under ISO9001:2000 and CE quality standards and our understanding of quality.",
    },
    keywords: {
      tr: "ayalka tarihçe, ayalka kuruluş, ayalka makina tarihi, ayalka üretim tesisi, ayalka kalite standartları, kemalpaşa organize sanayi",
      en: "ayalka history, ayalka establishment, ayalka machinery history, ayalka production facility, ayalka quality standards, kemalpaşa organized industrial zone",
    },
  },
};
