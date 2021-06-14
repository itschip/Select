import React, { useContext, createContext, useState } from 'react';
import { useNuiEvent } from 'fivem-nui-react-lib';
import { IMenuContext, IMenuItem } from '../typings/context';

const MenuContext = createContext<IMenuContext | undefined>(undefined);

export default function MenuProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<IMenuItem[]>([]);
  const [visibility, setVisibility] = useState<boolean>(false);

  useNuiEvent('SelectMenu', 'setVisibility', setVisibility);
  useNuiEvent('SelectMenu', 'setItems', setItems);

  const value = {
    items,
    visibility,
    setVisibility,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export const useItems = () => {
  const { items } = useContext(MenuContext);
  return items;
};

export const useVisibility = () => {
  const { visibility, setVisibility } = useContext(MenuContext);
  return { visibility, setVisibility };
};
