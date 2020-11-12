<template>
  <swiper class="det-swiper" >
    <swiper-item v-for="(bannerItem,index) in banners" :key="index">
        <img :src="bannerItem" alt="image" >
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper/index"

  export default {
    name: "DetailSwiper",
    data() {
      return {
        imageLoadFlag: true
      }
    },
    methods:{

    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
.det-swiper{
  height: 300px;
}
</style>
