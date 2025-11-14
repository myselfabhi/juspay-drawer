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
      <div className="flex items-center justify-between border-b border-gray-200 px-3 py-2 md:px-4 md:py-2.5">
        {onBack ? (
          <button
            onClick={onBack}
            className="flex items-center rounded-lg p-1.5 text-gray-700 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="ml-1.5 text-sm font-medium">Back</span>
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={onClose}
          className="rounded-full p-1.5 text-gray-500 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Close drawer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto" role="menu">
        <ul className="py-1">
          {items.map((item) => (
            <li key={item.id} role="none">
              <button
                onClick={() => onItemClick(item)}
                className="flex w-full items-center px-3 py-2.5 text-left active:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-blue-500 md:px-4 md:hover:bg-gray-50"
                role="menuitem"
                aria-expanded={item.children && item.children.length > 0 ? "false" : undefined}
              >
                {item.icon && (
                  <span className="mr-3 flex-shrink-0 text-gray-600">
                    {item.icon}
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900">{item.label}</div>
                  {item.description && (
                    <div className="mt-0.5 text-xs text-gray-500">
                      {item.description}
                    </div>
                  )}
                </div>
                {item.children && item.children.length > 0 && (
                  <ChevronRight className="ml-3 h-4 w-4 flex-shrink-0 text-gray-400" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

