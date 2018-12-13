<template>
  <div class="wrapper">
    <div class="nav">
      <div class="nav-word">物品</div>
      <mt-button class="label-btn" size="small" @click="getUmbrellaList" @click.native.prevent="active = 'umbrella'">雨伞</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'certificate'">证件</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'books'">书籍</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'glasses'">眼镜</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'bag'">背包</mt-button>
    </div>

    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="umbrella">
          <LostUmbrella :boxList="UmbrellaList"></LostUmbrella>
        </mt-tab-container-item>
        <mt-tab-container-item id="certificate">
          这里是证件
        </mt-tab-container-item>
        <mt-tab-container-item id="books">
          这里是书
        </mt-tab-container-item>
        <mt-tab-container-item id="glasses">
          这里是眼镜
        </mt-tab-container-item>
        <mt-tab-container-item id="bag">
          这里是包
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import LostUmbrella from './Lost/LostUmbrella'
  export default {
    name: 'LostTabContainer',
    components: {LostUmbrella},
    data() {
      return {
        active: '',
        UmbrellaList: []
      };
    },
    methods: {
      getUmbrellaList () {
        let _this = this
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
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .nav
    box-shadow 0 .1rem 1rem rgb(233, 233, 233)
    margin-bottom .35rem
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
</style>
