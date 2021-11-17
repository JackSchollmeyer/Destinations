import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocationCard from "./LocationCard";
import s from "../../../styles/ExploreSectionsFormat.module.css";
import Sahara from "../../public/dryland/sahara.jpg";
import TheWave from "../../public/dryland/theWave.jpg";
import AntelopeCanyon from "../../public/dryland/antelopeCanyon.jpg";
import BlackRockDesert from "../../public/dryland/blackRockDesert.jpg";
import Huacachina from "../../public/dryland/huacachina.jpg";
import LençóisMaranhenses from "../../public/dryland/lençóisMaranhenses.jpg";
import UyuniSaltFlat from "../../public/dryland/uyuniSaltFlat.jpg";
import BlackDesert from "../../public/dryland/blackDesert.jpg";

export default function DrylandSection() {
  return (
    <div className={s.container}>
      <div className={s.grid}>
        <h1 className={s.header}>Dryland</h1>
        <LocationCard
          image={<Image src={Sahara} alt="Sahara" />}
          name="Sahara"
          desciption="The Sahara Desert is the world's largest hot desert and the third largest desert behind Antarctica and the Arctic. Located in North Africa, it covers large sections of the continent - covering 9,200,000 square kilometers which is comparable to the are of China or the US!"
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Sahara">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Sahara+Desert/@21.9753751,13.0867956,5z/data=!3m1!4b1!4m5!3m4!1s0x13883b64fb267151:0xd6406bdc582d7390!8m2!3d23.4162027!4d25.66283?hl=en">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={TheWave} alt="The Wave" />}
          name="The Wave"
          desciption="The Wave is a sandstone rock formation located in Arizona, United States, near its northern border with Utah. ... The formation is well-known among hikers and photographers for its colorful, undulating forms and the difficult hike required to reach it."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/The_Wave_(Arizona)">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/The+Wave/@36.9959355,-112.0084479,17z/data=!3m1!4b1!4m5!3m4!1s0x8734f1a426066667:0xe7c1ca7e4db0d03!8m2!3d36.9959312!4d-112.0062592?hl=en">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={AntelopeCanyon} alt="Antelope Canyon" />}
          name="Antelope Canyon"
          desciption="Antelope Canyon, located near Page, Arizona is home to one of nature's most wondrous creations – the slot canyon. Carved from the red sandstone for millennia by seasonal flood rains and wind, the canyons are narrow passageways that lead several hundred feet away from the mouth."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Antelope_Canyon">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Antelope+Canyon/@36.8824742,-111.4118768,14z/data=!3m1!4b1!4m5!3m4!1s0x873411f49ba00e0b:0x98361608ad6aa79b!8m2!3d36.8619103!4d-111.3743302!5m1!1e4">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={BlackRockDesert} alt="Black Rock Desert" />}
          name="Black Rock Desert"
          desciption="The desert is a regionally important centre of gypsum mining. The playa (ancient lake bed) at the desert's southern end has served in recent years as the site of turbojet car races in which world land-speed records are frequently set and broken."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Black_Rock_Desert">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Black+Rock+Desert,+Nevada/data=!4m2!3m1!1s0x809fc1db18d4f4a7:0xf2f995dbd40787a0!5m1!1e4?sa=X&hl=en&ved=2ahUKEwjlwNOSwqD0AhWMGs0KHfgbDjgQ8gF6BAhsEAE">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={Huacachina} alt="Huacachina" />}
          name="Huacachina"
          desciption="Huacachina is a village built around a small oasis and surrounded by sand dunes in southwestern Peru. ... The oasis was introduced as a feature on the back of the 50 nuevo sol note in 1991. Huacachina has a permanent population of around 100 people, although it hosts many tens of thousands of tourists each year."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Huacachina">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Huacachina+11000,+Peru/@-14.0874996,-75.7652973,17z/data=!3m1!4b1!4m5!3m4!1s0x9110e3010800b101:0x136be001d08a4223!8m2!3d-14.0874587!4d-75.762586?hl=en">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={LençóisMaranhenses} alt="Lençóis Maranhenses" />}
          name="Lençóis Maranhenses"
          desciption="The National Park of Lençóis Maranhenses (LMNP), created by Decree 86,060, in June 2nd, 1981, is characterized as the largest field of sand dunes in South America. It comprises an area of 155 thousand hectares, of which 90 thousand consist of mobile dunes and lagoons formed by these dunes."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Len%C3%A7%C3%B3is_Maranhenses_National_Park">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Parque+Nacional+dos+Len%C3%A7%C3%B3is+Maranhenses/@-2.4859385,-43.128407,15z/data=!4m5!3m4!1s0x0:0x2d2895d0d57e9beb!8m2!3d-2.4859385!4d-43.128407?hl=en">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={UyuniSaltFlat} alt="Uyuni Salt Flat" />}
          name="Uyuni Salt Flat"
          desciption="Salar de Uyuni is the worlds largest salt flat, spanning 4086 square miles (10,582 sq. km) in south-western Bolivia. Unlike traditional deserts, which have sand in abundance, the Salar de Uyuni features vast expanses of glistening white salt."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Salar_de_Uyuni">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Uyuni+Salt+Flat/@-20.2086421,-68.1524845,9z/data=!3m1!4b1!4m5!3m4!1s0x915584b325e18bd7:0xce4183a158278b6!8m2!3d-20.1337772!4d-67.4891345?hl=en">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={BlackDesert} alt="Black Desert" />}
          name="Black Desert"
          desciption="The Black Desert is a region of volcano-shaped and widely spaced mounds, distributed along about 30 km in western Egypt between the White Desert in the south and the Bahariya Oasis in the north."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Black_Desert_(Egypt)">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Black+Desert/@28.20186,28.7308788,15z/data=!4m2!3m1!1s0x0:0xc1daf109010ad569?sa=X&ved=2ahUKEwj62OCVyqD0AhVVVs0KHY6gDHgQ_BJ6BAhZEAU">
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
