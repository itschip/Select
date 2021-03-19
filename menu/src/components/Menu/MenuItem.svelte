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
  <p class="item-description">{item.desc}</p>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap');

  .menu-item {
    font-family: 'Rubik', sans-serif;
    display: flex;
    flex-flow: column;
    align-content: center;
    align-items: center;
    background-color: #232323;
    height: auto;
    min-height: 50px;
    max-height: 100px;
    color: #fff;
    margin-bottom: 20px;
    border-radius: 7px;
  }

  .item-title {
    font-weight: 600;
  }
  
  .item-description {
    margin-top: -20px;
    font-weight: 400;
  }
</style>
