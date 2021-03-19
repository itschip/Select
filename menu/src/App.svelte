<script lang="ts">
  import Menu from './components/Menu/Menu.svelte';

  setTimeout(() => {
    window.dispatchEvent(
            new MessageEvent('message', {
              data: {
                method: 'setData',
                data: [
                  {
                    id: 1,
                    title: "T20",
                    desc: 'Fast as fuck boii'
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

</script>

<main>
  <Menu />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
