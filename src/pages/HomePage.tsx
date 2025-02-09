import HeroSlider from "../components/HeroSlider";
import MapLocationShowcase from "../components/miniComponents/MapLocationShowcase";
import WhoWeAreMini from "../components/miniComponents/WhoWeAreMini";
import Products from "../components/Products";
import { SEO } from "../components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Ayalka Makina | Araç Üstü Ekipman Üreticisi ve İhracatçısı"
        description="Ayalka Makina, çöp kasası, su tankeri, vidanjör ve hooklift gibi araç üstü ekipmanların üretiminde 40'tan fazla ülkeye ihracat yapan lider üreticidir."
        keywords="ayalka makina, araç üstü ekipman, çöp kasası, su tankeri, vidanjör"
      />

      <main>
        <h1 className="visually-hidden">
          Ayalka Makina - Araç Üstü Ekipman Üreticisi
        </h1>

        {/* buraya h2 ile bir şeyler koy */}

        <h2 className="visually-hidden">Ana Sayfa</h2>

        <HeroSlider />
        <WhoWeAreMini />
        <Products />
        <MapLocationShowcase />
      </main>
    </>
  );
}
