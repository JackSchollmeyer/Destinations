import React from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";

export default function tropical() {
  return (
    <div>
      <ImageSlider slides={SliderData} />
    </div>
  );
}
