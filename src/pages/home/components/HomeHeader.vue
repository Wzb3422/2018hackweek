<template>
  <div class="header">
    <div class="header-back">
      <div class="iconfont back-arrow">
        &#xe601;
      </div>
    </div>
    <div class="header-title">失物寻踪</div>
    <div class="header-search">
      <router-link to="/search">
        <div class="iconfont search-icon">
          &#xe60c;
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style lang="stylus" scoped>
  @import "header.styl"
</style>
