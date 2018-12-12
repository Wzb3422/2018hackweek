<template>
  <div class="wrapper">
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
          </div>
        </router-link>
      </div>
    </div>

    <div class="box">
      <div class="img">
      </div>
      <div class="title">
        请使用云家园账号
      </div>
      <div class="username-input">
        <input placeholder="学号" id="username">
      </div>
      <div class="password-input">
        <input type="password" placeholder="密码" id="password">
      </div>
      <router-link to="/home">
        <div class="btn-login">
          登录
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style lang="stylus" scoped>
  @import "header.styl"
  .box
    display flex
    flex-direction column
    align-items center
    .img
      height 2.5rem
      width 2.5rem
      margin-top .5rem
      background lightgrey
      margin-bottom 1rem
    .title
      height .5rem
      width 100%
      line-height .5rem
      text-align center
      color rgb(183, 183, 183)
      margin-bottom 1rem
    .username-input
      height .8rem
      width 6.2rem
      border-bottom 1px solid lightgrey
      #username
        font-size 18px
        line-height .8rem
        height .8rem
        width 100%
        border none
        outline none
        padding 0
    .password-input
      height .8rem
      width 6.2rem
      border-bottom 1px solid lightgrey
      margin-top .6rem
      #password
        font-size 18px
        line-height .8rem
        height .8rem
        width 100%
        border none
        outline none
        padding 0
    .btn-login
      height .8rem
      width 4.4rem
      background rgb(254, 216, 156)
      color #ffffff
      line-height .8rem
      text-align center
      border-radius 10px
      margin-top 1.1rem
</style>
