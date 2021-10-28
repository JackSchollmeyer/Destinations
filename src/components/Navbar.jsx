import React, { useState } from "react";
import Link from "next/link";
import s from "../../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { Sidebar } from "./Sidebar";

export default function Navbar({ children }) {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

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
          <li>
            <Link href="">
              <a onClick={showSideBar}>Explore</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={s.sidebarContainer}>
        <div className={s.sidebar}>
          {Sidebar.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link href={item.path}>
                  <a>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
      <main className={s.main}>{children}</main>
    </div>
  );
}
