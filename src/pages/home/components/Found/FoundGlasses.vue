<template>
  <div class="rootEle">
    <div class="wrapper">
      <div class="item-box" v-for="item of boxList" :key="item.id">
        <div class="item-logo">
          <div class="iconfont umbrella-font">
            &#xe64e;
          </div>
        </div>
        <div class="item-contents">
          <div class="item-title">
            {{item.goods_name}}
          </div>
          <div class="item-desc">
            {{item.desc}}
          </div>
          <div class="item-label-list">
            <div class="item-label">
              <span class="purpleLabel">{{item.date}}</span>
              <span class="purpleLabel">{{item.location}}</span>
            </div>
          </div>
        </div>
        <router-link to="/foundDetails">
          <div class="iconfont forDetail" @click="handleClick(index)">
            &#xe602;
          </div>
        </router-link>

      </div>
    </div>
    <div class="search-bar">
    </div>
  </div>

</template>

<script>
  export default {
    props: ['boxList'],
    name: "FoundGlasses",
    methods: {
      handleClick(index) {
        this.bus.boxList = this.boxList[index]
        console.log('向外触发成功')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .item-box
    display flex
    height 2.4rem
    width 100%
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
        font-size .8rem
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
        overflow hidden
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
  .search-bar
    width 100%
    height .6rem
</style>
