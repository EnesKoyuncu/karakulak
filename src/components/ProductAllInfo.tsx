import { useProducts } from "../hooks/useProduct";
import { useParams, useNavigate } from "react-router-dom";
import ProductsStone from "./miniComponents/ProductsStone";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/ProductAllInfo.css";
import { SEO } from "./SEO";

const ProductAllInfo = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const navigate = useNavigate();
  const [isGeneralOpen, setIsGeneralOpen] = useState(true);
  const [isVehicleOpen, setIsVehicleOpen] = useState(true);
  const [isAdvantagesOpen, setIsAdvantagesOpen] = useState(true);

  const selectedProduct = products.find((p) => p.id === id);

  useEffect(() => {
    if (!selectedProduct) {
      navigate("/");
    }
  }, [selectedProduct, navigate]);

  if (!selectedProduct) {
    return null;
  }

  return (
    <>
      <SEO
        title={`${selectedProduct.name} | Ayalka Makina`}
        description={`${selectedProduct.name} detaylı teknik özellikleri, araç spesifikasyonları ve avantajları. ${selectedProduct.description}`}
        keywords={`ayalka ${selectedProduct.name.toLowerCase()}, ${
          selectedProduct.category
        }, araç üstü ekipman, teknik özellikler, ${selectedProduct.name.toLowerCase()} özellikleri`}
        image={selectedProduct.images[0]?.url || "/images/default-product.jpg"}
      />

      <main className="product-all-info-wrapper" role="main">
        <article className="product-all-info">
          <ProductsStone
            title={selectedProduct.name}
            description={selectedProduct.description}
            images={selectedProduct.images.map((img) => img.url)}
          />

          <div className="features-container">
            {selectedProduct.vehicleSpecifications && (
              <section className="features-section">
                <motion.header
                  className="features-header"
                  onClick={() => setIsVehicleOpen(!isVehicleOpen)}
                  whileHover={{ backgroundColor: "rgba(231, 76, 60, 0.1)" }}
                  role="button"
                  aria-expanded={isVehicleOpen}
                  aria-controls="vehicle-specs-content"
                >
                  <h2 className="section-title">Vehicle Specifications</h2>
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
                        aria-label="Araç Spesifikasyonları Tablosu"
                      >
                        <table>
                          <caption className="sr-only">
                            Araç Spesifikasyonları
                          </caption>
                          <thead>
                            <tr>
                              <th scope="col">Truck Brand</th>
                              <th scope="col">Wheelbase</th>
                              <th scope="col">Garbage Bin Volume</th>
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

            <section className="features-section">
              <motion.header
                className="features-header"
                onClick={() => setIsGeneralOpen(!isGeneralOpen)}
                whileHover={{ backgroundColor: "rgba(231, 76, 60, 0.1)" }}
                role="button"
                aria-expanded={isGeneralOpen}
                aria-controls="general-features-content"
              >
                <h2 className="section-title">General Features</h2>
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
                      {selectedProduct.generalFeatures.map((feature, index) => (
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

            {selectedProduct.advantages && (
              <section className="features-section">
                <motion.header
                  className="features-header"
                  onClick={() => setIsAdvantagesOpen(!isAdvantagesOpen)}
                  whileHover={{ backgroundColor: "rgba(231, 76, 60, 0.1)" }}
                  role="button"
                  aria-expanded={isAdvantagesOpen}
                  aria-controls="advantages-content"
                >
                  <h2 className="section-title">Advantages</h2>
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
                        {selectedProduct.advantages.map((advantage, idx) => (
                          <div key={idx} className="advantage-item">
                            <dt>{advantage.title}</dt>
                            <dd>{advantage.description}</dd>
                          </div>
                        ))}
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
