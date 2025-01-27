import HeroLayout from "../components/Hero.jsx";
import ScrollAeroplane from "../components/ScrollAeroplane.jsx";
import TrendingDestinations from "../components/Trends.jsx";

export default function HomePage() {
  return (
    <>
      <HeroLayout />
      <ScrollAeroplane />
      <TrendingDestinations />
    </>
  );
}
