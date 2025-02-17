// data/mapLocationShowcaseData.ts
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
    fax: {
      tr: string;
      en: string;
    };
  };
  contactDetails: {
    email: string;
    phoneNumber: string;
    faxNumber: string;
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
    fax: {
      tr: "Faks:",
      en: "Fax:",
    },
  },
  contactDetails: {
    email: "info@karakulakgroup.com",
    phoneNumber: "90 532 683 0891",
    faxNumber: "90 533 329 963",
  },
};
