<template>
  <transition name="fadeOne">
    <div id="welcome">
      <img src="../../src/assets/logo.png">
      <div>
        <h1>{{ msg }}</h1>
        <el-button class="trans-btn" @click="redirectTo">
          <transition name="jump">
            <i class="el-icon-arrow-down"></i>
          </transition>
        </el-button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to my homepage"
    };
  },
  created() {
    this.$api.get("topics", null, r => {
      console.log(r);
    });
  },
  methods: {
    redirectTo() {
      this.$router.push({ path: "/interduce" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#welcome{
  height: 100%;
}
@mixin keyframes($animationName) {
  @-webkit-keyframes #{$animationName} {
    @content;
  }
  @-moz-keyframes #{$animationName} {
    @content;
  }
  @-o-keyframes #{$animationName} {
    @content;
  }
  @keyframes #{$animationName} {
    @content;
  }
}
h1 {
  font-weight: normal;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: -5px 2px 0px rgb(6, 102, 78);
}

ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    color: blue;
    margin: 0 10px;
  }
}

.trans-btn {
  margin-top: 20px;
  border-radius: 4px;
  background: transparent;
  border: 1px solid transparent;
  i {
    font-size: 50px;
    // transition: all 0.5s;
    animation: jump 1.5s ease infinite;
    @include keyframes(jump) {
      0% {
        transform: translateY(10px);
      }
      70% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(10px);
      }
    }
    &:hover {
      animation: none;
      transform: translateY(0);
    }
  }
}
.one-input {
  background-color: transparent !important;
}

a {
  color: #42b983;
}
</style>
