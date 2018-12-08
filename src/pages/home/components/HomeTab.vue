<template>
  <div class="wrapper">
    <div class="tab">
      <div class="tab-left">
        <mt-button class="label-btn" size="small" @click="" @click.native.prevent="active = 'found'">
          <span class="found-text">
          失物招领
          </span>
        </mt-button>
      </div>
      <div class="tab-right">
        <mt-button class="label-btn" size="small" @click="Underline" @click.native.prevent="active = 'lost'">
          <span>
          寻物启事
          </span>
        </mt-button>
      </div>
    </div>
    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
      <mt-tab-container-item id="found">
        <FoundTabContainer></FoundTabContainer>
      </mt-tab-container-item>
      <mt-tab-container-item id="lost">
        <LostTabContainer></LostTabContainer>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>

</template>

<script>
  import FoundTabContainer from './FoundTabContainer'
  import LostTabContainer from './LostTabContainer'
  export default {
    name: "HomeTab",
    components: {LostTabContainer, FoundTabContainer},
    data () {
      return {
        active: 'found'
      }
    },
    methods: {
      Underline () {
        console.log(this)
        $(this).addClass('purpleText')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .label-btn
    height .77rem
    width 100%
    padding 0
    background #fff
    -webkit-box-shadow 0 0 0 #fff
    border-radius 0
  .tab
    height .77rem
    width 100%
    margin-top .15rem
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
</style>
