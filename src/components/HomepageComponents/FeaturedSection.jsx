import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "../../../styles/Homepagestyles/FeaturedSection.module.css";
import TheAzores from "../../public/tropical/theAzores.jpg";
import KhaoPhingKan from "../../public/tropical/khaoPhingKan.jpg";
import CookIslands from "../../public/tropical/cookIslands.jpg";
import SeychellesIslands from "../../public/tropical/SeychellesIslands.jpg";
import AmazonRainforest from "../../public/tropical/amazonRainforest.jpg";

export default function FeaturedSection() {
  return (
    <div>
      <div className={s.featuredSection}>
        <h1 className={s.header}>Take a look at what's new to the library!</h1>
        <div className={s.imgSection}>
          <div className={s.imgSectionContainers}>
            <Link href="/tropical">
              <a className={s.img}>
                <Image src={TheAzores} alt="The Azores" />
                <label>The Azores</label>
              </a>
            </Link>
            <Link href="/tropical">
              <a className={s.img}>
                <Image src={KhaoPhingKan} alt="Khao Phing Kan" />
                <label>Khao Phing Kan</label>
              </a>
            </Link>
            <Link href="/tropical">
              <a className={s.img}>
                <Image src={AmazonRainforest} alt="Amazon Rainforest" />
                <label>Amazon Rainforest</label>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
