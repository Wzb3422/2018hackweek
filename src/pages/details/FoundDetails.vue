<template>
  <div class="wrapper">
    <div class="header">
      <div class="header-back">
        <router-link to="/home">
          <div class="iconfont back-arrow">
            &#xe601;
          </div>
        </router-link>

      </div>
      <div class="header-title">失物招领</div>
      <div class="header-search">
        <div class="iconfont search-icon">
        </div>
      </div>
    </div>
    <div class="box">
      <div class="row">
        <div class="title wpmc">物品</div>
        <div class="stuffName">{{ boxList.goods_name}}</div>
      </div>
      <div class="row">
        <div class="title">拾取人</div>
        <div class="text">{{ boxList.name }}</div>
      </div>
      <div class="contact">
        <div class="contact-title">联系方式</div>
        <div class="contact-desc">
          <div class="method">手机</div>
          <div class="num">{{ boxList.telephone }}</div>
        </div>
      </div>
      <div class="row">
        <div class="title">拾取地点</div>
        <div class="text">{{ boxList.location }}</div>
      </div>
      <div class="row">
        <div class="title">拾取时间</div>
        <div class="text">{{ boxList.date }}</div>
      </div>
      <div class="specific-desc">
        <div class="specific-title">具体描述</div>
        <div class="specific-text">{{ boxList.desc }}</div>
      </div>

      <div class="return" @click="msgbox">
        我已认领
      </div>
    </div>
  </div>

</template>

<script>
  import { MessageBox } from 'mint-ui';
  import axios from 'axios'
  export default {
    name: "FoundDetails",
    data () {
      return {
        boxList: {
          goods_name: '未修改的文本',
          name: '未修改的名字',
          telephone: '未修改的Tel',
          desc: '这里是未获取的描述',
          date: '时间未获取',
          location: '未获取地点'
        }
      }
    },
    methods: {
      msgbox () { MessageBox.confirm('亲爱的同学,确认你已经认领了吗？').then( () => {
        MessageBox.alert('认领成功', ' ')
      }) }
    },
    mounted () {
      // console.log(this)
      this.boxList = this.bus.boxList
    }
  }
</script>

<style lang="stylus" scoped>
  @import "header.styl"
  .box
    display flex
    flex-direction column
    align-items center
    width 100%
    margin-top 1.4rem

    .row
      height .9rem
      width 6.5rem

      .title
        width 1.8rem
        height .9rem
        font-size .3rem
        float left
        color rgb(128, 128, 128)
        line-height .9rem

      .stuffName
        width 7rem
        height .9rem
        font-size .44rem
        line-height .7rem

      .text
        width 4.7rem
        height .9rem
        font-size .3rem
        line-height .9rem

    .contact
      width 6.5rem
      height 1rem
      margin-top .28rem

      .contact-title
        width 1.8rem
        height 1rem
        font-size .3rem
        float left
        color rgb(128, 128, 128)

      .method
        width 4.7rem
        height .5rem

      .num
        width 4.7rem
        height .5rem
        font-size .4rem
        color rgb(251, 208, 139)
        font-weight bold

    .specific-desc
      height 4.2rem
      width 6.5rem
      margin-top .2rem

      .specific-title
        width 1.8rem
        height .5rem
        line-height .5rem
        font-size .3rem
        float left
        color rgb(128, 128, 128)

      .specific-text
        width 4.7rem
        height 100%
        line-height .5rem
        font-size .3rem
        float left

    .return
      height .8rem
      width 4.4rem
      background rgb(254, 216, 156)
      color #ffffff
      line-height .8rem
      text-align center
      border-radius 10px
      font-weight bold
</style>
