<template>
  <div class="add-address">
    <x-header>新建收货地址</x-header>
    <confirm v-model="show" title="请将信息输入完整"></confirm>
    <div class="new-address">
      <div class="user">
        <label for="user">收 货 人:</label>
        <input type="text" id="user" v-model="user.username" placeholder="请输入收货人姓名">
      </div>
      <div class="number">
        <label for="number">手机号码:</label>
        <input type="number" id="number" v-model="user.usernum" placeholder="请输入11位手机号">
      </div>
      <div class="address">
        <group label-width="4em" label-align="left" gutter="-2px">
          <x-address :title="title" v-model="value" :raw-value=true :list="addressData" value-text-align="center"></x-address>
        </group>
      </div>
      <div class="descr-address">
        <label for="descr-address">详细地址:</label>
        <input type="text" id="descr-address" v-model="tem" placeholder="最少3个字，最少40个字">
      </div>
      <div class="default-address">
        <group gutter="-2px">
          <x-switch title="设为默认地址" v-model="user.isDefault"></x-switch>
        </group>
      </div>
    </div>
    <div class="savAddress" @click="savAddress">保存收货地址</div>
  </div>
</template>

<script>
  import {XHeader,Group,XAddress,XSwitch ,ChinaAddressData,Value2nameFilter as value2name,Confirm } from 'vux'
  export default {
    components: {
      XHeader,
      Group,
      XAddress,
      XSwitch,
      Confirm
    },
    data () {
      return {
        title:"所在地区",
        addressData:ChinaAddressData ,
        value:[],
        tem:"",//临时存储
        user:{username:"",usernum:"",useraddress:"",isDefault:false},
        show:false
      }
    },
    methods:{
      savAddress(){
        if (this.user.username==""||this.user.usernum==""||this.tem==""||this.value.length==0){
          this.show=true
        }else {
          this.user.useraddress=this.getName(this.value)+" "+this.tem
          console.log(this.user)
        };

      },
      getName (value) {
        return value2name(value, ChinaAddressData)
      },
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .new-address {
    .user,.number,.descr-address{
      height: 30px;
      line-height: 30px;
      padding: 15px;
      margin-bottom: 1px;
      background-color: #fff;
    }

  }

  input {
    width: 80%;
    border: 0;
    font-size: 16px;
    padding-left: 0;
    outline: none;
    color: #222;
    text-align: center;
  }
  .savAddress{
    width: 90%;
    height: 45px;
    line-height: 45px;
    border-radius: 3px;
    color: white;
    background-color: #e6171e;
    text-align: center;
    position: fixed;
    left: 5%;
    bottom: 30px;
  }
</style>
