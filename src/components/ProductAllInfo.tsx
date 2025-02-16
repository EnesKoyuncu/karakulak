import { useProducts } from "../hooks/useProduct";
import { useParams, useNavigate } from "react-router-dom";
import ProductsStone from "./miniComponents/ProductsStone";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/ProductAllInfo.css";
import SEO from "./SEO";
import { useLanguage } from "@/hooks/useLanguage";
import { ProductAdvantage, TranslatedText } from "../context/ProductContext";
import {
  ITranslationsLanguageSupport,
  translations,
} from "@/data/productAllInfoData";

const ProductAllInfo = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const navigate = useNavigate();
  const [isGeneralOpen, setIsGeneralOpen] = useState(true);
  const [isVehicleOpen, setIsVehicleOpen] = useState(true);
  const [isAdvantagesOpen, setIsAdvantagesOpen] = useState(true);
  const { language } = useLanguage();

  const selectedProduct = products.find((p) => p.id === id);

  useEffect(() => {
    if (!selectedProduct) {
      navigate("/");
    }
  }, [selectedProduct, navigate]);

  if (!selectedProduct) {
    return null;
  }

  // SEO için açıklama ve anahtar kelimeler; ürünün dil uyumlu alanlarını kullanıyoruz.
  // const seoDescription =
  //   language === "tr"
  //     ? `${selectedProduct.name[language]} detaylı teknik özellikleri, araç spesifikasyonları ve avantajları. ${selectedProduct.description[language]}`
  //     : `${
  //         selectedProduct.name[language as keyof ITranslationsLanguageSupport]
  //       } detailed technical features, vehicle specifications, and advantages. ${
  //         selectedProduct.description[
  //           language as keyof ITranslationsLanguageSupport
  //         ]
  //       }`;

  // const seoKeywords =
  //   language === "tr"
  //     ? `ayalka ${selectedProduct.name[language].toLowerCase()}, ${
  //         selectedProduct.category
  //       }, araç üstü ekipman, teknik özellikler, ${selectedProduct.name[
  //         language
  //       ].toLowerCase()} özellikleri`
  //     : `ayalka ${selectedProduct.name[
  //         language as keyof ITranslationsLanguageSupport
  //       ].toLowerCase()}, ${
  //         selectedProduct.category
  //       }, vehicle mounted equipment, technical specifications, ${selectedProduct.name[
  //         language as keyof ITranslationsLanguageSupport
  //       ].toLowerCase()} features`;

  return (
    <>
      {/* <SEO
        title={`${
          selectedProduct.name[language as keyof ITranslationsLanguageSupport]
        } | Ayalka Makina`}
        description={seoDescription}
        keywords={seoKeywords}
        image={selectedProduct.images[0]?.url || "/images/default-product.jpg"}
      /> */}
      {/* BURAYI TEKRAR Bİ KONTROL ET */}
      <SEO
        title={`${
          selectedProduct.name[language as keyof TranslatedText]
        } | Karakulak Group Ürünleri`}
        description={
          selectedProduct.description[language as keyof TranslatedText]
        }
        image="https://karakulakgroup.com/images/logo/karakulakgroupLogo.webp" // TODO : değiştirilcek logo geldiğinde
        author="Karakulak Group"
        publisher="Karakulak Group"
        keywords={selectedProduct.keywords[language as keyof TranslatedText]}
        ogType="website"
      />

      <main
        className="product-all-info-wrapper"
        role="main"
        aria-label={
          translations[language as keyof ITranslationsLanguageSupport]
            .productPageMain
        }
      >
        <article className="product-all-info">
          {/* Ürün görsel ve açıklama bileşeni */}
          <ProductsStone
            title={
              selectedProduct.name[
                language as keyof ITranslationsLanguageSupport
              ]
            }
            description={
              selectedProduct.description[
                language as keyof ITranslationsLanguageSupport
              ]
            }
            images={selectedProduct.images.map((img) => img.url)}
          />

          <div className="features-container">
            {/* Araç Spesifikasyonları Bölümü */}
            {selectedProduct.vehicleSpecifications && (
              <section
                className="features-section"
                aria-labelledby="vehicle-specs-heading"
              >
                <motion.header
                  id="vehicle-specs-heading"
                  className="features-header"
                  onClick={() => setIsVehicleOpen(!isVehicleOpen)}
                  whileHover={{ backgroundColor: "rgba(231, 76, 60, 0.1)" }}
                  role="button"
                  aria-expanded={isVehicleOpen}
                  aria-controls="vehicle-specs-content"
                >
                  <h2 className="section-title">
                    {
                      translations[
                        language as keyof ITranslationsLanguageSupport
                      ].vehicleSpecifications
                    }
                  </h2>
                  <motion.span
                    className="chevron-icon"
                    animate={{ rotate: isVehicleOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  >
                    <FaChevronDown />
                  </motion.span>
                </motion.header>

                <AnimatePresence mode="sync">
                  {isVehicleOpen && (
                    <motion.div
                      id="vehicle-specs-content"
                      className="features-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="vehicle-specs-table"
                        role="region"
                        aria-label={
                          translations[
                            language as keyof ITranslationsLanguageSupport
                          ].vehicleSpecsTableLabel
                        }
                      >
                        <table>
                          <caption className="sr-only">
                            {
                              translations[
                                language as keyof ITranslationsLanguageSupport
                              ].vehicleSpecsCaption
                            }
                          </caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                {
                                  translations[
                                    language as keyof ITranslationsLanguageSupport
                                  ].truckBrand
                                }
                              </th>
                              <th scope="col">
                                {
                                  translations[
                                    language as keyof ITranslationsLanguageSupport
                                  ].wheelbase
                                }
                              </th>
                              <th scope="col">
                                {
                                  translations[
                                    language as keyof ITranslationsLanguageSupport
                                  ].garbageBinVolume
                                }
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedProduct.vehicleSpecifications.map(
                              (spec, idx) => (
                                <tr key={idx}>
                                  <td>{spec.model}</td>
                                  <td>{spec.wheelbase}</td>
                                  <td>{spec.garbageBinVolume}</td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            )}

            {/* Genel Özellikler Bölümü */}
            <section
              className="features-section"
              aria-labelledby="general-features-heading"
            >
              <motion.header
                id="general-features-heading"
                className="features-header"
                onClick={() => setIsGeneralOpen(!isGeneralOpen)}
                whileHover={{ backgroundColor: "rgba(231, 76, 60, 0.1)" }}
                role="button"
                aria-expanded={isGeneralOpen}
                aria-controls="general-features-content"
              >
                <h2 className="section-title">
                  {
                    translations[language as keyof ITranslationsLanguageSupport]
                      .generalFeatures
                  }
                </h2>
                <motion.span
                  className="chevron-icon"
                  animate={{ rotate: isGeneralOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                >
                  <FaChevronDown />
                </motion.span>
              </motion.header>

              <AnimatePresence mode="sync">
                {isGeneralOpen && (
                  <motion.div
                    id="general-features-content"
                    className="features-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="features-list" role="list">
                      {selectedProduct.generalFeatures[
                        language as keyof ITranslationsLanguageSupport
                      ].map((feature, index) => (
                        <motion.li
                          key={index}
                          className="feature-item"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* Avantajlar Bölümü */}
            {selectedProduct.advantages &&
              Array.isArray(selectedProduct.advantages) && (
                <section
                  className="features-section"
                  aria-labelledby="advantages-heading"
                >
                  <motion.header
                    id="advantages-heading"
                    className="features-header"
                    onClick={() => setIsAdvantagesOpen(!isAdvantagesOpen)}
                    whileHover={{ backgroundColor: "rgba(231, 76, 60, 0.1)" }}
                    role="button"
                    aria-expanded={isAdvantagesOpen}
                    aria-controls="advantages-content"
                  >
                    <h2 className="section-title">
                      {
                        translations[
                          language as keyof ITranslationsLanguageSupport
                        ].advantages
                      }
                    </h2>
                    <motion.span
                      className="chevron-icon"
                      animate={{ rotate: isAdvantagesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                    >
                      <FaChevronDown />
                    </motion.span>
                  </motion.header>

                  <AnimatePresence mode="sync">
                    {isAdvantagesOpen && (
                      <motion.div
                        id="advantages-content"
                        className="features-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <dl className="advantages-container" role="list">
                          {selectedProduct.advantages.map(
                            (advantage: ProductAdvantage, idx: number) => {
                              const advText =
                                language === "tr" ? advantage.tr : advantage.en;
                              return (
                                <div key={idx} className="advantage-item">
                                  <dt>{advText.title}</dt>
                                  <dd>{advText.description}</dd>
                                </div>
                              );
                            }
                          )}
                        </dl>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>
              )}
          </div>
        </article>
      </main>
    </>
  );
};

export default ProductAllInfo;
