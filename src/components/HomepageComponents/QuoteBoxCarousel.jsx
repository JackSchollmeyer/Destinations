import React from "react";
import QuoteBox from "./QuoteBoxes";
import s from "../../../styles/HomepageStyles/QuoteBoxCarousel.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function QuoteBoxCarousel() {
  return (
    <div className={s.carouselSection}>
      <div className={s.quoteBoxesContainer}>
        <Carousel autoPlay infiniteLoop centerMode>
          <QuoteBox
            quote="In all things of nature there is something of the marvelous."
            author="Aristotle"
          />
          <QuoteBox
            quote="Over every mountain there is a path, although it may not be seen from the valley."
            author="Theodore Roethke"
          />
          <QuoteBox
            quote="Looking at beauty in the world, is the first step of purifying the mind."
            author="Amit Ray"
          />
          <QuoteBox
            quote="Look deep into nature, and then you will understand everything better."
            author="Albert Einstein"
          />
          <QuoteBox
            quote="Those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts."
            author="Rachel Carson"
          />
          <QuoteBox
            quote="If you truly love nature, you will find beauty everywhere."
            author="Laura Ingalls Wilder"
          />
        </Carousel>
      </div>
    </div>
  );
}
