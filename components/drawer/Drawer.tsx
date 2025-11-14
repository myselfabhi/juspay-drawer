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

  // Prevent body scroll when drawer is open (mobile)
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

  // Reset menu history when drawer closes
  useEffect(() => {
    if (!open) {
      setMenuHistory([menu]);
    }
  }, [open, menu]);

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

      {/* Drawer - Mobile-first: full width on mobile, custom width on desktop */}
      <div
        className="absolute left-0 top-0 h-full w-full bg-white shadow-xl md:w-[85vw] md:max-w-md"
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

