<template>
  <div id="tab-bar">
<!--    扩展插槽-->
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>

  #tab-bar{
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    box-shadow: 0 -1px 1px rgba(100,100,100,.08);
    z-index: 9;
  }


</style>
