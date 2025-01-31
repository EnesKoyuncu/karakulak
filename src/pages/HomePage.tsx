import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import MapLocationShowcase from "../components/miniComponents/MapLocationShowcase";
import WhoWeAreMini from "../components/miniComponents/WhoWeAreMini";

import Products from "../components/Products";
export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSlider />
      <WhoWeAreMini />
      <Products />
      <MapLocationShowcase />
      <Footer />
    </>
  );
}
