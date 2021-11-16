import React, { useState } from "react";
import s from "../../../styles/LocationCard.module.css";

export default function LocationCard({
  image,
  name,
  desciption,
  learnMore,
  locate,
}) {
  const [imageExpanded, setImageExpanded] = useState(false);

  const expandImage = imageExpanded === true ? { transform: "scale(2)" } : {};

  const handleToggle = (tab) => {
    setImageExpanded(tab);
  };

  return (
    <div className={s.container}>
      <div
        className={s.img}
        style={expandImage}
        onClick={() => handleToggle(false)}
      >
        {image}
      </div>
      <div className={s.infoContainer}>
        <div className={s.nameAndBtn}>
          <h1>{name}</h1>
          <button className={s.expandButton} onClick={() => handleToggle(true)}>
            Expand
          </button>
        </div>
        <p className={s.discription}>{desciption}</p>
        <div className={s.links}>
          {learnMore}
          {locate}
        </div>
      </div>
    </div>
  );
}
