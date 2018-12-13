<template>
  <div class="wrapper">
    <!-- Header -->
    <div class="header">
      <div class="header-back">
        <router-link to="/home">
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
    <!-- pop -->
    <div class="pop">
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
    <!-- footer -->
    <div class="foot-bar">
      <div class="bar-left">
        <router-link to="/home">
          <div class="iconfont left-icon">&#xe61f;</div>
          <div class="left-word">汇总</div>
        </router-link>
      </div>
      <div class="bar-center">
        <router-link to="/pop">
          <div class="iconfont round-purple-cross">&#xe62f;</div>
        </router-link>

      </div>
      <div class="bar-right">
        <router-link to="/me">
          <div class="iconfont right-icon">&#xe612;</div>
          <div class="right-word">我的</div>
        </router-link>
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
  @import "header.styl"
  .pop
    width 100%
    height 90%
    opacity .6
    position relative
    top 0
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin-top 3rem
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
        border 2px solid black
        border-radius 100%
        margin-right .24rem
        color #fac46e
      .card-text
        height 1rem
        width 3.6rem
        .card-title
          height .4rem
          color black
          font-size .36rem
          font-weight bold
        .card-prompt
          height .3rem
          font-size .3rem
          margin-top .3rem
  .foot-bar
    background #fff
    height 1.2rem
    width 100%
    position fixed
    bottom 0
    display flex
    box-shadow 0 -.1rem .5rem #e9e9e9
    .bar-left
      height 1.2rem
      width .8rem
      float left
      margin-left 1.2rem
      display flex
      flex-direction column
      .left-icon
        height .7rem
        width .8rem
        line-height .8rem
        text-align center
        font-size .71rem
        margin-top .1rem
      .left-word
        height .3rem
        width .8rem
        margin-bottom .1rem
        font-family Arial
        font-size .24rem
        text-align center
        line-height .3rem
    .bar-center
      flex 1
      display flex
      justify-content center
      .round-yellow-cross
        height .8rem
        width .8rem
        font-size .78rem
        line-height .8rem
        text-align center
        color #fff
        margin .2rem auto
        background rgb(250, 196, 110)
        border-radius 100%
      .round-purple-cross
        height .8rem
        width .8rem
        font-size .78rem
        line-height .8rem
        text-align center
        color #fff
        margin .2rem auto
        background rgb(104, 94, 240)
        border-radius 100%
    .bar-right
      height 1.2rem
      width .8rem
      float right
      margin-right 1.2rem
      display flex
      flex-direction column
      .right-icon
        height .7rem
        width .8rem
        line-height .8rem
        text-align center
        font-size .71rem
        margin-top .1rem
      .right-word
        height .3rem
        width .8rem
        margin-bottom .1rem
        color rgb(53, 53, 59)
        font-size .24rem
        text-align center
        line-height .3rem
</style>
