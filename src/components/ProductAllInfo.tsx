import { useProducts } from "../context/ProductContext";
import { useParams, useNavigate } from "react-router-dom";
import ProductsStone from "./miniComponents/ProductsStone";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/ProductAllInfo.css";

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
    <div className="product-all-info-wrapper">
      <div className="product-all-info">
        <ProductsStone
          title={selectedProduct.name}
          description={selectedProduct.description}
          images={selectedProduct.images.map((img) => img.url)}
        />

        <div className="features-container">
          <motion.div className="features-section">
            <motion.div
              className="features-header"
              onClick={() => setIsVehicleOpen(!isVehicleOpen)}
              whileHover={{ backgroundColor: "rgba(231, 76, 60, 0.1)" }}
            >
              <h3>Vehicle Specifications</h3>
              <motion.div
                className="chevron-icon"
                animate={{ rotate: isVehicleOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.div>
            </motion.div>

            <AnimatePresence mode="sync">
              {isVehicleOpen && (
                <motion.div
                  className="features-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="vehicle-specs-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Truck Brand</th>
                          <th>Wheelbase</th>
                          <th>Garbage Bin Volume</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProduct.vehicleSpecifications.map(
                          (spec, index) => (
                            <tr key={index}>
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
          </motion.div>

          <motion.div className="features-section">
            <motion.div
              className="features-header"
              onClick={() => setIsGeneralOpen(!isGeneralOpen)}
              whileHover={{ backgroundColor: "rgba(231, 76, 60, 0.1)" }}
            >
              <h3>General Features</h3>
              <motion.div
                className="chevron-icon"
                animate={{ rotate: isGeneralOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.div>
            </motion.div>

            <AnimatePresence mode="sync">
              {isGeneralOpen && (
                <motion.div
                  className="features-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedProduct.generalFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="feature-item"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="feature-bullet">•</span>
                      <p>{feature}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div className="features-section">
            <motion.div
              className="features-header"
              onClick={() => setIsAdvantagesOpen(!isAdvantagesOpen)}
              whileHover={{ backgroundColor: "rgba(231, 76, 60, 0.1)" }}
            >
              <h3>Advantages</h3>
              <motion.div
                className="chevron-icon"
                animate={{ rotate: isAdvantagesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.div>
            </motion.div>

            <AnimatePresence mode="sync">
              {isAdvantagesOpen && (
                <motion.div
                  className="features-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="advantages-container">
                    {selectedProduct.advantages.map((advantage, index) => (
                      <div key={index} className="advantage-item">
                        <h4>{advantage.title}</h4>
                        <p>{advantage.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductAllInfo;
