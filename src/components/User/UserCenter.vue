<template>

  <div class="detail">
    <x-header :left-options="{backText: ''}">个人中心</x-header>
    <div style="height: 600px; margin-top: 45px;">
      <masker style="border-radius: 2px;">
        <div class="m-img"
             :style="{backgroundImage: 'url(https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg)'}"></div>
        <div slot="content" class="m-title">
          <div class="heads">
            <!--<img :src="require('./images/timg.png')" />-->
          </div>
          {{name}}
          <br/>
          <span class="m-time">积分：unknow</span>
        </div>
      </masker>
      <div class="liebDiv">
        <cell class="lieb" title="全部订单" :value="Enabled" is-link></cell>
      </div>
      <div class="items">
        <ul>
          <li>
            <router-link to="/WaitToPay">
              <img :src="require('./images/unpay.svg')"/>
              <p>待付款</p>
            </router-link>
          </li>
          <li>
            <router-link to="/WaitToSent">
              <img :src="require('./images/unsent.svg')"/>
              <p>待发货</p>
            </router-link>
          </li>
          <li>
            <router-link to="/WaitToSent">
              <img :src="require('./images/undelivery.svg')"/>
              <p>待收货</p>
            </router-link>
          </li>
          <li>
            <router-link to="/WaitToSent">
              <img :src="require('./images/unjudge.svg')"/>
              <p>待评价</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div style="clear: both;"></div>
      <div class="liebDiv adds">
        <group  gutter="-8px">
          <cell class="lieb" title="我的收藏" :value="Enabled" :link="{path:'/Finding'}"></cell>
          <cell class="lieb" title="地址管理" :value="Enabled":link="{path:'/Address'}"></cell>
          <cell class="lieb" title="优惠券" :value="Enabled" is-link></cell>
          <cell class="lieb" title="设置" :value="Enabled" is-link></cell>
        </group>
      </div>
      <div class="liebDivs" @click="dologin">
        <span>退出登录</span>
      </div>

    </div>
  </div>
</template>

<script>
  import {XHeader, Masker, Cell,Group} from 'vux'
  //			sessionStorage.arrays=""
  var sess = sessionStorage.arrays
  export default {
    components: {
      XHeader,
      Masker,
      Cell,
      Group
    },
    data() {
      return {
        msg: "",
        Enabled: ""
      }
    },
    created: function () {
      sess = sessionStorage.arrays
    },
    methods: {
      dologin() {
        sessionStorage.arrays = ""
        sessionStorage.logined = ""
        sessionStorage.uid = ""
        this.$router.push('/Login')
      }
    },
    computed: {
      name() {
        if (sess == "" || !sess) {
          var name = "未登录"
          return name
        } else {
          var name = sess
          return name
        }
      }
    }
  }
</script>

<style scoped>
  .vux-header {
    width: 100%;
    position: fixed;
    top: 0;
    padding: 3px 0;
    box-sizing: border-box;
    background-color: #E6171e;
    z-index: 1000;
  }

  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
  }

  .m-title {
    color: #fff;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-weight: 500;
    font-size: 16px;
    width: 200px;
    margin: 0 auto;
    text-align: center;
    transform: translateY(50%);
  }

  .heads {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #10AEFF;
    position: absolute;
    background-image: url('images/demo.png');
    background-size: 100%;
  }

  .heads img {
    width: 100%;
    height: 100%;
  }

  .m-time {
    font-size: 12px;
    padding-top: 4px;
    border-top: 1px solid #f0f0f0;
    display: inline-block;
    margin-top: 5px;
  }

  .liebDiv {
    border-bottom: 1px solid #ddd;
    background: #fff;
  }

  .adds {
    float: left;
    width: 100%;
    margin-top: 15px;
  }

  .liebDivs {
    float: left;
    width: 100%;
    margin-top: 30px;
    text-align: center;
  }

  .liebDivs span {
    width: 80%;
    margin: 0 auto;
    background: #e6171e;
    color: #fff;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
    display: inline-block;
  }

  .lieb {
    height: 30px;
    color: #111;
  }

  .items {
    padding: 10px 0;
    background: #fff;
    float: left;
    width: 100%;
    border-bottom: 1px solid #ddd;
  }

  .items li {
    float: left;
    width: 25%;
    text-align: center;
    font-size: 15px;
  }

  .items li p {
    font-size: 14px;
  }
</style>
