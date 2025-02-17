import { motion } from "framer-motion";
import "../../styles/miniComponentsStyle/YonetimKurulBaskani.css";
import SEO from "../SEO";
import { useLanguage } from "@/hooks/useLanguage";
import {
  IseoTextsLanguageSupport,
  seoTexts,
} from "@/data/chairmanOfTheBoardData";
export default function ChairmanOfTheBoard() {
  const { language } = useLanguage();

  const texts = seoTexts[language as keyof IseoTextsLanguageSupport];

  return (
    <>
      <SEO
        title={texts.title}
        description={texts.description}
        image="https://karakulakgroup.com/images/karakulakgroupLogo.webp" // TODO : değiştirilcek logo geldiğinde
        author="Karakulak Group"
        publisher="Karakulak Group"
        keywords={texts.keywords}
        ogType="website"
      />

      <section className="yonetim-section" aria-labelledby="yonetim-baslik">
        <div className="yonetim-container">
          <motion.article
            className="yonetim-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <header className="yonetim-text">
              <h1 id="yonetim-baslik">
                {" "}
                {language === "tr"
                  ? "YÖNETİM KURULU BAŞKANI"
                  : "CHAIRMAN OF THE BOARD"}{" "}
              </h1>
              <div className="title-underline" aria-hidden="true"></div>

              <motion.div
                className="message-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <blockquote>
                  <p style={{ textAlign: "justify" }}>
                    {language === "tr"
                      ? `Firmamız ve çalışanlarımız "her noktada kalite" anlayışını,
                    "SÜREKLİ İŞ GELİŞTİRME MODELİ" sistemi ve "TOPLAM KALİTE
                    YÖNETİMİ"ni ilke olarak benimsemiş, KURUMSALLAŞMAYA BÜYÜK
                    ÖNEM vererek alanında uzman kişiler aracılığı ile müşteri
                    memnuniyetini kalite odaklı olarak sağlamayı hedeflemiştir.`
                      : `Our company and employees have adopted the understanding of "quality at every point", the "CONTINUOUS BUSINESS IMPROVEMENT MODEL" system and "TOTAL QUALITY MANAGEMENT" as a principle, and aims to ensure customer satisfaction in a quality-oriented manner through expert individuals by attaching great importance to INSTITUTIONALIZATION.`}
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    {language === "tr"
                      ? `Üretim aşamalarının her evresinde insan sağlığını ve
                    değerini, müşteri memnuniyetinden ve Karakulak kalitesinden
                    ödün vermeden gözetmekteyiz. Bu nedenle yurtdışı ve yurtiçi
                    memnun edilmiş müşterilerimizin güvenlerini kazanmanın haklı
                    gururunu yaşıyoruz.`
                      : `At every stage of the production process, we take care of human health and value, without compromising customer satisfaction and Karakulak quality. Therefore, we are proud to have gained the trust of satisfied customers from abroad and domestic.`}
                  </p>
                </blockquote>
              </motion.div>

              <motion.footer
                className="signature-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <cite className="name">HAMZA CAN KARAKULAK</cite>
                <span className="title" aria-label="Pozisyon">
                  {language === "tr"
                    ? "Yönetim Kurulu Başkanı"
                    : "Chairman of the Board"}
                </span>
              </motion.footer>
            </header>
          </motion.article>
        </div>
      </section>
    </>
  );
}
