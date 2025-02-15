import { FaEnvelope, FaPhone } from "react-icons/fa";

export interface ContactInfoProps {
  title: string;
  byWho?: string;
  info: {
    href: string;
    icon: React.ComponentType;
    text: string;
    target?: string;
  }[];
}

export interface ITranslation {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    bgAlt: string;
    title: string;
  };
  contactInfo: {
    generalManager: string;
    exportManager: string;
    generalManagerAssistant: string;
    accounting: string;
    generalManagerInfo: {
      href: string;
      icon: React.ComponentType;
      text: string;
    }[];
    exportManagerInfo: {
      href: string;
      icon: React.ComponentType;
      text: string;
    }[];
    generalManagerAssistantInfo: {
      href: string;
      icon: React.ComponentType;
      text: string;
    }[];
    accountingInfo: {
      href: string;
      icon: React.ComponentType;
      text: string;
    }[];
  };
  map: {
    officeTitle: string;
    address: string;
    contactItems: {
      phone1: string;
      phone2: string;
      phone3: string;
      phone4: string;
      email: string;
    };
    consentMessage: string;
    consentButton: string;
  };
  mainAriaLabel: string;
}

export interface ITranslationLanguageSupport {
  tr: ITranslation;
  en: ITranslation;
}

export const translations: ITranslationLanguageSupport = {
  tr: {
    seo: {
      title: "İletişim | Ayalka Makina",
      description:
        "Ayalka Makina ile iletişime geçin. Adres: İzmir Kemalpaşa OSB, Telefon: +90-532-683-0891. Araç üstü ekipman üretimi hakkında bilgi almak için bize ulaşın.",
      keywords:
        "ayalka iletişim, ayalka makina iletişim, ayalka telefon, ayalka adres, ayalka makina konum",
    },
    hero: {
      bgAlt: "İletişim sayfası arka plan görseli",
      title: "İLETİŞİM",
    },
    contactInfo: {
      generalManager: "GENEL MÜDÜR",
      exportManager: "İHRACAT MÜDÜRÜ",
      generalManagerAssistant: "GENEL MÜDÜR YARDIMCISI",
      accounting: "MUHASEBE",
      generalManagerInfo: [
        {
          href: "mailto:info@ayalka.com.tr",
          icon: FaEnvelope,
          text: "info@ayalka.com.tr",
        },
        {
          href: "tel:+905333329963",
          icon: FaPhone,
          text: "+90 533 332 9963",
        },
      ],
      exportManagerInfo: [
        {
          href: "mailto:ihracat@ayalka.com.tr",
          icon: FaEnvelope,
          text: "ihracat@ayalka.com.tr",
        },
        {
          href: "mailto:export@ayalka.com.tr",
          icon: FaEnvelope,
          text: "export@ayalka.com.tr",
        },
        {
          href: "tel:+905326830891",
          icon: FaPhone,
          text: "+90 532 683 0891",
        },
      ],
      generalManagerAssistantInfo: [
        {
          href: "mailto:info@ayalka.com.tr",
          icon: FaEnvelope,
          text: "info@ayalka.com.tr",
        },
        {
          href: "tel:+905524399257",
          icon: FaPhone,
          text: "+90 552 439 9257",
        },
      ],
      accountingInfo: [
        {
          href: "mailto:ihracat@ayalka.com.tr",
          icon: FaEnvelope,
          text: "ihracat@ayalka.com.tr",
        },
      ],
    },
    map: {
      officeTitle: "MERKEZ OFİS",
      address: "İskele Köyü Ankara Caddesi No: 99/1 Çankırı/Merkez",
      contactItems: {
        phone1: "+90 532 683 0891",
        phone2: "+90 534 274 0325",
        phone3: "+90 530 149 9993",
        phone4: "+90 533 332 9963",
        email: "info@ayalka.com.tr",
      },
      consentMessage:
        "Konumumuzu görmek için çerez politikamızı kabul etmeniz gerekmektedir.",
      consentButton: "Çerezleri Kabul Et",
    },
    mainAriaLabel: "İletişim Bilgileri",
  },
  en: {
    seo: {
      title: "Contact | Ayalka Makina",
      description:
        "Get in touch with Ayalka Makina. Address: İzmir Kemalpaşa OSB, Phone: +90-532-683-0891. Contact us for information on our equipment manufacturing.",
      keywords:
        "ayalka contact, ayalka makina contact, ayalka phone, ayalka address, ayalka makina location",
    },
    hero: {
      bgAlt: "Contact page background image",
      title: "CONTACT",
    },
    contactInfo: {
      generalManager: "GENERAL MANAGER",
      exportManager: "EXPORT MANAGER",
      generalManagerAssistant: "GENERAL MANAGER ASSISTANT",
      accounting: "ACCOUNTING",
      generalManagerInfo: [
        {
          href: "mailto:info@ayalka.com.tr",
          icon: FaEnvelope,
          text: "info@ayalka.com.tr",
        },
        {
          href: "tel:+905333329963",
          icon: FaPhone,
          text: "+90 533 332 9963",
        },
      ],
      exportManagerInfo: [
        {
          href: "mailto:ihracat@ayalka.com.tr",
          icon: FaEnvelope,
          text: "ihracat@ayalka.com.tr",
        },
        {
          href: "mailto:export@ayalka.com.tr",
          icon: FaEnvelope,
          text: "export@ayalka.com.tr",
        },
        {
          href: "tel:+905326830891",
          icon: FaPhone,
          text: "+90 532 683 0891",
        },
      ],
      generalManagerAssistantInfo: [
        {
          href: "mailto:info@ayalka.com.tr",
          icon: FaEnvelope,
          text: "info@ayalka.com.tr",
        },
        {
          href: "tel:+905524399257",
          icon: FaPhone,
          text: "+90 552 439 9257",
        },
      ],
      accountingInfo: [
        {
          href: "mailto:l.molva@ayalka.com.tr",
          icon: FaEnvelope,
          text: "l.molva@ayalka.com.tr",
        },
      ],
    },
    map: {
      officeTitle: "HEAD OFFICE",
      address: "İskele Köyü Ankara Caddesi No: 99/1 Çankırı/Merkez",
      contactItems: {
        phone1: "+90 532 683 0891",
        phone2: "+90 534 274 0325",
        phone3: "+90 530 149 9993",
        phone4: "+90 533 332 9963",
        email: "info@ayalka.com.tr",
      },
      consentMessage: "You must accept our cookie policy to view our location.",
      consentButton: "Accept Cookies",
    },
    mainAriaLabel: "Contact Information",
  },
};
