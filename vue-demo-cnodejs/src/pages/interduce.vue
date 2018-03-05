<template>
  <transition name="fade">
    <el-button class="trans-btn" @click="redirectTo">
      <transition name="jump">
        <i class="el-icon-arrow-down"></i>
      </transition>
    </el-button>
    <h1>this is fade</h1>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      tag: "/",
      allDatas: []
    };
  },
  created() {
    console.log(this.$store);
  }
};
</script>

<style lang="scss">
h1 {
  color: #ddd;
  font-size: 30px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
  transform: translateY(100%);
}
.fade-enter,
.fade-leave-to {
  transform: translateY(0%);
}
</style>
