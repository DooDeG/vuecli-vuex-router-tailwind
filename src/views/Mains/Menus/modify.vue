
<template>
    <div class="modifyMenu">
        <div class="flex justify-center items-center w-full">
            <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">添加菜单</h1>
                <div class="s">
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">Name</label>
                            <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div>
                        </div>
                        <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" v-model="product.name" value="name" >
                    </div>
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="last_name">price</label>
                            <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div>
                        </div>
                        <input class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name" v-model="product.price" >
                    </div>
                    
                    <div class="tableTitle mt-5 mb-5"><span class="midText"></span></div>
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="Select" >type</label>
                            <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div>
                        </div>
                        <select class="border py-2 px-3 text-grey-800" v-model="product.type" >
                            <option>{{product.type}}</option>
                        </select>
                    </div>
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="File">Image</label>
                            <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div>
                        </div>
                        <input class="border py-2 px-3 text-grey-800" type="file" name="file" id="file">
                    </div>
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="textarea">描述</label>
                            <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div>
                        </div>
                        <textarea class="border py-2 px-3 text-grey-800"  v-model="product.message" name="textarea" id="textarea"></textarea>
                    </div>
                    <button class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'modifyMenu',
    data() {
        return {
        usersList: [],
        product:[]
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
    created(){
        this.getParams();
        this.getProductId ()
        
    },
    methods:{
        getParams() {
            console.log(this.$route.params.id);
            this.slug = this.$route.params.id
            if(!this.slug || this.slug == null || this.slug == ''){
                
                this.$router.push('/mains');
            }
        },
        getProductId () {
            axios.get(this.$baseUrl+'Product/getProduct/'+this.slug)
                .then(res => {
                    console.log(res.data)
                    this.product = res.data
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
        },
        cancelButton(){
            alert("data not save");
            // this.$router.push('/');
            this.$router.push('/mains');
        }
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
.tableTitle {
    position: relative;
    margin: 0 auto;
    width: 95%;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 16px;
    color: rgba(101, 101, 101, 1);
  }
 .midText {
    position: absolute;
    left: 50%;
    background-color: #ffffff;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
  }
</style>