<script lang="ts">
  import MenuItem from './MenuItem.svelte';

  let items = [];

  window.addEventListener('message', (event) => {
    const msg = event.data
    if (msg.method === 'setData') {
      items = msg.data;
    }
  })

</script>

<main>
  {#each items as item}
    <MenuItem {item} />
  {/each}
</main>

<style>
</style>
