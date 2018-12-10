<template>
  <div>
    <home-header></home-header>
    <home-tab></home-tab>
    <home-footer-bar></home-footer-bar>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeTab from './components/HomeTab'
  import HomeFooterBar from './components/HomeFooterBar'
  export default {
    name: "Home",
    components: {
      HomeFooterBar,
      HomeHeader,
      HomeTab
    }
  }
</script>

<style lang="stylus" scoped>
</style>
