import React from "react";
import Image from "next/image";
import Link from "next/link";
import LocationCard from "./LocationCard";
import s from "../../../styles/ExploreSectionsFormat.module.css";
import Matterhorn from "../../public/mountainous/matterhorn.jpg";
import Vinicunca from "../../public/mountainous/vinicunca.jpg";
import HuangshanMountain from "../../public/mountainous/huangshanMountain.jpg";
import Kirkjufell from "../../public/mountainous/kirkjufell.jpg";
import MountFuji from "../../public/mountainous/mountFuji.jpg";
import MachuPicchu from "../../public/mountainous/machuPicchu.jpeg";
import TorresDelPaine from "../../public/mountainous/torresDelPaine.jpg";
import TableMountain from "../../public/mountainous/tableMountain.jpg";

export default function MountainousSection() {
  return (
    <div className={s.container}>
      <div className={s.grid}>
        <h1 className={s.header}>Mountainous</h1>
        <LocationCard
          image={<Image src={Matterhorn} alt="Matterhorn" />}
          name="Matterhorn"
          desciption="Known internationally by its German name the Matterhorn, it owes its fame to its almost perfect pyramid shape. Its four-sided, ridged rocky peak towers 4,478 metres above sea level, in perfect isolation in the midst of a quite singular alpine panorama."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Matterhorn">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Matterhorn/@45.9765719,7.6409423,14z/data=!3m1!4b1!4m5!3m4!1s0x478f3368cbb9ecd9:0x9826458cace55849!8m2!3d45.9765738!4d7.6584519!5m1!1e4">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={Vinicunca} alt="Vinicunca" />}
          name="Vinicunca"
          desciption="Vinicunca, also known as the Mountain of Seven Colors, or more simply Rainbow Mountain, was discovered in 2015 when the snow covering it melted, revealing the natural beauty of the rock beneath."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Vinicunca">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/search/vinicunca/@-13.6985127,-71.9134241,10z/data=!3m1!4b1?hl=en">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={HuangshanMountain} alt="Huangshan Mountain" />}
          name="Huangshan Mountain"
          desciption="Mount Huangshan, often described as the “loveliest mountain of China”, has played an important role in the history of art and literature in China since the Tang Dynasty around the 8th century, when a legend dated from the year 747 described the mountain as the place of discovery of the long-sought elixir of immortality."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Huangshan">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Huangshan+Mountain/@30.1378014,118.1476914,14z/data=!3m1!4b1!4m5!3m4!1s0x3435c68c09678d3d:0x706d912f1c61517e!8m2!3d30.137803!4d118.165201!5m1!1e4?hl=en">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={Kirkjufell} alt="Kirkjufell" />}
          name="Kirkjufell"
          desciption="Grundarfjordur's beautiful landmark Kirkjufell (Church Mountain) is said to be the most photographed mountain in Iceland. Its isolated position, 463 meters above sea level and jutting out into the sea, makes it a focal point for travellers and locals alike."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Kirkjufell">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Kirkjufell/@64.9416652,-23.3244539,14z/data=!3m1!4b1!4m5!3m4!1s0x48d57bab8dd70f87:0x9b45ba57731db7b!8m2!3d64.9416667!4d-23.3069444!5m1!1e4?hl=en">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={MountFuji} alt="Mount Fuji" />}
          name="Mount Fuji"
          desciption="Rising to 12,388 feet (3,776 metres), Mount Fuji is the tallest mountain in Japan and is known for its graceful conical form. It is the country's sacred symbol, and temples and shrines are located around and on the volcano."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Mount_Fuji">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Mount+Fuji,+Kitayama,+Fujinomiya,+Shizuoka+418-0112,+Japan/data=!4m2!3m1!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!5m1!1e4?sa=X&hl=en&ved=2ahUKEwiP87W94Z30AhWDB80KHfc5DQAQ8gF6BAh4EAE">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={MachuPicchu} alt="Machu Picchu" />}
          name="Machu Picchu"
          desciption="More than 7,000 feet above sea level in the Andes Mountains, Machu Picchu is the most visited tourist destination in Peru. A symbol of the Incan Empire and built around 1450AD, Machu Picchu was designated a UNESCO World Heritage Site in 1983 and was named one of the New Seven Wonders of the World in 2007."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Machu_Picchu">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/search/machu+picchu/@-13.1562084,-72.558996,14z/data=!3m1!4b1?hl=en">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={TorresDelPaine} alt="Torres del Paine" />}
          name="Torres del Paine"
          desciption="Torres del Paine National Park is best known as a hiker's paradise. Its most famous hike involves a demanding 31-mile walk up and down the park's valleys to see its most famous sights. The route takes the shape of a “W”, hence the name W Trek."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Torres_del_Paine_National_Park">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Torres+del+Paine+National+Park/@-50.9423262,-73.4067879,15z/data=!4m2!3m1!1s0x0:0xbd9f2657451ace58?sa=X&hl=en&ved=2ahUKEwij-u6exZ_0AhVaXM0KHay3A5sQ_BJ6BAhyEAU">
              <a className={s.location} target="_blank">
                Locate
              </a>
            </Link>
          }
        />
        <LocationCard
          image={<Image src={TableMountain} alt="Table Mountain" />}
          name="Table Mountain"
          desciption="Table Mountain is the most iconic landmark of South Africa. It is also the country's most photographed attraction and its famous cable car took millions of people to its top. It's thought to be one of the oldest mountains in the world."
          learnMore={
            <Link href="https://en.wikipedia.org/wiki/Table_Mountain">
              <a className={s.learnMore} target="_blank">
                Learn more
              </a>
            </Link>
          }
          locate={
            <Link href="https://www.google.com/maps/place/Maclear's+Beacon/@-33.9668233,18.4080533,14z/data=!3m1!4b1!4m5!3m4!1s0x1dcc67f7b1b2b61f:0x5fdb77f98d0dfeb4!8m2!3d-33.966825!4d18.4255629!5m1!1e4?hl=en">
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
