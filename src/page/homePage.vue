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
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="tab1text">
          <p>@湖北劳动者，无论你来自哪个行业，无论你身在荆楚何方，只要你爱岗敬业，在平凡的岗位上，闪耀劳动者非凡的美。 你，就是我们寻找的湖北劳动代言人！拿起你手边的手机，无论自拍或拍下身边认真工作的小伙伴，或此时此刻你视线定格的劳动者身影。</p>
          <p>不必拘泥于摄影技巧，真实就有美的感召。这些画面，将有可能成为区域或行业劳动者的代言人！请毫不犹豫将照片上传，用一段话简述代言理由，入选之后，劳动者的形象将展现在“湖北省总工会”微信公众号中。</p>
          <p>还在等什么，赶紧来参加吧！</p>
        </div>
        <div class="tab1title">
          <span class="sp1"></span><span class="sp2">精 选</span><span class="sp3"></span>
        </div>

        <list-boxs></list-boxs>

      </mt-tab-container-item>
      <mt-tab-container-item id="2">

        <rank-list></rank-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="notice">
          <div class="noticetitle">
            <img :src="leftlineImgPath"/>
            <span>摄影作品征集要求</span>
            <img :src="rightlineImgPath"/>
          </div>
          <div class="noticetext">
            <p>1、投稿作品必须为真实原创，以<span>真实姓名</span>投稿</p>
            <p>2、投稿作品要求立意鲜明、形象生动、情感真切。画面语言丰富，有较强的视觉表现力，单幅、黑白、组照不限。</p>
            <p>3、网络投稿地址，点击进入。投稿作品为JPG格式，<span>每幅作品的文件量不大于500K，长边要求600-1000像素</span>。投稿者注册时均需填写作者真实姓名、通讯地址、邮箱、电话、身份证号。凡因提交的个人信息不全面而影响联络者，视为自动放弃资格。<span>每位作者限投5幅</span>。</p>
            <p>4、参赛作品标题如组照作品需<span>注明秩序</span>，作品标题字样如《坚守寒风下（组照1）》，并须提供150字以内的文字说明。</p>
            <p>5、作品须保留拍摄原始参数信息，主办单位将统一调取调整后的作品大图（JPEG文件建议不低于5MB），<span>请投稿者在接到通知后按时提供，逾期未提供者将视为放弃资格</span>。</p>
            <p>6、主办单位、承办单位有权以复制、发行、展览、放映、信息网络传播等方式使用入选作品，并可不再付酬；主办、承办单位有权在与本次活动有关的宣传、报道、展示中体现投稿作品，并可不支付报酬。</p>
            <p>7、<span>本次活动拒绝合作作品</span>。投稿者应保证其为所投送作品的作者，并对该作品的整体及局部均拥有独立、完整、明确、无争议的著作权；投稿者还应保证其所投送的作品不侵犯第三人的包括著作权、肖像权、名誉权、隐私权等在内的合法权益。<span>投稿者应承担由其稿件和投稿行为所引发的一切责任</span>。</p>
            <p>8、凡投稿者，均视为同意并遵守以上各条规定。凡不符合要求的作品，一经发现将取消一切资格。</p>
            <p>9、主办单位拥有本活动的最终解释权。</p>
          </div>
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
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>



<script>
  import ListBoxs from "@/components/listBoxs";
  import RankList from "@/components/rankList";

  export default {
    name: "bannerCommon",
    components: {ListBoxs,RankList},
    data(){
      return{
        selected: '1',
        topImgPath: require('../assets/top@2x.png?v=1'),
        guanzhuImgPath: require('../assets/smalllogo/guanzhu@2x.png?v=1'),
        fenxiangImgPath: require('../assets/smalllogo/fenxiang@2x.png?v=1'),
        leftlineImgPath: require('../assets/smalllogo/左线条@2x.png'),
        rightlineImgPath: require('../assets/smalllogo/右线条@2x.png'),
        ltImgPath: require('../assets/smalllogo/左上@2x.png'),
        rtImgPath: require('../assets/smalllogo/右上@2x.png'),
        lbImgPath: require('../assets/smalllogo/左下@2x.png'),
        rbImgPath: require('../assets/smalllogo/右下@2x.png'),
      }
    },
    methods:{
    },
    activated(){
      let _this = this;
      if(_this.$route.query.selected === undefined){
        _this.selected = '1';
      }else {
        _this.selected = _this.$route.query.selected;
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
  /*tab1样式*/
  .tab1text{
    width: 9.36rem;
    border-radius: 2px;
    margin: 0 auto;
    margin-top:0.32rem;
    padding: 0.59rem 0.373rem;
    background: url(../assets/back@2x.png) no-repeat;
    background-size: 100% 100%;
  }
  .tab1text > p{
    font-size: 0.346rem;
    color: rgb(34,34,34);
    margin: 0;
    text-indent: 2em;
  }
  .tab1title{
    text-align: center;
    font-size: 0.453rem;
    color: rgb(34,34,34);
    padding: 0.64rem 0;
  }
  .sp1, .sp3
  {
    display: inline-block;
    width: 2.64rem;
    height: 1px;
    background: rgb(51,51,51);
    content: "";
    vertical-align: middle;
  }
  .sp2{
    padding:0 0.426rem;
  }

  /*tab3下面样式*/
  .scrollbox{
    height: 11.6rem;
    padding-bottom: 2.26rem;
    overflow: scroll;
  }
  .notice{
    width: 9.44rem;
    padding-top: 0.533rem;
    background: #fff;
    margin: 0.346rem auto;
    position: relative;
    padding-bottom: 0.4rem;
  }
  .notice .noticetitle {
    text-align: center;
  }
  .notice .noticetitle >img{
    display: inline-block;
    width: 1.76rem;
    height: 1px;
    vertical-align: middle;
  }
  .notice .noticetitle >span{
    font-size: 0.373rem;
    color: rgb(34,34,34);
  }
  .noticetext p{
    color: rgb(34,34,34);
    font-size: 0.32rem;
    margin-bottom: 0.05rem;
  }
  .noticetext{
    margin-top: 0.48rem;
    padding: 0 18px;
  }
  .noticetext p >span{
    color: rgb(204,40,40);
  }
  button, .btn{
    background-color: #fff!important;
    color:#000!important;
    padding: 0px!important;
  }
</style>
