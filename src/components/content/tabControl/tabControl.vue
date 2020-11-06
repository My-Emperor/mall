<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item,index) in titles"
         :class="{active:index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      //让home动态获取选中状态
      itemClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index);
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;

    //position:sticky
    //当该属性所修饰的元素距离顶部top:44px时 将定位改成绝对定位 实现吸顶效果
    position: sticky;
    top: 44px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
    width: 100%;
    text-align: center;

  }

  .active{
    color: var(--color-high-text);
    span{
      padding: 0 5px 2px;
      border-bottom: 2px solid var(--color-high-text);
    }
  }

</style>
