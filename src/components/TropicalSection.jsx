import React from "react";
import LocationCard from "./LocationCard";
import s from "../../styles/TropicalSection.module.css";

export default function TropicalSection() {
  return (
    <div className={s.container}>
      <LocationCard />
    </div>
  );
}
