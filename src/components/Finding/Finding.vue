<template>
  <div ref="shop">
    <component :is="currentView" @logined="login"></component>
  </div>
</template>

<script>
  import Login from '../User/Login.vue'
  import Findings from '../Finding/Findings.vue'
  export default {
    components: {
      Findings,
      Login
    },
    mounted(){
      if (sessionStorage.logined)
      {
        this.currentView=Findings;
      }
      else
      {
        this.currentView=Login;
      }
    },
    data () {
      return {
        currentView:Findings
      }
    },
    methods:{
      login(){
        this.currentView = Findings;
      }
    }
  }
</script>

<style>

</style>
