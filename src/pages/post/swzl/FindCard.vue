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
        <div class="iconfont search-icon"></div>
      </div>
    </div>
    <!-- Tab -->
    <div class="tab">
      <div class="tab-left">
        <mt-button class="label-btn" size="small" @click="Found" @click.native.prevent="active = 'found'">
          <span :class="{purpleText: isFound}">
          失物招领
          </span>
        </mt-button>
      </div>
      <div class="tab-right">
        <mt-button class="label-btn" size="small" @click="Lost" @click.native.prevent="active = 'lost'">
          <span :class="{purpleText: isLost}">
          寻物启事
          </span>
        </mt-button>
      </div>
    </div>
    <!-- Three Options -->
    <div class="Three">
      <div :class="{ normal: isNormal , activated: isStuCard}" @click="activateStu">校园卡</div>
      <div :class="{ normal: isNormal , activated: isIdCard}" @click="activateIdCard">身份证</div>
      <div :class="{ normal: isNormal , activated: isBank}" @click="activateBank">银行卡</div>
    </div>

    <div class="num">
      <div class="num-title">{{numText}}</div>
      <div class="input-container">
        <input class="num-input" :value="num">
      </div>
    </div>

    <div>

    </div>
    <!--<div class="Location">-->
      <!--<div class="Location-title">-->
        <!--地点-->
      <!--</div>-->
      <!--<div class="Location-input">-->
        <!--<input class="add-input" :value="location">-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>

  export default {
    name: "FindCard",
    data () {
      return {
        active: 'found',
        isFound: true,
        isLost: false,
        isNormal: true,
        isStuCard: true,
        isIdCard: false,
        isBank: false,
        numText: '学号',
        num: '',
        pickerValue: null,
        location: null,
        date: null,
        month: null,
        year: null
      }
    },
    methods: {
      Found () {
        this.isFound = true
        this.isLost = false
      },
      Lost () {
        this.isLost = true
        this.isFound = false
      },
      activateStu () {
        console.log('activateStu')
        this.isStuCard = true
        this.isIdCard = false
        this.isBank = false
      },
      activateIdCard () {
        console.log('activateIdCard')
        this.isStuCard = false
        this.isIdCard = true
        this.isBank = false
      },
      activateBank () {
        console.log('activateBank')
        this.isStuCard = false
        this.isIdCard = false
        this.isBank = true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "header.styl"
  .label-btn
    height .77rem
    width 100%
    padding 0
    background #fff
    -webkit-box-shadow 0 0 0 #fff
    border-radius 0
  .tab
    height .77rem
    width 100
    box-shadow 0 .3rem .5rem #e9e9e9
    .tab-left
    .tab-right
      display flex
      justify-content center
      width 50%
      float left
      .purpleText
        color rgb(104, 94, 240)
        padding-bottom .09rem
        border-bottom .08rem solid rgb(104, 94, 240)
  .Three
    width 6.6rem
    height .8rem
    margin .5rem auto
    .normal
      height .8rem
      width 2.2rem
      float left
      line-height .8rem
      text-align center
      font-size .35rem
      font-weight 500
      color rgb(138, 135, 135)
    .activated
      color rgb(60, 46, 243)
  .num
    width 6.6rem
    height 1.3rem
    margin 0 auto
    .num-title
      height .3rem
      width 100%
      line-height .3rem
      text-align center
      color rgb(155, 155, 155)
    .input-container
      margin-top .2rem
      padding-bottom .08rem
      border-bottom .02rem solid rgb(233, 233, 233)
      height .6rem
      .num-input
        border none
        padding 0
        outline none
        height 100%
        width 100%
        font-size .4rem
        text-align center
  .Date
    width 6.6rem
    height 1.3rem
    margin 0 auto
    margin-top .5rem
    .Date-title
      height .3rem
      width 100%
      line-height .3rem
      text-align center
      color rgb(155, 155, 155)
    .date-container
      margin-top .2rem
      width 100%
      padding-bottom .08rem
      border-bottom .02rem solid rgb(233, 233, 233)
      height .6rem
      display flex
      align-items center
      justify-content center
  .Location
    width 6.6rem
    height 1.3rem
    margin 0 auto
    margin-top .5rem
    .Location-title
      height .3rem
      width 100%
      line-height .3rem
      text-align center
      color rgb(155, 155, 155)
    .Location-input
      margin-top .2rem
      padding-bottom .08rem
      border-bottom .02rem solid rgb(233, 233, 233)
      height .6rem
      .add-input
        border none
        padding 0
        outline none
        height 100%
        width 100%
        font-size .4rem
        text-align center
</style>
