import react from "react";
import Image from "next/image";
import s from "../../styles/Tropical.module.css";
import SeychellesIslands from "../public/tropical/SeychellesIslands.jpg";
import AmazonRainforest from "../public/tropical/amazonRainforest.jpg";
import NiagaraFalls from "../public/tropical/niagaraFalls.jpg";
import CookIslands from "../public/tropical/cookIslands.jpg";
import PhiPhiIslands from "../public/tropical/phiphiIslands.jpg";
import WhitsundayIsland from "../public/tropical/whitsundayIsland.jpg";
import TheAzores from "../public/tropical/theAzores.jpg";
import KhaoPhingKan from "../public/tropical/khaoPhingKan.jpg";

export const SliderData = [
  {
    image: <Image src={SeychellesIslands} alt="Seychelles Islands" />,
    title: "Seychelles Islands",
    info: "",
    location: "",
  },
  {
    image: <Image src={AmazonRainforest} alt="Amazon Rainforest" />,
    title: "Amazon Rainforest",
    info: "",
    location: "",
  },
  {
    image: <Image src={NiagaraFalls} alt="Niagara Falls" />,
    title: "Niagara Falls",
    info: "",
    location: "",
  },
  {
    image: <Image src={CookIslands} alt="Cook Islands" />,
    title: "Cook Islands",
    info: "",
    location: "",
  },
  {
    image: <Image src={PhiPhiIslands} alt="Phi Phi Islands" />,
    title: "Phi Phi Islands",
    info: "",
    location: "",
  },
  {
    image: <Image src={WhitsundayIsland} alt="Whitsunday Island" />,
    title: "Whitsunday Island",
    info: "",
    location: "",
  },
  {
    image: <Image src={TheAzores} alt="The Azores" />,
    title: "The Azores",
    info: "",
    location: "",
  },
  {
    image: <Image src={KhaoPhingKan} alt="Khao Phing Kan" />,
    title: "Khao Phing Kan",
    info: "",
    location: "",
  },
];
