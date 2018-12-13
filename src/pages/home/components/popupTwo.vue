<template>
  <div class="wrapper">
    <div class="card-row">
      <div class="iconfont card-icon">&#xe674;</div>
      <div class="card-text">
        <div class="card-title">校园卡 身份证 银行卡</div>
        <div class="card-prompt">银行卡仅限学校所发建行卡</div>
      </div>
    </div>

    <div class="other-stuff card-row">
      <div class="iconfont other-icon card-icon">
        &#xe6fe;
      </div>
      <div class="card-text">
        <div class="other-title card-title">其他物品</div>
        <div class="other-prompt card-prompt">暂不支持自定义类型</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "popupTwo"
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    width 100%
    height 90%
    background rgb(123, 123 ,123)
    opacity .6
    position absolute
    top 0
    display flex
    flex-direction column
    justify-content center
    align-items center
    .card-row
      width 6rem
      height 2.4rem
      display flex
      justify-content center
      align-items center
      .card-icon
        height 1.6rem
        width 1.6rem
        float left
        font-size 1.2rem
        line-height 1.6rem
        text-align center
        border 2px solid white
        border-radius 100%
        margin-right .24rem
        color #fac46e
      .card-text
        height 1rem
        width 3.6rem
        .card-title
          height .4rem
          color white
          font-size .36rem
          font-weight bold
        .card-prompt
          height .3rem
          font-size .3rem
          margin-top .3rem
</style>
