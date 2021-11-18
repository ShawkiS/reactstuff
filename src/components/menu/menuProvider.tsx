import React, { useState } from 'react';
import { MenuActionsProps, MenuContextProps, MenuContextProviderProps, MenuItemProps } from '../types';


const MenuContext = React.createContext<MenuContextProps | undefined>(
  undefined
);

const MenuActions = React.createContext<MenuActionsProps | undefined>(
  undefined
)

export default function MenuContextProvider({isActiveId, isActiveStyle, notActiveStyle, children}: MenuContextProviderProps) {
  const [selectedItem, setSelectedItem ] = useState<string>('');
  const [items, setItems] = useState<MenuItemProps []>([]);

    const actions = React.useMemo(
      () => ({
        setActive: (
          id: string
        ): void => {
          setSelectedItem(id);
        },
        addItem: (
          id: string,
          children: React.ReactNode
        ): void => {
          setItems(items => [...items, {id, children}]);
            if(!selectedItem && id === isActiveId) {
              setSelectedItem(id);
            }
        }
      }), [items]
    )

  return (
    <MenuContext.Provider
      value={{
        selectedItem,
        items,
        isActiveStyle,
        notActiveStyle,
     }}
   >
    <MenuActions.Provider value={actions}>
    { children }
    </MenuActions.Provider>
  </MenuContext.Provider>
  )
}


export const useMenuItem = () => {
  const context = React.useContext(MenuActions)
  if (!context) { throw new Error() }

  return [context.setActive, context.addItem]
}

export const useMenuDetails = () => {
  const context = React.useContext(MenuContext)
  if (!context) { throw new Error() }

  return context
}