<script lang="ts">
  import MenuItem from './MenuItem.svelte';

  // this is just some mock data
  const lists = [
    {
      id: 1,
      title: 'T20',
      desc: '20%',
    },
    {
      id: 2,
      title: 'Adder',
      desc: '30%',
    },
  ];
</script>

<main>
  {#each lists as item}
    <MenuItem {item} />
  {/each}
</main>

<style>
</style>
