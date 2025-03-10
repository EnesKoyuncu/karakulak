import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import CookieBanner from "./components/CookieBanner";

import { ProductProvider } from "./context/ProductProvider";

// import { SEO } from "./components/SEO";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { usePageTracking, trackPerformance } from "./utils/analytics";
import { useLanguage } from "./hooks/useLanguage";
import { CookieConsentProvider } from "./context/CookieConsentProvider";

// İçe aktardığımız performans fonksiyonları
import { measureWebVitals, measureTiming } from "./utils/performance";

// Lazy load components
const ProductAllInfo = lazy(() => import("./components/ProductAllInfo"));
const Gallery = lazy(() => import("./components/Gallery"));
const ChairmanOfTheBoard = lazy(
  () => import("./components/miniComponents/ChairmanOfTheBoard")
);
const Contact = lazy(() => import("./components/Contact"));
const AfterSalesServices = lazy(
  () => import("./components/miniComponents/AfterSalesServices")
);
const History = lazy(() => import("./components/miniComponents/History"));
const ExportNetwork = lazy(() => import("./components/ExportNetwork"));

const PressKit = lazy(() => import("./components/PressKit"));

import { Analytics } from "@vercel/analytics/react";

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

function AppContent() {
  const { language } = useLanguage();
  const location = useLocation();
  const supportedLanguages = ["tr", "en"];

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

  if (!supportedLanguages.includes(language)) {
    return <Navigate to="/en" replace />;
  }

  return (
    <>
      {/* <SEO
        title="Ayalka Makina | Araç Üstü Ekipman Üreticisi"
        description="Ayalka Makina, 40'tan fazla ülkeye ihracat yapan, çöp kasası, su tankeri, vidanjör, hooklift ve diğer araç üstü ekipman üreticisidir."
        keywords="ayalka makina, çöp kasası, su tankeri, vidanjör, hooklift, araç üstü ekipman, garbage truck, water tank"
      /> */}
      <ProductProvider>
        <AnalyticsWrapper>
          <Header />
          <ErrorBoundary>
            <Routes location={location} key={location.pathname}>
              <Route path="/:lang" element={<HomePage />} />
              <Route
                path="/:lang/chairman-of-the-board"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ChairmanOfTheBoard />
                  </Suspense>
                }
              />
              <Route
                path="/:lang/history"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <History />
                  </Suspense>
                }
              />
              <Route
                path="/:lang/export-network"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ExportNetwork />
                  </Suspense>
                }
              />
              {/* <Route
                path="/:lang/technical-specifications"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <TechnicalSpecification />
                  </Suspense>
                }
              /> */}
              <Route path="/:lang/press-kit" element={<PressKit />} />
              <Route
                path="/:lang/after-sales-services"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AfterSalesServices />
                  </Suspense>
                }
              />
              <Route path="/:lang/contact" element={<Contact />} />
              <Route
                path="/:lang/products/:category/:id"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ProductAllInfo />
                  </Suspense>
                }
              />
              <Route
                path="/:lang/gallery"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Gallery />
                  </Suspense>
                }
              />
              {/* Eğer herhangi bir dil kodu olmadan erişilirse yönlendirme yap */}
              <Route
                path="/"
                element={<Navigate to={`/${language}`} replace />}
              />
            </Routes>
          </ErrorBoundary>
          <Footer />
        </AnalyticsWrapper>
      </ProductProvider>
      <CookieBanner />
      <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
    </>
  );
}

function App() {
  return (
    <CookieConsentProvider>
      <ErrorBoundary>
        <Router>
          <AppContent />
          <Analytics />
        </Router>
      </ErrorBoundary>
    </CookieConsentProvider>
  );
}

export default App;
