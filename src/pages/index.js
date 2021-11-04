import Image from "next/image";
import s from "../../styles/HomepageStyles/Home.module.css";
import FeaturedSection from "../components/HomepageComponents/FeaturedSection";
import QuoteBoxCarousel from "../components/HomepageComponents/QuoteBoxCarousel";
import Footer from "../components/HomepageComponents/Footer";
import Background from "../public/rockyIsland.jpg";

export default function Home() {
  return (
    <div>
      <h1 className={s.header}>discover the world</h1>
      <div className={s.img}>
        <Image src={Background} alt="Rocky Island" />
      </div>
      <QuoteBoxCarousel />
      <FeaturedSection />
      <Footer />
    </div>
  );
}
