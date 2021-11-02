import React from "react";
import Image from "next/image";
import Background from "../public/calmWoods.jpg";
import s from "../../styles/Contact.module.css";
import { Fisend } from "react-icons/fi";

export default function contact() {
  return (
    <div>
      <div className={s.pageContent}>
        <div className={s.headerContainer}>
          <h1 className={s.header}>Have a request?</h1>
        </div>
        <div className={s.requestSection}>
          <div className={s.paragraphContainer}>
            <div className={s.paragraph}>
              <p>
                What landscapes do you think should be added to the library?
              </p>
            </div>
          </div>
          <div className={s.textareaContainer}>
            <textarea placeholder="Type request here..."></textarea>
          </div>
        </div>
        <div className={s.inputSection}>
          <div className={s.inputsContainer}>
            <input
              type="text"
              placeholder="Name here..."
              className={s.inputs}
            ></input>
            <input
              type="text"
              placeholder="Email here..."
              className={s.inputs}
            ></input>
          </div>
          <div className={s.sendButtonContainer}>
            <button className={s.sendButton}>Send</button>
          </div>
        </div>
      </div>
      <div className={s.img}>
        <Image src={Background} alt="Calm Woods" />
      </div>
    </div>
  );
}
