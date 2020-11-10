<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <ul>
        <li>测试数据1</li>
        <li>测试数据2</li>
        <li>测试数据3</li>
        <li>测试数据4</li>
        <li>测试数据5</li>
        <li>测试数据6</li>
        <li>测试数据7</li>
        <li>测试数据8</li>
        <li>测试数据9</li>
        <li>测试数据10</li>
        <li>测试数据11</li>
        <li>测试数据12</li>
        <li>测试数据13</li>
        <li>测试数据14</li>
        <li>测试数据15</li>
        <li>测试数据16</li>
        <li>测试数据17</li>
        <li>测试数据18</li>
        <li>测试数据19</li>
        <li>测试数据20</li>
        <li>测试数据21</li>
        <li>测试数据22</li>
        <li>测试数据23</li>
        <li>测试数据24</li>
        <li>测试数据25</li>
        <li>测试数据26</li>
        <li>测试数据27</li>
        <li>测试数据28</li>
        <li>测试数据29</li>
        <li>测试数据30</li>
        <li>测试数据31</li>
        <li>测试数据32</li>
        <li>测试数据33</li>
        <li>测试数据34</li>
        <li>测试数据35</li>
        <li>测试数据36</li>
        <li>测试数据37</li>
        <li>测试数据38</li>
        <li>测试数据39</li>
        <li>测试数据40</li>
        <li>测试数据41</li>
        <li>测试数据42</li>
        <li>测试数据43</li>
        <li>测试数据44</li>
        <li>测试数据45</li>
        <li>测试数据46</li>
        <li>测试数据47</li>
        <li>测试数据48</li>
        <li>测试数据49</li>
        <li>测试数据50</li>
        <li>测试数据22</li>
        <li>测试数据23</li>
        <li>测试数据24</li>
        <li>测试数据25</li>
        <li>测试数据26</li>
        <li>测试数据27</li>
        <li>测试数据28</li>
        <li>测试数据29</li>
        <li>测试数据30</li>
        <li>测试数据31</li>
        <li>测试数据32</li>
        <li>测试数据33</li>
        <li>测试数据34</li>
        <li>测试数据35</li>
        <li>测试数据36</li>
        <li>测试数据37</li>
        <li>测试数据38</li>
        <li>测试数据39</li>
        <li>测试数据40</li>
        <li>测试数据41</li>
        <li>测试数据42</li>
        <li>测试数据43</li>
        <li>测试数据44</li>
        <li>测试数据45</li>
        <li>测试数据46</li>
        <li>测试数据47</li>
        <li>测试数据48</li>
        <li>测试数据49</li>
        <li>测试数据50</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    mounted() {
      const croll = new BScroll(this.$refs.wrapper, {})
      console.log(croll)
    }
  }
</script>

<style scoped>

  .wrapper {
    height: 150px;
    background-color: pink;

    /*overflow: hidden;*/
    /*内容隐藏并在该区域内滚动*/
    /*overflow: scroll;*/
  }
</style>

