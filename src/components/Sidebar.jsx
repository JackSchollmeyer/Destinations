import React from "react";
import { GiPalmTree, GiDesert, GiIceberg } from "react-icons/gi";
import { FaTree, FaMountain } from "react-icons/fa";

export const Sidebar = [
  {
    title: "Tropical",
    path: "/tropical",
    icon: <GiPalmTree />,
    cName: "nav-text",
  },
  {
    title: "Mountainous",
    path: "/mountainous",
    icon: <FaMountain />,
    cName: "nav-text",
  },
  {
    title: "Woodland",
    path: "/woodland",
    icon: <FaTree />,
    cName: "nav-text",
  },
  {
    title: "Dryland",
    path: "/dryland",
    icon: <GiDesert />,
    cName: "nav-text",
  },
  {
    title: "Arctic",
    path: "/arctic",
    icon: <GiIceberg />,
    cName: "nav-text",
  },
];
