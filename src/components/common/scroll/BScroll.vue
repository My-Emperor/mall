<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import scroll from 'better-scroll'

  export default {
    name: "BScroll",
    data() {
      return {
        scroll: null,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      scrollClick: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new scroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: this.scrollClick,
      });
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多');
        this.$emit('pullingUp')
      })

      this.scroll.on('scroll', (position) => {
        // console.log(position)
        this.$emit('getScroll', position)
      });
    },
    methods: {
      getScrollToTop(x, y, time = 400) {
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      getLoadingMore() {
        this.scroll && this.scroll.finishPullUp();
      },
      getRefresh() {
        console.log('refresh----')
        this.scroll &&  this.scroll.refresh();
      },
      getScrollY(){
        return this.scroll && this.scroll.y;
      }
    }
  }

</script>

<style scoped>

</style>
