<template>
  <div class="rootEle">
    <div class="wrapper">
      <div class="item-box" v-for="(item, index) of boxList" :key="item.id">
        <div class="item-logo">
          <div class="iconfont umbrella-font">
            &#xe665;
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
        <router-link to="/lostDetails">
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
    name: "LostUmbrella",
    data () {
      return {
      }
    },
    methods: {
      handleClick(index) {
        this.bus.boxList = this.boxList[index]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "found.styl"
  .search-bar
    width 100%
    height .6rem
</style>
