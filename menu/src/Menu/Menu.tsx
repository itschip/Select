import React from 'react';
import { IMenuItem } from '../typings/context';
import styles from './Menu.module.scss';
import { useNuiRequest } from 'fivem-nui-react-lib';

export default function Menu({ items }: { items: IMenuItem[] }) {
  const Nui = useNuiRequest();

  const handleSelectedItem = (item: IMenuItem) => {
    console.log(item.title);
    Nui.send('select:selectedItem', item);
  };

  return (
    <div className={styles.appWrapper}>
      <h1>hello</h1>
      <div className={styles.menu}>
        {items.map((item) => (
          <div key={item.id} className={styles.item} onClick={() => handleSelectedItem(item)}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
