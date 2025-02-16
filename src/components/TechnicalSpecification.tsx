// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaFilePdf, FaDownload, FaEye } from "react-icons/fa";
// import "../styles/TechnicalSpecification.css";
// import { SEO } from "./SEO";
// import { useLanguage } from "@/hooks/useLanguage";

// interface ISpecification {
//   id: number;
//   title: {
//     tr: string;
//     en: string;
//   };
//   docxUrl: string;
//   category: {
//     tr: string;
//     en: string;
//   };
//   image: string;
// }

// // Statik şartname verileri
// const specifications: ISpecification[] = [
//   {
//     id: 1,
//     title: {
//       tr: "HİDROLİK SIKIŞTIRMALI ÇÖP KASASI TEKNİK ŞARTNAME",
//       en: "HYDRAULIC COMPACTOR GARBAGE TRUCK TECHNICAL SPECIFICATION",
//     },
//     docxUrl: "/docs/hidrolik-cop-kasasi-sartname.docx",
//     category: {
//       tr: "Çöp Kasaları",
//       en: "Garbage Trucks",
//     },
//     image: "/images/products/cop-kamyonu.webp",
//   },
//   {
//     id: 2,
//     title: {
//       tr: "SU TANKERİ TEKNİK ŞARTNAME",
//       en: "WATER TANKER TECHNICAL SPECIFICATION",
//     },
//     docxUrl: "/docs/su-tankeri-sartname.docx",
//     category: {
//       tr: "Su Tankerleri",
//       en: "Water Tankers",
//     },
//     image: "/images/products/su-tankeri.webp",
//   },
//   {
//     id: 3,
//     title: {
//       tr: "TELESOKOPİK PLATFORM ŞARTNAME",
//       en: "TELESCOPIC PLATFORM SPECIFICATION",
//     },
//     docxUrl: "/docs/platform-sartname.docx",
//     category: {
//       tr: "Platformlar",
//       en: "Platforms",
//     },
//     image: "/images/products/teleskopik-platform.webp",
//   },
//   {
//     id: 4,
//     title: {
//       tr: "VİDANJÖR TEKNİK ŞARTNAME",
//       en: "VACUUM TRUCK TECHNICAL SPECIFICATION",
//     },
//     docxUrl: "/docs/vidanjor-sartname.docx",
//     category: {
//       tr: "Vidanjörler",
//       en: "Vacuum Trucks",
//     },
//     image: "/images/products/vidanjor.webp",
//   },
//   {
//     id: 5,
//     title: {
//       tr: "SKIP LOADER TEKNİK ŞARTNAME",
//       en: "SKIP LOADER TECHNICAL SPECIFICATION",
//     },
//     docxUrl: "/docs/skip-loader-sartname.docx",
//     category: {
//       tr: "Skip Loaderlar",
//       en: "Skip Loaders",
//     },
//     image: "/images/products/skip-loader.webp",
//   },
// ];

// const TechnicalSpecification: React.FC = () => {
//   const [selectedDoc, setSelectedDoc] = useState<ISpecification>(
//     specifications[0]
//   );
//   const { language } = useLanguage();

//   const handleDocClick = (doc: ISpecification) => {
//     setSelectedDoc(doc);
//   };

//   const handleDownload = (docUrl: string) => {
//     window.open(docUrl, "_blank");
//   };

//   return (
//     <>
//       <SEO
//         title={
//           language === "tr"
//             ? "Teknik Şartnameler | Ayalka Makina"
//             : "Technical Specifications | Ayalka Makina"
//         }
//         description={
//           language === "tr"
//             ? "Ayalka Makina ürünlerine ait teknik şartnameler. Çöp kasaları, tankerler, platformlar ve diğer araç üstü ekipmanların detaylı teknik özellikleri ve standartları."
//             : "Technical specifications for Ayalka Makina products. Detailed technical features and standards for garbage trucks, tankers, platforms and other vehicle-mounted equipment."
//         }
//         keywords={
//           language === "tr"
//             ? "ayalka teknik şartname, çöp kasası şartname, su tankeri şartname, platform şartname, araç üstü ekipman teknik özellikler"
//             : "ayalka technical specifications, garbage truck specification, water tanker spec, platform specification, vehicle-mounted equipment technical features"
//         }
//         image="/images/products/technical-specs-cover.jpg"
//       />

//       <section className="technical-specs" role="main">
//         <motion.header
//           className="header"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1>
//             {language === "tr"
//               ? "TEKNİK ŞARTNAMELER"
//               : "TECHNICAL SPECIFICATIONS"}
//           </h1>
//           <div className="title-underline" aria-hidden="true"></div>
//         </motion.header>

//         <div className="specs-container">
//           <motion.div
//             className="specs-list"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             role="navigation"
//             aria-label={
//               language === "tr" ? "Şartname Listesi" : "Specification List"
//             }
//           >
//             {specifications.map((doc) => (
//               <motion.div
//                 key={doc.id}
//                 className={`doc-item ${
//                   selectedDoc?.id === doc.id ? "active" : ""
//                 }`}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => handleDocClick(doc)}
//                 role="button"
//                 tabIndex={0}
//                 aria-selected={selectedDoc?.id === doc.id}
//                 aria-label={
//                   language === "tr"
//                     ? `${doc.title.tr} şartnamesini görüntüle`
//                     : `View the ${doc.title.en} specification`
//                 }
//               >
//                 <span className="doc-icon" aria-hidden="true">
//                   <FaFilePdf />
//                 </span>
//                 <div className="doc-info">
//                   <h3>
//                     {doc.title[language as keyof ISpecification["title"]]}
//                   </h3>
//                   <span className="category">
//                     {doc.category[language as keyof ISpecification["category"]]}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             className="doc-preview"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             aria-live="polite"
//             role="region"
//             aria-label={
//               language === "tr" ? "Şartname Önizleme" : "Specification Preview"
//             }
//           >
//             {selectedDoc ? (
//               <>
//                 <div className="preview-header">
//                   <h2>
//                     {
//                       selectedDoc.title[
//                         language as keyof ISpecification["title"]
//                       ]
//                     }
//                   </h2>
//                   <div className="preview-image">
//                     <img
//                       src={selectedDoc.image}
//                       alt={`${
//                         selectedDoc.title[
//                           language as keyof ISpecification["title"]
//                         ]
//                       } ${
//                         language === "tr" ? "ürün görseli" : "product image"
//                       }`}
//                       loading="lazy"
//                     />
//                   </div>
//                   <div
//                     className="preview-actions"
//                     role="group"
//                     aria-label={
//                       language === "tr"
//                         ? "Şartname İşlemleri"
//                         : "Specification Actions"
//                     }
//                   >
//                     <motion.button
//                       className="preview-btn"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => window.open(selectedDoc.docxUrl, "_blank")}
//                       aria-label={
//                         language === "tr"
//                           ? `${selectedDoc.title.tr} şartnamesini görüntüle`
//                           : `View the ${selectedDoc.title.en} specification`
//                       }
//                     >
//                       <FaEye aria-hidden="true" />
//                       <span>{language === "tr" ? "Görüntüle" : "View"}</span>
//                     </motion.button>
//                     <motion.button
//                       className="download-btn"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => handleDownload(selectedDoc.docxUrl)}
//                       aria-label={
//                         language === "tr"
//                           ? `${selectedDoc.title.tr} şartnamesini indir`
//                           : `Download the ${selectedDoc.title.en} specification`
//                       }
//                     >
//                       <FaDownload aria-hidden="true" />
//                       <span>{language === "tr" ? "İndir" : "Download"}</span>
//                     </motion.button>
//                   </div>
//                 </div>
//                 <div className="preview-content">
//                   <p>
//                     {language === "tr"
//                       ? "Şartnameyi görüntülemek veya indirmek için yukarıdaki butonları kullanabilirsiniz."
//                       : "Use the buttons above to view or download the specification."}
//                   </p>
//                 </div>
//               </>
//             ) : (
//               <div
//                 className="no-selection"
//                 role="alert"
//                 aria-label={
//                   language === "tr"
//                     ? "Şartname Seçilmedi"
//                     : "No specification selected"
//                 }
//               >
//                 <FaFilePdf aria-hidden="true" />
//                 <p>
//                   {language === "tr"
//                     ? "Görüntülemek istediğiniz şartnameyi seçiniz"
//                     : "Please select a specification to view"}
//                 </p>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TechnicalSpecification;
