<template>
  <div class="bannerCommon">
    <!--主页banner-->
    <div class="banner">
      <img :src="topImgPath" alt="top@2x" />
      <div class="followbox">
        <img :src="guanzhuImgPath" alt="guanzhu@2x.png" class="followbtn" />
        <img :src="fenxiangImgPath" alt="fenxiang@2x.png" class="sharebtn" />
      </div>
    </div>
    <!--选项卡区域-->
    <div class="admin-nav">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">首页</mt-tab-item>
        <mt-tab-item id="2">排行榜</mt-tab-item>
        <mt-tab-item id="3">活动规则</mt-tab-item>
      </mt-navbar>
    </div>

  </div>
</template>

<script>
    export default {
      name: "bannerCommon",
      data(){
        return{
          selected: '',
          topImgPath: require('../assets/top@2x.png?v=1'),
          guanzhuImgPath: require('../assets/smalllogo/guanzhu@2x.png?v=1'),
          fenxiangImgPath: require('../assets/smalllogo/fenxiang@2x.png?v=1')
        }
      },
      methods:{

      },
      watch:{
        selected(newval,oldval){
          let _this = this;
          if(newval){
            _this.$router.push({path: '/homePage',query:{'selected': newval}});
          }

        }
      }
    }
</script>

<style scoped>
  /*主页banner样式*/
  .banner{
    position: relative;
  }
  .banner > img{
    width: 100%;
    height: 5.2rem;
    display: block;
  }
  .followbox{
    position: absolute;
    top: 0;
    right: 0.533rem;
  }
  .followbox > img{
    width: 1.426rem;
    height: 0.56rem;
    display: inline-block
  }
  .followbox>img:first-child{
    margin-right: 0.16rem;
  }
</style>
