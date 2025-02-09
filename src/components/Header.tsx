import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import { useProducts } from "../hooks/useProduct";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  title: string;
  link?: string;
  id?: string;
  category?: string;
  submenu?: MenuItem[];
}

const navItems: MenuItem[] = [
  { title: "Anasayfa", link: "/" },
  {
    title: "Kurumsal",
    submenu: [
      { title: "Yönetim Kurulu Başkanı", link: "/yonetim-kurul-baskani" },
      { title: "Tarihçe", link: "/tarihce" },
      { title: "İhracat Ağı", link: "/ihracat-agi" },
      { title: "Teknik Şartnameler", link: "/teknik-sartnameler" },
    ],
  },
  {
    title: "Ürünler",
    submenu: [
      {
        title: "Çöp Kamyonu - Hidrolik Sıkıştırmalı Çöp Kasası",
        id: "garbage-truck",
        category: "garbage-truck",
      },
      { title: "Mini Pack", id: "mini-pack", category: "mini-pack" },
      { title: "Su Tankeri", id: "water-tank", category: "water-tank" },
      { title: "Vidanjör", id: "vacuum-truck", category: "vacuum-truck" },
      { title: "Hooklift", id: "hooklift", category: "hooklift" },
      {
        title: "Skip Loader | Hidrolift",
        id: "skip-loader",
        category: "skip-loader",
      },
      {
        title: "Yandan Yüklemeli Çöp Kasası",
        id: "side-loading-garbage",
        category: "side-loading-garbage",
      },
      { title: "Konteyner", link: "/urunler/konteyner" },
      {
        title: "Teleskopik Platform",
        id: "telescopic-platform",
        category: "telescopic-platform",
      },
      { title: "Kanal Açma", id: "canal-jetting", category: "canal-jetting" },
      { title: "Yol Süpürme", id: "road-sweeper", category: "road-sweeper" },
      { title: "İtfaiye", id: "fire-truck", category: "fire-truck" },
      { title: "İtfaiye Damper", id: "tipper-truck", category: "tipper-truck" },
      {
        title: "Monoblok Çöp Kamyonu",
        id: "monoblock-garbage",
        category: "monoblock-garbage",
      },
      {
        title: "Konteyner Yıkama",
        id: "container-washer",
        category: "container-washer",
      },
      { title: "Semi Treyler", id: "semi-trailer", category: "semi-trailer" },
    ],
  },
  { title: "Basın Kiti", link: "/basin-kiti" },
  { title: "Galeri", link: "/galeri" },
  { title: "Satış Sonrası Hizmetler", link: "/satis-sonrasi-hizmetler" },
  { title: "İletişim", link: "/iletisim" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { products, setSelectedProduct } = useProducts();
  const navigate = useNavigate();

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
        <div className="header-top-language-switch desktop-only">
          <button className="lang-btn active">
            <img
              src="https://flagcdn.com/16x12/tr.png"
              width="16"
              height="12"
              alt="Turkish Flag"
            />
          </button>
          <button className="lang-btn">
            <img
              src="https://flagcdn.com/16x12/gb.png"
              width="16"
              height="12"
              alt="England Flag"
            />
          </button>
        </div>
      </div>
      <div className="header-bottom">
        <motion.div className="header-bottom-logo-side" variants={itemVariants}>
          <Link to="/">
            <img
              src="https://ayalka.com.tr/wp-content/uploads/2019/02/cropped-ayalkaufak.png"
              alt="Ayalka Logo"
              height={80}
              width={80}
            />
          </Link>
        </motion.div>

        <button
          className={`hamburger-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Menu"
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
            <div className="mobile-language-switch mobile-only">
              <button className="lang-btn active">
                <img
                  src="https://flagcdn.com/16x12/tr.png"
                  width="16"
                  height="12"
                  alt="Turkish Flag"
                />
              </button>
              <button className="lang-btn">
                <img
                  src="https://flagcdn.com/16x12/gb.png"
                  width="16"
                  height="12"
                  alt="England Flag"
                />
              </button>
            </div>
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
                    {item.title}
                    <span className="dropdown-arrow">▾</span>
                  </span>
                ) : (
                  <Link to={item.link || "#"} className="nav-link">
                    {item.title}
                  </Link>
                )}

                <AnimatePresence mode="sync">
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
                          <span className="dropdown-link">{sub.title}</span>
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
