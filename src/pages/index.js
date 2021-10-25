import Image from "next/image";
import Background from "../public/lakeBetweenMountains.jpg";
import s from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={s.img}>
        <Image src={Background} alt="Lake Between Mountains" />
      </div>
    </div>
  );
}
