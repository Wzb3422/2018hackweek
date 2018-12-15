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
    <div class="Location">
      <div class="Location-title">
        地点
      </div>
      <div class="Location-input">
        <input class="add-input" :value="location">
      </div>
    </div>

    <div class="contact">
      <div class="contact-title">请选择联系方式</div>
      <div class="contact-icon">
        <div class="iconfont qq-icon" :class="{ purpleText: isQQ }" @click="activateQQ">&#xe7a0;</div>
        <div class="iconfont tel-icon" :class="{ purpleText: !isQQ }" @click="activateTel">&#xe615;</div>
      </div>
      <div class="contact-box">
        <input class="contact-input" :value="contact">
      </div>
    </div>
    <div class="post-text" @click="postCard">
      发布寻物启事
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import axios from 'axios'
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
        year: null,
        contact: '',
        isQQ: true,
        name: '',
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
        // console.log('activateStu')
        this.isStuCard = true
        this.isIdCard = false
        this.isBank = false
        this.numText = '学号'
      },
      activateIdCard () {
        // console.log('activateIdCard')
        this.isStuCard = false
        this.isIdCard = true
        this.isBank = false
        this.numText = '身份证号'
      },
      activateBank () {
        // console.log('activateBank')
        this.isStuCard = false
        this.isIdCard = false
        this.isBank = true
        this.numText = '银行卡号'
      },
      activateQQ () {
        this.isQQ = true
      },
      activateTel () {
        this.isQQ = false
      },
      postCard () {
        let _this = this
        axios.post('http://129.204.17.28:5000/find_add', {
          name: _this.name,
          id: _this.num,
          qq: _this.contact,
          desc: location
        })
          .then(function (res) {
            if (res.data.status === 1) {
              Toast('发布成功')
            } else {
              Toast('请将信息填写完整')
            }
          })
          .catch(function (error) {
            console.log('err')
            console.log(error);
            Toast('请将信息填写完整')
          });
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
  .contact
    width 4.4rem
    margin 0 auto
    margin-top .5rem
    .contact-title
      height .3rem
      width 100%
      line-height .3rem
      text-align center
      color rgb(155, 155, 155)
    .contact-icon
      width 100%
      height .8rem
      display flex
      justify-content space-evenly
      align-items center
      margin-top .5rem
      .qq-icon
        height .8rem
        width 1rem
        font-size .8rem
        text-align center
      .tel-icon
        height .8rem
        width 1rem
        text-align center
        font-size .64rem
      .purpleText
        color rgb(60, 46, 243)
    .contact-box
      margin-top .2rem
      padding-bottom .08rem
      border-bottom .02rem solid rgb(233, 233, 233)
      height .6rem
      .contact-input
        border none
        padding 0
        outline none
        height 100%
        width 100%
        font-size .4rem
        text-align center
  .post-text
    margin 0 auto
    height .8rem
    width 4.4rem
    background rgb(254, 216, 156)
    color #ffffff
    line-height .8rem
    text-align center
    border-radius 10px
    font-weight bold
    margin-top 1rem
</style>
