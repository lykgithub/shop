<template>
  <div class="address">
    <x-header>收货地址</x-header>
    <div class="address-item" v-for="(user,index) in users">
      <div class="descri">
        <p>{{user.name}} {{user.phoneNum}}</p>
        <p>
          <i class="is-default" v-show=user.isDefault>默认</i>
          {{user.address}}
        </p>
      </div>
      <div class="edit" @click="edit(index)">
        <img src="./images/edit.png" alt="">
      </div>
    </div>
    <router-link to="/AddAddress">
      <div class="add-address">+新建地址</div>
    </router-link>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
  export default {
    components: {
      XHeader,
    },
    data () {
      return {
        users: [
          {name: "张三", phoneNum: "13578965126", isDefault: true, address: "江苏省 南京市 玄武区 南京街"},
          {name: "李四", phoneNum: "18778965126", isDefault: false, address: "福建省 厦门市 集美区 集美街"},
          {name: "王五", phoneNum: "17778965126", isDefault: false, address: "河北省 石家庄市 长安区 长安街"},
        ],
      }
    },
    methods:{
      edit(index){
        this.$store.dispatch("editAddress",this.users[index])
        this.$router.push({path:"/EditAddress"})
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .address-item {
    display: flex;
    width: 100%;
    margin-bottom: 2px;
    padding: 10px;
    background-color: white;
    .descri {
      flex: 1;
      p:nth-child(2) {
        padding: 0 15% 0 0;
        color: rgb(104, 104, 104);
        i {
          padding: 2px 2px;
          background: #f23030;
          color: #fff;
          font-style: normal;
          font-size: 12px;
        }
      }
    }
    .edit {
      flex: 0 0 38px;
      position: relative;
      padding-right: 5px;
      img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        margin-top: -10px;
      }
    }
  }

  .add-address {
    width: 90%;
    height: 45px;
    line-height: 45px;
    border-radius: 3px;
    color: white;
    background-color: #e6171e;
    text-align: center;
    position: absolute;
    left: 5%;
    bottom: 30px;
  }
</style>
