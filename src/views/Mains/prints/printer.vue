<template>
    <div class="Printer">
        <div class="flex-1 flex flex-col overflow-hidden">
            <main class="flex-1 bg-gray-100">
                <div class="container mx-auto px-6 py-8">
                    <nav class="rounded-lg mt-5 flex items-center justify-center flex-wrap bg-white py-4 lg:px-12 shadow">
                        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                                <span class="font-semibold text-2xl tracking-tight">打印機設置</span>
                            </div>
                        </div>
                    </nav>
                    <!-- component -->
                    <div class="min-h-screen pt-2 font-mono my-2">
                        <div class="container mx-auto">
                            <div class="inputs w-full max-w-2xl p-6 mx-auto">
                                <h2 class="text-2xl text-gray-900">Account Setting</h2>
                                <form class="mt-6 border-t border-gray-400 pt-4">
                                    <div class='flex flex-wrap -mx-3 mb-6'>
                                        <div class='w-full md:w-full px-3 mb-6'>
                                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>email address</label>
                                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email'  required>
                                        </div>
                                        <div class='w-full md:w-full px-3 mb-6 '>
                                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>password</label>
                                            <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">change your password</button>
                                        </div>
                                        <div class='w-full md:w-full px-3 mb-6'>
                                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>pick your country</label>
                                            <div class="flex-shrink w-full inline-block relative">
                                                <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                                    <option>choose ...</option>
                                                    <option>USA</option>
                                                    <option>France</option>
                                                    <option>Spain</option>
                                                    <option>UK</option>
                                                </select>
                                                <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class='w-full md:w-full px-3 mb-6'>
                                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>fav language</label>
                                            <div class="flex-shrink w-full inline-block relative">
                                                <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                                    <option>choose ...</option>
                                                    <option>English</option>
                                                    <option>France</option>
                                                    <option>Spanish</option>
                                                </select>
                                                <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="personal w-full border-t border-gray-400 pt-4">
                                            <h2 class="text-2xl text-gray-900">Personal info:</h2>
                                            <div class="flex items-center justify-between mt-4">
                                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                                </div>
                                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                                </div>
                                            </div>
                                            <div class='w-full md:w-full px-3 mb-6'>
                                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>user name</label>
                                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  required>
                                            </div>
                                            <div class='w-full md:w-full px-3 mb-6'>
                                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                                <textarea class='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  required></textarea>
                                            </div>
                                            <div class="flex justify-end">
                                                <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Printer',
    data() {
        return {
            menu: [],
            sidebarOpen: false,
            slug:'',
            type: []
        };
    },
    components: {
    },
    mounted() {
       
    },
    created(){
        this.getProduct();
        this.getTypeAll();
    },
    methods:{
        
        getProduct () {
            this.menu = [];
            axios.get(this.$baseUrl+'Product/getAll')
                .then(res => {
                    res.data.value.products.forEach(item => {
                        this.menu.push(item) 
                    });
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
        },

        getTypeAll () {
            this.type = [];
            axios.get(this.$baseUrl+'Type/getAll')
                .then(res => {
                    res.data.value.type.forEach(item => {
                        this.type.push(item) 
                    });
                    console.log(this.type)
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
        },

        delProd(id){
            axios.delete(this.$baseUrl+'Product/deleteProduct/'+id)
                .then(res => {
                    
                    console.log(res)
                    this.getProduct();
                    alert("delete sucess")
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
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
</style>