<template>
  <div class="tab-bar-item" @click="clickItem">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="avticeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    //获取父组件传入的值
    props: {
      path: {
        type: String,
      },
      //动态颜色属性
      activeColor: {
        type: String,
        default: 'red',
      }
    },
    methods: {
      clickItem() {
        this.$router.replace(this.path);
      }
    },
    computed: {
      isActive() {
        //动态获取活跃中的路由对象 动态返回活跃状态
        // console.log(this.$route.path); 当前组件的路径值
        return this.$route.path.indexOf(this.path) !== -1;
      },
      avticeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    /*除去图片margin值*/
    vertical-align: middle;
  }
</style>
