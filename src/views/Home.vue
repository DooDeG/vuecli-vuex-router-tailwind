<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul class="test-list" v-for="user in usersList" :key="user.id">
      <li class="test-list--item">
        <strong>{{ user.name }}</strong> <br>
        {{ user.email }} <br>
        {{ user.website }}
      </li>
    </ul>
    
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      usersList: []
    };
  },
  components: {
    HelloWorld
  },
   mounted() {
    
  }
}
</script>

<style>
ul {
  margin: 0 auto;
  width: 300px;
  text-align: left;  
}

li {
  display: block;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 15px;
}
</style>