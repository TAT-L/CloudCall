<template>
  <div class="foot">
    <span class="total">共100条</span>
    <div class="pageNum">
      <LittleButton
        v-for="(btn, index) in btns"
        :key="index"
        :name="btn.name"
        :textColor="btn.textColor"
        :Bgcolor="btn.Bgcolor"
        :border="btn.border"
        :width="btn.width"
      ></LittleButton>
    </div>
    <div class="numPerPage">
      <select name="npp" id="select">
        <option value="" v-for="i in 5" :key="i">{{ i }}0条/页</option>
      </select>
    </div>
    <div class="goto">
      <p>到第<input type="number" value="1" />页</p>
      <little-button
        Bgcolor="white"
        name="确定"
        border="1px solid rgb(142, 141, 141)"
        textColor="black"
      ></little-button>
    </div>
  </div>
</template>

<script>
import LittleButton from "./LittleButton.vue";
export default {
  name: "Footer",
  data() {
    return {
      btns: [
        {
          name: "上一页",
          border: "1px solid rgb(226,226,226)",
          Bgcolor: "white",
          textColor: "black",
          width: "70px",
        },
        {
          name: "1",
          border: "1px solid rgb(226,226,226)",
          Bgcolor: "white",
          textColor: "black",
          width: "40px",
        },
        {
          name: "2",
          border: "1px solid rgb(226,226,226)",
          Bgcolor: "white",
          textColor: "black",
          width: "40px",
        },
        {
          name: "3",
          border: "1px solid rgb(226,226,226)",
          Bgcolor: "white",
          textColor: "black",
          width: "40px",
        },
        {
          name: "4",
          border: "1px solid rgb(226,226,226)",
          Bgcolor: "white",
          textColor: "black",
          width: "40px",
        },
        {
          name: "5",
          border: "1px solid rgb(226,226,226)",
          Bgcolor: "white",
          textColor: "black",
          width: "40px",
        },
        {
          name: "...",
          border: "1px solid rgb(226,226,226)",
          Bgcolor: "white",
          textColor: "black",
          width: "40px",
        },
        {
          name: "10",
          border: "1px solid rgb(226,226,226)",
          Bgcolor: "white",
          textColor: "black",
          width: "40px",
        },
        {
          name: "下一页",
          border: "1px solid rgb(226,226,226)",
          Bgcolor: "white",
          textColor: "black",
          width: "70px",
        },
      ],
    };
  },
  methods: {},
  components: {
    LittleButton,
  },
};
</script>

<style lang='less' scoped>
.foot {
   
  display: flex;
  margin-left: 40px;
  font-size: 13px;
  padding: 10px 0;
  .total {
    line-height: 30px;

    margin-right: 10px;
  }
  #select {
    padding: 5px 0;
    margin: 0 20px;
  }
}

.goto {
  display: flex;
  color: rgb(142, 141, 141);
  //   padding-top: 5px;
  .btn {
    margin: 0  15px;

  }
  input {
    width: 35px;
    height: 27px;
    margin: 0 10px;
    border: 1px solid rgb(214, 212, 212);
    text-align: center;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
}
</style>
