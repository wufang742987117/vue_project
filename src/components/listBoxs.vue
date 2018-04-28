<template>
  <ul class="listsboxs" style="background: none;">
    <li class="listBoxs" v-for="(item,index) in listBoxsInfo.data" :key="index" @click="goLand()" v-if="listBoxsInfo.data.length != 0">
      <div class="tab1top">
        <div class="code">编号：{{item.id}}</div>
        <div class="nick-icon">
          <img :src="item.image"/><span>{{item.real_name}}</span>
        </div>
      </div>
      <div class="imglist" v-if="toJson(listBoxsInfo.data[index].pic_url).length === 1">
        <div class="item">
          <img :src="toJson(listBoxsInfo.data[index].th_pic_url)[0] " />
        </div>
      </div>
      <div class="imglist imgnums2" v-if="toJson(listBoxsInfo.data[index].pic_url).length === 2">
        <div class="item">
          <img :src="toJson(listBoxsInfo.data[index].th_pic_url)[0] " />
        </div>
        <div class="item">
          <img :src="toJson(listBoxsInfo.data[index].th_pic_url)[1] " />
        </div>
      </div>
      <div class="imglist imgnums3 clearfix" v-if="toJson(listBoxsInfo.data[index].pic_url).length === 3">
        <div class="item">
          <img :src="toJson(listBoxsInfo.data[index].th_pic_url)[0] " class="pull-left"/>
        </div>
        <div class="item">
          <img :src="toJson(listBoxsInfo.data[index].th_pic_url)[1] " />
        </div>
        <div class="item">
          <img :src="toJson(listBoxsInfo.data[index].th_pic_url)[2] " />
        </div>
      </div>
      <div class="imglist imgnums3 clearfix" v-if="toJson(listBoxsInfo.data[index].pic_url).length > 3">
        <div class="item">
          <img :src="toJson(listBoxsInfo.data[index].th_pic_url)[0] " class="pull-left" />
        </div>
        <div class="img3box pull-right">
          <div class="item">
            <img :src="toJson(listBoxsInfo.data[index].th_pic_url)[1] " />
          </div>
          <div class="moreimg">
            <img :src="toJson(listBoxsInfo.data[index].th_pic_url)[2] " />
            <div class="moresmsg">
              +{{toJson(listBoxsInfo.data[index].pic_url).length-2}}
            </div>
          </div>
        </div>
      </div>
      <p class=" textconent">单位：{{item.company}}</p>
      <p class=" textconent">{{item.introduce}}</p>
      <div class="votes clearfix">
        <div class="votesbtn pull-right voted" :id="item.id">去拉票</div>
        <div class="pull-right pointer">
          <img :src="voteImgPath"/>
          <span>{{item.opt_count}}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {

    },
    data(){
      return{
        getThPicUrl: {},
        voteImgPath: require('../assets/smalllogo/vote@2x.png'),
        listBoxsInfo: {
          "data":[{
            "company": "建朗",
            "id": "145",
            "image": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLTzldx9BPKZeia2UF0O39nWUoIagYT7PNYBVibGtx8hXqicbOOXIIYBIDSVrRiakl1lPBCqKe3ickVV8g/132",
            "introduce": "#为坚守在一线的职工点赞#",
            "lid": null,
            "opt_count": "6",
            "pic_url": "['http:\/\/p6wwfiine.bkt.clouddn.com\/1524226427423.jpg','http:\/\/p6wwfiine.bkt.clouddn.com\/1524226450872.jpg','http:\/\/p6wwfiine.bkt.clouddn.com\/1524226434240.jpg','http:\/\/p6wwfiine.bkt.clouddn.com\/1524226416950.jpg','http:\/\/p6wwfiine.bkt.clouddn.com\/1524226442051.jpg']",
            "real_name": "杨雪冰",
            "th_pic_url": "['http:\/\/p6wwfiine.bkt.clouddn.com\/1524226427423.jpg?imageView2\/1\/w\/100\/h\/100','http:\/\/p6wwfiine.bkt.clouddn.com\/1524226450872.jpg?imageView2\/1\/w\/100\/h\/100','http:\/\/p6wwfiine.bkt.clouddn.com\/1524226434240.jpg?imageView2\/1\/w\/100\/h\/100','http:\/\/p6wwfiine.bkt.clouddn.com\/1524226416950.jpg?imageView2\/1\/w\/100\/h\/100','http:\/\/p6wwfiine.bkt.clouddn.com\/1524226442051.jpg?imageView2\/1\/w\/100\/h\/100']"
          },{
            "company": "天津",
            "id": "133",
            "image": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLAEiaIZT2t3FxxoLNqmt0KfvlBh8FbxcnicgPoicibibW67PNUyb0635o4Ya8OPfwV6iboU5tTVibE59Jg/132",
            "introduce": "人才",
            "lid": null,
            "opt_count": "6",
            "pic_url": "['Uploads\/Picture\/photograph\/222\/15241125610.jpeg']",
            "real_name": "公寓",
            "th_pic_url": "['Uploads\/Picture\/photograph\/222\/thum\/\/15241125610_th.jpeg']"
          }],
          "id": "145",
          "status": 0
        }


      }
    },
    methods: {
      goLand() {
        /*this.$router.push({
          path: '/administrativeExaminationDetail',
          query: {type: this.typeFlag, processId: this.processId, taskId: this.taskId}
        })*/
      },
      //字符串转为json格式
      toJson:function(str){
        let _str =(new Function("","return "+str))();
        return _str;
      }
    }

  }
</script>

<style scoped>
  .listsboxs{
    padding: 0 0.346rem;
  }
  .listsboxs li{
    background: #fff;
    padding: 0.4rem 0.533rem;
    margin-bottom: 0.266rem;
  }
  .tab1top .nick-icon{
    float: right;
  }
  .code{
    display: inline-block;
  }
  .votes{
    padding-top:0.4rem;
  }
  .votesbtn{
    width: 2rem;
    height: 0.586rem;
    line-height: 0.586rem;
    text-align: center;
    border-radius: 0.293rem;
    background: rgb(138,166,228);
    font-size: 0.346rem;
    color: #fff;
    margin-left: 0.5rem;

  }

  /*tab1 照片样式*/
  .imglist{
    margin-top: 0.4rem;
  }
  /*一张图片样式*/
  .imglist img{
    width: 100%!important;
    height: 4.66rem;
    display: block;
  }
  /*2张图片*/
  .imgnums2 img{
    width: 2.77rem!important;
    height: 2.21rem;
    display: inline-block;
  }
  .imgnums2 >img:first-child{
    margin-right: 0.18rem;
  }
  /*3张图的样式*/
  .imgnums3 >img:first-child{
    width: 5.466rem!important;
    height: 4.42rem!important;
    display: inline-block;
  }
  .img3box>img:first-child{
    margin-bottom: 0.18rem;
  }
  .img3box>img, .moreimg>img {
    width: 2.61rem!important;
    height: 2.133rem!important;
    display:block;
  }
  .moreimg {
    position: relative;
  }
  .moresmsg{
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 2.133rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    font-size: 0.4rem;
    color: #fff;
    text-align: center;
  }
  /*修改首页图片缩略图样式*/
  .item{
    position: relative;
    width: 100%;
    height: 4.66rem;
    background: rgb(124,124,124);
  }
  .imgnums2 .item{
    width: 2.613rem;
    height: 2.613rem;
    display: inline-block;
    margin: 0.066rem;
  }
  .imgnums3>.item:nth-child(1){
    width: 5.466rem!important;
    height: 4.42rem!important;
    display: inline-block;
  }
  .img3box>.item:nth-child(1){
    margin-bottom: 0.18rem;
  }
  .img3box .item{
    width: 2.61rem!important;
    height: 2.133rem!important;
    display: block;
  }

  .item img{
    display: block;
    max-height: 100%;
    max-width: 100%;
    width: auto!important;
    height: auto!important;
    margin: auto;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
  }
</style>
