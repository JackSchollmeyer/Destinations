import React from "react";
import Image from "next/image";
import Background from "../public/calmWoods.jpg";
import s from "../../styles/Contact.module.css";

export default function contact() {
  return (
    <div>
      <div className={s.pageContent}>
        <h1 className={s.header}>Have a request?</h1>
        <div>
          <p>
            Drop your suggestions for landscapes that should be added to the
            library
          </p>
          <textarea placeholder="Type request here..."></textarea>
        </div>
        <div>
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
        <div>
          <button className={s.sendButton}>Send</button>
        </div>
      </div>
      <div className={s.img}>
        <Image src={Background} alt="Calm Woods" />
      </div>
    </div>
  );
}
