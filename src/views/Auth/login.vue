<template>
    <div class="login">
        <div class="bg-blue-400 h-screen w-screen">
            <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                <div class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style="height: 500px">
                    <div class="flex flex-col w-full md:w-1/2 p-4">
                        <div class="flex flex-col flex-1 justify-center mb-8">
                            <h1 class="text-4xl text-center font-thin">Welcome Back</h1>
                            <div class="w-full mt-4">
                                <div class="form-horizontal w-3/4 mx-auto">
                                    <div class="flex flex-col mt-4">
                                        <input id="email" v-model="useremail" type="text" class="flex-grow h-8 px-2 border rounded border-grey-400" name="email" value="" placeholder="Email">
                                    </div>
                                    <div class="flex flex-col mt-4">
                                        <input id="password" v-model="password" type="password" class="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password">
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <input type="checkbox" name="remember" id="remember" class="mr-2"> <label for="remember" class="text-sm text-grey-dark">Remember Me</label>
                                    </div>
                                    <div class="flex flex-col mt-8">
                                        <button @click="login" type="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                            Login
                                        </button>
                                    </div>
                                </div>
                                <div class="text-center mt-4">
                                    <a class="no-underline hover:underline text-blue-dark text-xs" href="">
                                        Forgot Your Password?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block md:w-1/2 rounded-r-lg" style="background: url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'); background-size: cover; background-position: center center;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { mapMutations } from 'vuex';

    export default {
        name: 'Home',
        data() {
            return {
            usersList: [],
            useremail: "",
            password: ""
            };
        },
        components: {
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
        },
        methods:{
            ...mapMutations(['changeLogin']),
            login () {
                if (this.useremail === '' || this.password === '') {
                    alert('賬號或密碼不能為空');
                } else {
                    axios.post(this.$baseUrl+'user/token', {
                        "Email":this.useremail,
                        "Password":this.password
                    })
                    .then(res => {
                        console.log(res.data);
                        
                        this.changeLogin({Authorization: res.data.token });
                        
                        this.$router.push('mains');
                        alert('登陆成功');
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }
            },
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