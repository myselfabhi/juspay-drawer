"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { DrawerItem } from "@/types/menu";

interface DrawerMenuProps {
  items: DrawerItem[];
  onItemClick: (item: DrawerItem) => void;
  onBack?: () => void;
  onClose: () => void;
}

export function DrawerMenu({ items, onItemClick, onBack, onClose }: DrawerMenuProps) {
  const isRootLevel = !onBack;

  return (
    <div className="flex flex-col pb-6">
      {!isRootLevel && (
        <div className="flex items-center px-4 py-2.5 flex-shrink-0">
          <button
            onClick={onBack}
            className="flex items-center p-0 text-gray-900 active:opacity-70 focus:outline-none"
            aria-label="Go back"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="ml-1.5 text-sm font-normal">Back</span>
          </button>
        </div>
      )}

      <nav className="overflow-y-auto max-h-[calc(100vh-8rem)]" role="menu">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id} role="none">
              <button
                onClick={() => onItemClick(item)}
                className="flex w-full items-center px-4 py-3 text-left active:bg-gray-50 focus:outline-none focus:bg-gray-50"
                role="menuitem"
                aria-expanded={item.children && item.children.length > 0 ? "false" : undefined}
              >
                {item.icon && (
                  <span className="mr-3 flex-shrink-0 text-gray-700">
                    {item.icon}
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm  text-gray-900 leading-tight">{item.label}</div>
                  {item.description && (
                    <div className="mt-0.5 text-xs text-gray-400 leading-snug">
                      {item.description}
                    </div>
                  )}
                </div>
                {item.id !== "home" && ((item.children && item.children.length > 0) || item.onClick) ? (
                  <ChevronRight className="ml-3 h-4 w-4 flex-shrink-0 text-gray-400" />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

