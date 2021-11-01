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

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={s.slider}>
      <FaArrowAltCircleLeft className={s.leftArrow} onClick={prevSlide} />
      <FaArrowAltCircleRight className={s.rightArrow} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <div className={s.imageContainer}>{slide.image}</div>
            )}
          </div>
        );
      })}
    </section>
  );
}
