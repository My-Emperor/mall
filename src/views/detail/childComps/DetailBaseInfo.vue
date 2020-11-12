<template>
  <div v-if="good != null" class="goodBase"  >
    <div class="goodTitle">{{good.title}}</div>
    <div class="goodPrice">
      <span class="newPrice">{{good.newPrice}}</span>
      <span class="oldPrice"><del>{{good.oldPrice}}</del></span>
      <span v-if="good.discount != null" class="discount">{{good.discount}}</span>
    </div>
    <div class="goodAdvantage">
      <span>{{good.columns[0]}}</span>
      <span>{{good.columns[1]}}</span>
      <span>{{good.services[good.services.length-1].name}}</span>
    </div>
    <div class="goodServices">
      <span v-for="index in good.services.length-1" :key="index">
        <img :src="good.services[index-1].icon">
        <span>{{good.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBaseInfo",
    props: {
      good: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  }

</script>

<style scoped lang="less">
  .goodBase {
    padding: 15px 10px 0px;
  }

  .goodTitle {
    font-size: 16px;
    color: #222;
  }

  .goodPrice {
    padding: 10px 5px;

    .newPrice {
      font-size: 24px;
      color: var(--color-high-text)
    }

    .oldPrice {
      margin-left: 5px;
      font-size: 13px;
      color: #999;
      /*
      text-decoration可能的值：
　　      none    默认。定义标准的文本。
　　      underline    定义文本下的一条线。
　　      overline    定义文本上的一条线。
　　      line-through    定义穿过文本下的一条线。
　　      blink    定义闪烁的文本。
　　      inherit   规定应该从父元素继承 text-decoration 属性的值。
      */
    }

    .discount {
      position: relative;
      top: -8px;
      left: 5px;
      padding: 2px 5px;
      background-color: var(--color-high-text);
      border-radius: 8px;
      font-size: 12px;
      color: #fff;
    }
  }

  .goodAdvantage {
    display: flex;
    line-height: 30px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    justify-content: space-between;

    span {
      font-size: 13px;
      color: #999;
    }
  }

  .goodServices{
    display: flex;
    line-height: 60px;
    justify-content: space-between;

    span {
      font-size: 14px;

      img {
        position: relative;
        top: 2px;
        width: 14px;
        height: 14px;
      }
    }
  }
</style>
