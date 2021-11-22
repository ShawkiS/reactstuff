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
  id: number;
  text?: string;
  children?: BulletPointNode[];
  color?: string;
}

export interface State {
  currentId: number;
  bullet?: BulletPointNode;
  inputId: number;
}

export enum ActionType {
  ADD_BULLET_POINT = "ADD_BULLET_POINT",
  REMOVE_BULLET_POINT = "REMOVE_BULLET_POINT",
  EDIT_BULLET_POINT = "EDIT_BULLET_POINT",
  CHANGE_INPUT_ID = "CHANGE_INPUT_ID",
  REMOVE_BY_ID = "REMOVE_BY_ID"
}

export interface Action {
  type: ActionType;
  payload: any;
}

export interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler
}