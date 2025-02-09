import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"tr" | "en">("tr");

  // Parametre alan setLanguage fonksiyonu
  const changeLanguage = (newLanguage: "tr" | "en") => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
