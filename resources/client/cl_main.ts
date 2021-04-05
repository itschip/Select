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

RegisterCommand('exmenu', () => {
  console.log('hello mister')

  SendNuiMessage(
    JSON.stringify({
      visible: true
    })
  )
  SetNuiFocus(true, false);

}, false)
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
