<template>
  <div class="good">
    <div style="position: fixed;top: 0;left: 0;z-index: 101;padding-top: 5px" @click="back">
      <img src="./images/back.png" height=35px width=35px/>
    </div>
    <tab :line-width=2 active-color='deeppink' v-model="index" custom-bar-width="60px">
      <tab-item class="vux-center" v-for="(item, index) in list" :key="index" @on-item-click="changePage(index)">
        {{item}}
      </tab-item>
    </tab>
    <transition name="component-fade" mode="out-in">
      <keep-alive>
        <component :is="currentView"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import Commodity from './Commodity.vue'
  import Rattings from './Rattings.vue'
  import GoodDetail from './GoodDetail.vue'
  import {XHeader, Tab, TabItem, Swiper, SwiperItem} from 'vux'
  export default {
    components: {
      XHeader,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Commodity,
      Rattings,
      GoodDetail
    },
    data() {
      return {
        list: ["商品", "详情", "评价"],
        index: 0,
        currentView: Commodity
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      changePage(index) {
        switch (index) {
          case 0:
            this.currentView = Commodity;
            break;
          case 1:
            this.currentView = GoodDetail;
            break;
          case 2:
            this.currentView = Rattings;
            break;
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .good {

  }

  .vux-tab {
    display: flex;
    background-color: #fff;
    height: 44px;
    position: fixed !important;
    z-index: 100;
    width: 100%;
    top: 0 !important;
  }

  .vux-header {
    background-color: #E6171E;
  }

  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: all .2s ease;
  }

  .component-fade-enter,
  .component-fade-leave-active {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
</style>
