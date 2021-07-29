<template>
  <div>
      <label for="">{{label}}：</label>
      <input type="text" :placeholder="ph">
  </div>
</template>

<script>

export default {
    name: 'search',
    props:['ph','label','type']
}
</script>

<style lang="less" scoped>
    input {
        height: 25px;
        border-radius: 5px;
        border: 1px solid ;
    }
</style>