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
      generalManagerAssistant: "G. MÜDÜR YARDIMCISI",
      accounting: "MUHASEBE",
      generalManagerInfo: [
        {
          href: "mailto:info@karakulakgroup.com",
          icon: FaEnvelope,
          text: "info@karakulakgroup.com",
        },
        {
          href: "tel:+905555555555",
          icon: FaPhone,
          text: "+90 555 555 5555",
        },
      ],
      exportManagerInfo: [
        {
          href: "mailto:info@karakulakgroup.com",
          icon: FaEnvelope,
          text: "info@karakulakgroup.com",
        },
        {
          href: "mailto:info@karakulakgroup.com",
          icon: FaEnvelope,
          text: "info@karakulak.com",
        },
        {
          href: "tel:+905314828128",
          icon: FaPhone,
          text: "+90 531 482 8128",
        },
      ],
      generalManagerAssistantInfo: [
        {
          href: "mailto:info@karakulak.com",
          icon: FaEnvelope,
          text: "info@karakulak.com",
        },
        {
          href: "tel:+9055555555555",
          icon: FaPhone,
          text: "+90 555 555 5555",
        },
      ],
      accountingInfo: [
        {
          href: "mailto:karakulakgroup@gmail.com",
          icon: FaEnvelope,
          text: "karakulakgroup@gmail.com",
        },
      ],
    },
    map: {
      officeTitle: "MERKEZ OFİS",
      address: "O.S.B. Mh.8 Sk.No:6 Kemalpaşa / İzmir",
      contactItems: {
        phone1: "+90 536 842 14 32",
        phone2: "+90 531 482 81 28",
        phone3: "+90 555 555 5555",
        phone4: "+90 555 555 5555",
        email: "info@karakulakgroup.com",
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
        "contact karakulak, karakulak communication, contact karakulak group, karakulak group communication, contact karakulak vehicle mounted equipment, karakulak vehicle mounted equipment communication, contact karakulak group vehicle mounted equipment, karakulak group vehicle mounted equipment communication, karakulak phone number, karakulak telephone, karakulak group phone number, karakulak group telephone, karakulak address, karakulak group address, karakulak location, karakulak group location, vehicle mounted equipment contact, vehicle mounted equipment communication, caracal, vehicle upfitting, truck equipment, contact us, info@karakulakgroup.com",
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
          href: "mailto:info@karakulakgroup.com",
          icon: FaEnvelope,
          text: "info@karakulakgroup.com",
        },
        {
          href: "tel:+905555555555",
          icon: FaPhone,
          text: "+90 555 555 5555",
        },
      ],
      exportManagerInfo: [
        {
          href: "mailto:info@karakulakgroup.com",
          icon: FaEnvelope,
          text: "info@karakulakgroup.com",
        },
        {
          href: "mailto:info@karakulakgroup.com",
          icon: FaEnvelope,
          text: "info@karakulakgroup.com",
        },
        {
          href: "tel:+905314828128",
          icon: FaPhone,
          text: "+90 531 482 8128",
        },
      ],
      generalManagerAssistantInfo: [
        {
          href: "mailto:info@karakulakgroup.com",
          icon: FaEnvelope,
          text: "info@karakulakgroup.com",
        },
        {
          href: "tel:+905555555555",
          icon: FaPhone,
          text: "+90 555 555 5555",
        },
      ],
      accountingInfo: [
        {
          href: "mailto:karakulakgroup@gmail.com",
          icon: FaEnvelope,
          text: "karakulakgroup@gmail.com",
        },
      ],
    },
    map: {
      officeTitle: "HEAD OFFICE",
      address: "OSB Neighborhood 8, Street No. 6, Kemalpaşa, İzmir, Turkey",
      contactItems: {
        phone1: "+90 536 842 14 32",
        phone2: "+90 531 482 81 28",
        phone3: "+90 555 555 5555",
        phone4: "+90 555 555 5555",
        email: "info@karakulakgroup.com",
      },
      consentMessage: "You must accept our cookie policy to view our location.",
      consentButton: "Accept Cookies",
    },
    mainAriaLabel: "Contact Information",
  },
};
