import React from "react";
import Image from "next/image";
import s from "../../../styles/HomepageStyles/GoalSection.module.css";
import Reveal from "../../public/reveal.svg";
import Inform from "../../public/inform.svg";
import Inspire from "../../public/inspire.svg";

export default function GoalSection() {
  return (
    <div className={s.goalSection}>
      <h2 className={s.header}>What's the purpose?</h2>
      <div className={s.goalContainer}>
        <div className={s.goalsRight}>
          <div>
            <h3>To reveal</h3>
            <p>
              Bring to light new and astonishing locations that will blow you
              away with their magnificence.
            </p>
          </div>
          <div className={s.illustrations}>
            <Image src={Reveal} alt="" />
          </div>
        </div>
        <div className={s.goalsLeft}>
          <div className={s.illustrations}>
            <Image src={Inform} alt="" />
          </div>
          <div>
            <h3>To inform</h3>
            <p>
              Learn about the origins and history of these landmarks and what
              makes them significant.
            </p>
          </div>
        </div>
        <div className={s.goalsRight}>
          <div>
            <h3>To inspire</h3>
            <p>
              Search for your own destinations that influence you and learn
              about what makes them extraordinary.
            </p>
          </div>
          <div className={s.illustrations}>
            <Image src={Inspire} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
