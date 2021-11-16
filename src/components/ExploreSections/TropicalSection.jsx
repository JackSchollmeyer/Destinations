import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocationCard from "./LocationCard";
import s from "../../../styles/TropicalSection.module.css";
import SeychellesIslands from "../../public/tropical/SeychellesIslands.jpg";
import AmazonRainforest from "../../public/tropical/amazonRainforest.jpg";
import WhitsundayIsland from "../../public/tropical/whitsundayIsland.jpg";
import PhiPhiIslands from "../../public/tropical/phiphiIslands.jpg";
import Tegallalang from "../../public/tropical/tegallalang.jpg";
import TheAzores from "../../public/tropical/theAzores.jpg";
import CookIslands from "../../public/tropical/cookIslands.jpg";
import KhaoPhingKan from "../../public/tropical/khaoPhingKan.jpg";

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
          desciption="The Azores, officially the Autonomous Region of the Azores, is one of the two autonomous regions of Portugal (along with Madeira). It is an archipelago composed of nine volcanic islands in the Macaronesia region of the North Atlantic Ocean, about 1,400 km west of Lisbon, about 1,500 km northwest of Morocco, and about 1,930 km southeast of Newfoundland, Canada."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Azores">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Azores,+Portugal/@38.2412369,-32.6316109,6z/data=!3m1!4b1!4m5!3m4!1s0xb467f1e11e43b05:0xe2911b674bce0c1d!8m2!3d37.7412488!4d-25.6755944">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={PhiPhiIslands} alt="Phi Phi Islands" />}
          name="Phi Phi Islands"
          desciption="Phi Phi consists of six small islands 46km south of Phuket. Fine sandy beaches give way to soaring limestone cliffs to form spectacular scenery. Add crystal clear water, a refreshing lack of roads, plus a laid-back lifestyle, and it's easy to see why Phi Phi is one of southern Thailand's most popular destinations."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Phi_Phi_Islands">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Phi+Phi+Islands,+Krabi,+Thailand/data=!4m2!3m1!1s0x304e20be764e3d0d:0xbf9db8781a549f71?sa=X&ved=2ahUKEwiUnIneuJr0AhW7lmoFHYW7DOoQ8gF6BAhsEAE">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={Tegallalang} alt="Tegallalang" />}
          name="Tegallalang"
          desciption="The beautiful Tegalalang Rice Terrace, located north of Ubud, is actually an ancient irrigation system, dating back to the eighth century. Its series of sloping rice paddies just begs to be photographed, and indeed, the terrace is one of the most popular attractions among camera-toting tourists in this region of Bali."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Tegallalang">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Tegallalang,+Gianyar,+Bali,+Indonesia/data=!4m2!3m1!1s0x2dd218a46438f143:0x4030bfbca7d2d40?sa=X&ved=2ahUKEwjuxpKO9pz0AhVGaM0KHQYtCX4Q8gF6BAg-EAE">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={WhitsundayIsland} alt="Whitsunday Island" />}
          name="Whitsunday Island"
          desciption="The Whitsundays are part of the Great Barrier Reef Marine Park, which means they are part of the world's largest living ecosystem. The islands have what are called 'fringing reefs' that circle around the islands and provide amazing snorkelling locations, as well as ideal habitats for the many fish that live here."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Whitsunday_Islands">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Whitsunday+Islands/@-20.1853546,148.1663806,9z/data=!3m1!4b1!4m5!3m4!1s0x6bd908192617babf:0x345293e5fe0645b1!8m2!3d-20.1862425!4d148.7268546">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={CookIslands} alt="Cook Islands" />}
          name="Cook Islands"
          desciption="Accessible by air from Rarotonga and known for deserted beaches, limestone caves and a population of 400 warrior people, it's one of the few untouched places left on Earth. The Cook Islands are refreshingly devoid of towering mega-resorts – the rule of thumb is that no building can be taller than the palm trees."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Cook_Islands">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Cook+Islands/@-15.5831431,-165.43569,6z/data=!3m1!4b1!4m5!3m4!1s0x71548aefb97bdedd:0x24ca50e8808b4d8!8m2!3d-21.236736!4d-159.777671">
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
