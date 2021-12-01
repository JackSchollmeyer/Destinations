import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "../../../styles/Homepagestyles/FeaturedSection.module.css";
import TheAzores from "../../public/tropical/theAzores.jpg";
import Matterhorn from "../../public/mountainous/matterhorn.jpg";
import Sahara from "../../public/dryland/sahara.jpg";
import TheArcticHenge from "../../public/arctic/theArcticHenge.jpg";

export default function FeaturedSection() {
  return (
    <div className={s.background}>
      <div className={s.grid}>
        <h1 className={s.header}>Check out What's popular</h1>
        <div className={s.tallCard}>
          <h1>
            Take
            <br />
            - A -
            <br />
            Journey
          </h1>
        </div>
        <div className={s.card1}>
          <Image src={TheAzores} alt="The Azores" />
          <div className={s.whiteContainer}>
            <label className={s.labels}>
              Admire the beauty of a breathtaking island with its circular form
              and volcanic properties
            </label>
            <div className={s.linksBox}>
              <Link href="/tropical">
                <a className={s.links}>more</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={s.card2}>
          <Image src={Matterhorn} alt="Matterhorn" />
          <div className={s.whiteContainer}>
            <label className={s.labels}>
              See one of the most fascinating mountains in the world, with its
              nearly perfect pyramid shape
            </label>
            <div className={s.linksBox}>
              <Link href="/mountainous">
                <a className={s.links}>more</a>
              </Link>
            </div>
          </div>
        </div>
        <p>New locations added weekly!</p>
        <div className={s.wideCard}>
          <h1>
            <span>30</span>+ destinations around the
            <br /> globe
          </h1>
        </div>
        <div className={s.card3}>
          <Image src={TheArcticHenge} alt="The Arctic Henge" />
          <div className={s.whiteContainer}>
            <label className={s.labels}>
              Travel to Iceland to see a remarkable structure of arches and
              statues built from stone
            </label>
            <div className={s.linksBox}>
              <Link href="/arctic">
                <a className={s.links}>more</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={s.card4}>
          <Image src={Sahara} alt="Sahara" />
          <div className={s.whiteContainer}>
            <label className={s.labels}>
              Take an adventure through the dunes of the largest hot desert in
              the world
            </label>
            <div className={s.linksBox}>
              <Link href="/dryland">
                <a className={s.links}>more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
