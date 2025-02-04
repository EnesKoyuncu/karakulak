import { useState, useCallback } from "react";
import Globe from "react-globe.gl";
import { motion } from "framer-motion";
import "../styles/ExportNetwork.css";
import { SEO } from "./SEO";

interface Country {
  name: string;
  coordinates: [number, number];
  region: string;
}

const countries: Country[] = [
  // Avrupa
  { name: "Almanya", coordinates: [51.1657, 10.4515], region: "Avrupa" },
  { name: "Avusturya", coordinates: [47.5162, 14.5501], region: "Avrupa" },
  { name: "Bulgaristan", coordinates: [42.7339, 25.4858], region: "Avrupa" },
  { name: "Fransa", coordinates: [46.2276, 2.2137], region: "Avrupa" },
  { name: "Hırvatistan", coordinates: [45.1, 15.2], region: "Avrupa" },
  { name: "İsveç", coordinates: [60.1282, 18.6435], region: "Avrupa" },
  { name: "Kosova", coordinates: [42.6026, 20.903], region: "Avrupa" },
  { name: "Makedonya", coordinates: [41.6086, 21.7453], region: "Avrupa" },
  { name: "Portekiz", coordinates: [39.3999, -8.2245], region: "Avrupa" },
  { name: "Romanya", coordinates: [45.9432, 24.9668], region: "Avrupa" },
  { name: "Rusya", coordinates: [55.7558, 37.6173], region: "Avrupa" },
  { name: "Yunanistan", coordinates: [39.0742, 21.8243], region: "Avrupa" },

  // Asya
  { name: "Afganistan", coordinates: [33.9391, 67.71], region: "Asya" },
  { name: "Azerbaycan", coordinates: [40.1431, 47.5769], region: "Asya" },
  { name: "Dubai", coordinates: [25.2048, 55.2708], region: "Asya" },
  { name: "Gürcistan", coordinates: [42.3154, 43.3569], region: "Asya" },
  { name: "Hindistan", coordinates: [20.5937, 78.9629], region: "Asya" },
  { name: "Irak", coordinates: [33.2232, 43.6793], region: "Asya" },
  { name: "İran", coordinates: [32.4279, 53.688], region: "Asya" },
  { name: "Japonya", coordinates: [36.2048, 138.2529], region: "Asya" },
  { name: "Katar", coordinates: [25.3548, 51.1839], region: "Asya" },
  { name: "Kuveyt", coordinates: [29.3117, 47.4818], region: "Asya" },
  { name: "Kuzey Kıbrıs", coordinates: [35.1856, 33.3823], region: "Asya" },
  { name: "Lübnan", coordinates: [33.8547, 35.8623], region: "Asya" },
  { name: "Suudi Arabistan", coordinates: [23.8859, 45.0792], region: "Asya" },
  { name: "Suriye", coordinates: [34.8021, 38.9968], region: "Asya" },
  { name: "Tayvan", coordinates: [23.5937, 120.9685], region: "Asya" },
  { name: "Türkmenistan", coordinates: [38.9697, 59.5563], region: "Asya" },
  { name: "Ukrayna", coordinates: [48.3794, 31.1656], region: "Asya" },
  { name: "Ürdün", coordinates: [30.5852, 36.2384], region: "Asya" },
  { name: "Yemen", coordinates: [15.5527, 48.5164], region: "Asya" },

  // Afrika
  { name: "Angola", coordinates: [-11.2027, 17.8739], region: "Afrika" },
  { name: "Cezayir", coordinates: [36.7538, 3.0588], region: "Afrika" },
  { name: "Fas", coordinates: [31.7917, -7.0926], region: "Afrika" },
  { name: "Filistin", coordinates: [31.9522, 35.2332], region: "Afrika" },
  { name: "Gana", coordinates: [7.9465, -1.0232], region: "Afrika" },
  { name: "Libya", coordinates: [26.3351, 17.2283], region: "Afrika" },
  { name: "Mısır", coordinates: [26.8206, 30.8025], region: "Afrika" },
  { name: "Nijerya", coordinates: [9.082, 8.6753], region: "Afrika" },
  { name: "Senegal", coordinates: [14.4974, -14.4524], region: "Afrika" },
];

export default function ExportNetwork() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [highlightedCountry, setHighlightedCountry] = useState<Country | null>(
    null
  );

  const filteredCountries = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries;

  const handleCountryClick = useCallback((country: Country) => {
    setHighlightedCountry(country);
  }, []);

  return (
    <>
      <SEO
        title="İhracat Ağı | Ayalka Makina - 40+ Ülkeye İhracat"
        description="Ayalka Makina, 40'tan fazla ülkeye araç üstü ekipman ihracatı yapan global bir üreticidir. Avrupa, Asya ve Afrika'da güçlü bir ihracat ağına sahibiz."
        keywords="ayalka ihracat, ayalka global, ayalka uluslararası, araç üstü ekipman ihracat, türk ihracat, global üretici"
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
              <h1>İHRACAT AĞI</h1>
              <div className="title-underline" role="presentation"></div>
              <p className="subtitle">
                40'tan fazla ülkeye ihracat yapan güvenilir çözüm ortağınız
              </p>
            </motion.div>

            <figure
              className="globe-container"
              aria-label="İhracat yapılan ülkelerin interaktif dünya haritası"
            >
              <Globe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                pointsData={filteredCountries}
                pointLat={(d) => (d as Country).coordinates[0]}
                pointLng={(d) => (d as Country).coordinates[1]}
                pointColor={() => "#e74c3c"}
                pointAltitude={0.05}
                pointRadius={0.8}
                pointLabel={(d) => (d as Country).name}
                backgroundColor="rgba(0,0,0,0)"
                atmosphereColor="#e74c3c"
                atmosphereAltitude={0.15}
                width={500}
                height={500}
                onPointClick={(point) => handleCountryClick(point as Country)}
                enablePointerInteraction={true}
                pointsMerge={false}
                pointResolution={3}
                aria-label="Dünya üzerinde ihracat noktaları"
              />
            </figure>
          </header>

          <section className="countries-section">
            <nav className="region-filters" aria-label="Bölge filtreleri">
              {["Avrupa", "Asya", "Afrika"].map((region) => (
                <button
                  key={region}
                  className={`region-btn ${
                    selectedRegion === region ? "active" : ""
                  }`}
                  onClick={() =>
                    setSelectedRegion(selectedRegion === region ? null : region)
                  }
                  aria-pressed={selectedRegion === region}
                  aria-label={`${region} bölgesini ${
                    selectedRegion === region ? "kaldır" : "filtrele"
                  }`}
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
                    key={country.name}
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
                    <strong className="country-name">{country.name}</strong>
                    <span
                      className="region-tag"
                      aria-label={`${country.region} bölgesi`}
                    >
                      {country.region}
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
}
