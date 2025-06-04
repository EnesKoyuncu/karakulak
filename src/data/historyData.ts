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
};

interface IseoTexts {
  title: string;
  description: string;
  keywords: string[];
}

export interface IseoTextsLanguageSupport {
  tr: IseoTexts;
  en: IseoTexts;
}

export const seoTexts: IseoTextsLanguageSupport = {
  tr: {
    title: "Tarihçe | Karakulak Group Geçmişten Bugüne Tarihçe Sayfası",
    description:
      "1998'den günümüze Karakulak Group'un kuruluş ve gelişim hikayesi. ISO9001:2000 ve CE kalite standartlarında üretim yapan modern tesisimiz, vizyonumuz, geleceğe yönelik planlarımız ve  kalite anlayışımız hakkında bilgi edinin. Daha fazlası için iletişim sayfasında bulunan iletişim bilgilerimizden bize ulaşabilirsiniz.",
    keywords: [
      "garbage truck",
      "garbagetruck",
      "karakulak tarihçe",
      "karakulak group tarihçe",
      "karakulak kuruluş",
      "karakulak group kuruluş",
      "karakulak tarihi",
      "karakulak group tarihi",
      "karakulak üretim tesisi",
      "karakulak group üretim tesisi",
      "karakulak kalite standartları",
      "karakulak group kalite standartları",
      "geçmişten bugüne karakulak",
      "geçmişten bugüne karakulak group",
      "araç üstü ekipman tarihçe",
      "araç üstü ekipman kuruluş",
      "araç üstü ekipman tarihi",
      "araç üstü ekipman üretim tesisi",
    ],
  },
  en: {
    title: "History | Karakulak Group From Past to Present History Page",
    description:
      "The story of Karakulak Group's establishment and development from 1998 to the present. Learn about our modern facility producing with ISO9001:2000 and CE quality standards, our vision, future plans, and our approach to quality. For more information, you can reach us through the contact details on our contact page.",
    keywords: [
      "garbage truck",
      "garbagetruck",
      "karakulak history",
      "karakulak group history",
      "karakulak establishment",
      "karakulak group establishment",
      "karakulak historical",
      "karakulak group historical",
      "karakulak production facility",
      "karakulak group production facility",
      "karakulak quality standards",
      "karakulak group quality standards",
      "karakulak from past to present",
      "karakulak group from past to present",
      "vehicle-mounted equipment history",
      "vehicle-mounted equipment establishment",
      "vehicle-mounted equipment historical",
      "vehicle-mounted equipment production facility",
    ],
  },
};
