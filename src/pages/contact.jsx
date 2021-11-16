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
    <div className={s.background}>
      <div className={s.contactContianer}>
        <div className={s.headers}>
          <h1>Let's Talk</h1>
          <h2>Have any questions, ideas, or concerns?</h2>
        </div>
        <div className={s.inputs}>
          <Input
            label="First name"
            value={firstName}
            handleChange={(e) => setFirstName(e.target.value)}
            placeholder="type here..."
          />
          <Input
            label="Last name"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
            placeholder="type here..."
          />
          <Input
            label="Email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            placeholder="type here..."
          />
        </div>
        <div className={s.messageAndSubmit}>
          <div>
            <label className={s.messageLabel}>Message</label>
            <textarea
              className={s.messageArea}
              placeholder="type here..."
            ></textarea>
          </div>
          <button className={s.submitButton}>Submit</button>
        </div>
      </div>
    </div>
  );
}
