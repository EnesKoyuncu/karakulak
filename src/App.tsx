import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import YonetimKurulBaskani from "./components/miniComponents/YonetimKurulBaskani";
import Contact from "./components/Contact";
import AfterSalesServices from "./components/miniComponents/AfterSalesServices";
import Tarihce from "./components/miniComponents/Tarihce";
import ExportNetwork from "./components/ExportNetwork";
import TechnicalSpecification from "./components/TechnicalSpecification";
import PressKit from "./components/PressKit";
import { ProductProvider } from "./context/ProductContext";
import ProductAllInfo from "./components/ProductAllInfo";
import Gallery from "./components/Gallery";
import { SEO } from "./components/SEO";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { usePageTracking, trackPerformance } from "./utils/analytics";
import { useEffect } from "react";
import { CookieConsentProvider } from "./context/CookieConsentContext";
import CookieBanner from "./components/CookieBanner";

// Analytics için wrapper component oluşturalım
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  usePageTracking();

  // trackPerformance'ı sadece bir kez çalıştır
  useEffect(() => {
    // Sayfa tam yüklendiğinde performans metriklerini ölç
    const timer = setTimeout(() => {
      trackPerformance();
    }, 0);

    return () => clearTimeout(timer);
  }, []); // Boş dependency array ile sadece mount'ta çalışır

  return <>{children}</>;
};

function App() {
  return (
    <CookieConsentProvider>
      <ErrorBoundary>
        <SEO
          title="Ayalka Makina | Araç Üstü Ekipman Üreticisi"
          description="Ayalka Makina, 40'tan fazla ülkeye ihracat yapan, çöp kasası, su tankeri, vidanjör, hooklift ve diğer araç üstü ekipman üreticisidir."
          keywords="ayalka makina, çöp kasası, su tankeri, vidanjör, hooklift, araç üstü ekipman, garbage truck, water tank"
        />

        <ProductProvider>
          <Router>
            <AnalyticsWrapper>
              <Header />
              <ErrorBoundary>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="/yonetim-kurul-baskani"
                    element={<YonetimKurulBaskani />}
                  />
                  <Route path="/Tarihce" element={<Tarihce />} />
                  <Route path="/ihracat-agi" element={<ExportNetwork />} />
                  <Route
                    path="/teknik-sartnameler"
                    element={<TechnicalSpecification />}
                  />
                  <Route path="/basin-kiti" element={<PressKit />} />
                  <Route
                    path="/satis-sonrasi-hizmetler"
                    element={<AfterSalesServices />}
                  />
                  <Route path="/iletisim" element={<Contact />} />
                  <Route
                    path="/products/:category/:id"
                    element={<ProductAllInfo />}
                  />
                  <Route path="/galeri" element={<Gallery />} />
                </Routes>
              </ErrorBoundary>
              <Footer />
            </AnalyticsWrapper>
          </Router>
        </ProductProvider>
        <CookieBanner />
      </ErrorBoundary>
    </CookieConsentProvider>
  );
}

export default App;
