"use client";

import { useState } from "react";
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
export function Drawer({ menu, open, onClose, width = 320, className }: DrawerProps) {
  const [menuHistory, setMenuHistory] = useState<DrawerItem[][]>([menu]);
  const currentMenu = menuHistory[menuHistory.length - 1];

  const handleItemClick = (item: DrawerItem) => {
    if (item.children && item.children.length > 0) {
      // Navigate to child menu
      setMenuHistory([...menuHistory, item.children]);
    } else if (item.onClick) {
      // Execute leaf item action
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="absolute right-0 top-0 h-full bg-white shadow-xl"
        style={{ width: `${width}px` }}
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

