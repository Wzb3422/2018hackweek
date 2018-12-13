<template>
  <div class="wrapper">
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
        <router-link to="/search">
          <div class="iconfont search-icon">
            &#xe60c;
          </div>
        </router-link>

      </div>
    </div>

    <div class="usrInfo">
      <div class="info-left">
        <div class="username"  >
          用户名
        </div>
        <div class="prompt">
          以上数据来自云家园，如需更改，请联系辅导员。
        </div>
      </div>
    </div>

    <div class="choices">
      <div class="item">
        <div class="item-text">联系方式</div>
        <div class="iconfont item-arrow">&#xe602;</div>
      </div>
      <div class="item">
        <div class="item-text">我发布的失物招领</div>
        <div class="iconfont item-arrow">&#xe602;</div>
      </div>
      <div class="item">
        <div class="item-text">我发布的寻物启事</div>
        <div class="iconfont item-arrow">&#xe602;</div>
      </div>

      <div class="foot-bar">
        <div class="bar-left">
          <router-link to="/home">
            <div class="iconfont left-icon">&#xe61f;</div>
            <div class="left-word">汇总</div>
          </router-link>

        </div>
        <div class="bar-center">
          <router-link to="/pop">
            <div class="iconfont round-cross">&#xe62f;</div>
          </router-link>
        </div>
        <div class="bar-right">
            <div class="iconfont right-icon">&#xe612;</div>
            <div class="right-word">我的</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Me"
  }
</script>

<style lang="stylus" scoped>
  @import "header.styl"
  .usrInfo
    width 100%
    height 3.3rem
    .info-left
      width 60%
      height 3.3rem
      display flex
      flex-direction column
      justify-content center
      .username
        height 1rem
        width 100%
        line-height 1rem
        font-family Arial
        font-size 36px
        padding-left .3rem
        font-weight bold
      .prompt
        height .7rem
        width 100%
        margin-top .2rem
        color rgb(224, 224, 225)
        font-family Arial
        font-size 16px
        padding-left .3rem
  .choices
    width 100%
    .item
      height 1.2rem
      width 100%
      margin-bottom .5rem
      .item-text
        height 1.2rem
        width 60%
        line-height 1.2rem
        font-size 26px
        font-weight bold
        float left
        padding-left .3rem
      .item-arrow
        height 1.2rem
        width .5rem
        float right
        line-height 1.2rem
        text-align center
        font-size 24px
        padding-right .3rem
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
      .round-cross
        height .8rem
        width .8rem
        font-size .78rem
        line-height .8rem
        text-align center
        color #fff
        margin .2rem auto
        background rgb(250, 196, 110)
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
        color rgb(60, 46, 243)
        margin-top .1rem
      .right-word
        height .3rem
        width .8rem
        margin-bottom .1rem
        font-size .24rem
        color rgb(60, 46, 243)
        text-align center
        line-height .3rem
</style>
