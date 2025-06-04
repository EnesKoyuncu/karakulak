export interface IMapLocationTexts {
  sectionTitle: {
    tr: string;
    en: string;
  };
  contactHeadings: {
    centralOffice: {
      tr: string;
      en: string;
    };
  };
  address: {
    tr: string;
    en: string;
  };
  labels: {
    email: string;
    phone: {
      tr: string;
      en: string;
    };
    phone2: {
      tr: string;
      en: string;
    };
  };
  contactDetails: {
    email: string;
    phoneNumber: string;
    phone2number: string;
  };
}

export const mapLocationTexts: IMapLocationTexts = {
  sectionTitle: {
    tr: "KARAKULAK İLETİŞİM",
    en: "KARAKULAK CONTACT",
  },
  contactHeadings: {
    centralOffice: {
      tr: "MERKEZ OFİS",
      en: "CENTRAL OFFICE",
    },
  },
  address: {
    tr: "O.S.B. Mh.8 Sk.No:6 Kemalpaşa / İzmir",
    en: "OSB Neighborhood 8, Street No. 6, Kemalpaşa, İzmir, Turkey",
  },
  labels: {
    email: "E-mail:",
    phone: {
      tr: "Tel:",
      en: "Phone:",
    },
    phone2: {
      tr: "Tel2:",
      en: "Phone2:",
    },
  },
  contactDetails: {
    email: "info@karakulakgroup.com",
    phoneNumber: "+90 536 842 14 32",
    phone2number: "+90 531 482 81 28",
  },
};
