<template>
  <div class="wrapper" >
    <div class="item-box" v-for="item of RetList" :key="item.id">
      <div class="item-logo">
        <!-- 这里要根据物品类型选择渲染图标 -->
        <div v-if="item.goods == '伞'" class="iconfont umbrella-font">
          &#xe616;
        </div>
        <div v-else-if="item.goods == '证件'" class="iconfont umbrella-font">
          &#xe674;
        </div>
        <div v-else-if="item.goods == '书籍'" class="iconfont umbrella-font">
          &#xe616;
        </div>
        <div v-else-if="item.goods == '眼镜'" class="iconfont umbrella-font">
          &#xe64e;
        </div>
        <div v-else="item.goods == '背包'" class="iconfont umbrella-font">
          &#xe600;
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
        <div class="iconfont forDetail">
          &#xe602;
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['RetList'],
    name: "SearchRet",
    data () {
      return {
        isShow: 'none'
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
  @import "found.styl"
  .search-bar
    width 100%
    height .6rem
</style>
