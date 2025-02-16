import { motion } from "framer-motion";
import { FaTools, FaShieldAlt, FaComments } from "react-icons/fa";
import "../../styles/miniComponentsStyle/AfterSalesServices.css";
import { SEO } from "../SEO";
import { useLanguage } from "@/hooks/useLanguage";
import {
  translations,
  ITranslationsLanguageSupport,
} from "@/data/afterSalesServicesData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function AfterSalesServices() {
  const { language } = useLanguage();

  const texts = translations[language as keyof ITranslationsLanguageSupport];

  return (
    <>
      <SEO
        title={texts.seo.title}
        description={texts.seo.description}
        keywords={texts.seo.keywords}
      />

      <main className="after-sales" role="main">
        <header className="header">
          <h1>{texts.headerTitle}</h1>
          <div className="title-underline" role="presentation"></div>
        </header>

        <motion.section
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label={
            language === "tr"
              ? "Satış sonrası hizmetlerimiz"
              : "Our After-Sales Services"
          }
        >
          <motion.article className="service-card" variants={itemVariants}>
            <div className="icon-wrapper" aria-hidden="true">
              <FaTools className="service-icon" />
            </div>
            <h2>{texts.service1.title}</h2>
            <p>{texts.service1.description}</p>
          </motion.article>

          <motion.article className="service-card" variants={itemVariants}>
            <div className="icon-wrapper" aria-hidden="true">
              <FaShieldAlt className="service-icon" />
            </div>
            <h2>{texts.service2.title}</h2>
            <p>{texts.service2.description}</p>
            <aside className="guarantee-note">
              <strong>
                {language === "tr"
                  ? "Yedek parça desteği:"
                  : "Spare parts support:"}
              </strong>{" "}
              {texts.service2.note}
            </aside>
          </motion.article>

          <motion.article className="service-card" variants={itemVariants}>
            <div className="icon-wrapper" aria-hidden="true">
              <FaComments className="service-icon" />
            </div>
            <h2>{texts.service3.title}</h2>
            <p>{texts.service3.description}</p>
          </motion.article>
        </motion.section>
      </main>
    </>
  );
}
