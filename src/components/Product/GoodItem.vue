<template>
  <div>
    <div class="box">
      <swipeout class="one" v-for="(list,index) in prolist" :key="index">
        <swipeout-item :threshold=".5" underlay-color="#ccc">
          <div slot="right-menu">
            <swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">收藏</swipeout-button>
            <swipeout-button @click.native="delList(index)" background-color="#D23934">删除</swipeout-button>
          </div>
          <div slot="content" class="demo-content vux-1px-tb">
            <checker-item :value="1">
              <div class="proLists">
                <div class="proleft">
                  <input type="checkbox" class="checkcs" :value="list.id" v-model="list.checked" @click="sendInfor">
                  <router-link :to=list.link>
                    <img :src=list.src>
                  </router-link>
                  <span>{{list.name}}
        	                        <p class="guige">{{list.text}}</p>
        	                        <p class="charges">￥{{list.charge}}</p>
        	                        </span>
                </div>
                <div class="count">
                  <span id="num-jian" @click="changeCount(index,-1)">-</span><input type="text" id="input-num" name="数量"
                                                                            v-model="list.numberValue"/><span
                  id="num-jia" @click="changeCount(index,1)">+</span>
                </div>
              </div>
            </checker-item>
          </div>
        </swipeout-item>
      </swipeout>
    </div>
  </div>

</template>
<script>

  import {XHeader, Checker, CheckerItem, Swipeout, SwipeoutItem, SwipeoutButton} from 'vux'

  export default {

    components: {
      XHeader,
      Checker,
      CheckerItem,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton
    },
    data() {
      return {
        isAllChecked: false,
        amount: 0,
        checkMoney: 0,
        prolist: [{
          src: require('./../ShopCar/images/sp02.png'),
          name: '苹果7S plus',
          id: 1,
          charge: '7888',
          text: '土豪金，32G，港货,请包装严实，妥善寄件，附带发票',
          link: "/Product",
          numberValue: 1,
          checked: false
        }, {
          src: require('./../ShopCar/images/sp02.png'),
          name: '苹果6S plus',
          id: 2,
          charge: '5888',
          text: '玫瑰红，32G，国产,请包装严实，妥善寄件',
          link: "/Product",
          numberValue: 1,
          checked: false
        }],
      }
    },
    props: {
      checkAlls: Boolean,   //接受父组件传过来的全选按钮的状态(true/false)
      canceAll:Object       //判断是否点击事件源于全选按钮
    },
    watch: {
      checkAlls:function (newValue,oldValue) {
        var _this=this
        if (this.canceAll.isCancleAll){
          if (oldValue==false){
            this.prolist.forEach(function (list) {
              list.checked=true
            })
          }else {
            this.prolist.forEach(function (list) {
              list.checked=false
            })
          }
          this.sendInfor();
        }
      },
      prolist: {
        deep: true,
        handler (val) {
          this.sendInfor()
        }
      }
    },

    mounted(){
      this.sendInfor();
    },
    methods: {
      changeCount(index,flag) {
        if (flag==1){
          this.prolist[index].numberValue++;
        }else {
          var buy_nums = this.prolist[index].numberValue
          if (buy_nums <= 0) {
            buy_nums = 0;
          } else {
            this.prolist[index].numberValue--;
          }
        }
        this.sendInfor()
      },
      delList(index){
        this.prolist.splice(index, 1)
      },
      //计算总金额
      calcMoney() {
        var checkMoney = 0;
        var selected = this.prolist.filter(function (list) {
          return list.checked
        });
        for (let i = 0; i < selected.length; i++) {
          checkMoney += (+selected[i].charge) * (+selected[i].numberValue);
        }
        this.checkMoney = checkMoney;
      },
      //计算总数量
      calcamount() {
        var amount = 0;
        var selected = this.prolist.filter(function (list) {
          return list.checked
        });
        for (let i = 0; i < selected.length; i++) {
          amount += (+selected[i].numberValue);
        }
        this.amount = amount;
      },
      //向父组件传递总金额和总数量
      sendInfor(){
        this.canceAll.isCancleAll=false
        this.calcMoney();
        this.calcamount();
        var selectedNum = this.prolist.filter(function (list) {
          return list.checked
        }).length;
        if (selectedNum != this.prolist.length) {
          this.isAllChecked = false
        } else {
          this.isAllChecked = true
        }
        this.$emit("total", {amount: this.amount, totaleMoney: this.checkMoney,isAllChecked:this.isAllChecked})
      }
    }
  }
</script>

<style scoped>
  .vux-header {
    background-color: #E6171E;
  }

  .one {
    margin-bottom: 20px;
  }

  .vux-checker-item {
    width: 100%;
  }

  .weui-cell {
    border: none;
    /* float: right; */
    width: 29%;
    right: 0;
    bottom: 0;
    position: absolute;
  }

  .weui-cells:before {
    border-top: none;
  }

  .weui-cell:before {
    content: "";
    border-top: none;
  }

  .demo1-item {
    padding: 5px 20px;
    background: #fff;
  }

  .demo1-item-selected {
    border: 1px solid green;
  }

  .demo-content {
    border-right: 3px solid #336dd6;
  }

  .total .detail {
    margin-top: 16px;
  }

  .proLists img {
    float: left;
  }

  .proleft > span {
    display: inline-block;
    width: 78%;
    margin: 16px;
  }

  .proLists .charges {
    font-size: 16px;
    margin-top: 5px;
    color: #ff4400;
  }

  .proLists .guige {
    font-size: 13px;
    color: #808080;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }

  .proleft {
    float: left;
    width: 235px;
    white-space: nowrap;
  }

  .detail {
    float: left;
    margin: 40px 15px;
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
    font-family: "微软雅黑";
    width: 40%;
    float: left;
    height: 100%;
    text-align: center;
  }

  .hjcharge .moneys {
    color: #ff4400;

  }

  .docount {
    color: #fff;
    float: right;
    display: inline-block;
    background: #E6171E;
    height: 100%;
    width: 100px;
    text-align: center;
  }

  .checkcs {
    float: left;
    margin: 48px 15px 0;
  }

  .checkcss {
    margin-left: 15px;
  }

  .count {
    position: absolute;
    right: 15px;
    top: 65%;
  }

  .count span {
    width: 27px;
    height: 27px;
    display: inline-block;
    border: 1px solid #C8C7CD;
    text-align: center;
    line-height: 27px;
    float: left;
  }

  .count input {
    width: 27px;
    height: 27px;
    border: 1px solid #C8C7CD;
    float: left;
    text-align: center;
  }


</style>
