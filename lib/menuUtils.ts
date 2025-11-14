import type { DrawerItem } from "@/types/menu";
import { getIcon } from "./icons";

interface MenuItemJson {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  children?: MenuItemJson[];
  onClick?: string;
}

/**
 * Converts JSON menu data to DrawerItem format
 * Handles icon string to React component conversion
 */
export function convertMenuFromJson(jsonData: MenuItemJson[]): DrawerItem[] {
  return jsonData.map((item) => {
    const drawerItem: DrawerItem = {
      id: item.id,
      label: item.label,
      description: item.description,
      icon: item.icon ? getIcon(item.icon) : undefined,
      children: item.children ? convertMenuFromJson(item.children) : undefined,
      onClick: item.onClick
        ? () => {
            console.log(`Action: ${item.onClick}`);
          }
        : undefined,
    };
    return drawerItem;
  });
}

