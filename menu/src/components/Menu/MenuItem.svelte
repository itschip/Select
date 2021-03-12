<script lang="ts">
  interface MenuItem {
    id: number;
    title: string;
  }

  export let item: MenuItem;
</script>

<div class="menu-item">
  {item.title}
</div>

<style>
  .menu-item {
    background-color: #232323;
    color: #fff;
  }
</style>
