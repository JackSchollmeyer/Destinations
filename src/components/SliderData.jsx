import react from "react";
import Image from "next/image";
import s from "../../styles/Tropical.module.css";
import SeychellesIslands from "../public/tropical/SeychellesIslands.jpg";
import AmazonRainforest from "../public/tropical/amazonRainforest.jpg";
import KaieteurFalls from "../public/tropical/kaieteurFalls.jpg";
import CookIslands from "../public/tropical/cookIslands.jpg";
import PhiPhiIslands from "../public/tropical/phiphiIslands.jpg";
import WhitsundayIsland from "../public/tropical/whitsundayIsland.jpg";
import TheAzores from "../public/tropical/theAzores.jpg";
import KhaoPhingKan from "../public/tropical/khaoPhingKan.jpg";

export const SliderData = [
  {
    image: (
      <Image
        className={s.image}
        src={SeychellesIslands}
        alt="Seychelles Islands"
      />
    ),
  },
  {
    image: (
      <Image
        className={s.image}
        src={AmazonRainforest}
        alt="Amazon Rainforest"
      />
    ),
  },
  {
    image: (
      <Image className={s.image} src={KaieteurFalls} alt="Kaieteur Falls" />
    ),
  },
  {
    image: <Image className={s.image} src={CookIslands} alt="Cook Islands" />,
  },
  {
    image: (
      <Image className={s.image} src={PhiPhiIslands} alt="Phi Phi Islands" />
    ),
  },
  {
    image: (
      <Image
        className={s.image}
        src={WhitsundayIsland}
        alt="Whitsunday Island"
      />
    ),
  },
  {
    image: <Image className={s.image} src={TheAzores} alt="The Azores" />,
  },
  {
    image: (
      <Image className={s.image} src={KhaoPhingKan} alt="Khao Phing Kan" />
    ),
  },
];
