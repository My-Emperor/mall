<template>
  <div class="goods">
      <goods-list-item v-for="good in goodsList" :good="good" />
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components:{
      GoodsListItem
    },
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      },
    }
  }
</script>

<style scoped>
.goods{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding:3px;
}
</style>
