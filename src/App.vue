<template>
  <div id="app">
    <!-- <div>{{ VUE_APP_URL }}</div>
    <div>{{ k }}</div>
    <div></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mains">menu</router-link>
    </div> -->
    <!-- <router-view/> -->
    <!-- <indexpage msg="Welcome to Your Vue.js App"/> -->
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
// import indexpage from './views/Index/index.vue'
export default {
  name: 'Home',
  data() {
    return {
      usersList: [],
      k : this.$baseUrl+'user/token',
      VUE_APP_URL:process.env.VUE_APP_URL
    };
  },
  components: {
    // indexpage
  },
   mounted() {
    
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
