import { useNavigation } from "@/hooks/useNavigation";
import { useLanguage } from "@/hooks/useLanguage";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { language } = useLanguage();
  const { changeLanguage } = useNavigation();

  return (
    <div className={className}>
      {["en", "tr"].map((lang) => (
        <button
          key={lang}
          className={`lang-btn ${language === lang ? "active" : ""}`}
          onClick={() => changeLanguage(lang)}
        >
          <img
            src={`/images/flags/${lang}-flag.png`}
            width="16"
            height="12"
            alt={`${lang.toUpperCase()} ${lang === "tr" ? "Bayrağı" : "Flag"}`}
            title={`${lang === "tr" ? `${lang} Bayrağı` : `${lang} Flag`}`}
          />
        </button>
      ))}
    </div>
  );
};
