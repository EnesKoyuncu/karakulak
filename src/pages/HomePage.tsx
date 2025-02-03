import HeroSlider from "../components/HeroSlider";
import MapLocationShowcase from "../components/miniComponents/MapLocationShowcase";
import WhoWeAreMini from "../components/miniComponents/WhoWeAreMini";
import Products from "../components/Products";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <WhoWeAreMini />
      <Products />
      <MapLocationShowcase />
    </>
  );
}
