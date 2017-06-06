<template>
  <div class="good">
    <div class="tab">
      <ul>
        <li>综合</li>
        <li @click="sort(1)">价格</li>
        <li @click="sort(2)">评价</li>
      </ul>
    </div>
    <div class="container" v-for="item in goodList">
      <div class="pic">
        <img :src="require('../../../static/images/category/2.png')">
      </div>
      <div class="desc">
        <div class="dcri">【六月碎屏保】荣耀 畅玩6X 4GB 32GB 全网通4G手机 高配版 铂光金</div>
        <div class="price">
          <span>{{item.price}}</span>
          <span>152635条评价 好评{{item.ratting}}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        Sort: true,
        goodList: [{price: 5499, ratting: 30}, {price: 3788, ratting: 92}, {price: 1799, ratting: 60}]
      }
    },
    methods: {
      sort(key){
        var _this = this;
        switch (key) {
          case 1:
            this.goodList.sort(function (a, b) {
              if (_this.Sort) {
                return b.price - a.price
              } else {
                return a.price - b.price
              }
            })
            break;
          case 2:
            this.goodList.sort(function (a, b) {
              if (_this.Sort) {
                return b.ratting - a.ratting
              } else {
                return a.ratting - b.ratting
              }
            })
            break;
        }
        this.Sort = !_this.Sort;
      }
    }
  }
</script>

<style scoped>
  .tab ul {
    display: flex;
    margin-bottom: 30px;
  }

  .tab ul li {
    flex: 1;
    text-align: center;
    font-size: 18px;
    height: 30px;
    line-height: 30px;
  }

  .container {
    display: flex;
    width: 100%;
    height: 100px;
    margin-bottom: 1px;
    padding: 5px 0 10px 10px;
    background-color: white;
  }

  .container .pic {
    flex: 0 0 100px;
  }

  .container .pic img {
    width: 100px;
    height: 100px;
  }

  .desc {
    margin-left: 15px;
  }

  .price {
    padding: 20px 0 0 0px;
    font-size: 16px;
  }

  .price span {
    display: block;
  }

  .price span:nth-child(1) {
    font-size: 18px;
    color: red;
    font-weight: bold;
    padding-bottom: 5px;
  }
</style>
