import React from "react";
import { GiPalmTree, GiDesert, GiIceberg } from "react-icons/gi";
import { FaTree, FaMountain } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Tropical",
    path: "/tropical",
    icon: <GiPalmTree />,
  },
  {
    title: "Mountainous",
    path: "/mountainous",
    icon: <FaMountain />,
  },
  {
    title: "Foresty",
    path: "/foresty",
    icon: <FaTree />,
  },
  {
    title: "Dryland",
    path: "/dryland",
    icon: <GiDesert />,
  },
  {
    title: "Arctic",
    path: "/arctic",
    icon: <GiIceberg />,
  },
];
