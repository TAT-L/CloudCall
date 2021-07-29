<template>
  <div class="root">
      <transition name="nav">
        <!-- 左侧导航栏 -->
    <div class="navbar" v-show="nswi" style="display : none">
      <div class="top">
        <router-link to="/">
       <div class="logo"></div>
        <p>啄木鸟管理平台</p></router-link>
      </div>
      <NavBar :nav="nav"></NavBar>
    </div>
      </transition>
<!-- 右侧页面 -->
    <div class="page1">
      <!-- 顶部固定页面 -->
      <div class="page_top">
        <div class="top_1">
          <div class="left">
            <svg class="icon nav_swi" aria-hidden="true" @click="nswi= !nswi">
              <use xlink:href="#icon-caidan"></use>
            </svg>

            <svg class="icon refresh" aria-hidden="true">
              <use xlink:href="#icon-refresh"></use>
            </svg>
          
          </div>
          <div class="right">
            <svg class="icon msg" aria-hidden="true">
              <use xlink:href="#icon-xiaoxi"></use>
            </svg>
            <svg class="icon arrowDown" aria-hidden="true">
              <use xlink:href="#icon-jiantouarrow486"></use>
            </svg>
          </div>
        </div>
        <div class="top_2">
            <div class="left">
                <svg class="icon double-arrow-left " aria-hidden="true">
              <use xlink:href="#icon-double-arrow-right"></use>
            </svg>
            <div class="projects">
                <svg class="icon " aria-hidden="true">
              <use xlink:href="#icon-shouye-black"></use>
            </svg>
            <span>分线规则管理</span>
            <svg class="icon xx" aria-hidden="true">
              <use xlink:href="#icon-quxiao"></use>
            </svg>
            </div>
            </div>
            <div class="right">
                <svg class="icon " aria-hidden="true">
              <use xlink:href="#icon-double-arrow-right1"></use>
            </svg>
            <svg class="icon " aria-hidden="true">
              <use xlink:href="#icon-jiantouarrow486"></use>
            </svg>
            </div>
        </div>

      </div>
    <!-- 分线规则管理页面 -->
    <router-view ></router-view>
     
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
// import Page1 from '../pages/page1.vue';

export default {
  name: "Home",
  components: {
    NavBar,
    // Page1,
   
    
  },

  data() {
    return {
        nswi: true,//导航栏开关

      nav: [
        {
          level: 1,
          name: "云呼叫管理",
          path:'/',
          son: [
            {
              level: 2,
              name: "分线规则管理",
              path:'/page1',
              son: [],
            },
            {
              level: 2,
              name: " 技能组管理",
              path:'/page1',
              son: [],
            },
            {
              level: 2,
              name: " 号码管理",
              path:'/page1',
              son: [],
            },
            {
              level: 2,
              name: " 用户标签管理",
              path:'/page1',
              son: [],
            },
            {
              level: 2,
              name: "人员管理",
              path:'/page1',
              son: [],
            },
          ],
        },
      ],
      page1_data:[
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
};
</script>

<style lang="less" scoped>
@bgc: rgb(32,34,42);
@darkgray: rgb(193,193,193);
@blue: rgb(59,145,255);
@white: #fff;
.btn {
    margin-left: 30px;
}
.search {
    display: flex;
    height: 100px;
    padding: 20px 40px ;
    // background-color: @darkgray;
}
.root {
    display: flex;

}
.nav-enter-active, .nav-leave-active{
    transition: all 0.3 ease;
}
.nav-enter, .nav-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
.page1 {
   
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    height: 100vh;
  .page_top {
    .top_1 {
        display: flex;
       
        justify-content: space-between;
        padding: 15px 20px;
        font-size: 18px;
        border-bottom: 1px solid rgb(148, 145, 145);
        .icon {
            padding-right: 40px;
        }
    }

    .top_2 {
        display: flex;
        justify-content: space-between;
        
        border-bottom: 1px solid rgb(76, 70, 70);
        .projects {
            display: flex;
            align-items: center;
            background-color: @darkgray;
            span{
                font-size: 14px;
            }
            .xx {
                font-size: 10px;
            }
        }
        .double-arrow-left {
            font-size: 20px;
        }
        .icon {
           padding: 10px 20px;
        }
        .left {
            display: flex;
        }
    }
  }
}
.navbar {
 
  min-width: 220px;
  background-color: @bgc;
  height: 100vh;
  .top {
    height: 50px;
    border-bottom: 1px solid #000;
    .logo {
      float: left;
      width: 20%;
      height: 100%;
      // background-color: @blue;
      margin-left: 30px;
      background-image: url(https://sx.xiujiadian.com/images/block/s101/1/i1002/ZMWH7VSSET8SGCLUCN57HPF1SBFYPHTR.png);
      background-size: 130px 40px;
      background-position: 0 5px;
      background-repeat: no-repeat;
      margin-right: 10px;
    }
    p {
      line-height: 50px;
      color: @darkgray;
    }
  }
}
</style>