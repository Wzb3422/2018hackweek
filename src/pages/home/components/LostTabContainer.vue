<template>
  <div class="wrapper">
    <div class="nav">
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'all'">物品</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'umbrella'">雨伞</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'certificate'">证件</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'books'">书籍</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'glasses'">眼镜</mt-button>
      <mt-button class="label-btn" size="small" @click.native.prevent="active = 'bag'">背包</mt-button>
    </div>

    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="all">
          <div>helloworld</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="umbrella">
          这里是雨伞
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
  export default {
    name: 'LostTabContainer',
    data() {
      return {
        active: ''
      };
    }
  };
</script>

<style lang="stylus" scoped>
  .nav
    box-shadow 0 .1rem 1rem rgb(233, 233, 233)
    margin-bottom .35rem
    .label-btn
      color rgb(250, 196, 110)
      background #fff
      -webkit-box-shadow 0 0 0 #fff
</style>
