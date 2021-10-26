import Image from "next/image";
import Background from "../public/lightInSnow.jpg";
import s from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faCodepen,
  faFreeCodeCamp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div>
      <div className={s.headerContainer}>
        <h1 className={s.header}>discover the world</h1>
      </div>
      <div className={s.img}>
        <Image src={Background} alt="Lake Between Mountains" />
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
