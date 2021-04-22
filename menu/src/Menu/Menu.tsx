import React from 'react';
import { IMenuItem } from '../typings/context';
import styles from './Menu.module.css';

export default function Menu({ items }: { items: IMenuItem[] }) {
  return (
    <div className={styles.appWrapper}>
      <h1>hello</h1>
      <div className={styles.menu}>
        {items.map((item) => (
          <div key={item.id} className={styles.item} onClick={() => console.log(item.title)}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
