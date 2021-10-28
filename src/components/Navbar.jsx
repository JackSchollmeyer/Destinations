import React, { useState } from "react";
import Link from "next/link";
import s from "../../styles/Navbar.module.css";
import { useRouter } from "next/router";

export default function Navbar({ children }) {
  const [showSidebar, setShowSidebar] = useState(0);

  const router = useRouter();
  const setNavbarStyle = () => {
    if (router.pathname !== "/contact") {
      return { position: "fixed" };
    }
  };

  return (
    <div>
      <nav className={s.navbar} style={setNavbarStyle()}>
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
