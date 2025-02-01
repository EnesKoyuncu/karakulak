import { useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaDownload, FaEye } from "react-icons/fa";
import "../styles/TechnicalSpecification.css";

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
  const [selectedDoc, setSelectedDoc] = useState<Specification | null>(null);

  const handleDocClick = (doc: Specification) => {
    setSelectedDoc(doc);
  };

  const handleDownload = (docUrl: string) => {
    window.open(docUrl, "_blank");
  };

  return (
    <section className="technical-specs">
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>TEKNİK ŞARTNAMELER</h1>
        <div className="title-underline"></div>
      </motion.div>

      <div className="specs-container">
        <motion.div
          className="specs-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
            >
              <div className="doc-icon">
                <FaFilePdf />
              </div>
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
        >
          {selectedDoc ? (
            <>
              <div className="preview-header">
                <h2>{selectedDoc.title}</h2>
                <div className="preview-image">
                  <img src={selectedDoc.image} alt={selectedDoc.title} />
                </div>
                <div className="preview-actions">
                  <motion.button
                    className="preview-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(selectedDoc.docxUrl, "_blank")}
                  >
                    <FaEye />
                    <span>Görüntüle</span>
                  </motion.button>
                  <motion.button
                    className="download-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDownload(selectedDoc.docxUrl)}
                  >
                    <FaDownload />
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
            <div className="no-selection">
              <FaFilePdf />
              <p>Görüntülemek istediğiniz şartnameyi seçiniz</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
