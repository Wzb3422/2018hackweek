<template>
  <div>
    <home-header></home-header>
    <home-tab></home-tab>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader'
  import HomeTab from './components/HomeTab'
  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeTab
    }
  }
</script>

<style scoped>

</style>
