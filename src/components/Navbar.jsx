import React from "react";
import s from "../../styles/Navbar.module.css";

export default function Navbar({ children }) {
  return (
    <div>
      <nav className={s.navbar}>
        <h1 className={s.navbarHeader}>Destinations</h1>
        <ul className={s.navbarLinks}>
          <li>HOME</li>
          <li>EXPLORE</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <main className={s.main}>{children}</main>
    </div>
  );
}
