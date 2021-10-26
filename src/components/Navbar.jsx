import React, { useState } from "react";
import Link from "next/link";
import s from "../../styles/Navbar.module.css";

export default function Navbar({ children }) {
  const [showSidebar, setShowSidebar] = useState(0);

  return (
    <div>
      <nav className={s.navbar}>
        <h1 className={s.navbarHeader}>Destinations</h1>
        <ul className={s.navbarLinks}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>Explore</li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className={s.main}>{children}</main>
    </div>
  );
}
