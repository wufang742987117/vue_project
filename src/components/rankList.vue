<template>
    <ul class="rankList list mui-table-view otherRank">
      <li class="clearfix" v-for="(item,index) in rankListInfo" :key="index" :id="item.id">
        <div class="pull-left" v-if="Number(item.rownum) === 1">
          <img :src="firstImgPath"/>
        </div>
        <div class="pull-left" v-else-if="Number(item.rownum) === 2">
          <img :src="secondImgPath"/>
        </div>
        <div class="pull-left" v-else-if="Number(item.rownum) === 3">
          <img :src="thirdImgPath"/>
        </div>
        <div class="pull-left" v-else="Number(item.rownum) > 3">
            <span>{{item.rownum}}</span>
        </div>
        <div class="pull-left">
          <img :src="item.cover" alt="" />
        </div>
        <div class="pull-left text">
          <div class="texttop">
            <img :src="item.image" alt="" /><span>{{item.real_name}}</span>
          </div>
          <div class="textbottom ellipsis">
            {{item.introduce}}
          </div>
        </div>
        <div class="pull-right boxright" v-if="item.lid === null">
          <img :src="unvoteImgPath"  class="icon" :id="item.id"/>
          <span>{{item.opt_count}}</span>
        </div>
        <div class="pull-right boxright" v-else>
          <img :src="voteImgPath"  class="icon" :id="item.id"/>
          <span>{{item.opt_count}}</span>
        </div>
      </li>
    </ul>
</template>
<script>
    export default {
      data(){
          return{
            firstImgPath: require('../assets/smalllogo/1@2x.png'),
            secondImgPath: require('../assets/smalllogo/2@2x.png'),
            thirdImgPath: require('../assets/smalllogo/3@2x.png'),
            unvoteImgPath: require('../assets/smalllogo/unvote@2x.png'),
            voteImgPath: require('../assets/smalllogo/vote@2x.png'),
            rankListInfo: [
              {"company": "建",
              "cover": "Uploads/Picture/photograph/222/thum//15241088870_th.jpeg",
              "id": "129",
              "image": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLAEiaIZT2t3FxxoLNqmt0KfvlBh8FbxcnicgPoicibibW67PNUyb0635o4Ya8OPfwV6iboU5tTVibE59Jg/132",
              "introduce": "#为坚守在一线的职工点赞# ",
              "lid": null,
              "opt_count": "3",
              "real_name": "你",
              "rownum": "1"},
              {"company": "建",
                "cover": "Uploads/Picture/photograph/222/thum//15241088870_th.jpeg",
                "id": "129",
                "image": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLAEiaIZT2t3FxxoLNqmt0KfvlBh8FbxcnicgPoicibibW67PNUyb0635o4Ya8OPfwV6iboU5tTVibE59Jg/132",
                "introduce": "#为坚守在一线的职工点赞#",
                "lid": null,
                "opt_count": "3",
                "real_name": "你",
                "rownum": "6"}
              ]
          }
      }
    }
</script>

<style scoped>
  .mui-table-view {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
  }
  /*tab2排行榜样式*/
  .mint-tab-container-item .list {
    padding-left: 0.5rem;
  }
  .mint-tab-container-item .list >li> div:first-child img{
    width: 0.68rem;
    height: 0.586rem;
    display: block;
    margin: 0.6rem 0.48rem 0 0;
  }
  .mint-tab-container-item .list >li> div:first-child >span{
    width: 0.68rem;
    height: 0.586rem;
    line-height: 0.586rem;
    display: block;
    margin: 0.6rem 0.48rem 0 0;
    text-align: center;
    color: rgb(204,40,40);
  }
  .mint-tab-container-item .list >li{
    display: block;
    padding: 0.4rem 0;
    background: #fff;
    border-bottom: 1px solid #f2f2f2;
  }
  .mint-tab-container-item .list >li> div:nth-of-type(2) img{
    width: 1.733rem;
    height: 1.733rem;
    display: block;
    margin-right: 0.266rem;
  }
  .mint-tab-container-item .list >li>.text{
    width: 4.93rem;
  }
  .mint-tab-container-item .list >li>.text .texttop {
    margin-top: 0.186rem;
    margin-bottom: 0.186rem;
  }
  .mint-tab-container-item .list >li>.text .texttop img{
    width: 0.693rem;
    height: 0.693rem;
    border-radius: 100%;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.266rem;
  }
  .mint-tab-container-item .list >li>.text .texttop span{
    font-size: 0.426rem;
    color: rgb(34,34,34);
  }
  .mint-tab-container-item .list >li>.text .textbottom{
    font-size: 0.373rem;
    color: rgb(109,109,109);
  }
  .mint-tab-container-item .list >li>.boxright{
    margin-right: 0.4rem;
    margin-top:0.325rem;
    font-size: .346rem;
    color: rgb(43,43,43);
  }
  .mint-tab-container-item .list >li>.boxright img{
    width: 0.466rem;
    height: 0.466rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 0.1rem;
  }
</style>
