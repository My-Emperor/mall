<template>
  <div v-if="detailInfo != null">
    <div class="detailTitle">
      {{detailInfo.desc}}
    </div>
    <div class="detailImage">
      <span>{{detailInfo.detailImage[0].key}}</span>
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return null;
        }
      }
    },
    methods:{
      imageLoad(){
        //发送图片加载完成事件
        this.$bus.$emit('ItemImageLoad')
      },
    }
  }
</script>

<style scoped lang="less">
  .detailTitle {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .detailImage{
    span{
      display: block;
      padding: 5px 15px;
      font-weight: 700;
      color: #a6a9ad;

      font-size: 18px;
    }
    img {
      width: 100%;
    }
  }
</style>
