<template>
  <div class="addVote">
    <banner-common></banner-common>
    <div class="tag">
      <!--<div>
        <span v-for="(item,index) in addVoteInfo.attribute_data">{{item.keyword}}</span>
      </div>-->
      <div class="usertitile">
        <textarea placeholder="写下关于这幅作品的的故事..." name="introduce"></textarea>
      </div>
      <div>

        <template v-for="(item,index) in addVoteInfo.attribute_data">

          <div v-if="item.type === 'radio'" class="marg-bottom-15px">
            <template v-for="ite in item.extra.split('|')">
              <input :type="item.type" :placeholder="item.title" :name="item.name">{{ite}}
            </template>
          </div>

          <div v-if="item.type === 'checkbox'" class="marg-bottom-15px">
            <template v-for="ite in item.extra.split('|')">
              <input :type="item.type" :placeholder="item.title" :name="item.name">{{ite}}
            </template>
          </div>

          <div v-else-if="item.type === 'select'">
            <select>
              <template v-for="ite in item.extra.split('|')">
                <option>{{ite}}</option>
              </template>
            </select>
          </div>

          <div v-else-if="item.type === 'string'">
            <input type="text" :placeholder="item.title" :name="item.name">
          </div>
          <div v-else-if="item.type === 'datetime'">
            <input type="date" :placeholder="item.title" :name="item.name">
          </div>
          <div v-else>
            <input type="item.type" :placeholder="item.title" :name="item.name">
          </div>

        </template>

      </div>
      <div id="upload">
        <div id="img-container">
          <div class="img-up-add  img-item">
            <img :src="addIconImgPath" name="photo1">
          </div>
          <input type="file" name="files" id="img-file-input" multiple="">
        </div>
      </div>
      <div id="submitBtn" >
        <button>提交</button>
      </div>
    </div>
    <!--<input type="file" name="files" id="img-file-input" multiple="" style="display: none">-->
    <div class="mui-loading" style="display: none;">
      <div class="mui-spinner">
      </div>
    </div>
  </div>

</template>

<script>
    import BannerCommon from "../components/bannerCommon";

    export default {
      components: {BannerCommon},
      name: "addVote",
      data(){
        return{
          addVoteInfo: {
            "attribute_data":[
              {
                "id":"7",
                "title":"性别",
                "type":"radio",
                "extra":"男|女",
                "value":"",
                "token":"gh_4b6abe0fd203",
                "name":"attr__0",
                "remark":"",
                "is_must":"1",
                "validate_rule":"",
                "sort":"0",
                "error_info":"",
                "photo_vote_show_id":"4",
                "is_show":"1",
                "create_time":"2018-04-27 09:23:27",
                "modify_time":null
              },
              {
                "id":"8",
                "title":"爱好",
                "type":"checkbox",
                "extra":"打篮球|踢足球|打棒球",
                "value":"",
                "token":"gh_4b6abe0fd203",
                "name":"attr__1",
                "remark":"",
                "is_must":"1",
                "validate_rule":"",
                "sort":"1",
                "error_info":"",
                "photo_vote_show_id":"4",
                "is_show":"1",
                "create_time":"2018-04-27 09:23:27",
                "modify_time":null
              },
              {
                "id":"9",
                "title":"生日",
                "type":"datetime",
                "extra":"",
                "value":"",
                "token":"gh_4b6abe0fd203",
                "name":"attr__2",
                "remark":"",
                "is_must":"1",
                "validate_rule":"",
                "sort":"2",
                "error_info":"",
                "photo_vote_show_id":"4",
                "is_show":"1",
                "create_time":"2018-04-27 09:23:27",
                "modify_time":null
              },
              {
                "id":"10",
                "title":"公司",
                "type":"string",
                "extra":"",
                "value":"",
                "token":"gh_4b6abe0fd203",
                "name":"attr__3",
                "remark":"",
                "is_must":"1",
                "validate_rule":"",
                "sort":"3",
                "error_info":"",
                "photo_vote_show_id":"4",
                "is_show":"1",
                "create_time":"2018-04-27 09:23:27",
                "modify_time":null
              },
              {
                "id":"11",
                "title":"手机号",
                "type":"string",
                "extra":"",
                "value":"",
                "token":"gh_4b6abe0fd203",
                "name":"attr__4",
                "remark":"",
                "is_must":"1",
                "validate_rule":"",
                "sort":"4",
                "error_info":"",
                "photo_vote_show_id":"4",
                "is_show":"1",
                "create_time":"2018-04-27 09:23:27",
                "modify_time":null
              },
              {
                "id":"13",
                "title":"月份",
                "type":"select",
                "extra":"一月份|二月份|三月份|四月份",
                "value":"",
                "token":"gh_4b6abe0fd203",
                "name":"attr__6",
                "remark":"",
                "is_must":"1",
                "validate_rule":"",
                "sort":"6",
                "error_info":"",
                "photo_vote_show_id":"4",
                "is_show":"1",
                "create_time":"2018-04-27 09:23:27",
                "modify_time":null
              }
            ],
            "attribute_show_id":{
              "is_show":4,
              "name":"photo_vote_show_id",
              "value":4
            }
          },
          addIconImgPath: require('../assets/smalllogo/addIcon@3x.png'),
          params:{
            name:""
          }
        }
      },
      activated(){
        console.log(this.params.name);
      }
    }
</script>

<style scoped>
  textarea{
    border: 0px;
    height:100px;
    margin-bottom: 0px;
  }
  button{
    background-color: rgba(122, 169, 255, 1)!important;
    color: #ffffff!important;
    border: 0px!important;
    width: 100%!important;
    margin-top: 20px!important;
    padding:10px 0px!important;
  }
  #img-file-input {
    display: none;
  }
  .img-item {
    position: relative;
    float: left;
    margin-right: 0.2rem;
    margin-bottom: 0.1875rem;
    width: 80px;
    height: 80px;
    box-sizing: border-box;
  }
  .img-item img {
    width: 80px;
    height: 80px;
  }
  input[type=text],input[type=tel]{
    border: 0px !important;
  }

  .tag{
    width:9.333rem;
    border-radius: 2px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 0.533rem;
    margin: 0.6rem auto;
    font-size: 15px;
  }
  .tag span{
    background-color: rgba(199, 199, 199, 0.52);
    padding: 6px;
    border-radius:3px;
    display: inline-block;
    margin-bottom: 5px;
    margin-right: 5px;
  }
  .usertitile{
    font-size: 0.4rem;
    color: rgb(51,51,51);
    text-align: center;
    padding: 0.533rem 0;
  }
</style>
