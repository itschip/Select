<script lang="ts">
  import MenuItem from './MenuItem.svelte';

  // this is just some mock data
  const lists = [
    {
      id: 1,
      title: 'T20',
      fuel: '20%',
    },
    {
      id: 2,
      title: 'Adder',
      fuel: '30%',
    },
  ];
</script>

<main>
  {#each lists as item}
    <MenuItem {item} />
  {/each}
</main>

<style>
  .card {
    margin-top: 10px;
    margin-bottom: 10px;
    background: #232323;

    color: #fff;
  }
</style>
