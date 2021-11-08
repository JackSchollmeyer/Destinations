import React from "react";
import Image from "next/image";
import s from "../../../styles/HomepageStyles/GoalSection.module.css";
import Discover from "../../public/discover.svg";
import Inform from "../../public/inform.svg";
import Inspire from "../../public/inspire.svg";

export default function GoalSection() {
  return (
    <div className={s.goalSection}>
      <h2 className={s.header}>What's the purpose?</h2>
      <div className={s.goalContainer}>
        <div className={s.goalsRight}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <div>
            <h3>To discover</h3>
            <div className={s.illustrations}>
              <Image src={Discover} alt="" />
            </div>
          </div>
        </div>
        <div className={s.goalsLeft}>
          <div>
            <h3>To inform</h3>
            <div className={s.illustrations}>
              <Image src={Inform} alt="" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
        <div className={s.goalsRight}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <div>
            <h3>To inspire</h3>
            <div className={s.illustrations}>
              <Image src={Inspire} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
