import Image from "next/image";
import Background from "../public/rockyIsland.jpg";
import s from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faCodepen,
  faFreeCodeCamp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import QuoteBox from "../components/QuoteBoxMachine";

export default function Home() {
  return (
    <div>
      <h1 className={s.header}>discover the world</h1>
      <div className={s.img}>
        <Image src={Background} alt="Lake Between Mountains" />
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
      <footer className={s.footer}>
        <h2>you can find me at</h2>
        <div className={s.mediaIconsContainer}>
          <div>
            <FontAwesomeIcon icon={faGithub} className={s.githubIcon} />
          </div>
          <div>
            <FontAwesomeIcon icon={faCodepen} className={s.codepenIcon} />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faFreeCodeCamp}
              className={s.freeCodeCampIcon}
            />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} className={s.instagramIcon} />
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className={s.emailIcon} />
          </div>
        </div>
      </footer>
    </div>
  );
}
