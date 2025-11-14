"use client";

import { useState, useEffect } from "react";
import type { DrawerProps, DrawerItem } from "@/types/menu";
import { DrawerMenu } from "./DrawerMenu";

/**
 * Accessible nested menu drawer component
 * 
 * @example
 * ```tsx
 * <Drawer
 *   menu={menuItems}
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 * />
 * ```
 */
export function Drawer({ menu, open, onClose, width, className }: DrawerProps) {
  const [menuHistory, setMenuHistory] = useState<DrawerItem[][]>([menu]);
  const currentMenu = menuHistory[menuHistory.length - 1];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setMenuHistory([menu]);
    }
  }, [open, menu]);

  const handleItemClick = (item: DrawerItem) => {
    if (item.children && item.children.length > 0) {
      setMenuHistory([...menuHistory, item.children]);
    } else if (item.onClick) {
      item.onClick();
    }
  };

  const handleBack = () => {
    if (menuHistory.length > 1) {
      setMenuHistory(menuHistory.slice(0, -1));
    }
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 ${className || ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation drawer"
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="absolute left-4 top-4 bottom-4 w-[calc(100%-2rem)] bg-white shadow-xl rounded-2xl md:w-[85vw] md:max-w-md md:left-auto md:right-4 md:top-4 md:bottom-4 md:rounded-xl"
        style={width ? { width: `${width}px` } : undefined}
      >
        <DrawerMenu
          items={currentMenu}
          onItemClick={handleItemClick}
          onBack={menuHistory.length > 1 ? handleBack : undefined}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

