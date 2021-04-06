<script lang="ts">
  import Nui from '../../utils/Nui';
  interface MenuItem {
    id: number;
    title: string;
    desc: string;
  }

  export let item: MenuItem;

  const handleItemClick = (item) => {
    Nui.send('Select:HandleClick', {
      item,
    });
  };
</script>

<div class="menu-item" on:click={() => handleItemClick(item)}>
  <h3 class="item-title">{item.title}</h3>
  <p class="item-description">{item.desc}</p>
</div>

<style>

  .menu-item {
    display: flex;
    flex-flow: column;
    align-content: center;
    text-align: left;
    padding-left: 10px;
    background-color: #303952;
    border: 1px solid #596275;
    height: auto;
    min-height: 50px;
    max-height: 100px;
    color: #fff;
    margin-bottom: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: .1s;
  }

  .menu-item:hover {
    background-color: #596275;
  }

  .item-title {
    font-weight: 500;
  }

  .item-description {
    margin-top: -20px;
    font-weight: 400;
    font-size: 14px;
  }
</style>
