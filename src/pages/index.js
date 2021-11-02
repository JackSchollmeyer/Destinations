import Image from "next/image";
import Background from "../public/rockyIsland.jpg";
import s from "../../styles/Home.module.css";
import QuoteBox from "../components/QuoteBoxMachine";
import { FaGithub, FaCodepen } from "react-icons/fa";
import {
  SiGmail,
  SiFreecodecamp,
  SiCodewars,
  SiInstagram,
} from "react-icons/si";

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
      <div className={s.featuredSection}>
        <h1>Check out our most visited locations</h1>
        <div></div>
      </div>
      <footer className={s.footer}>
        <div className={s.mediaSection}>
          <h2>you can find me at</h2>
          <div className={s.mediaIconsContainer}>
            <div>
              <FaGithub className={s.githubIcon} />
            </div>
            <div>
              <FaCodepen className={s.codepenIcon} />
            </div>
            <div>
              <SiInstagram className={s.instagramIcon} />
            </div>
            <div>
              <SiFreecodecamp className={s.freeCodeCampIcon} />
            </div>
            <div>
              <SiGmail className={s.emailIcon} />
            </div>
            <div>
              <SiCodewars className={s.codewarsIcon} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
