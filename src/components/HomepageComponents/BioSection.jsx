import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "../../../styles/HomepageStyles/BioSection.module.css";
import BioPicture from "../../public/bioPicture.jpg";

export default function BioSection() {
  return (
    <div className={s.background}>
      <div className={s.bioContainer}>
        <div className={s.textContainer}>
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={s.button}>
            <Link href="/">Portfolio</Link>
          </div>
        </div>
        <div className={s.img}>
          <Image src={BioPicture} alt="ME" />
        </div>
      </div>
    </div>
  );
}