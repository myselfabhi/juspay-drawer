"use client";

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
      {/* Header */}
      <div className="flex items-center border-b border-gray-200 p-4">
        {onBack && (
          <button
            onClick={onBack}
            className="mr-3 rounded p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Go back"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <button
          onClick={onClose}
          className="ml-auto rounded p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close drawer"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto" role="menu">
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.id} role="none">
              <button
                onClick={() => onItemClick(item)}
                className="flex w-full items-center px-4 py-3 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-blue-500"
                role="menuitem"
                aria-expanded={item.children && item.children.length > 0 ? "false" : undefined}
              >
                {item.icon && <span className="mr-3">{item.icon}</span>}
                <span className="flex-1">{item.label}</span>
                {item.children && item.children.length > 0 && (
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

