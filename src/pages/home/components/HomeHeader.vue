<template>
  <div class="header">
    <div class="header-back">
      <div class="iconfont back-arrow">
        &#xe601;
      </div>
    </div>
    <div class="header-title">失物寻踪</div>
    <div class="header-search">
      <div class="iconfont search-icon">
        &#xe60c;
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style lang="stylus" scoped>
  .header
    display flex
    height .97rem
    .header-back
      width 30px
      height .97rem
      line-height .97rem
      margin-left .30rem
      float left
      .back-arrow
        font-size .54rem
    .header-title
      flex 1
      height .97
      line-height .97rem
      font-family Arial
      color rgb(10, 9, 9)
      font-size.38rem
      text-align center
    .header-search
      width 30px
      height .97rem
      line-height .97rem
      margin-right .30rem
      float right
      .search-icon
        font-size .54rem
</style>
