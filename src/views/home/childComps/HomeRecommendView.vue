<template>
  <div id="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="image">
        <div >{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img{
    height: 70px;
    margin: 5px 0;
  }
</style>
