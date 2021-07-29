<template>
  <div>
    <table border="1" cellspacing="0" width="1800" align="center">
      <tr align="left">
        <!-- 顶部按钮 -->
        <th :colspan="data[0].data.length + 1" height="60px">
          <LittleButton  class="ltbtn"
            name="+ 新增"
            Bgcolor="white"
            textColor="black"
            border="1px solid black"
          ></LittleButton>
          <LittleButton class="ltbtn" name="启用" Bgcolor="rgb(7,150,135)"></LittleButton>
          <LittleButton class="ltbtn" name="停用" Bgcolor="rgb(255,102,51)"></LittleButton>
        </th>
       
      </tr> 
      <!-- 表格 -->
      <tr v-for="(rows, keyOfrow) in data" :key="keyOfrow" align="center">
        <!-- 第一列多选表单 -->
        <td >
          <input type="checkbox" class="input_box" />
        </td>
        <!-- 过滤数组 -->
        <td v-for="(da, index) in filterData(rows)" :key="index" width="">
          <span v-if="index != 0 || keyOfrow == 0">{{ da }}</span>
          <input
            class="input_num"
            type="text"
            v-if="keyOfrow != 0 && index == 0"
            value="1"
          />
        </td>
        <!-- 最后一列按钮 -->
        <td v-if="keyOfrow != 0" class="operation">
          <router-link  
          v-for="(name, i) in rows.data[lengthOfColumn-1]" 
          :key="i"
          :to="name=='关联城市' ? '/AssociatedCity' : ''">
          <Button
            :name="name"
            color="rgb(7,150,135)"
          >
          </Button>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Button from "./button.vue";
import LittleButton from "./LittleButton.vue";
export default {
  name: "Sheet",
  props: ["data"],
  data() {
    return {
      lengthOfRow : this.data.length,
      lengthOfColumn : this.data[0].data.length
    };
  },
  computed: {},
  methods: {
    filterData(rows) {
      // console.log(rows);
      return rows.data.filter((item) => {
        return !(item instanceof Array);
      });
    },
  },
  components: {
    Button,
    LittleButton,
  },
};
</script>

<style lang="less" scoped>
table {
  margin-left: 30px;
  font-size: 13px;
  border: rgb(193, 193, 193);
  th {
    padding-left: 30px;
    background-color: rgb(242, 242, 242);
    .ltbtn {
      margin: 0 10px;
    }

  }

  tr {
    &:nth-child(2) {
      background-color: rgb(242, 242, 242);
    }
    td:nth-child(1) {
      width: 80px;
    }
    td:nth-child(2) {
      width: 200px;
    }
    td:nth-child(3) {
      width: 100px;
    }
    td:nth-child(4) {
      width: 100px;
    }
    td:nth-child(5) {
      width: 150px;
    }
    td:nth-child(6) {
      width: 200px;
    }
    td:nth-child(7) {
      width: 150px;
    }
    td:nth-child(8) {
      width: 200px;
    }
    td:nth-child(9) {
      width: 100px;
    }
    td:nth-child(10) {
      width: 300px;
    }
  }
  td {
    padding: 5px 0;

    .input_num {
      text-align: center;
      height: 30px;
      width: 100px;
    }
    .input_box {
      height: 20px;
      width:20px;
      
    }
  }
}

.operation {
  display: flex;
}
</style>