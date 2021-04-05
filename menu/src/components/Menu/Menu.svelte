<script lang="ts">
  import MenuItem from './MenuItem.svelte';

  let items = [];

  window.addEventListener('message', (event) => {
    console.log(event)
    const msg = event.data
    if (msg.method === 'setData') {
      console.log(msg.data)
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
