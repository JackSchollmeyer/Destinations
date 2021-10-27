import React from "react";
import Image from "next/image";
import Background from "../public/calmWoods.jpg";
import s from "../../styles/Contact.module.css";

export default function contact() {
  return (
    <div>
      <div className={s.img}>
        <Image src={Background} alt="Calm Woods" />
      </div>
      <div className={s.pageContent}>
        <h1>Have a request?</h1>
        <div>
          <p>
            Drop your suggestions for landscapes that should be added to the
            library
          </p>
          <textarea></textarea>
        </div>
        <div>
          <placeholder></placeholder>
          <placeholder></placeholder>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
