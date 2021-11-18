export interface MenuItemProps {
    id: string
    children?: React.ReactNode;
}

export interface MenuContextProviderProps {
    isActiveId: string;
    isActiveStyle: React.CSSProperties;
    notActiveStyle: React.CSSProperties;
    children?: React.ReactNode;
}

export interface MenuContextProps { 
  selectedItem: string;
  items: MenuItemProps [];
  isActiveStyle: React.CSSProperties;
  notActiveStyle: React.CSSProperties;
}

export interface MenuActionsProps {
  setActive: (id: string) => void;
  addItem: (id: string, children: React.ReactNode) => void;
}

export interface detailsProps { 
  id: string;
  children?: React.ReactNode;
}

export interface BulletPointNode {
  text: string;
  children: BulletPointNode[];
  color?: string;
}