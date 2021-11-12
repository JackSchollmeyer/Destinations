import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocationCard from "./LocationCard";
import s from "../../styles/TropicalSection.module.css";
import SeychellesIslands from "../public/tropical/SeychellesIslands.jpg";
import AmazonRainforest from "../public/tropical/amazonRainforest.jpg";
import WhitsundayIsland from "../public/tropical/whitsundayIsland.jpg";
import PhiPhiIslands from "../public/tropical/phiphiIslands.jpg";
import NiagaraFalls from "../public/tropical/niagaraFalls.jpg";
import TheAzores from "../public/tropical/theAzores.jpg";
import CookIslands from "../public/tropical/cookIslands.jpg";
import KhaoPhingKan from "../public/tropical/khaoPhingKan.jpg";

export default function TropicalSection() {
  return (
    <div className={s.container}>
      <div className={s.grid}>
        <h1 className={s.header}>Tropical</h1>
        <LocationCard
          image={<Image src={SeychellesIslands} alt="Seychelles Islands" />}
          name="Seychelles Islands"
          desciption="Seychelles is known for being one of the most beautiful tropical island destinations in the world. The group of islands is located northeast of Madagascar in the western Indian Ocean and consists of 115 islands spread over an area of more than 1 million km²"
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Seychelles">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Seychelles/@-4.5833118,55.6579119,15z/data=!3m1!4b1!4m5!3m4!1s0x231fdab48c500c57:0x536f1be1f469e0cb!8m2!3d-4.5833333!4d55.6666667">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={AmazonRainforest} alt="Amazon Rainforest" />}
          name="Amazon Rainforest"
          desciption="The Amazon Rainforest is the world's largest rainforest, with an area of 2.587 million mi², as well as the richest and most-varied biological reservoir, containing several million species of insects, plants, birds, and other forms of life, many still unrecorded by science."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Amazon_rainforest">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Amazon+Rainforest+-+Codaj%C3%A1s,+State+of+Amazonas,+69450-000,+Brazil/data=!4m2!3m1!1s0x91e8605342744385:0x3d3c6dc1394a7fc7?sa=X&ved=2ahUKEwjfnrmJ9JP0AhX2wosBHYGKBVkQ8gF6BQiRARAB">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={TheAzores} alt="The Azores" />}
          name="The Azores"
          desciption="Lorem ipsung about the elder worlds of the world when the giants heard
          the speaking of the opld men in the city wandering around in the foggy
          homees of ireland. lorem ipsung about the elder worlds of the world
          when the giants heard the speaking of the opld men in the city
          wandering around in the foggy homees of ireland."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Seychelles">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Seychelles/@-4.5833118,55.6579119,15z/data=!3m1!4b1!4m5!3m4!1s0x231fdab48c500c57:0x536f1be1f469e0cb!8m2!3d-4.5833333!4d55.6666667">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={PhiPhiIslands} alt="Phi Phi Islands" />}
          name="Phi Phi Islands"
          desciption="Lorem ipsung about the elder worlds of the world when the giants heard
          the speaking of the opld men in the city wandering around in the foggy
          homees of ireland. lorem ipsung about the elder worlds of the world
          when the giants heard the speaking of the opld men in the city
          wandering around in the foggy homees of ireland."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Seychelles">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Seychelles/@-4.5833118,55.6579119,15z/data=!3m1!4b1!4m5!3m4!1s0x231fdab48c500c57:0x536f1be1f469e0cb!8m2!3d-4.5833333!4d55.6666667">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={NiagaraFalls} alt="Niagara Falls" />}
          name="Niagara Falls"
          desciption="Lorem ipsung about the elder worlds of the world when the giants heard
          the speaking of the opld men in the city wandering around in the foggy
          homees of ireland. lorem ipsung about the elder worlds of the world
          when the giants heard the speaking of the opld men in the city
          wandering around in the foggy homees of ireland."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Seychelles">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Seychelles/@-4.5833118,55.6579119,15z/data=!3m1!4b1!4m5!3m4!1s0x231fdab48c500c57:0x536f1be1f469e0cb!8m2!3d-4.5833333!4d55.6666667">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={WhitsundayIsland} alt="Whitsunday Island" />}
          name="Whitsunday Island"
          desciption="Lorem ipsung about the elder worlds of the world when the giants heard
          the speaking of the opld men in the city wandering around in the foggy
          homees of ireland. lorem ipsung about the elder worlds of the world
          when the giants heard the speaking of the opld men in the city
          wandering around in the foggy homees of ireland."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Seychelles">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Seychelles/@-4.5833118,55.6579119,15z/data=!3m1!4b1!4m5!3m4!1s0x231fdab48c500c57:0x536f1be1f469e0cb!8m2!3d-4.5833333!4d55.6666667">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={CookIslands} alt="Cook Islands" />}
          name="Cook Islands"
          desciption="Lorem ipsung about the elder worlds of the world when the giants heard
          the speaking of the opld men in the city wandering around in the foggy
          homees of ireland. lorem ipsung about the elder worlds of the world
          when the giants heard the speaking of the opld men in the city
          wandering around in the foggy homees of ireland."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Seychelles">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Seychelles/@-4.5833118,55.6579119,15z/data=!3m1!4b1!4m5!3m4!1s0x231fdab48c500c57:0x536f1be1f469e0cb!8m2!3d-4.5833333!4d55.6666667">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={KhaoPhingKan} alt="Khao Phing Kan" />}
          name="Khao Phing Kan"
          desciption="Before 1974, the island was a rarely visited indigenous area. However, it was the location for the 1974 James Bond film “The Man with the Golden Gun” as the hideout for Bond's antagonist, Francisco Scaramanga. After the movie release it turned into a popular tourist destination.In 1981, the island became the most famous part of the newly established Ao Phang Nga Marine National Park."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Khao_Phing_Kan">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Khao+Phing+Kan/@8.2746301,98.4986943,17z/data=!3m1!4b1!4m5!3m4!1s0x3051acc3616c0bf1:0x13fde163d88f5e63!8m2!3d8.2745231!4d98.5012262">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
      </div>
    </div>
  );
}
