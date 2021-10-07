<template>
  <div id="order">
    <div class="flex justify-center bg-gray-200">
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">order</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>

  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: 'order',
  data() {
    return {
      usersList: []
    };
  },
   mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        this.usersList = res.data;
        console.log(this.usersList)
      })
      .catch(error => {
        console.log(error)
         // Manage errors if found any
      })
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
