<template>
  <div class="citys">
    <city-checkbox></city-checkbox>
  </div>
</template>

<script>
import CityCheckbox from "../components/CityCheckbox.vue";
export default {
  name: "AssociatedCity",
  data() {
    return {};
  },
  methods: {},
  components: {
    CityCheckbox,
  },
};
</script>

<style lang='less' scoped>
.citys {
  position: relative;
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  z-index: 3;
}
</style>
