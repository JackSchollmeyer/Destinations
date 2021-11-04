import Image from "next/image";
import s from "../../styles/HomepageStyles/Home.module.css";
import QuoteBox from "../components/QuoteBoxMachine";
import Footer from "../components/HomepageComponents/Footer";
import FeaturedSection from "../components/HomepageComponents/FeaturedSection";
import Background from "../public/rockyIsland.jpg";

export default function Home() {
  return (
    <div>
      <h1 className={s.header}>discover the world</h1>
      <div className={s.img}>
        <Image src={Background} alt="Rocky Island" />
      </div>

      <div className={s.quoteBox}>
        <QuoteBox
          quote="In all things of nature there is something of the marvelous."
          author="Aristotle"
        />
        <QuoteBox
          quote="Over every mountain there is a path, although it may not be seen from the valley."
          author="Theodore Roethke"
        />
        <QuoteBox
          quote="Looking at beauty in the world, is the first step of purifying the mind."
          author="Amit Ray"
        />
        <QuoteBox
          quote="Look deep into nature, and then you will understand everything better."
          author="Albert Einstein"
        />
        <QuoteBox
          quote="Those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts."
          author="Rachel Carson"
        />
        <QuoteBox
          quote="If you truly love nature, you will find beauty everywhere."
          author="Laura Ingalls Wilder"
        />
      </div>
      <FeaturedSection />
      <Footer />
    </div>
  );
}
