<template>
  <div class="wrapper">
    <div class="bar-left">
      <div class="iconfont left-icon">&#xe61f;</div>
      <div class="left-word">汇总</div>
    </div>
    <div class="bar-right">
      <div class="iconfont right-icon">&#xe612;</div>
      <div class="left-word">我的</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeFooterBar"
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    height 1.2rem
    width 100%
    background red
    position fixed
    bottom 0
    .bar-left
      height 1.2rem
</style>
