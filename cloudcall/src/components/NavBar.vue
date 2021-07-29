<template>
  <div class="items">
    <!-- 第一层列表 -->
    <ul class="level1">
      <li v-for="(level1, index1) in nav" :key="index1">
        <a
          href="#"
          :class="level1.son.length != 0 ? 'level1-open' : ''"
          @click="open_lv2"
          >{{ level1.name
          }}<svg class="icon" aria-hidden="true" v-if="level1.son.length">
            <use
              :xlink:href="
                open2 ? '#icon-jiantouarrow486' : '#icon-arrow-right'
              "
            ></use></svg
        ></a>
        <!-- 第二层列表 -->
        <transition name="fade">
          <ul class="level2" v-show="open2">

            <li v-for="(level2, index2) in level1.son" :key="index2">
              <!-- 页面跳转 -->
            <router-link :to="level2.path">  <a href="#" :class="level2.son.length != 0 ? 'level2-open' : ''"
                >{{ level2.name }}
                <svg class="icon" aria-hidden="true">
                  <use
                    xlink:href="#icon-jiantou"
                    v-if="level2.son.length"
                  ></use></svg
              ></a></router-link>

              <ul class="level3" v-show="open3">
                <li v-for="(level3, index3) in level2.son" :key="index3">
                  <a
                    href="#"
                    :class="level3.son.length != 0 ? 'level3-open' : ''"
                    >{{ level3.name }}
                    <svg
                      class="icon"
                      aria-hidden="true"
                      v-if="level3.son.length"
                    >
                      <use xlink:href="#icon-jiantou"></use></svg
                  ></a>
                </li>
              </ul>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["nav"],
  data() {
    return {
      open2: true,
      open3: true,
    
    };
  },
  methods: {
    open_lv2() {
      this.open2 = !this.open2;
    },
  },
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
.items {
  background-clip: border-box;

  a {
    display: inline-block;
    color: rgb(193, 193, 193);
    line-height: 30px;

    background-clip: border-box;
    border-bottom: 1px solid #000;
  }
  li {
    .icon {
      float: right;
      margin-top: 7px;
      margin-right: 5px;
    }
  }
  a:hover {
    background-color: #fff;
    color: black;
  }

  .level1 {
    > li > a {
      width: 100%-14px;
      padding-left: 30px;
    }
    .level2 {
      > li > a {
        width: 100%-23px;
        padding-left: 50px;
      }

      .level3 {
        > li > a {
          width: 100%-33px;
          padding-left: 70px;
        }
      }
    }
  }
}
</style>