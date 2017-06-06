<template>
  <div class="goodslist">
    <div class="goodsul">
      <ul>
        <li v-for="(item,index) in goodList" @click="clicks(index)">
            <img :src=item.cover_url>
            <p>{{item.brand}}</p>
            <p>{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {Scroller} from 'vux'
  export default {
    name: "",
    components: {
      Scroller
    },
    data() {
      return {
        goodList:[]
      }
    },
    created() {
      var _this = this;
      this.$http.get("http://www.zhongrenjituan.cn/shop/index/index_home_page").then(function (data) {
        _this.goodList = data.data;
      }), function (err) {
        console(err)
      }
    },
    methods: {
      clicks(key){
        var _this = this;
        var id = this.goodList[key].id
        this.$store.commit('sendId', id)
//		   	this.$router.push({path: '/Product',query: {plan: id}})//路由传id
        this.$router.push('/Product')

      }
    }
  }
</script>

<style scoped>
  .sec-kill {
    width: 100%;
    text-align: center;
    background-color: white;
    margin: 5px 0;
    padding: 10px 5px;
    overflow: auto;
  }

  .kill-item {
    border-right: 1px solid rgb(243, 243, 243);
    float: left;
    width: 100px;
    height: auto;
    display: inline-block;
  }

  .goodslist ul {
    list-style: none;
    font-size: 14px;
  }

  .goodslist li {
    float: left;
    width: 30%;
    padding: 5px;
    text-align: center;
    white-space: nowrap;
  }

  .goodslist li img {
    width: 80%;
    height: 100px;
  }

  .money,
  .old {
    display: block;
    font-size: 14px;
  }

  .old {
    color: grey
  }

  .goodsul {
    height: 300px;
    overflow: auto;
  }
</style>
