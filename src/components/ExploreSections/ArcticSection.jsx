import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocationCard from "./LocationCard";
import s from "../../../styles/ExploreSectionsFormat.module.css";
import PeritoMoreno from "../../public/arctic/peritoMoreno.jpg";
import LakeBaikal from "../../public/arctic/lakeBaikal.jpg";
import JökulsárlónGlacierLake from "../../public/arctic/jökulsárlónGlacierLake.jpg";
import SalmonGlacier from "../../public/arctic/salmonGlacier.jpg";
import TheArcticHenge from "../../public/arctic/theArcticHenge.jpg";
import TheBlueLagoon from "../../public/arctic/theBlueLagoon.jpg";

export default function ArcticSection() {
  return (
    <div className={s.container}>
      <div className={s.grid}>
        <h1 className={s.header}>Arctic</h1>
        <LocationCard
          image={<Image src={PeritoMoreno} alt="Perito Moreno" />}
          name="Perito Moreno"
          desciption="Perito Moreno is perhaps the region's most famous glacier because it periodically cuts off the major southern arm (known as Brazo Rico) of Lake Argentino. ... The ice dam prevents lake water from circulating from one side to the other, which in turn causes muddier and “milkier” water to concentrate in Brazo Rico."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Perito_Moreno_Glacier">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Perito+Moreno+Glacier,+Santa+Cruz+Province,+Argentina/data=!4m2!3m1!1s0xbda4c963217850c3:0xa481a2efaf7479be?sa=X&ved=2ahUKEwiVmcqbl6L0AhVRCM0KHfhcAEgQ8gF6BAhlEAE">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={LakeBaikal} alt="Lake Baikal" />}
          name="Lake Baikal"
          desciption="Lake Baikal is the largest freshwater lake in the world (by volume), the world's deepest lake, and one of the oldest lakes in the world. Somewhat crescent shaped, it is in the southern Siberia area of Russia."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Lake_Baikal">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Lake+Baikal,+Russia/data=!4m2!3m1!1s0x5dab7dedcf8dd873:0xf2489412c5853349?sa=X&hl=en&ved=2ahUKEwjGw6W_mqL0AhVaHc0KHXVhAD4Q8gF6BAhtEAE">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={
            <Image
              src={JökulsárlónGlacierLake}
              alt="Jökulsárlón Glacier Lake"
            />
          }
          name="Jökulsárlón Glacier Lake"
          desciption="The dramatic black Diamond Beach at Jökulsárlón is almost as famous as the Ice Lagoon itself. The beach offers one of the most surreal sights ever seen, a procession blue/white icebergs of all shapes and sizes gliding in silent procession as they go to meet their final destiny in the wild waves of the Atlantic Ocean."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/J%C3%B6kuls%C3%A1rl%C3%B3n">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/J%C3%B6kuls%C3%A1rl%C3%B3n,+Iceland/data=!4m2!3m1!1s0x48cfd6ecd73a3819:0xcd05c959e10146a9?sa=X&hl=en&ved=2ahUKEwjy3LzKnaL0AhWGbc0KHWsPCKoQ8gF6BAh1EAE">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={SalmonGlacier} alt="Salmon Glacier" />}
          name="Salmon Glacier"
          desciption="The Salmon Glacier is a glacier located ~25 km (16 mi) north of Stewart, British Columbia, and Hyder, Alaska, just on the Canadian side of the border. The glacier, one of hundreds in the Boundary Ranges, is notable for its major potential as a natural hazard."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Salmon_Glacier">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Salmon+Glacier,+Stewart,+BC+V0T+1W0,+Canada/data=!4m2!3m1!1s0x540a2abcadb77301:0xd07f42630c65ad6c?sa=X&hl=en&ved=2ahUKEwj-jqLUvKz0AhWDds0KHWF7CBwQ8gF6BAhkEAE">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={TheArcticHenge} alt="The Arctic Henge" />}
          name="The Arctic Henge"
          desciption="The Arctic Henge is a site consisting of many stone arches and statues, arranged as a monument to the Norse pagan beliefs. Specifically, the piece was inspired by Völuspá, a poem from Edda, the 'Bible' of Norse Mythology. Völuspá translates to the Prophecy of the Seeress."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Raufarh%C3%B6fn">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/The+Arctic+Henge/@66.4620346,-15.9628129,15z/data=!4m2!3m1!1s0x0:0xca1a7eacd75b117?sa=X&hl=en&ved=2ahUKEwjp8_qhvaz0AhVEZM0KHcdwDtAQ_BJ6BAhZEAU">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={TheBlueLagoon} alt="The Blue Lagoon" />}
          name="The Blue Lagoon"
          desciption="he Blue Lagoon, run by a company called Blue Lagoon Iceland, is a spa and human-made geothermal pool located about 45 minutes from Reykjavik in the Reykjanes UNESCO Global Geopark. A moss-covered lava field surrounds the azure lagoon, taking visitors into the heart of an otherworldly landscape."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Blue_Lagoon_(geothermal_spa)">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Blue+Lagoon+Iceland/@63.8793171,-22.4495401,15z/data=!4m5!3m4!1s0x0:0xf3747a894416f06e!8m2!3d63.8793171!4d-22.4495401?hl=en">
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
