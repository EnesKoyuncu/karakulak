import { motion } from "framer-motion";
import "../../styles/miniComponentsStyle/YonetimKurulBaskani.css";
import { SEO } from "../SEO";
import { useLanguage } from "@/hooks/useLanguage";

export default function ChairmanOfTheBoard() {
  const { language } = useLanguage();

  return (
    <>
      <SEO
        title="Yönetim Kurulu Başkanı | Ayalka Makina"
        description="Ayalka Makina Yönetim Kurulu Başkanı Kerim Karakulak'ın mesajı. Kalite odaklı üretim, müşteri memnuniyeti ve kurumsallaşma ilkelerimiz hakkında bilgi alın."
        keywords="kerim karakulak, ayalka yönetim kurulu başkanı, ayalka başkan mesajı, ayalka kalite politikası, ayalka kurumsal değerler"
        image="/images/yonetim/kerim-karakulak.jpg"
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
                  <p>
                    {language === "tr"
                      ? `Firmamız ve çalışanlarımız "her noktada kalite" anlayışını,
                    "SÜREKLİ İŞ GELİŞTİRME MODELİ" sistemi ve "TOPLAM KALİTE
                    YÖNETİMİ"ni ilke olarak benimsemiş, KURUMSALLAŞMAYA BÜYÜK
                    ÖNEM vererek alanında uzman kişiler aracılığı ile müşteri
                    memnuniyetini kalite odaklı olarak sağlamayı hedeflemiştir.`
                      : `Our company and employees have adopted the understanding of "quality at every point", the "CONTINUOUS BUSINESS IMPROVEMENT MODEL" system and "TOTAL QUALITY MANAGEMENT" as a principle, and aims to ensure customer satisfaction in a quality-oriented manner through expert individuals by attaching great importance to INSTITUTIONALIZATION.`}
                  </p>
                  <p>
                    {language === "tr"
                      ? `Üretim aşamalarının her evresinde insan sağlığını ve
                    değerini, müşteri memnuniyetinden ve Ayalka kalitesinden
                    ödün vermeden gözetmekteyiz. Bu nedenle yurtdışı ve yurtiçi
                    memnun edilmiş müşterilerimizin güvenlerini kazanmanın haklı
                    gururunu yaşıyoruz.`
                      : `At every stage of the production process, we take care of human health and value, without compromising customer satisfaction and Ayalka quality. Therefore, we are proud to have gained the trust of satisfied customers from abroad and domestic.`}
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
                <cite className="name">KERİM KARAKULAK</cite>
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
