/**
 * Menu item structure for the nested drawer component
 */
export interface DrawerItem {
  /** Unique identifier for the menu item */
  id: string;
  /** Display label for the menu item */
  label: string;
  /** Optional description text shown below the label */
  description?: string;
  /** Optional icon to display before the label */
  icon?: React.ReactNode;
  /** Optional nested children menu items */
  children?: DrawerItem[];
  /** Optional click handler for leaf items */
  onClick?: () => void;
}

/**
 * Props for the Drawer component
 */
export interface DrawerProps {
  /** Array of top-level menu items */
  menu: DrawerItem[];
  /** Whether the drawer is open */
  open: boolean;
  /** Callback when drawer should be closed */
  onClose: () => void;
  /** Optional width of the drawer */
  width?: number;
  /** Optional custom className */
  className?: string;
}

