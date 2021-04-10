import React from 'react';
import { IMenuItem } from '../typings/context';
import styles from './Menu.module.scss';
import {} from 'fivem-nui-react-lib';

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

setTimeout(() => {
	window.dispatchEvent(
		new MessageEvent('message', {
			data: {
				app: 'SelectMenu',
				method: 'setItems',
				data: [
					{
						id: 1,
						title: 'Adder',
						description: 'A super fast car'
					},
					{
						id: 2,
						title: 'Adder',
						description: 'A super fast car'
					},
					{
						id: 3,
						title: 'Adder',
						description: 'A super fast car'
					},
					{
						id: 4,
						title: 'Adder',
						description: 'A super fast car'
					},{
						id: 5,
						title: 'Adder',
						description: 'A super fast car'
					},
					{
						id: 6,
						title: 'Adder',
						description: 'A super fast car'
					}
				]
			}
		})
	)
}, 1000);