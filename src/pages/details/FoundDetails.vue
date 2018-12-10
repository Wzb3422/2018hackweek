<template>
  <div class="header">
    <div class="header-back">
      <router-link to="/">
        <div class="iconfont back-arrow">
          &#xe601;
        </div>
      </router-link>

    </div>
    <div class="header-title">失物寻踪</div>
    <div class="header-search">
      <div class="iconfont search-icon">
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "FoundDetails"
  }
</script>

<style lang="stylus" scoped>
  @import "header.styl"
</style>
