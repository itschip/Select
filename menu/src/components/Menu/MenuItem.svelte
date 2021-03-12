<script lang="ts">
  interface MenuItem {
    id: number;
    title: string;
    desc: string;
  }

  export let item: MenuItem;
</script>

<div class="menu-item">
  <h3 class="item-title">{item.title}</h3>
  <p class="item-description">Descripton: {item.desc}</p>
</div>

<style>
  .menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #232323;
    height: auto;
    min-height: 50px;
    max-height: 70px;
    color: #fff;
    margin-bottom: 20px;
  }

  .item-title {
    font-weight: 500;
  }
  
  .item-description {
    font-weight: 400;
  }
</style>
