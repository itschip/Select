import React from 'react';
import { IMenuItem } from '../typings/context';
import styles from './Menu.module.scss';

export default function Menu({ items }: { items: IMenuItem[] }) {
  return (
    <div className={styles.appWrapper}>
      <div>
        {items.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </div>
  );
}
