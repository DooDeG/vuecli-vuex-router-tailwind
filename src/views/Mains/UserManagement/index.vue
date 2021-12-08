<template>
    <div class="UserManagement">
        <div class="flex-1 flex flex-col overflow-hidden">
            <main class="flex-1 bg-gray-100">
                <div class="container mx-auto px-6 py-8">
                    <nav class="rounded-lg mt-5 flex items-center justify-center flex-wrap bg-white py-4 lg:px-12 shadow">
                        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                                <span class="font-semibold text-2xl tracking-tight">用戶管理</span>
                            </div>
                        </div>
                    </nav>
                    <div class="mt-8">
                        <div class="flex justify-start">
                            <div>
                                <div class="w-full flex justify-center">
                                    <button 
                                        type="button" 
                                        class="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
                                    >
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    
                                    </button>

                                    <button 
                                        type="button" 
                                        class="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
                                    >
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>

                                        <span class="ml-2">Download</span>
                                    </button>
                                    <router-link to="/mains/menu/add">
                                        <button 
                                            type="button" 
                                            class="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                                        >
                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                            </svg>

                                            <span class="ml-2">添加用戶</span>
                                        </button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-gray-900 mt-5">
                        <div class="px-3 py-4 flex justify-center">
                            <table class="w-full text-md bg-white shadow-md rounded mb-4 rounded-2xl">
                                <tbody>
                                    <tr class="border-b">
                                        <th class="text-left p-3 px-5">Name</th>
                                        <th class="text-left p-3 px-5">Email</th>
                                        <th class="text-left p-3 px-5">Role</th>
                                        <th></th>
                                    </tr>
                                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                                        <td class="p-3 px-5">
                                            <select value="user.role" class="bg-transparent">
                                                <option value="user">user</option>
                                                <option value="admin">admin</option>
                                            </select>
                                        </td>
                                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                    </tr>
                                    <tr class="border-b hover:bg-orange-100">
                                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                                        <td class="p-3 px-5">
                                            <select value="user.role" class="bg-transparent">
                                                <option value="user">user</option>
                                                <option value="admin">admin</option>
                                            </select>
                                        </td>
                                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                    </tr>
                                    
                                    <tr class="border-b hover:bg-orange-100">
                                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                                        <td class="p-3 px-5">
                                            <select value="user.role" class="bg-transparent">
                                                <option value="user">user</option>
                                                <option value="admin">admin</option>
                                            </select>
                                        </td>
                                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                    </tr>
                                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                                        <td class="p-3 px-5">
                                            <select value="user.role" class="bg-transparent">
                                                <option value="user">user</option>
                                                <option value="admin">admin</option>
                                            </select>
                                        </td>
                                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                    </tr>
                                    <tr class="border-b hover:bg-orange-100">
                                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                                        <td class="p-3 px-5">
                                            <select value="user.role" class="bg-transparent">
                                                <option value="user">user</option>
                                                <option value="admin">admin</option>
                                            </select>
                                        </td>
                                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                    </tr>
                                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                                        <td class="p-3 px-5">
                                            <select value="user.role" class="bg-transparent">
                                                <option value="user">user</option>
                                                <option value="admin">admin</option>
                                            </select>
                                        </td>
                                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                    </tr>
                                    <tr class="border-b hover:bg-orange-100">
                                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                                        <td class="p-3 px-5">
                                            <select value="user.role" class="bg-transparent">
                                                <option value="user">user</option>
                                                <option value="admin">admin</option>
                                            </select>
                                        </td>
                                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                    </tr>
                                    <tr class="border-b hover:bg-orange-100">
                                        <td class="p-3 px-5"><input type="text" value="user.name" class="bg-transparent"></td>
                                        <td class="p-3 px-5"><input type="text" value="user.email" class="bg-transparent"></td>
                                        <td class="p-3 px-5">
                                            <select value="user.role" class="bg-transparent">
                                                <option value="user">user</option>
                                                <option value="admin">admin</option>
                                            </select>
                                        </td>
                                        <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
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
    name: 'UserManagement',
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