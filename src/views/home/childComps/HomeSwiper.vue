<template>
  <swiper>
    <swiper-item v-for="(bannerItem,index) in banners">
      <a :href="bannerItem.link">
        <img :src="bannerItem.image" alt="image" @load="swiperImageLoad">
      </a>
    </swiper-item>
  </swiper>

</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper/index"

  export default {
    name: "HomeSwiper",
    data() {
      return {
        imageLoadFlag: true
      }
    },
    props: {
      banners: {
        type: Array,
        //type类型为数组或对象时,default则为方法返回默认值
        default() {
          return []
        }
      }
    },
    methods: {
      swiperImageLoad() {
        if (this.imageLoadFlag) {
          this.$emit('swiperImageLoad')
          this.imageLoadFlag = false;
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
