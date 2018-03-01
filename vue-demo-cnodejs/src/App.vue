<template>
  <div id="app" ref="app" v-bind:style="{background: backCcolor, opacity: 0.8}">
    <div class="fix_color">
      <ColorPicker v-model="backCcolor" />
      <label for="">主题色选择</label>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      backCcolor: '#000'
    }
  },
  watch: {
    backCcolor (newVal, oldVal) {
      console.log(newVal)
      // this.$refs.app.style.background = newVal
    }
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.fix_color{
  position: fixed;
  top: 20px;
  left: 100px;
  z-index: 1000;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; // position: absolute;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, .9);
  flex-direction: column;
  align-items: center;
  display: -webkit-box;
  /* 老版本语法: Safari,  iOS, Android browser, older WebKit browsers.  */
  display: -moz-box;
  /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;
  /* 混合版本语法: IE 10 */
  display: -webkit-flex;
  /* 新版本语法： Chrome 21+ */
  display: flex;
  /* 新版本语法： Opera 12.1, Firefox 22+ */
  /*垂直居中*/
  /*老版本语法*/
  -webkit-box-align: center;
  -moz-box-align: center;
  /*混合版本语法*/
  -ms-flex-align: center;
  /*新版本语法*/
  -webkit-align-items: center;
  align-items: center;
  /*水平居中*/
  /*老版本语法*/
  -webkit-box-pack: center;
  -moz-box-pack: center;
  /*混合版本语法*/
  -ms-flex-pack: center;
  /*新版本语法*/
  -webkit-justify-content: center;
  justify-content: center;
  margin: 0;
  width: 100%/* needed for Firefox */
}
</style>
