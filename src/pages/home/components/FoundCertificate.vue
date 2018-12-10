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
          123
        </div>
        <div class="item-desc">
          123
        </div>
        <div class="item-label-list">
          <div class="item-label">
            <span class="purpleLabel">123</span>
            <span class="purpleLabel">123</span>
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
    props: ['boxList'],
    name: "FoundCertificate",
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus" scoped>
  @import "found.styl"
</style>
