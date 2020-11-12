<template>
  <nav-bar >
    <div slot="left" class="nav-back" @click="toBack">
      <img src="~assets/img/common/back.svg" alt="img">
    </div>
    <div slot="center" class="nav-con">
      <span v-for="(item,index) in this.title" :class="{active:index == currentIndex}" @click="active(index)">{{item}}</span>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    data(){
      return {
        title:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      toBack(){
        // this.$router.go(-1)
        this.$router.back();
      },
      active(index){
        this.currentIndex = index;
      }
    },
    components: {
      NavBar,
    }
  }
</script>

<style scoped lang="less">
  .nav-con {
    display: flex;
    font-size: 13px;
    text-align: center;
    span{
      flex: 1;
    }
  }
  .nav-back{
    img{
      font-size: 12px;
      margin-top: 10px;
    }
  }
  .active{
    color: var(--color-tint);
  }

</style>
