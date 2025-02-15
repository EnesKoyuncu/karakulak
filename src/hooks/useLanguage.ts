import { useLocation, useNavigate } from "react-router-dom";

const supportedLanguages = ["tr", "en", "de"]; // Desteklenen diller

export const useLanguage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // URL'den dili al
  const language =
    supportedLanguages.find((lang) =>
      location.pathname.startsWith(`/${lang}`)
    ) || "en"; // Geçerli bir dil yoksa "en" kullan

  const setLanguage = (newLang: string) => {
    if (supportedLanguages.includes(newLang)) {
      const newPath = location.pathname.replace(`/${language}`, `/${newLang}`);
      navigate(newPath, { replace: true });
    }
  };

  return { language, setLanguage };
};
