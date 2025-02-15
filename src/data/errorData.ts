export interface ErrorTranslations {
  title: string;
  message: string;
  refreshButton: string;
  errorDetails: string;
}

export interface ErrorTranslationLanguageSupport {
  tr: ErrorTranslations;
  en: ErrorTranslations;
}

export const errorTranslations: ErrorTranslationLanguageSupport = {
  tr: {
    title: "Beklenmeyen Bir Hata Oluştu",
    message:
      "Özür dileriz, bir şeyler yanlış gitti. Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.",
    refreshButton: "Sayfayı Yenile",
    errorDetails: "Hata Detayları:",
  },
  en: {
    title: "An Unexpected Error Occurred",
    message:
      "Sorry, something went wrong. Please refresh the page or try again later.",
    refreshButton: "Refresh Page",
    errorDetails: "Error Details:",
  },
};
