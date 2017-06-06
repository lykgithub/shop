<template>
  <div>
    <component :is="currentView" @logined="login"></component>
  </div>
</template>

<script>
  import Login from './Login.vue'
  import UserCenter from './UserCenter.vue'
  export default {
    name: "",
    components: {
      UserCenter,
      Login
    },
    mounted(){
      if (sessionStorage.logined) {
        this.currentView = UserCenter;
      }
      else {
        this.currentView = Login;
      }
    },
    data () {
      return {
        currentView: UserCenter
      }
    },
    methods: {
      login(){
        this.currentView = UserCenter;
      }
    }
  }
</script>

<style>

</style>
