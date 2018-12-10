<template>
  <div class="wrapper">
    <div class="nav">
      <div class="nav-word">物品</div>
      <mt-button class="label-btn" size="small"  @click.native.prevent="active = 'umbrella'" @click="getUmbrellaList">雨伞</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'certificate'" @click="showPop">证件</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'books'" @click="showPop">书籍</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'glasses'" @click="showPop">眼镜</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'bag'" @click="showPop">背包</mt-button>
    </div>

    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="umbrella">
          <FoundUmbrella :boxList="UmbrellaList"></FoundUmbrella>
        </mt-tab-container-item>
        <mt-tab-container-item id="certificate">
          <FoundCertificate></FoundCertificate>
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
    <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
      <mt-picker :slots="slots" @change="onValuesChange">123</mt-picker>
    </mt-popup>
  </div>
</template>

<script>
  import axios from 'axios'
  import FoundUmbrella from './FoundUmbrella'
  import FoundCertificate from './FoundCertificate'
  export default {
    name: 'FoundTabContainer',
    components: {FoundCertificate, FoundUmbrella},
    data() {
      return {
        active: '',
        popupVisible: false,
        pickerValue: '',
        UmbrellaList: [],
        slots: [
          {
            flex: 1,
            values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            className: 'slot',
            textAlign: 'center'
          }
        ]
    };
    },
    methods: {
      getUmbrellaList () {
        let _this = this
        this.showPop()
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
      showPop () {
        this.popupVisible = !this.popupVisible
      },
      onValuesChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
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
  /*.slot*/
</style>
