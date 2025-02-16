import HeroSlider from "../components/HeroSlider";
import MapLocationShowcase from "../components/miniComponents/MapLocationShowcase";
import WhoWeAreMini from "../components/miniComponents/WhoWeAreMini";
import Products from "../components/Products";
import SEO from "../components/SEO";
import { IseoTextsLanguageSupport, seoTexts } from "@/data/homePageData";
import { useLanguage } from "@/hooks/useLanguage";

export default function HomePage() {
  const { language } = useLanguage();
  return (
    <>
      <SEO
        title={seoTexts[language as keyof IseoTextsLanguageSupport].title}
        description={
          seoTexts[language as keyof IseoTextsLanguageSupport].description
        }
        keywords={seoTexts[language as keyof IseoTextsLanguageSupport].keywords}
      />

      <main>
        <h1 className="visually-hidden">
          {language === "tr"
            ? "Karakulak Group - Araç Üstü Ekipman Üreticisi"
            : "Karakulak Group - On Vehicle Equipment Manufacturer"}
        </h1>

        <h2 className="visually-hidden">
          {language === "tr" ? "Ana Sayfa" : "Home Page"}
        </h2>

        <HeroSlider />
        <WhoWeAreMini />
        <Products />
        <MapLocationShowcase />
      </main>
    </>
  );
}
