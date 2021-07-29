<template>
  <div class="btns">
    <div class="search btn">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
    <div class="back btn">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons",
};
</script>

<style lang="less" scoped>
    .btns {
        display: flex;
        height: 30px;
        .btn {
            display: flex;
            color: white;
            justify-content: center;
            align-items: center;
            width: 35px;
            margin-left:  10px;
            border-radius: 5px;
            background-color: rgb(0,150,135);
            .icon {
                font-size: 20px;
            }
        }
    }
</style>