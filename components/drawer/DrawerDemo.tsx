"use client";

import { useState } from "react";
import { Drawer } from "./Drawer";
import type { DrawerItem } from "@/types/menu";

const sampleMenu: DrawerItem[] = [
  {
    id: "1",
    label: "Products",
    children: [
      {
        id: "1-1",
        label: "Electronics",
        children: [
          { id: "1-1-1", label: "Laptops", onClick: () => alert("Laptops clicked") },
          { id: "1-1-2", label: "Phones", onClick: () => alert("Phones clicked") },
        ],
      },
      {
        id: "1-2",
        label: "Clothing",
        children: [
          { id: "1-2-1", label: "Men's", onClick: () => alert("Men's clicked") },
          { id: "1-2-2", label: "Women's", onClick: () => alert("Women's clicked") },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Services",
    children: [
      { id: "2-1", label: "Consulting", onClick: () => alert("Consulting clicked") },
      { id: "2-2", label: "Support", onClick: () => alert("Support clicked") },
    ],
  },
  {
    id: "3",
    label: "About",
    onClick: () => alert("About clicked"),
  },
];

export function DrawerDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Open Drawer
      </button>
      <Drawer menu={sampleMenu} open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

