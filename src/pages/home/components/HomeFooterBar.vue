<template>
  <div class="wrapper">
    <div class="bar-left">
      <div class="iconfont left-icon">&#xe61f;</div>
      <div class="left-word">汇总</div>
    </div>
    <div class="bar-center">
      <div class="iconfont round-yellow-cross" @click="centerClick" v-if="!isPurple">&#xe62f;</div>
      <div class="iconfont round-purple-cross" @click="centerClick" v-if="isPurple">&#xe62f;</div>
    </div>
    <div class="bar-right">
      <router-link to="/me">
        <div class="iconfont right-icon">&#xe612;</div>
        <div class="right-word">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeFooterBar",
    methods: {
      centerClick () {
        this.isPurple = !this.isPurple
        this.$emit('centerClick')
      }
    },
    data () {
      return {
        isPurple: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
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
        color rgb(60, 46, 243)
        margin-top .1rem
      .left-word
        height .3rem
        width .8rem
        margin-bottom .1rem
        font-family Arial
        color rgb(60, 46, 243)
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
