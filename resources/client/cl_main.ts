import { NuiCallback } from './cl_utils';

// TODO: Create exports soonTM
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
  title: string;
  description: string;
}

/* 
exp['Select'].CreateMenu({
  title: 'Garage',
  items: [
    {
      title: 'T20',
      descripton: 'Best car'
    }
  ]
})
*/
