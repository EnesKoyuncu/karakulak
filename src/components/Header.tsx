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

// interface MenuItem {
//   title: {
//     tr: string;
//     en: string;
//   };
//   link?: string;
//   id?: string;
//   category?: string;
//   submenu?: MenuItem[];
// }

// const navItems: MenuItem[] = [
//   {
//     title: {
//       tr: "Anasayfa",
//       en: "Homepage",
//     },
//     link: "/",
//   },
//   {
//     title: {
//       tr: "Kurumsal",
//       en: "Corporate",
//     },
//     submenu: [
//       {
//         title: {
//           tr: "Yönetim Kurulu Başkanı",
//           en: "Chairman of the Board",
//         },
//         link: "/chairman-of-the-board",
//       },
//       {
//         title: {
//           tr: "Tarihçe",
//           en: "History",
//         },
//         link: "/history",
//       },
//       {
//         title: {
//           tr: "İhracat Ağı",
//           en: "Export Network",
//         },
//         link: "/export-network",
//       },
//       {
//         title: {
//           tr: "Teknik Şartnameler",
//           en: "Technical Specifications",
//         },
//         link: "/technical-specifications",
//       },
//     ],
//   },
//   {
//     title: {
//       tr: "Ürünler",
//       en: "Products",
//     },
//     submenu: [
//       {
//         title: {
//           tr: "Çöp Kamyonu - Hidrolik Sıkıştırmalı Çöp Kasası",
//           en: "Garbage Truck - Hydraulic Compactor Garbage",
//         },
//         id: "garbage-truck",
//         category: "garbage-truck",
//       },
//       {
//         title: {
//           tr: "Mini Pack",
//           en: "Mini Pack",
//         },
//         id: "mini-pack",
//         category: "mini-pack",
//       },
//       {
//         title: {
//           tr: "Su Tankeri",
//           en: "Water Tank",
//         },
//         id: "water-tank",
//         category: "water-tank",
//       },
//       {
//         title: {
//           tr: "Vidanjör",
//           en: "Vacuum Truck",
//         },
//         id: "vacuum-truck",
//         category: "vacuum-truck",
//       },
//       {
//         title: {
//           tr: "Hooklift",
//           en: "Hooklift",
//         },
//         id: "hooklift",
//         category: "hooklift",
//       },
//       {
//         title: {
//           tr: "Skip Loader | Hidrolift",
//           en: "Skip Loader | Hidrolift",
//         },
//         id: "skip-loader",
//         category: "skip-loader",
//       },
//       {
//         title: {
//           tr: "Yandan Yüklemeli Çöp Kasası",
//           en: "Side Loading Garbage",
//         },
//         id: "side-loading-garbage",
//         category: "side-loading-garbage",
//       },
//       {
//         title: {
//           tr: "Teleskopik Platform",
//           en: "Telescopic Platform",
//         },
//         id: "telescopic-platform",
//         category: "telescopic-platform",
//       },
//       {
//         title: {
//           tr: "Kanal Açma",
//           en: "Canal Jetting",
//         },
//         id: "canal-jetting",
//         category: "canal-jetting",
//       },
//       {
//         title: {
//           tr: "Yol Süpürme",
//           en: "Road Sweeper",
//         },
//         id: "road-sweeper",
//         category: "road-sweeper",
//       },
//       {
//         title: {
//           tr: "İtfaiye",
//           en: "Fire Truck",
//         },
//         id: "fire-truck",
//         category: "fire-truck",
//       },
//       {
//         title: {
//           tr: "İtfaiye Damper",
//           en: "Tipper Truck",
//         },
//         id: "tipper-truck",
//         category: "tipper-truck",
//       },
//       {
//         title: {
//           tr: "Monoblok Çöp Kamyonu",
//           en: "Monoblock Garbage Truck",
//         },
//         id: "monoblock-garbage",
//         category: "monoblock-garbage",
//       },
//       {
//         title: {
//           tr: "Konteyner Yıkama",
//           en: "Container Washer",
//         },
//         id: "container-washer",
//         category: "container-washer",
//       },
//       {
//         title: {
//           tr: "Semi Treyler",
//           en: "Semi Trailer",
//         },
//         id: "semi-trailer",
//         category: "semi-trailer",
//       },
//     ],
//   },
//   {
//     title: {
//       tr: "Basın Kiti",
//       en: "Press Kit",
//     },
//     link: "/press-kit",
//   },
//   {
//     title: {
//       tr: "Galeri",
//       en: "Gallery",
//     },
//     link: "/gallery",
//   },
//   {
//     title: {
//       tr: "Satış Sonrası Hizmetler",
//       en: "After Sales Services",
//     },
//     link: "/after-sales-services",
//   },
//   {
//     title: {
//       tr: "İletişim",
//       en: "Contact",
//     },
//     link: "/contact",
//   },
// ];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { products, setSelectedProduct } = useProducts();
  const navigate = useNavigate();
  const { language } = useLanguage();
  // const location = useLocation();

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
        navigate(`/products/${item.category}/${item.id}`);
      }
    } else if (item.link) {
      navigate(item.link);
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
          <span className="header-top-info-mail">info@ayalka.com</span>
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
