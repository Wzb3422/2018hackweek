<template>
  <div class="wrapper">
    <div class="header">
      <div class="header-back">
        <div class="iconfont back-arrow">
          &#xe601;
        </div>
      </div>
      <div class="header-title">失物寻踪</div>
      <div class="header-search">
        <router-link to="/search">
          <div class="iconfont search-icon">
          </div>
        </router-link>
      </div>
    </div>

    <div class="box">
      <div class="img">
        <img class="img-content" src="../../assets/logoz.png" alt="">
      </div>
      <div class="title">
        请使用云家园账号
      </div>
      <div class="username-input">
        <input placeholder="学号" id="username" v-model="username">
      </div>
      <div class="password-input">
        <input type="password" placeholder="密码" id="password" v-model="password">
      </div>
      <!--<router-link to="/home">-->
        <div class="btn-login" @click="getToken">
          登录
        </div>
      <!--</router-link>-->
    </div>

  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import axios from 'axios'
  import Vue from 'vue'
  import Router from 'vue-router'

  export default {
    name: "Login",
    data () {
      return {
        username: '',
        password: '',
        token: ''
      }
    },
    methods: {
      getToken () {
        let _this = this
        let username = this.username
        let password = this.password
        let token = this.token
        axios.post('https://os.ncuos.com/api/user/token', {
          username: username,
          password: password
        })
          .then(function (res) {
            if (res.data.status === 1) {
              console.log('Suc')
              console.log(res)
              token = res.data.token
              _this.$router.push('/home')
              // console.log(token)

            } else {
              Toast({
                message: '请重新登录',
                position: 'bottom',
                duration: 1000
              });
            }
          })
          .catch(function (error) {
            console.log('err')
            console.log(error);
          });
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "header.styl"
  .box
    display flex
    flex-direction column
    align-items center
    .img
      height 2.5rem
      width 2.5rem
      margin-top .5rem
      margin-bottom 1rem
      .img-content
        display block
        width 2.3rem
    .title
      height .5rem
      width 100%
      line-height .5rem
      text-align center
      color rgb(183, 183, 183)
      margin-bottom 1rem
    .username-input
      height .8rem
      width 6.2rem
      border-bottom 1px solid lightgrey
      #username
        font-size 18px
        line-height .8rem
        height .8rem
        width 100%
        border none
        outline none
        padding 0
    .password-input
      height .8rem
      width 6.2rem
      border-bottom 1px solid lightgrey
      margin-top .6rem
      #password
        font-size 18px
        line-height .8rem
        height .8rem
        width 100%
        border none
        outline none
        padding 0
    .btn-login
      height .8rem
      width 4.4rem
      background rgb(254, 216, 156)
      color #ffffff
      line-height .8rem
      text-align center
      border-radius 10px
      margin-top 1.1rem
</style>
