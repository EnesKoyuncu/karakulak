import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ProductProvider } from "./context/ProductProvider";
import { SEO } from "./components/SEO";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { usePageTracking, trackPerformance } from "./utils/analytics";
import { useEffect, Suspense, lazy } from "react";
import { CookieConsentProvider } from "./context/CookieConsentProvider";
import CookieBanner from "./components/CookieBanner";
import LoadingSpinner from "./components/LoadingSpinner";
// İçe aktardığımız performans fonksiyonları
import { measureWebVitals, measureTiming } from "./utils/performance";

// Lazy load components
const ProductAllInfo = lazy(() => import("./components/ProductAllInfo"));
const Gallery = lazy(() => import("./components/Gallery"));
const YonetimKurulBaskani = lazy(
  () => import("./components/miniComponents/YonetimKurulBaskani")
);
const Contact = lazy(() => import("./components/Contact"));
const AfterSalesServices = lazy(
  () => import("./components/miniComponents/AfterSalesServices")
);
const Tarihce = lazy(() => import("./components/miniComponents/Tarihce"));
const ExportNetwork = lazy(() => import("./components/ExportNetwork"));
const TechnicalSpecification = lazy(
  () => import("./components/TechnicalSpecification")
);
const PressKit = lazy(() => import("./components/PressKit"));

// Analytics için wrapper component
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  usePageTracking();

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        await trackPerformance();
        // Web Vitals ölçümünü başlatıyoruz
        await measureWebVitals();
        measureTiming();
      } catch (error) {
        console.error("Performance tracking error:", error);
      }
    };

    loadAnalytics();
  }, []);

  return <>{children}</>;
};

// Kritik CSS'i inline olarak ekle
const criticalStyles = `
  .hero-section {
    min-height: 100vh;
    background-color: #fff;
  }
  .main-content {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

function App() {
  useEffect(() => {
    // Kritik olmayan kaynakları lazy load yap
    const lazyResources = [
      { type: "style", href: "/styles/non-critical.css" as const },
      { type: "script", src: "/js/analytics.js" as const },
    ];

    lazyResources.forEach((resource) => {
      if (resource.type === "style" && resource.href) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = resource.href;
        link.media = "print";
        link.onload = () => {
          link.media = "all";
        };
        document.head.appendChild(link);
      }
      // Script lazy load örneği de eklenebilir.
    });
  }, []);

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
                    element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <YonetimKurulBaskani />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/Tarihce"
                    element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <Tarihce />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/ihracat-agi"
                    element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <ExportNetwork />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/teknik-sartnameler"
                    element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <TechnicalSpecification />
                      </Suspense>
                    }
                  />
                  <Route path="/basin-kiti" element={<PressKit />} />
                  <Route
                    path="/satis-sonrasi-hizmetler"
                    element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <AfterSalesServices />
                      </Suspense>
                    }
                  />
                  <Route path="/iletisim" element={<Contact />} />
                  <Route
                    path="/products/:category/:id"
                    element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <ProductAllInfo />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/galeri"
                    element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <Gallery />
                      </Suspense>
                    }
                  />
                </Routes>
              </ErrorBoundary>
              <Footer />
            </AnalyticsWrapper>
          </Router>
        </ProductProvider>
        <CookieBanner />
      </ErrorBoundary>
      <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
    </CookieConsentProvider>
  );
}

export default App;
