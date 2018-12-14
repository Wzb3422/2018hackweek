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
    <!-- Search-Bar -->
    <div class="search-bar">
      <div class="search-input">
        <div class="iconfont input-icon">&#xe60c;</div>
        <input id="inputArea" class="input-area" placeholder="想要找什么呢" v-model="inputVal"/>
        <div class="search-text" @click="toSearch">搜索</div>
      </div>
    </div>
    <div></div>
    <SearchRet :RetList="Ret"></SearchRet>
  </div>
</template>

<script>
  import axios from 'axios'
  import { Toast } from 'mint-ui';
  import SearchRet from './SearchRet'
  export default {
    name: "Search",
    components: {SearchRet},
    data () {
      return {
        inputVal: '',
        Ret: []
      }
    },
    methods: {
      toSearch () {
        let _this = this
        if (this.inputVal.length === 0) {
          Toast('请先输入搜索内容')
        }
        axios.get('http://129.204.17.28:5000/lost_search', {
          params: {
            search: this.inputVal,
            isget: '未领取'
          }
        })
          .then(function (res) {
            if (res.data.length === 0) {
              Toast('没有找到哦')
            }
            // console.log(res.data)
            _this.Ret = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "header.styl"
  .search-bar
    margin-top .8rem
    height .8rem
    width 100%
    .search-input
      width 5.6rem
      height .8rem
      margin 0 auto
      display flex
      justify-content space-between
      .input-icon
        font-size .6rem
        line-height .8rem
      .input-area
        width 3.3rem
        outline none
        border none
        font-size .32rem
        text-align center
        font-weight bold
      .search-text
        color rgb(134, 145, 243)
        line-height .8rem
        font-size .32rem
</style>
