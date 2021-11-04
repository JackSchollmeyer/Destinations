import React from "react";
import s from "../../../styles/HomepageStyles/QuoteBoxCarousel.module.css";

export default function QuoteBoxMachine({ quote, author }) {
  return (
    <div className={s.quoteBox}>
      <div className={s.quote}>"{quote}"</div>
      <div className={s.author}>- {author}</div>
    </div>
  );
}
