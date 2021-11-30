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
              This is the place to find new and exciting locations, learn about
              their history, and simply admire their natural beauty.
            </p>
            <div className={s.buttonContainer}>
              <div className={s.callToActionButtons}>
                <Link href="/tropical">See Gallery</Link>
              </div>
              <div className={s.callToActionButtons}>
                <Link href="/contact">Make a Request</Link>
              </div>
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
