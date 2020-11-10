<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
  }
</script>

<style scoped lang="less">
  .backtop {
    position: fixed;
    right: 8px;
    bottom: 50px;
    z-index: 9;
    img {
      width: 43px;
      height: 43px;
    }
  }
</style>
