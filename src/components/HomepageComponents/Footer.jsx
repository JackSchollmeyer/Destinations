import React from "react";
import Link from "next/link";
import s from "../../../styles/HomepageStyles/Footer.module.css";
import { BiCopyright } from "react-icons/bi";
import { FaGithub, FaCodepen } from "react-icons/fa";
import {
  SiGmail,
  SiFreecodecamp,
  SiCodewars,
  SiInstagram,
} from "react-icons/si";

export default function Footer() {
  return (
    <div>
      <footer className={s.footer}>
        <div className={s.footerContent}>
          <div className={s.mediaSection}>
            <h2>Where to find me</h2>
            <div className={s.mediaIconsContainer}>
              <div>
                <Link href="https://github.com/">
                  <a target="_blank">
                    <FaGithub className={s.githubIcons} />
                  </a>
                </Link>
              </div>
              <span>/</span>
              <div>
                <Link href="https://codepen.io/">
                  <a target="_blank">
                    <FaCodepen className={s.codepenIcons} />
                  </a>
                </Link>
              </div>
              <span>/</span>
              <div>
                <Link href="https://www.instagram.com/">
                  <a target="_blank">
                    <SiInstagram className={s.instagramIcons} />
                  </a>
                </Link>
              </div>
              <span>/</span>
              <div>
                <Link href="https://www.freecodecamp.org/">
                  <a target="_blank">
                    <SiFreecodecamp className={s.freeCodeCampIcons} />
                  </a>
                </Link>
              </div>
              <span>/</span>
              <div>
                <Link href="https://accounts.google.com/">
                  <a target="_blank">
                    <SiGmail className={s.gmailIcons} />
                  </a>
                </Link>
              </div>
              <span>/</span>
              <div>
                <Link href="https://www.codewars.com/">
                  <a target="_blank">
                    <SiCodewars className={s.codewarsIcon} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={s.infoSection}>
            <div className={s.infoContainers}>
              <h2>Bible Verses</h2>
              <ul>
                <li>John 1:3</li>
                <li>Psalm 95:4-5</li>
                <li>Isaiah 40:8</li>
                <li>Romans 1:20</li>
                <li>Psalm 19:1</li>
                <li>Revelation 4:11</li>
              </ul>
            </div>
            <div className={s.infoContainers}>
              <h2>Support</h2>
              <ul>
                <li>Contact Me</li>
                <li>About Me</li>
                <li>FAQ</li>
                <li>Help</li>
                <li>Features</li>
              </ul>
            </div>
            <div className={s.infoContainers}>
              <h2>Legal</h2>
              <ul>
                <li>Terms & Services</li>
                <li>Privacy Policy</li>
                <li>Sources</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.copyrightContainer}>
          <BiCopyright className={s.copyrightIcon} />
          <h3>2021 Scholly Development</h3>
        </div>
      </footer>
    </div>
  );
}
