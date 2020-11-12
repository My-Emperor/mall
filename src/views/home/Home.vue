<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control @tabClick="tabClick" :titles="['流行','新款','精选']" ref="tabControlRef1" v-show="isShowTabControl"
                 :class="{flexd:isShowTabControl}"/>
    <scroll class="content"
            ref="scrollRef"
            @getScroll="getScroll"
            :probe-type="3"
            :pull-up-load="true"
            :scroll-click="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend-view :recommends="recommends"/>
      <home-feature-view/>
      <tab-control @tabClick="tabClick" :titles="['流行','新款','精选']" ref="tabControlRef2"/>
      <goods-list :goodsList="showGoods"/>

    </scroll>
    <!--    @click.native 用于监听组件底层元素的事件-->
    <back-top @click.native="backToTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import HomeFeatureView from "./childComps/HomeFeatureView";

  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from 'components/content/tabControl/tabControl'
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from 'components/common/scroll/BScroll'
  import BackTop from 'components/content/backtop/BackTop'


  import {getHomeMultidata} from "network/home";
  import {getHomeGoods} from "network/home";
  import {debounce} from "common/utils";



  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabControlScrollY: 0,
        isShowTabControl: false,
        saveY: 0
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,

    },
    created() {
      //对生命周期中的函数进行再一次封装
      this.getHomeMultidata()
      //请求流行商品数据
      this.getHomeGoods('pop')
      //请求新款商品数据
      this.getHomeGoods('new')
      //请求精选商品数据
      this.getHomeGoods('sell')
    },
    mounted() {
      //图片加载完成的事件监听
      //debounce返回的是该延时完成的参数方法,即this.$refs.scrollRef.getRefresh.apply
      const ref = debounce(this.$refs.scrollRef.getRefresh, 300);
      //监听goodsListItem中图片加载完成所发送的时间 $but为事件总线,即在main.js中通过Vue的原型所注册的一个全局变量
      this.$bus.$on('ItemImageLoad', () => {
        //刷新scroll滚动插件
        ref()
      })
    },
    //当离开首页时保存浏览记录
    // destroyed() {
      // console.log('des')
    // },
    //活跃时 回到首页时触发
    activated() {
      this.$refs.scrollRef.getRefresh();
      this.$refs.scrollRef.getScrollToTop(0, this.saveY, 0);
    },
    //离开时 离开首页时触发
    deactivated() {
      this.saveY = this.$refs.scrollRef.getScrollY();
    },

    methods: {
      /**
       * 事件监听相关方法
       */
      //请求轮播图与商品特点数据
      getHomeMultidata() {
        getHomeMultidata('home/multidata').then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
          // console.log(res)
        }).catch(rej => {
          console.log(rej)
        })
      },
      //获取滚动对象scroll滑动事件方法
      backToTop() {
        // console.log('click')
        this.$refs.scrollRef.getScrollToTop(0, 0);
      },
      //1.判断隐藏显示返回顶部按钮
      //2.判断TabControl与Y周的距离与屏幕滚动Y周距离
      getScroll(position) {
        // console.log(position.y)
        this.isShowBackTop = (-position.y) > 550;

        //2
        this.isShowTabControl = (-position.y) > this.tabControlScrollY;
        // console.log(this.isShowTabControl)
      },
      //上啦加载更多
      loadMore() {
        this.getHomeGoods(this.currentType);
        //加载完后需要重写调用scroll中的refresh重新可上啦刷新操作
        this.$refs.scrollRef.getLoadingMore()
      },

      //首页图片加载完成,获取tabControl距离顶部的Y周距离
      swiperImageLoad() {
        this.tabControlScrollY = this.$refs.tabControlRef2.$el.offsetTop
      },


      /**
       * 网络请求相关方法
       * @param type
       */
      //请求商品数据
      getHomeGoods(type) {
        //让页面请求数默认从0+1 开始
        const page = this.goods[type].page += 1;
        getHomeGoods(type, page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.list)
        })
      },

      //获取子组件tabControl中活跃状态,通过switch判断商品类别
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        ;
        this.$refs.tabControlRef1.currentIndex = index;
        this.$refs.tabControlRef2.currentIndex = index;
      }
    },
    computed: {
      showGoods() {
        // console.log(this.goods[this.currentType].list)
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    padding-top: 44px;
    height: 100vh;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .flexd {
    position: relative;
    top: 0px;
    bottom: 0px;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>
