<template>
  <div>
    <input id="city" type="checkbox" />
    <label for="city">
      <span class="cityName">贵阳</span>
      <span class="box"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CityCheckBox",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style lang='less' scoped>
* {
  margin: 0;
  padding: 0;
}
input[type="checkbox"] {
  /* visibility 属性规定元素是否可见*/
  visibility: hidden;
}
#city:checked + label .box::after {
  display: block;
  content: "\2714";
  color: rgb(3, 172, 116);
  text-align: center;
}
#city:checked  + label .box
{
  border-color: rgb(3, 172, 116);
}
#city:checked  + label .cityName {
  background-color: rgb(3, 172, 116);
}
label {
  display: flex;
  margin: 5px auto;
  width: 110px;
  height: 23px;
  font-size: 13px;
  color: white;
  line-height: 23px;
  .cityName {
    display: block;
    text-align: center;
    width: 75%;
    height: 100%;
    background-color: rgb(211, 210, 210);
  }
  .box {
    flex: 1;
    border: 1px solid #eee;
  }
}
</style>
