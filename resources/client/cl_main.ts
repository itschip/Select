import { NuiCallback } from './cl_utils';

const exp = (global as any).exports;

exp('CreateMenu', (menu: Menu) => {
  SendNuiMessage(
    JSON.stringify({
      method: 'setVisibility',
      visible: true,
    }),
  );
  SendNuiMessage(
    JSON.stringify({
      method: 'setData',
      data: menu,
    }),
  );
});

RegisterCommand(
  'exmenu',
  () => {
    SendNuiMessage(
      JSON.stringify({
        method: 'setVisibility',
        data: true,
      }),
    );

    SetNuiFocus(true, false);
  },
  false,
);

RegisterCommand(
  'endmenu',
  () => {
    SendNuiMessage(
      JSON.stringify({
        method: 'setVisibility',
        data: false,
      }),
    );

    SetNuiFocus(false, false);
  },
  false,
);
// Interfaces

interface Menu {
  title: string;
  items: MenuItem[];
}

interface MenuItem {
  id: number;
  title: string;
  description: string;
}

NuiCallback('select:selectedItem', (data: MenuItem) => {
  console.log(data);
})
