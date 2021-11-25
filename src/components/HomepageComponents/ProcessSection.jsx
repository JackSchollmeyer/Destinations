import React from "react";
import Image from "next/image";
import s from "../../../styles/HomepageStyles/ProcessSection.module.css";
import Explore from "../../public/homeIllustrations/explore.svg";
import Research from "../../public/homeIllustrations/research.svg";
import Info from "../../public/homeIllustrations/info.svg";
import Publish from "../../public/homeIllustrations/publish.svg";

export default function ProcessSection() {
  return (
    <div className={s.background}>
      <p className={s.header}>
        <span>The 4-step process </span>- To ensure a memorable experience, I
        cautiously search for the best locations and make sure to include
        accurate information about them.
      </p>
      <div className={s.cardContainer}>
        <div className={s.leftCard}>
          <div className={s.illustration}>
            <Image src={Explore} alt="" />
          </div>
          <div className={s.cardText}>
            <h1>Explore</h1>
            <h2>
              First, I search around to find a destination that inspires me.
            </h2>
          </div>
          <p className={s.cardNumber}>01</p>
        </div>
        <div className={s.rightCard}>
          <div className={s.illustration}>
            <Image src={Research} alt="" />
          </div>
          <div className={s.cardText}>
            <h1>Research</h1>
            <h2>
              I'll then do some research to acquire information about the place
              I've chosen.
            </h2>
          </div>
          <p className={s.cardNumber}>02</p>
        </div>
        <div className={s.leftCard}>
          <div className={s.illustration}>
            <Image src={Info} alt="" />
          </div>
          <div className={s.cardText}>
            <h1>Implement</h1>
            <h2>
              Once I've got all the info, it's time to start building a
              structure.
            </h2>
          </div>
          <p className={s.cardNumber}>03</p>
        </div>
        <div className={s.rightCard}>
          <div className={s.illustration}>
            <Image src={Publish} alt="" />
          </div>
          <div className={s.cardText}>
            <h1>Publish</h1>
            <h2>
              After the form is complete, I then drop it in the library for
              others to enjoy.
            </h2>
          </div>
          <p className={s.cardNumber}>04</p>
        </div>
      </div>
    </div>
  );
}
