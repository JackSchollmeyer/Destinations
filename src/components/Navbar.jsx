import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "../../styles/Navbar.module.css";
import Logo from "../public/destinationsLogo.svg";
import { useRouter } from "next/router";
import { SidebarData } from "./SidebarData";

export default function Navbar({ children }) {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    if (sidebar) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  };

  const closeSidebar = () => {
    if (sidebar) {
      setSidebar(false);
    }
  };

  const sidebarStyle = () => {
    if (sidebar)
      return {
        right: "0",
        transition: "750ms",
      };
    if (!sidebar)
      return {
        right: "-100%",
        transition: "1.5s",
      };
  };

  const router = useRouter();
  const setNavbarStyle = () => {
    if (router.pathname !== "/foresty") {
      return { position: "fixed" };
    }
  };

  return (
    <div>
      <nav className={s.navbar} style={setNavbarStyle()}>
        <div>
          <Link href="/">
            <a className={s.titleContainer}>
              <div className={s.appLogo}>
                <Image src={Logo} alt="" />
              </div>
              <h1 className={s.title}>Destinations</h1>
            </a>
          </Link>
        </div>
        <ul className={s.navbarLinks}>
          <li>
            <Link href="/">
              <a onClick={closeSidebar}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a onClick={closeSidebar}>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="" scroll={false}>
              <a onClick={toggleSidebar}>Explore</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={s.sidebarContainer}>
        <div className={s.sidebar} style={sidebarStyle()}>
          <ul onClick={closeSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={s.navText}>
                  <Link href={item.path}>
                    <a>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <main className={s.main}>{children}</main>
    </div>
  );
}
