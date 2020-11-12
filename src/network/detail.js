import {request} from './request'

export function getDetailData(iid) {
  return request({
    url: 'api/w6/detail',
    params:{
      iid,
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}


export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}


export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

//请求详情页数据
/*
* 1.商品标题:data.detailInfo.desc
* 2.商品价格
* 3.销量 收藏  发货时间
* 4.退货补运费 全国包邮 78天无理由退货
* 5.商家信息
*   img  title       |  描述相符
*   41万    335      |  价格合理
*  总销量  全部宝贝    |  质量满意
*
*           进店逛逛
*
* 6.商品信息
* 7.穿着效果:data.detailInfo.detailImage.key
*   img:data.detailInfo.detailImage.list
* */

