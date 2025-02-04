import { useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaDownload, FaEye } from "react-icons/fa";
import "../styles/TechnicalSpecification.css";
import { SEO } from "./SEO";

interface Specification {
  id: number;
  title: string;
  docxUrl: string;
  category: string;
  image: string;
}

const specifications: Specification[] = [
  {
    id: 1,
    title: "HİDROLİK SIKIŞTIRMALI ÇÖP KASASI TEKNİK ŞARTNAME",
    docxUrl: "/docs/hidrolik-cop-kasasi-sartname.docx",
    category: "Çöp Kasaları",
    image: "/images/products/cop-kamyonu.jpg",
  },
  {
    id: 2,
    title: "MINIPACK TEKNİK ÖZELLİKLERİ - MINIPACK TEKNİK ŞARTNAME",
    docxUrl: "/docs/minipack-sartname.docx",
    category: "Çöp Kasaları",
    image: "/images/products/mini-pack.jpg",
  },
  {
    id: 3,
    title: "YANDAN YÜKLEMELİ ÇÖP KASASI TEKNİK ŞARTNAME",
    docxUrl: "/docs/yandan-yuklemeli-sartname.docx",
    category: "Çöp Kasaları",
    image: "/images/products/teleskopik-platform.jpg",
  },
  {
    id: 4,
    title: "SU TANKERİ TEKNİK ÖZELLİKLERİ - SU TANKERİ TEKNİK ŞARTNAME",
    docxUrl: "/docs/su-tankeri-sartname.docx",
    category: "Tankerler",
    image: "/images/products/su-tankeri.jpg",
  },
  {
    id: 5,
    title: "KANAL AÇMA TEKNİK ÖZELLİKLERİ - KANAL AÇMA TEKNİK ŞARTNAME",
    docxUrl: "/docs/kanal-acma-sartname.docx",
    category: "Tankerler",
    image: "/images/products/kanal-acma.jpg",
  },
  {
    id: 6,
    title: "TELESKOPİK PLATFORM TEKNİK ŞARTNAME",
    docxUrl: "/docs/teleskopik-platform-sartname.docx",
    category: "Platformlar",
    image: "/images/products/teleskopik2.jpeg",
  },
];

export default function TechnicalSpecification() {
  const [selectedDoc, setSelectedDoc] = useState<Specification>(
    specifications[0]
  );

  const handleDocClick = (doc: Specification) => {
    setSelectedDoc(doc);
  };

  const handleDownload = (docUrl: string) => {
    window.open(docUrl, "_blank");
  };

  return (
    <>
      <SEO
        title="Teknik Şartnameler | Ayalka Makina"
        description="Ayalka Makina ürünlerine ait teknik şartnameler. Çöp kasaları, tankerler, platformlar ve diğer araç üstü ekipmanların detaylı teknik özellikleri ve standartları."
        keywords="ayalka teknik şartname, çöp kasası şartname, su tankeri şartname, platform şartname, araç üstü ekipman teknik özellikler"
        image="/images/products/technical-specs-cover.jpg"
      />

      <section className="technical-specs" role="main">
        <motion.header
          className="header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>TEKNİK ŞARTNAMELER</h1>
          <div className="title-underline" aria-hidden="true"></div>
        </motion.header>

        <div className="specs-container">
          <motion.div
            className="specs-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            role="navigation"
            aria-label="Şartname Listesi"
          >
            {specifications.map((doc) => (
              <motion.div
                key={doc.id}
                className={`doc-item ${
                  selectedDoc?.id === doc.id ? "active" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleDocClick(doc)}
                role="button"
                tabIndex={0}
                aria-selected={selectedDoc?.id === doc.id}
                aria-label={`${doc.title} şartnamesini görüntüle`}
              >
                <span className="doc-icon" aria-hidden="true">
                  <FaFilePdf />
                </span>
                <div className="doc-info">
                  <h3>{doc.title}</h3>
                  <span className="category">{doc.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="doc-preview"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-live="polite"
            role="region"
            aria-label="Şartname Önizleme"
          >
            {selectedDoc ? (
              <>
                <div className="preview-header">
                  <h2>{selectedDoc.title}</h2>
                  <div className="preview-image">
                    <img
                      src={selectedDoc.image}
                      alt={`${selectedDoc.title} ürün görseli`}
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="preview-actions"
                    role="group"
                    aria-label="Şartname İşlemleri"
                  >
                    <motion.button
                      className="preview-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(selectedDoc.docxUrl, "_blank")}
                      aria-label={`${selectedDoc.title} şartnamesini görüntüle`}
                    >
                      <FaEye aria-hidden="true" />
                      <span>Görüntüle</span>
                    </motion.button>
                    <motion.button
                      className="download-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDownload(selectedDoc.docxUrl)}
                      aria-label={`${selectedDoc.title} şartnamesini indir`}
                    >
                      <FaDownload aria-hidden="true" />
                      <span>İndir</span>
                    </motion.button>
                  </div>
                </div>
                <div className="preview-content">
                  <p>
                    Şartnameyi görüntülemek veya indirmek için yukarıdaki
                    butonları kullanabilirsiniz.
                  </p>
                </div>
              </>
            ) : (
              <div
                className="no-selection"
                role="alert"
                aria-label="Şartname Seçilmedi"
              >
                <FaFilePdf aria-hidden="true" />
                <p>Görüntülemek istediğiniz şartnameyi seçiniz</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
