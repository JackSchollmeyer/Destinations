import Image from "next/image";
import s from "../../styles/HomepageStyles/Home.module.css";
import FeaturedSection from "../components/HomepageComponents/FeaturedSection";
import QuoteBoxCarousel from "../components/HomepageComponents/QuoteBoxCarousel";
import Footer from "../components/HomepageComponents/Footer";
import Background from "../public/manLookingAtMountain.jpeg";

export default function Home() {
  return (
    <div>
      <div>
        <div className={s.homeContainer}>
          <div className={s.headerContainer}>
            <h1 className={s.header}>
              Welcome to <span>Destinations</span>
            </h1>
            <h2>- Discover the amazing world that God created -</h2>
          </div>
          {/* <div className={s.purposeContainer}>
            <h2>Purpose</h2>
            <p>
              My goal is to give others the chance to explore & learn about the
              fascinating landscapes in the world.
            </p>
          </div> */}
        </div>
        <div className={s.backgroundTriangle}></div>
        <div className={s.img}>
          <Image src={Background} alt="Rocky Island" />
        </div>
      </div>
      <QuoteBoxCarousel />
      <FeaturedSection />
      <Footer />
    </div>
  );
}
