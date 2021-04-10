import React from 'react';
import { IMenuItem } from '../typings/context';

export default function Menu({ items }: { items: IMenuItem[] }) {
  return (
    <div>
      <div>
        {items.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </div>
  );
}
