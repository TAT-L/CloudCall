<template>

  <div class="page1">
   <!-- 关联城市页面 -->
       
   
    <div class="search">
      <search type="text" ph="名称/ID查询" label="号码"></search>
      <Buttons class="btn"></Buttons>
    </div>
    <div class="sheet">
      <Sheet :data="sheet_data"></Sheet>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import search from "../components/search.vue";
import Buttons from "../components/buttons.vue";
import Sheet from "../components/sheet.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Page1",
  props: [],
  data() {
    return {
       sheet_data:[
        {
          row: 'th',
          data:['排序号','ID','名称','关联电话标签','关联渠道'
          ,'关联城市','工作时间段','状态','最近修改人时间','操作'],
        }
        ,{
          row:'1',
          data:['1','98','规则A','啄木鸟新用户','微信B、平台渠道C',
          '台州','8:00:00-21:30:00','on',
          '张三/2021-04-13 17:46:50',['修改','配置' ,'关联城市']],
        }
        ,{
          row:'2',
          data:['1','98','规则A','啄木鸟新用户','微信B、平台渠道C',
          '台州','8:00:00-21:30:00','on',
          '张三/2021-04-13 17:46:50',['修改','配置' ,'关联城市']],
        }
        ,{
          row:'3',
          data:['1','98','规则A','啄木鸟新用户','微信B、平台渠道C',
          '台州','8:00:00-21:30:00','on',
          '张三/2021-04-13 17:46:50',['修改','配置' ,'关联城市']],
        }
        ,{
          row:'4',
          data:['1','98','规则A','啄木鸟新用户','微信B、平台渠道C',
          '台州','8:00:00-21:30:00','on',
          '张三/2021-04-13 17:46:50',['修改','配置' ,'关联城市']],
        }
        ,{
          row:'5',
          data:['1','98','规则A','啄木鸟新用户','微信B、平台渠道C',
          '台州','8:00:00-21:30:00','on',
          '张三/2021-04-13 17:46:50',['修改','配置' ,'关联城市']],
        }
      ]
    };
  },
  methods: {},
  components: {
    search,
    Buttons,
    Sheet,
    Footer,
  },
};
</script>

<style lang='less' scoped>
@bgc: rgb(32, 34, 42);
@darkgray: rgb(193, 193, 193);
@blue: rgb(59, 145, 255);
@white: #fff;

.footer {
  position: absolute;
  background-color: #eee;
  right: 0px;
  bottom: 20px;
}

.btn {
  margin-left: 30px;
}
.search {
  display: flex;
  height: 80px;
  padding: 20px 40px;
  // background-color: @darkgray;
}
</style>
