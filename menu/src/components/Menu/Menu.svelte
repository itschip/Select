<script lang="ts">
  import MenuItem from './MenuItem.svelte';

  setTimeout(() => {
    window.dispatchEvent(
            new MessageEvent('message', {
              data: {
                method: 'setData',
                data: [
                  {
                    id: 1,
                    title: "T20",
                    desc: 'Fast as fuck boii I mean like that was really fast brr'
                  },
                  {
                    id: 1,
                    title: "Adder",
                    desc: 'Fast as fuck boii'
                  }
                ]
              }
            })
    )
  }, 1000);

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