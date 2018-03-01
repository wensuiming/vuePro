<template>
  <div class="hello">
    <img src="../../src/assets/logo.png">
    <h1>{{ msg }}</h1>
    <Button class="trans-btn" @click="redirectTo">Know More</Button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to my homepage'
    }
  },
  created () {
    this.$api.get('topics', null, r => {
      console.log(r)
    })
  },
  methods: {
    redirectTo () {
      this.$router.push({ path: 'manager' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-weight: normal;
  font-size: 50px;
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
  font-size: 18px;
  border-radius: 4px;
  background: transparent;
  border: 1px solid lightblue;
}

.one-input{
  background-color: transparent !important;
}

a {
  color: #42b983;
}
</style>
