import Menu from './menu.svelte';

const app = new Menu({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;