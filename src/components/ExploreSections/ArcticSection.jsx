import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocationCard from "./LocationCard";
import s from "../../../styles/ExploreSectionsFormat.module.css";
import PeritoMoreno from "../../public/arctic/peritoMoreno.jpg";
import LakeBaikal from "../../public/arctic/lakeBaikal.jpg";
import JökulsárlónGlacierLake from "../../public/arctic/jökulsárlónGlacierLake.jpg";
// import PeritoMoreno from "../../public/arctic/peritoMoreno.jpg";
// import PeritoMoreno from "../../public/arctic/peritoMoreno.jpg";
// import PeritoMoreno from "../../public/arctic/peritoMoreno.jpg";
// import PeritoMoreno from "../../public/arctic/peritoMoreno.jpg";
// import PeritoMoreno from "../../public/arctic/peritoMoreno.jpg";

export default function ArcticSection() {
  return (
    <div className={s.container}>
      <div className={s.grid}>
        <h1 className={s.header}>Dryland</h1>
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
          image={<Image src={PeritoMoreno} alt="" />}
          name=""
          desciption=""
          learnMore={
            <Link href="">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={PeritoMoreno} alt="" />}
          name=""
          desciption=""
          learnMore={
            <Link href="">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={PeritoMoreno} alt="" />}
          name=""
          desciption=""
          learnMore={
            <Link href="">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={PeritoMoreno} alt="" />}
          name=""
          desciption=""
          learnMore={
            <Link href="">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={PeritoMoreno} alt="" />}
          name=""
          desciption=""
          learnMore={
            <Link href="">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="">
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
