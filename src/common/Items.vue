<template>
  <div>
    <div class="tabbar">
    </div>
    <div class="category">
      <div class="slide-nav">
        <Scroller lock-x height="-100px">
          <div>
          <p class="slide-item" @click="clicks( key,$event)" :class="{colors:key==index}" v-for="(item,key) in msg">{{item}}</p>
          </div>
        </Scroller>
      </div>

      <div class="content">
        <Scroller lock-x height="-100px">
        <div class="container">
          <div class="item-log">
            <router-link to="/Finding" v-show="show">
              <img src="http://192.168.1.110:8080/images/category/0.jpg" alt="">
            </router-link>
          </div>
          <div class="item-content" v-for="item in content">
            <router-link to="/Home">
            <h4>{{item.brand}}</h4>
            <ul>
              <li v-for="item2 in item.imgs">
                <img :src=item2.url>
                <span>{{item2.text}}</span>
              </li>
            </ul>
            </router-link>
          </div>
        </div>
        </Scroller>
      </div>

    </div>
  </div>
</template>

<script>
  import { Scroller } from 'vux'
  var recommend = [
    {
      brand: "专场推荐",
      imgs: [{url: require("./images/4.jpg"), text: "3.7超级品类日"}, {
        url: require("./images/2.png"),
        text: "水果"
      }, {url: require("./images/1.jpg"), text: "跨品类2件5折"}]
    },
    {
      brand: "热门分类",
      imgs: [{url: require("./images/11.png"), text: "手机"}, {
        url: require("./images/6.jpg"),
        text: "笔记本"
      }, {url: require("./images/10.jpg"), text: "空调"},
        {url: require("./images/7.jpg"), text: "收纳用品"}, {
          url: require("./images/5.jpg"),
          text: "炒锅"
        }, {url: require("./images/9.jpg"), text: "啤酒"}, {url: require("./images/11.jpg"), text: "火车票"}]
    },
    {brand: "常用分类", imgs: [{url: require("./images/12.jpg"), text: "少女文胸"}]},

  ]


  var computer = [
    {
      brand: "装机大师",
      imgs: [{url: require("./images/11.png"), text: "乐视"}, {
        url: require("./images/6.jpg"),
        text: "华为"
      }, {url: require("./images/10.jpg"), text: "中兴"},
        {url: require("./images/7.jpg"), text: "魅族"}, {
          url: require("./images/5.jpg"),
          text: "小米"
        }, {url: require("./images/9.jpg"), text: "联想"}]
    },
    {brand: "谷歌", imgs: [{url: require("./images/12.jpg"), text: "三星"}]},

  ]
  export default {
    components: {Scroller},
    data () {
      return {
        msg: ["家用电器", "电脑办公", "手机数码", "母婴童装", "图书", "家居家纺", "厨房用品",
          "家具建材", "食品生鲜", "酒水饮料", "户外运动", "鞋靴箱包", "奢品礼品", "钟表珠宝",
          "玩具乐器", "内衣配饰", "汽车制品", "音响制品", "医药保健", "计生情趣", "全球购",
          "京东金融", "生活旅行", "宠物农资"
        ],
        index: 0,
        show: true,
        content: recommend,
      }
    },
    mounted(){
      this.move()
    },
    methods: {
      move(){
        window.onmousemove=function () {
          console.log(1)
        }
      },
      clicks(key,e){
        e.target.parentNode.parentNode.style.transition="0.5s",
        this.index = key;
        if (key!=0||key!=1){
          this.content=""
          this.show=false
        }
        switch (key) {
          case 0:
            this.content = recommend
            this.show=true
            break;
          case 1:
            this.content = computer
            this.show=true
            break;
        }
        var index=key
        if (key<4){
          var index=4;
        }
        if (key>16){
          return
        }
        m=-50*(index-4)
        var m=-50*(index-4);
        e.target.parentNode.parentNode.style.transform="translateY("+ m +"px)";
      },
    }
  }
</script>

<style scoped>
  .category {
    width: 100%;
    display: flex;
    position: absolute;
    top: 45px;
    bottom: 0;
  }

  .searchbar {
    width: 100%;
    height: 45px;
    background-color: white;
  }

  .slide-nav {
    flex: 0 0 75px;
    margin-top: 8px;

  }

  .slide-item {
    width: 75px;
    height: 46px;
    line-height: 46px;
    margin: 2px 0;
    background-color: white;
    color: #232326;
    font-size: 14px;
    text-align: center;
  }
  .content {
    padding: 8px 0 0 8px;
  }

  .colors {
    color: red;
  }

  .item-content {
    width: 100%;
    margin-top: 19px;
  }

  .item-content h4 {
    font-size: 12px;
    color: #232326;
    margin-bottom: 12px;
    margin-left: 10px;
  }

  .container img {
    width: 100%;
    height: 105px;
    margin-top: 5px;
  }

  .item-content ul {
    font-size: 0;
    background: white;
  }

  .item-content ul li {
    width: calc(100% / 3);
    height: 86px;
    text-align: center;
    display: inline-block;
    list-style: none;
  }

  .item-content ul img {
    width: 55px;
    height: 55px;
  }

  .item-content ul span {
    width: 100%;
    font-size: 10px;
    display: block;
    text-align: center;
    margin-top: 5px;
  }
</style>
