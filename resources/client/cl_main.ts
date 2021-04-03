import { NuiCallback } from './cl_utils';

// TODO: Create exports soonTM
const exp = (global as any).exports;

exp('CreateMenu', (menu: Menu) => {
  SendNuiMessage(
    JSON.stringify({
      data: menu,
    }),
  );
});

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
