<template>
  <div class="goods-item" @click="itemClick">
   <img :src="good.show.img" alt="img" @load="imageLoad">
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
        type: Object,
        default() {
          return []
        }
      }
    },
    methods:{
      imageLoad(){
        //发送图片加载完成事件
        this.$bus.$emit('ItemImageLoad')
      },
      itemClick(){
        this.$router.push('/detail/'+this.good.iid)
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
