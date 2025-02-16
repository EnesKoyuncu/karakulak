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
      title:
        "İletişim | Karakulak Group Araç Üstü Ekipman Sitesinin İletişim Sayfası",
      description:
        "Karakulak Group ile iletişime geçin. Bu sayfa Karakulak Group ile iletişim yapabileceğiniz ve farklı iletişim yolları hakkında bilgi alabileceğiniz bir sayfadır. Şirket içerisinde görev alan kişiler ve onların iletişim bilgileri yer almaktadır. Daha fazlası için info@karakulakgroup.com adresine e-posta gönderebilirsiniz.",
      keywords:
        "karakulak iletişim, karakulak group iletişim, karakulak araç üstü ekipman iletişim, karakulak group araç üstü ekipman iletişim, karakulak telefon, karakulak group telefon, karakulak adres, karakulak group adres, karakulak  konum, karakulak group konum, araç üstü ekipman iletişim",
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
          href: "mailto:info@karakulakgroup.com.tr",
          icon: FaEnvelope,
          text: "info@karakulakgroup.com.tr",
        },
        {
          href: "tel:+905555555555",
          icon: FaPhone,
          text: "+90 555 555 5555",
        },
      ],
      exportManagerInfo: [
        {
          href: "mailto:ihracat@karakulakgroup.com.tr",
          icon: FaEnvelope,
          text: "ihracat@karakulakgroup.com.tr",
        },
        {
          href: "mailto:export@karakulakgroup.com.tr",
          icon: FaEnvelope,
          text: "export@karakulak.com.tr",
        },
        {
          href: "tel:+905555555555",
          icon: FaPhone,
          text: "+90 555 555 5555",
        },
      ],
      generalManagerAssistantInfo: [
        {
          href: "mailto:info@karakulak.com.tr",
          icon: FaEnvelope,
          text: "info@karakulak.com.tr",
        },
        {
          href: "tel:+9055555555555",
          icon: FaPhone,
          text: "+90 555 555 5555",
        },
      ],
      accountingInfo: [
        {
          href: "mailto:ihracat@karakulakgroup.com.tr",
          icon: FaEnvelope,
          text: "ihracat@karakulakgroup.com.tr",
        },
      ],
    },
    map: {
      officeTitle: "MERKEZ OFİS",
      address: "İskele Köyü Ankara Caddesi No: 99/1 Çankırı/Merkez",
      contactItems: {
        phone1: "+90 555 555 5555",
        phone2: "+90 555 555 5555",
        phone3: "+90 555 555 5555",
        phone4: "+90 555 555 5555",
        email: "info@karakulakgroup.com.tr",
      },
      consentMessage:
        "Konumumuzu görmek için çerez politikamızı kabul etmeniz gerekmektedir.",
      consentButton: "Çerezleri Kabul Et",
    },
    mainAriaLabel: "İletişim Bilgileri",
  },
  en: {
    seo: {
      title:
        "Contact | Contact Page of Karakulak Group Vehicle Mounted Equipment Site",
      description:
        "Contact Karakulak Group. This is a page where you can contact Karakulak Group and get information about different ways of communication. It includes the people working in the company and their contact information. For more information, you can send an e-mail to info@karakulakgroup.com.",
      keywords:
        "contact karakulak, karakulak communication, contact karakulak group, karakulak group communication, contact karakulak vehicle mounted equipment, karakulak vehicle mounted equipment communication, contact karakulak group vehicle mounted equipment, karakulak group vehicle mounted equipment communication, karakulak phone number, karakulak telephone, karakulak group phone number, karakulak group telephone, karakulak address, karakulak group address, karakulak location, karakulak group location, vehicle mounted equipment contact, vehicle mounted equipment communication, caracal, vehicle upfitting, truck equipment, contact us, info@karakulakgroup.com.tr",
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
          href: "mailto:info@karakulakgroup.com.tr",
          icon: FaEnvelope,
          text: "info@karakulakgroup.com.tr",
        },
        {
          href: "tel:+905555555555",
          icon: FaPhone,
          text: "+90 555 555 5555",
        },
      ],
      exportManagerInfo: [
        {
          href: "mailto:ihracat@karakulakgroup.com.tr",
          icon: FaEnvelope,
          text: "ihracat@karakulakgroup.com.tr",
        },
        {
          href: "mailto:export@karakulakgroup.com.tr",
          icon: FaEnvelope,
          text: "export@karakulakgroup.com.tr",
        },
        {
          href: "tel:+905555555555",
          icon: FaPhone,
          text: "+90 555 555 5555",
        },
      ],
      generalManagerAssistantInfo: [
        {
          href: "mailto:info@karakulakgroup.com.tr",
          icon: FaEnvelope,
          text: "info@karakulakgroup.com.tr",
        },
        {
          href: "tel:+905555555555",
          icon: FaPhone,
          text: "+90 555 555 5555",
        },
      ],
      accountingInfo: [
        {
          href: "mailto:info@karakulakgroup.com.tr",
          icon: FaEnvelope,
          text: "info@karakulakgroup.com.tr",
        },
      ],
    },
    map: {
      officeTitle: "HEAD OFFICE",
      address: "İskele Köyü Ankara Caddesi No: 99/1 Çankırı/Merkez",
      contactItems: {
        phone1: "+90 555 555 5555",
        phone2: "+90 555 555 5555",
        phone3: "+90 555 555 5555",
        phone4: "+90 555 555 5555",
        email: "info@karakulakgroup.com.tr",
      },
      consentMessage: "You must accept our cookie policy to view our location.",
      consentButton: "Accept Cookies",
    },
    mainAriaLabel: "Contact Information",
  },
};
