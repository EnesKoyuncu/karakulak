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

function App() {
  return (
    <ProductProvider>
      <Router>
        <Header />
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
          <Route path="/products/:category/:id" element={<ProductAllInfo />} />
        </Routes>
        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;
