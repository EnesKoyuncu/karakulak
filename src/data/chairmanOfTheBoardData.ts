export interface IseoTexts {
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
    title: "Yönetim Kurulu Başkanı | Karakulak Group",
    description:
      "Karakulak Group Yönetim Kurulu Başkanı Hamza Can Karakulak'ın mesajı bu sayfa üzerinde yer almaktadır. Kalite odaklı üretim, müşteri memnuniyeti ve kurumsallaşma ilkelerimiz hakkında bilgi alın. Daha fazlası için iletişim sayfamızdaki iletişim bilgilierinden bize ulaşabilirsiniz.",
    keywords: [
      "garbage truck",
      "garbagetruck",
      "hamza can karakulak",
      "karakulak",
      "karakulak group",
      "karakulak yönetim kurulu başkanı",
      "karakulak group yönetim kurulu başkanı",
      "karakulak group başkan mesajı",
      "karakulak group kalite politikası",
      "karakulak kurumsal değerler",
      "Yönetim Kurulu",
      "Yönetim Kurulu Başkanı",
      "Kurumsal",
      "Mesaj",
    ],
  },
  en: {
    title: "Chairman of the Board | Karakulak Group",
    description:
      "The message of Hamza Can Karakulak, Chairman of the Board of Karakulak Group, is available on this page. Learn about our principles of quality-focused production, customer satisfaction, and corporate governance. For more information, you can reach us through the contact information on our contact page.",
    keywords: [
      "hamza can karakulak",
      "karakulak",
      "karakulak group",
      "karakulak chairman of the board",
      "karakulak group chairman of the board",
      "karakulak group chairman's message",
      "karakulak group quality policy",
      "karakulak corporate values",
      "Board of Directors",
      "Chairman of the Board",
      "Corporate",
      "Message",
    ],
  },
};
