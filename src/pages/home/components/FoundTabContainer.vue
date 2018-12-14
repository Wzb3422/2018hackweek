<template>
  <div class="wrapper">
    <div class="nav" @click="isProHide">
      <div class="nav-word">物品</div>
      <mt-button class="label-btn" size="small"  @click.native.prevent="active = 'umbrella'" @click="getUmbrellaList">雨伞</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'certificate'" @click="getCertificate">卡片证件</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'books'" @click="getBook">书籍</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'glasses'" @click="getGlasses">眼镜</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'bag'" @click="getBag">背包</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'others'" @click="getBag">其他</mt-button>
    </div>
    <div class="isPro" v-if="isPro">请选择物品类型</div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active">
        <mt-tab-container-item id="umbrella">
          <FoundUmbrella :boxList="UmbrellaList"></FoundUmbrella>
        </mt-tab-container-item>
        <mt-tab-container-item id="certificate">
          <FoundCertificate :boxList="CertificateList"></FoundCertificate>
        </mt-tab-container-item>
        <mt-tab-container-item id="books">
          <FoundBook :boxList="BookList"></FoundBook>
        </mt-tab-container-item>
        <mt-tab-container-item id="glasses">
          <FoundGlasses :boxList="GlassesList"></FoundGlasses>
        </mt-tab-container-item>
        <mt-tab-container-item id="bag">
          <FoundBag :boxList="BagList"></FoundBag>
        </mt-tab-container-item>
        <mt-tab-container-item id="others">
          <div>这里是其它</div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import FoundUmbrella from './Found/FoundUmbrella'
  import FoundCertificate from './Found/FoundCertificate'
  import FoundBook from './Found/FoundBook'
  import FoundGlasses from './Found/FoundGlasses'
  import FoundBag from './Found/FoundBag'
  export default {
    name: 'FoundTabContainer',
    components: {FoundBag, FoundGlasses, FoundBook, FoundCertificate, FoundUmbrella},
    data() {
      return {
        active: '',
        popupVisible: false,
        pickerValue: '',
        UmbrellaList: [],
        CertificateList: [],
        BookList: [],
        GlassesList: [],
        BagList: [],
        isPro: true
    }
    },
    methods: {
      getUmbrellaList () {
        let _this = this
        // this.showPop()
        axios.get('http://129.204.17.28:5000/lost_get', {
          params: {
            goods: '伞',
            isget: '未领取'
          }
        })
          .then(function (res) {
            _this.UmbrellaList = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      getCertificate () {
        let _this = this
        // this.showPop()
        axios.get('http://129.204.17.28:5000/lost_get', {
          params: {
            goods: '证件',
            isget: '未领取'
          }
        })
          .then(function (res) {
            _this.CertificateList = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      getBook () {
        let _this = this
        // this.showPop()
        axios.get('http://129.204.17.28:5000/lost_get', {
          params: {
            goods: '书籍',
            isget: '未领取'
          }
        })
          .then(function (res) {
            _this.BookList = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      getGlasses () {
        let _this = this
        // this.showPop()
        axios.get('http://129.204.17.28:5000/lost_get', {
          params: {
            goods: '眼镜',
            isget: '未领取'
          }
        })
          .then(function (res) {
            _this.GlassesList = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      getBag () {
        let _this = this
        // this.showPop()
        axios.get('http://129.204.17.28:5000/lost_get', {
          params: {
            goods: '背包',
            isget: '未领取'
          }
        })
          .then(function (res) {
            _this.BagList = res.data
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      showPop () {
        this.popupVisible = !this.popupVisible
      },
      isProHide () {
        this.isPro = false
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .wrapper
    margin-bottom 1.2rem
  .nav
    box-shadow 0 .1rem .5rem rgb(233, 233, 233)
    margin-bottom .35rem
    width 11rem
    .nav-word
      height 33px
      width 50px
      color #656b79
      text-align center
      line-height 33px
      float left
      margin-left .1rem
    .label-btn
      color rgb(250, 196, 110)
      background #fff
      -webkit-box-shadow 0 0 0 #fff
  .popNav
    height 20px
    line-height 20px
    font-size 18px
    text-align center
  .picker
    width 39999rem
  .isPro
    width 100%
    text-align center
    color rgb(163, 163, 163)
    margin-top 5rem
</style>
