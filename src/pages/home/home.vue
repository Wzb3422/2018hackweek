<template>
  <div>
    <home-header></home-header>
    <home-tab></home-tab>
    <home-footer-bar @centerClick="centerClick"></home-footer-bar>
    <popup-two v-if="isPop"></popup-two>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeTab from './components/HomeTab'
  import HomeFooterBar from './components/HomeFooterBar'
  import popupTwo from './components/popupTwo'
  export default {
    name: "Home",
    components: {
      popupTwo,
      HomeFooterBar,
      HomeHeader,
      HomeTab,
    },
    data () {
      return {
        isPop: false
      }
    },
    methods: {
      centerClick () {
        this.isPop = !this.isPop
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
