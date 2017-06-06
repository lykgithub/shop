<template>
  <div ref="shop">
    <component :is="currentView" @logined="login"></component>
  </div>
</template>

<script>
  import Login from '../User/Login.vue'
  import CartItem from '../ShopCar/CartItem.vue'
  export default {
    components: {
      CartItem,
      Login
    },
    mounted(){
      if (sessionStorage.logined)
      {
        this.currentView=CartItem;
      }
      else
      {
        this.currentView=Login;
      }
    },
    data () {
      return {
        currentView:CartItem
      }
    },
    methods:{
      login(){
        this.currentView = CartItem;
      }
    }
  }
</script>

<style>

</style>
