import Link from "next/link";
import s from "../../styles/HomepageStyles/Home.module.css";
import FeaturedSection from "../components/HomepageComponents/FeaturedSection";
import ProcessSection from "../components/HomepageComponents/ProcessSection";
import BioSection from "../components/HomepageComponents/BioSection";
import Footer from "../components/HomepageComponents/Footer";

export default function Home() {
  return (
    <div>
      <div className={s.backgroundImg}>
        <div className={s.backgroundOverlay}>
          <div className={s.homeContainer}>
            <h1 className={s.header}>
              <span className={s.headerSpan1}>Discover </span>
              <span className={s.headerSpan2}>the</span>
              <br />
              <span className={s.headerSpan3}>World</span>
            </h1>
            <p>
              Explore the unique beauty of various regions throughout the
              fascinating world that God created. Unveil new and inspiring
              places and learn about what makes them extraordinary.
            </p>
            <div className={s.buttonContainer}>
              <Link href="/tropical">
                <a className={s.callToActionButtons}>See Gallery</a>
              </Link>
              <Link href="/contact">
                <a className={s.callToActionButtons}>Make a Request</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FeaturedSection />
      <ProcessSection />
      <BioSection />
      <Footer />
    </div>
  );
}
