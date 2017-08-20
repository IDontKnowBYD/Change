<template>
  <div id="app">
    <p>{{ message }}</p>
   <button v-on:click="reverseMessage">逆转消息</button>
   <firstcomponent></firstcomponent>
   <router-link to="/first">Go to Foo</router-link>
    <router-link to="/second">Go to Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import firstcomponent from './component/firstcomponent.vue'
export default {
  name: 'app',
  data: function() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
  components: {
    firstcomponent: firstcomponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
