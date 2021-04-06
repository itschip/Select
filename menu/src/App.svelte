<script lang="ts">
  import Menu from './components/Menu/Menu.svelte';

  setTimeout(() => {
    window.dispatchEvent(
            new MessageEvent('message', {
              data: {
                method: 'setVisibility',
                data: true
              }
            })
    )
  }, 1000)

  let visibility;

  window.addEventListener('message', (event) => {
    const msg = event.data
    if (msg.method === 'setVisibility') {
      visibility = msg.data;
    }
  })

</script>

<main>
  {#if visibility}
    <Menu />
  {/if}
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap');
  * {
    font-family: 'Rubik', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
