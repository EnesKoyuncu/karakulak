import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/miniComponentsStyle/Tarihce.css";
import { useLocation } from "react-router-dom";
import { SEO } from "../SEO";
import { useLanguage } from "@/hooks/useLanguage";
import { historyTexts } from "@/data/historyData";

const History: React.FC = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <SEO
        title={
          historyTexts.seo.title[
            language as keyof typeof historyTexts.seo.title
          ]
        }
        description={
          historyTexts.seo.description[
            language as keyof typeof historyTexts.seo.description
          ]
        }
        keywords={
          historyTexts.seo.keywords[
            language as keyof typeof historyTexts.seo.keywords
          ]
        }
        image="/images/facility/ayalka-tesis.jpg"
      />

      <article className="tarihce-section" aria-labelledby="tarihce-baslik">
        <div className="tarihce-container">
          <motion.header
            className="tarihce-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="tarihce-baslik">
              {historyTexts.title[language as keyof typeof historyTexts.title]}
            </h1>
            <div className="title-underline" aria-hidden="true"></div>
          </motion.header>

          <div className="tarihce-content">
            <motion.section
              className="content-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <section
                className="history-section"
                aria-label="Kuruluş Hikayemiz"
              >
                <p className="main-text">
                  {
                    historyTexts.sections.history.mainText[
                      language as keyof typeof historyTexts.sections.history.mainText
                    ]
                  }
                </p>
              </section>

              <section
                className="facility-section"
                aria-labelledby="tesis-baslik"
              >
                <h2 id="tesis-baslik">
                  {
                    historyTexts.sections.facility.title[
                      language as keyof typeof historyTexts.sections.facility.title
                    ]
                  }
                </h2>
                <p>
                  {
                    historyTexts.sections.facility.description[
                      language as keyof typeof historyTexts.sections.facility.description
                    ]
                  }
                </p>
              </section>

              <section
                className="quality-section"
                aria-labelledby="kalite-baslik"
              >
                <h2 id="kalite-baslik">
                  {
                    historyTexts.sections.quality.title[
                      language as keyof typeof historyTexts.sections.quality.title
                    ]
                  }
                </h2>
                <p>
                  {
                    historyTexts.sections.quality.description[
                      language as keyof typeof historyTexts.sections.quality.description
                    ]
                  }
                </p>
              </section>

              <section
                className="customer-section"
                aria-label="Müşteri Odaklı Yaklaşımımız"
              >
                <p>
                  {
                    historyTexts.sections.customer.description[
                      language as keyof typeof historyTexts.sections.customer.description
                    ]
                  }
                </p>
              </section>
            </motion.section>
          </div>
        </div>
      </article>
    </>
  );
};

export default History;
