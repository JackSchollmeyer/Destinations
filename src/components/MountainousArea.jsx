import React, { useState } from "react";
import s from "../../styles/Mountainous.module.css";

export default function MountainousArea() {
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [color4, setColor4] = useState(false);
  const [color5, setColor5] = useState(false);

  const setBackgroundColor1 = () => {
    if (color1 === true)
      return {
        color: "white",
        backgroundColor: "red",
        transform: "scale(1.5)",
        transition: "2.5s",
      };
  };

  const setBackgroundColor2 = () => {
    if (color2 === true)
      return {
        color: "white",
        backgroundColor: "red",
        transform: "scale(1.5)",
        transition: "2.5s",
      };
  };

  const setBackgroundColor3 = () => {
    if (color3 === true)
      return {
        color: "white",
        backgroundColor: "red",
        transform: "scale(1.5)",
        transition: "2.5s",
      };
  };

  const setBackgroundColor4 = () => {
    if (color4 === true)
      return {
        color: "white",
        backgroundColor: "red",
        transform: "scale(1.5)",
        transition: "2.5s",
      };
  };

  const setBackgroundColor5 = () => {
    if (color5 === true)
      return {
        color: "white",
        backgroundColor: "red",
        transform: "scale(1.5)",
        transition: "2.5s",
      };
  };

  return (
    <div className={s.buttons}>
      <button
        className={s.words}
        style={setBackgroundColor1()}
        onClick={() => setColor1(color1 === true ? false : true)}
      >
        one
      </button>
      <button
        className={s.words}
        style={setBackgroundColor2()}
        onClick={() => setColor2(color2 === true ? false : true)}
      >
        two
      </button>
      <button
        className={s.words}
        style={setBackgroundColor3()}
        onClick={() => setColor3(color3 === true ? false : true)}
      >
        three
      </button>
      <button
        className={s.words}
        style={setBackgroundColor4()}
        onClick={() => setColor4(color4 === true ? false : true)}
      >
        four
      </button>
      <button
        className={s.words}
        style={setBackgroundColor5()}
        onClick={() => setColor5(color5 === true ? false : true)}
      >
        five
      </button>
    </div>
  );
}
