"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DrawerProps, DrawerItem } from "@/types/menu";
import { DrawerMenu } from "./DrawerMenu";

// Hook to detect if we're on tablet or larger
function useIsTabletOrLarger() {
  const [isTabletOrLarger, setIsTabletOrLarger] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsTabletOrLarger(window.innerWidth >= 768); // md breakpoint
    };
    
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isTabletOrLarger;
}

type NavigationDirection = "forward" | "back";

interface MenuLevel {
  items: DrawerItem[];
  key: string;
}

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
  const [menuHistory, setMenuHistory] = useState<MenuLevel[]>([
    { items: menu, key: "root-0" },
  ]);
  const [direction, setDirection] = useState<NavigationDirection>("forward");
  const isTabletOrLarger = useIsTabletOrLarger();
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
      setMenuHistory([{ items: menu, key: "root-0" }]);
    }
  }, [open, menu]);

  // Handle drag end - close drawer if dragged beyond threshold
  const handleDragEnd = (_event: unknown, info: { offset: { x: number; y: number } }) => {
    const threshold = 100; // pixels to drag before closing
    if (isTabletOrLarger) {
      // On desktop/tablet, drag right to close
      if (info.offset.x > threshold) {
        onClose();
      }
    } else {
      // On mobile, drag down to close
      if (info.offset.y > threshold) {
        onClose();
      }
    }
  };

  const handleItemClick = (item: DrawerItem) => {
    if (item.children && item.children.length > 0) {
      setDirection("forward");
      setMenuHistory([
        ...menuHistory,
        { items: item.children, key: `${item.id}-${menuHistory.length}` },
      ]);
    } else if (item.onClick) {
      item.onClick();
    }
  };

  const handleBack = () => {
    if (menuHistory.length > 1) {
      setDirection("back");
      setMenuHistory(menuHistory.slice(0, -1));
    }
  };

  // Define slide animation variants
  const slideVariants = {
    enter: (direction: NavigationDirection) => ({
      x: direction === "forward" ? "100%" : "-30%",
      opacity: direction === "forward" ? 1 : 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: NavigationDirection) => ({
      x: direction === "forward" ? "-30%" : "100%",
      opacity: direction === "forward" ? 0 : 1,
    }),
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
            initial={isTabletOrLarger ? { x: "100%" } : { y: "100%" }}
            animate={isTabletOrLarger ? { x: 0 } : { y: 0 }}
            exit={isTabletOrLarger ? { x: "100%" } : { y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            drag={isTabletOrLarger ? "x" : "y"}
            dragConstraints={isTabletOrLarger ? { left: 0, right: 400 } : { top: 0, bottom: 400 }}
            dragElastic={{ top: 0, left: 0, right: 0.2, bottom: 0.2 }}
            onDragEnd={handleDragEnd}
            className="absolute left-4 bottom-4 w-[calc(100%-2rem)] max-h-[calc(100vh-2rem)] bg-white shadow-xl rounded-2xl overflow-hidden md:w-[85vw] md:max-w-md md:left-auto md:right-4 md:top-4 md:bottom-4 md:h-auto md:max-h-[calc(100vh-2rem)] touch-none"
            style={width ? { width: `${width}px` } : undefined}
          >
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              <motion.div
                key={currentMenu.key}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  mass: 0.8,
                }}
              >
                <DrawerMenu
                  items={currentMenu.items}
                  onItemClick={handleItemClick}
                  onBack={menuHistory.length > 1 ? handleBack : undefined}
                  onClose={onClose}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

