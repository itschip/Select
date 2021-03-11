<script lang="ts">
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
    <div class="card">
      {item.title}
    </div>
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
