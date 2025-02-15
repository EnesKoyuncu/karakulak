import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "./useLanguage";

// Burası dil kısmının yanlış girilmesi durum
// Dil değişimi için path kontrolü ve yönlendirmesi
export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  const changeLanguage = (newLang: string) => {
    if (language === newLang) return;

    const currentPath = location.pathname;
    const newPath = currentPath.startsWith(`/${language}`)
      ? currentPath.replace(`/${language}`, `/${newLang}`)
      : `/${newLang}${currentPath}`;
    navigate(newPath, { replace: true });
    setLanguage(newLang);
  };

  return { changeLanguage };
};
