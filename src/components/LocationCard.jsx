import React from "react";
import s from "../../styles/LocationCard.module.css";
import Image from "next/image";
import Link from "next/link";
import SeychellesIslands from "../public/tropical/SeychellesIslands.jpg";

export default function LocationCard(image, name, info, learnMore, locate) {
  return (
    <div className={s.container}>
      <div className={s.img}>
        <Image src={SeychellesIslands} alt="SeychellesIslands" />
      </div>
      <div className={s.infoContainer}>
        <div className={s.nameAndBtn}>
          <h1>Seychelles Islands</h1>
          <button className={s.expandButton}>Expand</button>
        </div>
        <p className={s.discription}>
          Lorem ipsung about the elder worlds of the world when the giants heard
          the speaking of the opld men in the city wandering around in the foggy
          homees of ireland. lorem ipsung about the elder worlds of the world
          when the giants heard the speaking of the opld men in the city
          wandering around in the foggy homees of ireland.
        </p>
        <div className={s.links}>
          <Link href="https://en.wikipedia.org/wiki/Seychelles">
            <a className={s.learnMore} target="_blank">
              Learn more
            </a>
          </Link>
          <Link href="https://www.google.com/maps/place/Seychelles/@-4.5833118,55.6579119,15z/data=!3m1!4b1!4m5!3m4!1s0x231fdab48c500c57:0x536f1be1f469e0cb!8m2!3d-4.5833333!4d55.6666667">
            <a className={s.location} target="_blank">
              Locate
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
