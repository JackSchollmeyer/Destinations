import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "../../../styles/Homepagestyles/FeaturedSection.module.css";
import TheAzores from "../../public/tropical/theAzores.jpg";
import KhaoPhingKan from "../../public/tropical/khaoPhingKan.jpg";
import Matterhorn from "../../public/mountainous/matterhorn.jpg";
import MountFuji from "../../public/mountainous/mountFuji.jpg";
import Sahara from "../../public/dryland/sahara.jpg";
import TheArcticHenge from "../../public/arctic/theArcticHenge.jpg";

export default function FeaturedSection() {
  return (
    <div className={s.background}>
      <div className={s.grid}>
        <h1 className={s.header}>Check out What's popular</h1>
        <div className={s.tallCard}>
          <Image src={Sahara} alt="Sahara" />
        </div>
        <div className={s.card1}>
          <Image src={TheAzores} alt="The Azores" />
        </div>
        <div className={s.card2}>
          <Image src={Matterhorn} alt="Matterhorn" />
        </div>
        <p>New locations added weekly!</p>
        <div className={s.wideCard}>
          <Image src={TheArcticHenge} alt="The Arctic Henge" />
        </div>
        <div className={s.card3}>
          <Image src={KhaoPhingKan} alt="Khao Phing Kan" />
        </div>
        <div className={s.card4}>
          <Image src={MountFuji} alt="Mount Fuji" />
        </div>
      </div>
    </div>
  );
}
