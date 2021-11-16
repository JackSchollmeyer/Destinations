import React, { useState } from "react";
import Image from "next/image";
import Input from "../components/Input";
import Background from "../public/jungleBridge.jpg";
import s from "../../styles/Contact.module.css";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className={s.contactContianer}>
        <h1>Let's Talk</h1>
        <h2>
          Drop your thoughts below about any concerns or interests you have.
        </h2>
        <div className={s.nameInputContainer}>
          <Input
            label="First Name"
            value={firstName}
            handleChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            label="Last Name"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={s.bottomHalfInputContianer}>
          <Input
            label="Email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Message"
            value={message}
            handleChange={(e) => setMessage(e.target.value)}
          />
          <button className={s.submitButton}>Submit</button>
        </div>
      </div>
      <div className={s.img}>
        <Image src={Background} alt="Calm Woods" />
      </div>
    </div>
  );
}
