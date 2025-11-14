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
      {/* Header - Mobile optimized with larger touch targets */}
      <div className="flex items-center border-b border-gray-200 px-4 py-3 md:px-6 md:py-4">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center rounded-lg p-2 text-gray-700 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Go back"
          >
            <svg
              className="h-6 w-6"
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
            <span className="ml-2 text-base font-medium">Back</span>
          </button>
        )}
        <button
          onClick={onClose}
          className="ml-auto rounded-full p-2 text-gray-500 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Close drawer"
        >
          <svg
            className="h-6 w-6"
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

      {/* Menu Items - Mobile-first with descriptions */}
      <nav className="flex-1 overflow-y-auto" role="menu">
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.id} role="none">
              <button
                onClick={() => onItemClick(item)}
                className="flex w-full items-center px-4 py-4 text-left active:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-blue-500 md:px-6 md:hover:bg-gray-50"
                role="menuitem"
                aria-expanded={item.children && item.children.length > 0 ? "false" : undefined}
              >
                {item.icon && (
                  <span className="mr-4 flex-shrink-0 text-gray-600">
                    {item.icon}
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900">{item.label}</div>
                  {item.description && (
                    <div className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </div>
                  )}
                </div>
                {item.children && item.children.length > 0 && (
                  <svg
                    className="ml-4 h-5 w-5 flex-shrink-0 text-gray-400"
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

