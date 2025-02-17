import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";

import { useProducts } from "../hooks/useProduct";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "./miniComponents/LanguageSwitcher";
import { navItems, MenuItem } from "../data/navItems";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { products, setSelectedProduct } = useProducts();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMenu(null);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
      setOpenMenu(null);
    }
  };

  const handleProductSelect = (item: MenuItem) => {
    if (item.id && item.category) {
      const product = products.find((p) => p.id === item.id);
      if (product) {
        setSelectedProduct(product);
        setIsMobileMenuOpen(false);
        setOpenMenu(null);
        navigate(`/${language}/products/${item.category}/${item.id}`);
      }
    } else if (item.link) {
      navigate(`/${language}${item.link}`);
    }
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="header-container"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="header-top">
        <div className="header-left">
          <span className="header-top-info-mail">info@karakulakgroup.com</span>
        </div>
        <div className="header-top-info-phone">+90 555 555 5555</div>
        <LanguageSwitcher className="header-top-language-switch desktop-only" />
      </div>
      <div className="header-bottom">
        <motion.div className="header-bottom-logo-side" variants={itemVariants}>
          <Link
            to={`/${language}/`}
            title={
              language === "tr"
                ? "Karakulak - Anasayfa"
                : "Karakulak - Homepage"
            }
          >
            <img
              src="https://ayalka.com.tr/wp-content/uploads/2019/02/cropped-ayalkaufak.png" // TODO : Yeni logo geldiğinde düzenlencek + title
              alt="Ayalka Logo"
              height={80}
              width={80}
              title={
                language === "tr"
                  ? "Karakulak Şirket Logosu"
                  : "Karakulak Company Logo"
              }
            />
          </Link>
        </motion.div>

        <button
          className={`hamburger-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label={language === "tr" ? "Menüyü Aç" : "Open Menu"}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>

        <nav
          className={`header-bottom-menu-side ${
            isMobileMenuOpen ? "mobile-open" : ""
          }`}
          onClick={handleOverlayClick}
        >
          <ul className="nav-list">
            <LanguageSwitcher className="mobile-language-switch mobile-only" />
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className={`nav-item ${openMenu === index ? "active" : ""}`}
                onMouseEnter={() => !isMobileMenuOpen && setOpenMenu(index)}
                onMouseLeave={() => !isMobileMenuOpen && setOpenMenu(null)}
                onClick={() =>
                  isMobileMenuOpen &&
                  setOpenMenu(openMenu === index ? null : index)
                }
              >
                {item.submenu ? (
                  <span className="nav-link">
                    {item.title[language as keyof MenuItem["title"]]}
                    <span className="dropdown-arrow">▾</span>
                  </span>
                ) : (
                  <Link
                    to={`/${language}` + (item.link || "#")}
                    // to={item.link || "#"}
                    className="nav-link"
                    title={
                      language === "tr"
                        ? `Karakulak - ${item.title["tr"]} Sayfası`
                        : `Karakulak - ${item.title["en"]} Page`
                    }
                  >
                    {item.title[language as keyof MenuItem["title"]]}
                  </Link>
                )}

                <AnimatePresence mode="wait">
                  {item.submenu && openMenu === index && (
                    <motion.ul
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.submenu.map((sub, subIndex) => (
                        <motion.li
                          key={subIndex}
                          className="dropdown-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: subIndex * 0.1 }}
                          onClick={() => handleProductSelect(sub)}
                        >
                          <span className="dropdown-link">
                            {sub.title[language as keyof MenuItem["title"]]}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
