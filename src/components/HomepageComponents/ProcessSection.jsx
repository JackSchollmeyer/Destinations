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
      <div className={s.cardContainer}>
        <div className={s.leftCard}>
          <div className={s.leftIllustration}>
            <Image src={Explore} alt="" />
          </div>
          <div className={s.leftCardText}>
            <h1>Explore</h1>
            <h2>
              I first do some searching to find something that inspires me.
            </h2>
          </div>
          <p className={s.leftCardNumber}>01</p>
        </div>
        <div className={s.rightCard}>
          <div className={s.rightIllustration}>
            <Image src={Research} alt="" />
          </div>
        </div>
        <div className={s.leftCard}>
          <div className={s.leftIllustration}>
            <Image src={Info} alt="" />
          </div>
          <h2>03</h2>
        </div>
        <div className={s.rightCard}>
          <div className={s.rightIllustration}>
            <Image src={Publish} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
