<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'
  import {getHomeMultidata} from 'network/home'
  export default {
    name: 'App',
    components:{MainTabBar},

  }
</script>
<style lang="less">
  @import "assets/css/normalize.css";
  @import "assets/css/base.css";
</style>
