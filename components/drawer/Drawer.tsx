"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <AnimatePresence>
      {open && (
        <div
          className={`fixed inset-0 z-50 ${className || ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation drawer"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute left-4 bottom-4 w-[calc(100%-2rem)] max-h-[calc(100vh-2rem)] bg-white shadow-xl rounded-2xl overflow-hidden md:w-[85vw] md:max-w-md md:left-auto md:right-4 md:bottom-4 md:rounded-xl"
            style={width ? { width: `${width}px` } : undefined}
          >
            <DrawerMenu
              items={currentMenu}
              onItemClick={handleItemClick}
              onBack={menuHistory.length > 1 ? handleBack : undefined}
              onClose={onClose}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

