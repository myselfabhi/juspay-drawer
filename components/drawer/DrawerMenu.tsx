"use client";

import { ChevronLeft, X, ChevronRight } from "lucide-react";
import type { DrawerItem } from "@/types/menu";

interface DrawerMenuProps {
  items: DrawerItem[];
  onItemClick: (item: DrawerItem) => void;
  onBack?: () => void;
  onClose: () => void;
}

export function DrawerMenu({ items, onItemClick, onBack, onClose }: DrawerMenuProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 flex-shrink-0">
        {onBack ? (
          <button
            onClick={onBack}
            className="flex items-center p-0 text-gray-900 active:opacity-70 focus:outline-none"
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="ml-2 text-base font-normal">Back</span>
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={onClose}
          className="p-0 text-gray-500 active:opacity-70 focus:outline-none"
          aria-label="Close drawer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto min-h-0" role="menu">
        <ul>
          {items.map((item) => (
            <li key={item.id} role="none">
              <button
                onClick={() => onItemClick(item)}
                className="flex w-full items-center px-4 py-3.5 text-left active:bg-gray-50 focus:outline-none focus:bg-gray-50"
                role="menuitem"
                aria-expanded={item.children && item.children.length > 0 ? "false" : undefined}
              >
                {item.icon && (
                  <span className="mr-4 flex-shrink-0 text-gray-700">
                    {item.icon}
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 leading-tight">{item.label}</div>
                  {item.description && (
                    <div className="mt-1 text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </div>
                  )}
                </div>
                {(item.children && item.children.length > 0) || item.onClick ? (
                  <ChevronRight className="ml-4 h-5 w-5 flex-shrink-0 text-gray-400" />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

