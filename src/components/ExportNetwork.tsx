import { useState, useCallback, useEffect } from "react";
import Globe from "react-globe.gl";
import { motion } from "framer-motion";
import "../styles/ExportNetwork.css";
import SEO from "./SEO";
import { useLanguage } from "../hooks/useLanguage";
import {
  countries,
  Country,
  IseoTextsLanguageSupport,
  seoTexts,
} from "@/data/exportNetworkData";

const ExportNetwork: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [highlightedCountry, setHighlightedCountry] = useState<Country | null>(
    null
  );
  const { language } = useLanguage();

  // Varsayılan ve ek ülkeleri birleştir
  const allCountries = [...countries];

  const filteredCountries = selectedRegion
    ? allCountries.filter(
        (country) =>
          country.region[language as keyof Country["region"]] === selectedRegion
      )
    : allCountries;

  const handleCountryClick = useCallback((country: Country) => {
    setHighlightedCountry(country);
  }, []);

  // Bölge filtre butonlarını dil bağımlı hale getirmek için:
  const regionFilters =
    language === "tr"
      ? ["Avrupa", "Asya", "Afrika"]
      : ["Europe", "Asia", "Africa"];

  useEffect(() => {
    setSelectedRegion(null);
  }, [language]);

  return (
    <>
      <SEO
        title={seoTexts[language as keyof IseoTextsLanguageSupport].title}
        description={
          seoTexts[language as keyof IseoTextsLanguageSupport].description
        }
        image="https://karakulakgroup.com/images/karakulakgroupLogo.webp" // TODO : değiştirilcek logo geldiğinde
        author="Karakulak Group"
        publisher="Karakulak Group"
        keywords={seoTexts[language as keyof IseoTextsLanguageSupport].keywords}
        ogType="website"
      />

      <main className="export-network">
        <div className="content">
          <header className="top-section">
            <motion.div
              className="header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>{language === "tr" ? "İHRACAT AĞI" : "EXPORT NETWORK"}</h1>
              <div className="title-underline" role="presentation"></div>
              <p className="subtitle">
                {language === "tr"
                  ? "50'den fazla ülkeye ihracat yapan güvenilir çözüm ortağınız"
                  : "Your reliable solution partner exporting to over 50 countries"}
              </p>
            </motion.div>

            <figure
              className="globe-container"
              aria-label={
                language === "tr"
                  ? "İhracat yapılan ülkelerin interaktif dünya haritası"
                  : "Interactive globe showing export countries"
              }
            >
              <Globe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                pointsData={filteredCountries}
                pointLat={(d) => (d as Country).coordinates[0]}
                pointLng={(d) => (d as Country).coordinates[1]}
                pointColor={() => "#e74c3c"}
                pointAltitude={0.05}
                pointRadius={0.8}
                pointLabel={(d) =>
                  (d as Country).name[language as keyof Country["name"]]
                }
                backgroundColor="rgba(0,0,0,0)"
                atmosphereColor="#e74c3c"
                atmosphereAltitude={0.15}
                width={500}
                height={500}
                onPointClick={(point) => handleCountryClick(point as Country)}
                enablePointerInteraction={true}
                pointsMerge={false}
                pointResolution={3}
                aria-label="Export destinations around the world"
              />
            </figure>
          </header>

          <section className="countries-section">
            <nav
              className="region-filters"
              aria-label={
                language === "tr" ? "Bölge filtreleri" : "Region filters"
              }
            >
              {regionFilters.map((region) => (
                <button
                  key={region}
                  className={`region-btn ${
                    selectedRegion === region ? "active" : ""
                  }`}
                  onClick={() =>
                    setSelectedRegion(selectedRegion === region ? null : region)
                  }
                  aria-pressed={selectedRegion === region}
                  aria-label={
                    language === "tr"
                      ? `${region} bölgesini ${
                          selectedRegion === region ? "kaldır" : "filtrele"
                        }`
                      : `Filter ${region} region ${
                          selectedRegion === region ? "remove" : "apply"
                        }`
                  }
                >
                  {region}
                </button>
              ))}
            </nav>

            <article className="countries-list">
              <motion.div
                className="countries-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                role="list"
              >
                {filteredCountries.map((country) => (
                  <motion.div
                    key={country.name[language as keyof Country["name"]]}
                    className={`country-card ${
                      highlightedCountry?.name === country.name
                        ? "highlighted"
                        : ""
                    }`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleCountryClick(country)}
                    role="listitem"
                    aria-selected={highlightedCountry?.name === country.name}
                  >
                    <strong className="country-name">
                      {country.name[language as keyof Country["name"]]}
                    </strong>
                    <span
                      className="region-tag"
                      aria-label={
                        language === "tr"
                          ? `${country.region.tr} bölgesi`
                          : `${country.region.en} region`
                      }
                    >
                      {country.region[language as keyof Country["region"]]}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default ExportNetwork;
