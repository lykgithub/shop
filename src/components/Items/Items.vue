<template>
  <div>
    <!--顶部搜索栏开始-->
    <div class="searchbar">
      <div class="back" @click="back">
        <img src="./images/back.png" height=35px width=35px/>
      </div>
      <div class="search">
        <input type="text">
      </div>
    </div>
    <!--顶部搜索栏结束-->
    <!--左侧导航栏开始-->
    <div class="category">
      <div class="slide-nav">
        <Scroller lock-x height="-100px">
          <div class="xxx" ref="searchs">
            <p class="slide-item" ref="searchs" @touchstart="clicks(key,$event)" :class="{selected:key==index}"
               v-for="(item,key) in msg" :key=key>
              {{item}}</p>
          </div>
        </Scroller>
      </div>
      <!--左侧导航栏结束-->
      <!--右侧分类详情区开始-->
      <div class="content">
        <Scroller lock-x height="-144px" ref="scroller">
          <div class="container">
            <div class="banner">
              <img :src=banner alt="">
            </div>
            <div class="item-content" v-for="item in content">
              <h4>{{item.brand}}</h4>
              <ul>
                <router-link to="/Home">
                  <li v-for="(item2,key) in item.imgs" :key="key">
                    <img :src=item2.url>
                    <span>{{item2.text}}</span>
                  </li>
                </router-link>
              </ul>
            </div>
            <br>
          </div>
        </Scroller>
      </div>
      <!--右侧分类详情区结束-->
    </div>
  </div>
</template>

<script>
  import {Scroller} from 'vux'
  export default {

    components: {Scroller},
    data () {
      return {
//左侧导航栏数据，可通过http请求更新
        msg: ["热门推荐", "个护化妆", "品牌男装", "潮流女装", "家用电器", "电脑办公", "手机数码",
          "母婴童装", "图书", "家具家纺", "厨房用品", "家居建材", "食品生鲜", "酒水饮料",
          "户外运动", "鞋靴箱包", "奢品礼品", "钟表珠宝", "玩具乐器", "内衣配饰", "汽车用品", "音响制品",
          "医药保健", "计生情趣", "全球购", "京东金融", "生活旅行", "宠物农资"
        ],
        index: 0,
        content: [],
        banner: "",
        searchs: [],
      }
    },
    mounted(){
      var _this = this;
      this.$http.get("http://192.168.2.103:8080/api/0").then(function (res) {
        _this.content = res.data.data[1];
        _this.banner = res.data.data[0]
      });
    },
    watch: {
      //监测右侧分类详情区数据变化后重新计算scroller高度
      content(old, curr){
        this.$nextTick(() => {
          this.$refs.scroller.reset({
            top: 0
          })
        })

      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      clicks(key, e){
        this.index=key
        var _this = this
        _this.$http.get("http://192.168.2.103:8080/api/" + key).then(function (res) {
          _this.content = res.data.data[1];
          _this.banner = res.data.data[0];
        });
      },
    }
  }
</script>

<style scoped>
  .category {
    width: 100%;
    display: flex;
  }

  .searchbar {
    display: flex;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 6px 0;
  }

  .searchbar .back {
    flex: 0 0 45px;
    width: 35px;
    height: 35px;
    text-align: center;
    padding: 7.5px 0;
  }

  .searchbar .back img {
    line-height: 45px;
  }

  .searchbar .search {
    flex: 1;
    margin-right: 10px;
  }

  .searchbar .search input {
    flex: 1;
    width: 100%;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: white;
  }

  .slide-nav {
    flex: 0 0 75px;

  }

  .slide-item {
    width: 75px;
    height: 46px;
    line-height: 46px;
    margin-bottom: 2px;
    background-color: white;
    color: #232326;
    font-size: 14px;
    text-align: center;
  }

  .selected {
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

  .content {
    margin: 8px;
  }

  .container img {
    width: 100%;
    height: 105px;
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
    padding-top: 5px;
  }

  .item-content ul span {
    width: 100%;
    font-size: 10px;
    display: block;
    text-align: center;
    margin-top: 5px;
  }
</style>
