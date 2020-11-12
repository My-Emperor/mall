<template>
  <div v-if="shop != null" class="shopInfo">
    <div class="shopLogo">
      <img :src="shop.logo" alt="img"> <span>{{shop.name}}</span>
    </div>
    <div class="shopContent">
      <div class="left">
        <div class="shopSells">
          <p>{{shop.sells | sellCountFilter}}</p>
          <span>总销量</span>
        </div>
        <div class="shopCount">
          <p>{{shop.goodsCount}}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="right">
        <table>
          <tr v-for="(item,index) in shop.score">
            <td>
              <span>{{item.name}}</span>
              <span class="scoreGood" :class="{scoreBad:!item.isBetter}">{{item.score}}</span>
              <span class="evalGood" :class="{evalBad:!item.isBetter}">{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shopBottom">
      <div class="shopping">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value / 10000).toFixed(1) + '万';
      }
    }
  }
</script>

<style scoped lang="less">
  .shopLogo {
    padding: 10px 5px;

    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, .1);
    }

    span {
      position: relative;
      top: -14px;
      left: 5px;
      font-size: 18px;
      font-weight: 700;
    }
  }

  .shopContent {
    display: flex;
    text-align: center;
    align-items: center;

    .left {
      flex: 1;
      display: flex;
      justify-content: space-evenly;
      border-right: 1px solid rgba(0, 0, 0, .1);

      p {
        font-weight: 700;
      }

      span {
        display: block;
        margin-top: 5px;
        font-size: 12px;
      }

      .shopSells {
        flex: 1;
      }

      .shopCount {
        flex: 1;
      }
    }

    .right {
      table {
        flex: 1;
        width: 120px;
        margin-left: 20px;

        tr {
          font-size: 14px;

          td {
            padding: 5px 0;
            display: flex;
            justify-content: space-between;

            span {
              text-align: center;
              line-height: 12px;
            }
          }
        }
      }

      .scoreGood {
        color: #5ea732;
      }

      .scoreBad {
        color: #f13e3a;
      }

      .evalGood {
        background-color: #5ea732;
        color: white;
        font-size: 12px;
      }

      .evalBad {
        background-color: #f13e3a;
        color: white;
      }
    }
  }

  .shopBottom{
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    .shopping{
      width: 150px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      border-radius: 15px;
      background-color: #f2f5f8;
    }
  }

</style>
