<template>
  <div class="btn">
    <!-- <span >{{name}}</span> -->
    <input type="button" :value="name" :style="style" />
  </div>
</template>

<script>
export default {
  name: "LittleButton",
  data() {
    return {
      style: {
        background: this.Bgcolor,
        width: this.width,
        color: this.textColor,
        border: this.border,
      },
    };
  },
  props: ["name", "Bgcolor", "width", "textColor", "border"],
};
</script>

<style lang="less" scoped>
.btn {
  float: left;
  input {
    border-radius: 3px;
    border: none;
    height: 30px;

    padding: 0 10px;
    color: white;
    // margin: 0 10px;
    font-size: 13px;
  }
}
</style>