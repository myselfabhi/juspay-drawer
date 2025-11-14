"use client";

import { useState, useEffect } from "react";
import { Drawer } from "./Drawer";
import type { DrawerItem } from "@/types/menu";
import { convertMenuFromJson } from "@/lib/menuUtils";
import menuData from "@/data/menu.json";

export function DrawerDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState<DrawerItem[]>([]);

  useEffect(() => {
    const convertedMenu = convertMenuFromJson(menuData as any);
    setMenu(convertedMenu);
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-blue-500 px-6 py-3 text-base font-medium text-white transition-colors active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:px-8 md:py-3 md:hover:bg-blue-700"
      >
        Open Menu
      </button>
      <Drawer menu={menu} open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

