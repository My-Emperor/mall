<template>
  <div class="goods-item">
    <a :href="good.link"><img :src="good.show.img" alt="img"></a>
    <div class="goods-info">
      <p>{{good.title}}</p>
      <span class="price">{{good.price}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      good: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .goods-item {
    margin-bottom: 10px;
    width: 48%;
    text-align: center;
    img {
      width: 100%;
      border-radius: 10px;
    }

    .goods-info {
      font-size: var(--font-size);

      p {
        //超出部分隐藏
        overflow: hidden;
        //将超出的隐藏部分用...表示
        text-overflow: ellipsis;
        //将文字控制在一行显示
        white-space: nowrap;

      }

      .price {
        color: red;
      }

      .collect {
        &:before{
          margin-left: 8px;
          content:'☆';
        }
      }
    }
  }

</style>
