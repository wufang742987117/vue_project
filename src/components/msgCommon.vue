<template>
    <div class="msgCommon">
      <div class="msg1">
        <!--遮盖层分享盒子-->
        <div class="share">
          <img :src="fenxImgPath"/>
        </div>
        <!--关注盒子-->
        <div class="followboxs">
          <img src="{:ADDON_PUBLIC_PATH}{$follow_img}?v=1" alt="" class="imgs1">
          <p>长按识别二维码</p>
          <p>关注<span>{$follow_remark}</span></p>
          <p>更多活动、福利等你发现</p>
          <div class="btn">关闭</div>
          <!--边框装饰图-->
          <div class="borderimg">
            <img :src="ltImgPath">
          </div>
          <div class="borderimg2">
            <img :src="rtImgPath">
          </div>
          <div class="borderimg3">
            <img :src="lbImgPath">
          </div>
          <div class="borderimg4">
            <img :src="rbImgPath">
          </div>
        </div>
      </div>

      <!--预加载闪屏页-->
      <div class="waiting" style="display: block">
        <img :src="bgImgPath"/>
        <div class="goindex">
          <img :src="gohomeImgPath" alt="" />
        </div>
      </div>
      <!--立即参加-->
      <div class="btn_tab2" v-if="$cnt > 0">
        <img :src="myImgPath" alt="" />
      </div>
      <div class="btn_tab1" v-else>
        <img :src="inImgPath" alt="" />
      </div>
    </div>
</template>

<script>
    export default {
      name: "msgCommon",
      data(){
        return{
          aid: "", //需要后台传{$act}
          vid: "", //需要后台传{$vid}
          fenxImgPath: require('../assets/fenx@2x.png'),
          ltImgPath: require('../assets/smalllogo/左上@2x.png'),
          rtImgPath: require('../assets/smalllogo/右上@2x.png'),
          lbImgPath: require('../assets/smalllogo/左下@2x.png'),
          rbImgPath: require('../assets/smalllogo/右下@2x.png'),
          bgImgPath: require('../assets/bg@2x.png'),
          gohomeImgPath: require('../assets/smalllogo/gohome@2x.png'),
          myImgPath: require('../assets/smalllogo/my@2x.png'),
          inImgPath: require('../assets/smalllogo/in@2x.png'),
        }
      }
    }
</script>

<style scoped>

</style>
