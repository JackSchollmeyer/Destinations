import React, { useState } from "react";
import { SliderData } from "./SliderData";
import s from "../../styles/Tropical.module.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const slideActive = {
    opacity: "1",
    transition: "1s",
    transform: "scale(1.04)",
  };
  const slideUnactive = {
    opacity: "0",
    transition: "1s ease",
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className={s.slider}>
        <FaArrowAltCircleLeft className={s.leftArrow} onClick={prevSlide} />
        <FaArrowAltCircleRight className={s.rightArrow} onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              style={index === current ? slideActive : slideUnactive}
            >
              {index === current && (
                <div className={s.imageContainer}>{slide.image}</div>
              )}
            </div>
          );
        })}
      </section>
      <div>
        {SliderData.map((item, index) => {
          return (
            <div key={index}>
              {index === current && (
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.info}</p>
                  <h2>{item.location}</h2>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
