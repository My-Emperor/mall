<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend-view :recommends="recommends"/>
    <home-feature-view/>
    <tab-control @tabClick="tabClick" :titles="['流行','新款','精选']"/>
    <goods-list :goodsList="showGoods" />
  </div>


</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import HomeFeatureView from "./childComps/HomeFeatureView";

  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from 'components/content/tabControl/tabControl'
  import GoodsList from "components/content/goods/GoodsList";

  import {getHomeMultidata} from "network/home";
  import {getHomeGoods} from "network/home";


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
        currentType:'pop'
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      TabControl,
      GoodsList
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

      /**
       * 网络请求相关方法
       * @param type
       */
      //请求商品数据
      getHomeGoods(type) {
        //让页面请求数默认从0+1 开始
        const page = this.goods[type].page += 1;
        getHomeGoods(type,page).then(res => {
          console.log(res)
          this.goods[type].list.push(...res.data.list)
        })
      },

      //获取子组件tabControl中活跃状态,通过switch判断商品类别
      tabClick(index){
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
      }
    },
    computed:{
      showGoods(){
        console.log(this.goods[this.currentType].list)
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
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

</style>
