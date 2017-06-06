<template>
  <div>
    <x-header>购物车</x-header>
    <good-item :checkAlls=checkAll @total="getCheckInfo" :canceAll=isFromAll></good-item>
    <div class="total">
      <div class="checkall">
        <input class="checkcss" type="checkbox" v-model="checkAll" @click="isCancelAll($event)"> 全选({{checkedCount}})
      </div>
      <div class="hjcharge">
        <span>合计：</span>
        <span class="moneys">￥{{totaleMoney}}</span>
      </div>
      <span class="docount" @click="goCount" :class="{active:isactive}">去结算</span>
    </div>
  </div>
</template>

<script>

  import {
    XHeader,
    Group,
    Cell,
    XNumber,
    Checker,
    CheckerItem,
    Divider,
    Panel,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
  } from 'vux';
  import GoodItem from '../Product/GoodItem.vue'
  export default {
    components: {
      XHeader,
      Group,
      Cell,
      XNumber,
      Checker,
      CheckerItem,
      Divider,
      Panel,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton,
      GoodItem
    },
    data() {
      return {
        totaleMoney: 0,
        checkedCount: 0,
        checkAll: false,
        isFromAll: {isCancleAll: false}
      }
    },
    computed: {
      isactive(){
        return this.checkedCount > 0
      }
    },
    methods: {
      getCheckInfo(data){
        this.checkedCount = data.amount
        this.totaleMoney = data.totaleMoney
        this.checkAll = data.isAllChecked
      },
      goCount(){
        if (!this.isactive ) {
          return false;
        } else {
          this.$router.push('/FirmOrder')
        }
      },
      isCancelAll(e){
        if (e.target.className == "checkcss") {
          this.isFromAll.isCancleAll = true
        } else {
          this.isFromAll.isCancleAll = false
        }
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .vux-header {
    background-color: #E6171E;
  }

  .one {
    margin-bottom: 20px;
  }

  .vux-checker-item {
    width: 100%;
  }

  .total {
    height: 3.2em;
    width: 100%;
    line-height: 3.2em;
    background: #fff;
    bottom: 60px;
    position: fixed;
  }

  .checkall {
    width: 20%;
    float: left;
    height: 100%;
  }

  .hjcharge {
    font-size: 16px;
    width: 40%;
    float: left;
    height: 100%;
    text-align: center;
  }

  .docount {
    float: right;
    display: inline-block;
    height: 100%;
    width: 100px;
    text-align: center;
    background-color: #eee;
    color: #848689;
    &.active {
      background-color: #f23030;
      color: white;
    }
  }

  .checkcs {
    float: left;
    margin: 48px 15px 0;
  }

  .checkcss {
    margin-left: 15px;
  }
</style>
