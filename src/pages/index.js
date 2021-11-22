import Image from "next/image";
import s from "../../styles/HomepageStyles/Home.module.css";
import FeaturedSection from "../components/HomepageComponents/FeaturedSection";
import GoalSection from "../components/HomepageComponents/GoalSection";
import Footer from "../components/HomepageComponents/Footer";
import Background from "../public/manLookingAtMountain.jpeg";

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
              Dive into the unknown to reimagine the world that we live in. Find
              new and exciting locations where you can admire their natural
              beauty, learn facts about them and where they’re located, and
              maybe even feel inspired to do some of your own research to find
              places that you'd like to see added to the library.
            </p>
            <button className={s.requestButton}>Make a request</button>
          </div>
        </div>
      </div>
      <GoalSection />
      <FeaturedSection />
      <Footer />
    </div>
  );
}
