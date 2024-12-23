<template>
  <li class="list-item-component">
    <Text type="text" color="black"><slot /></Text>
    <div class="options">
      <Option type="edit" />
      <Option type="remove" />
    </div>
  </li>
</template>

<style scoped lang="scss">
  .list-item-component {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 10px;
    gap: 20px;
    background: $color-gray;
    width: 100%;

    .options {
      display: flex;
      gap: 6px;
    }
  }
</style>
