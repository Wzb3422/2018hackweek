<template>
  <div class="wrapper">
    <div class="item-box">
      <div class="item-logo">
        <div class="iconfont umbrella-font">
          &#xe665;
        </div>
      </div>
      <div class="item-contents">
        <div class="item-title">
          一把碎花雨伞
        </div>
        <div class="item-desc">
          今天我捡到了一把伞
        </div>
        <div class="item-label-list">
          <div class="item-label">
            <span class="purpleLabel">10月22日</span>
            <span class="purpleLabel">猪脚221</span>
          </div>
        </div>
      </div>
      <div class="iconfont forDetail">
        &#xe601;
      </div>
    </div>

    <div class="item-box">
      <div class="item-logo">
        <div class="iconfont umbrella-font">
          &#xe665;
        </div>
      </div>
      <div class="item-contents">
        <div class="item-title">
          一把碎花雨伞
        </div>
        <div class="item-desc">
          今天我捡到了一把伞
        </div>
        <div class="item-label-list">
          <div class="item-label">
            <span class="purpleLabel">10月22日</span>
            <span class="purpleLabel">猪脚221</span>
          </div>
        </div>
      </div>
      <div class="iconfont forDetail">
        &#xe601;
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FoundUmbrella"
  }
</script>

<style lang="stylus" scoped>
  .item-box
    display flex
    height 2.4rem
    width 100%
    border-top 1px solid rgb(243, 243, 243)
    border-bottom 1px solid rgb(243, 243, 243)
    box-shadow 0 .1rem 1rem rgb(233, 233, 233)
    margin-bottom .5rem
    .item-logo
      height 2.4rem
      width 1.15rem
      line-height 2.4rem
      margin-left .3rem
      .umbrella-font
        height 1rem
        width 1rem
        margin 0 auto
        font-size 1rem
    .item-contents
      margin-left .1rem
      flex 1
      .item-title
        height .44rem
        width 100%
        line-height .44rem
        font-size .44rem
        margin-top .4rem
      .item-desc
        height .44rem
        width 100%
        line-height .44rem
        font-size .30rem
        color rgb(210, 210, 212)
        margin .1rem auto
      .item-label-list
        width 100%
        height .5rem
        .purpleLabel
          color rgb(104, 94, 240)
          height .4rem
          border 2px solid rgb(104, 94, 240)
          font-size .26rem
          border-radius 50px
          padding 0 .2rem
          margin-right .2rem
    .forDetail
      height 2.4rem
      width .5rem
      font-size .6rem
      line-height 2.4rem
      margin-right .3rem
</style>
