<template>
  <div class="container">
    <div class="time-line">

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container {
  width: 100%;
  height: 100%;
  text-align: center;
  border: 1px solid transparent;
  box-sizing: border-box;
}
</style>
