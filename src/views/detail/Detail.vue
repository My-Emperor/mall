<template>
  <div id="detail">
    <detail-nav-bar class="navbar"></detail-nav-bar>
    <scroll ref="scrollRef"
            class="content"
            @getScroll="getScroll"
            :probe-type="3"
            :pull-up-load="false"
            :scroll-click="true">
      <detail-swiper :banners="topImage" class="det-Swiper"></detail-swiper>
      <detail-base-info class="baseInfo" :good="good"/>
      <detail-shop-info class="shopInfo" :shop="shop"/>
      <detail-goods-info class="detailInfo" :detailInfo="detailInfo"/>
      <detail-param-info class="goodsParam" :goodsParam="goodsParam"/>
    </scroll>

  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";

  import Scroll from "components/common/scroll/BScroll"

  import {getDetailData} from "network/detail";
  import {Goods} from "network/detail";
  import {Shop} from "network/detail";
  import {GoodsParam} from "network/detail";
  import {debounce} from "common/utils"

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        //轮播图数据图片
        topImage: [],
        //商品数据
        good: null,
        shop: null,
        detailInfo: null,
        goodsParam: null,
      }
    },
    methods: {
      getScroll(position) {
        console.log(position.y)
      },
    },
    components: {
      DetailSwiper,
      DetailNavBar,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      Scroll
    },
    created() {
      if (this.$route.params.iid) this.iid = this.$route.params.iid
      console.log(this.iid)

      /**
       * 网络请求相关方法
       * @param type
       */
      //根据id获取请求商品数据
      getDetailData(this.iid).then(res => {
        const data = res.result;
        // console.log(data)
        //获取商品轮播显示图片
        if (data.itemInfo.topImages) this.topImage = data.itemInfo.topImages;


        //获取商品数据
        this.good = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // console.log(this.good)

        //获取商家店铺数据
        this.shop = new Shop(data.shopInfo)
        // console.log(this.shop)
        // console.log(this.topImage);

        //获取商品详情
        if (data.detailInfo) this.detailInfo = data.detailInfo;
        // console.log(this.detailInfo)

        //获取商品参数
        this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // console.log(this.goodsParam)
      }).catch(rej => {
        // console.log(rej)
      })
    },
    mounted() {
      //图片加载完成的事件监听
      //debounce返回的是该延时完成的参数方法,即this.$refs.scrollRef.getRefresh.apply
      // const ref = debounce(this.$refs.scrollRef.getRefresh, 300);
      // //监听goodsListItem中图片加载完成所发送的时间 $but为事件总线,即在main.js中通过Vue的原型所注册的一个全局变量
      // this.$bus.$on('ItemImageLoad', () => {
      //   //刷新scroll滚动插件
      //   ref()
      // })
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .navbar {
    background-color: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .baseInfo {
    border-bottom: 5px solid #f2f5f8;
  }

  .shopInfo {
    padding: 15px 5px;
    border-bottom: 5px solid #f2f5f8;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;
    /*overflow: hidden;*/
  }
</style>
