import Image from "next/image";
import s from "../../styles/HomepageStyles/Home.module.css";
import FeaturedSection from "../components/HomepageComponents/FeaturedSection";
import GoalSection from "../components/HomepageComponents/GoalSection";
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
        </div>
        <div className={s.backgroundTriangle}></div>
        <div className={s.img}>
          <Image src={Background} alt="Rocky Island" />
        </div>
      </div>
      <GoalSection />
      <FeaturedSection />
      <Footer />
    </div>
  );
}
