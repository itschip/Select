export interface IMenuContext {
  items: IMenuItem[];
  visibility: boolean;
  setVisibility: (show: boolean) => void;
}

export interface IMenuItem {
  id: number;
  title: string;
  description: string;
}
