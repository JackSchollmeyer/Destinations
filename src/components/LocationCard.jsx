import React from "react";
import s from "../../styles/LocationCard.module.css";

export default function LocationCard({
  image,
  name,
  desciption,
  learnMore,
  locate,
}) {
  return (
    <div className={s.container}>
      <div className={s.img}>{image}</div>
      <div className={s.infoContainer}>
        <div className={s.nameAndBtn}>
          <h1>{name}</h1>
          <button className={s.expandButton}>Expand</button>
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
