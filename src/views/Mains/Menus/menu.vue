
<template>
    <div class="index">
        <div class="flex-1 flex flex-col overflow-hidden">
            <main class="flex-1 bg-gray-100">
                <div class="container mx-auto px-6 py-8">
                    <nav class="rounded-lg mt-5 flex items-center justify-center flex-wrap bg-white py-4 lg:px-12 shadow">
                        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                                <span class="font-semibold text-2xl tracking-tight">菜單</span>
                            </div>
                        </div>
                    </nav>
                    <div class="mt-8">
                        
                        <div class="flex justify-start">
                            <div>
                                <div class="w-full flex justify-center">
                                    <router-link to="/mains/menu/add">
                                        <button 
                                            type="button" 
                                            class="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                                        >
                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                            </svg>

                                            <span class="ml-2">添加产品</span>
                                        </button>
                                    </router-link>
                                    <router-link to="/mains/menu/type">
                                        <button 
                                            type="button" 
                                            class="ml-5 px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                                        >
                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                            </svg>

                                            <span class="ml-2">添加或修改种类</span>
                                        </button>
                                     </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg mt-5 flex items-center justify-start flex-wrap bg-white py-4 lg:px-12 shadow">
                        
                            <div class="flex flex-start items-center flex-shrink-0 text-gray-800 mr-16 pt-2">
                                <div class="title text-xl">種類:</div>
                                
                            </div>
                            <div class="flex justify-start">
                            <div class="flex justify-start inline-block mr-2 mt-2" v-for="item in type" :key="item.id">
                                    
                                <div>
                                    <button type="button" class="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-full border border-blue-600 hover:bg-blue-50">{{item.type}}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col mt-8">
                        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div style="max-height: 500px"
                                class="align-middle inline-block min-w-full shadow overflow-y-auto sm:rounded-lg border-b border-gray-200">
                                <table class="min-w-full">
                                    <thead>
                                        <tr class="">
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                名</th>
                                            <th
                                                class=" px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                <div class="flex justify-start">价格</div>
                                                </th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                <div class="flex justify-start">分类</div>
                                                </th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                <div class="flex justify-start">状态</div>
                                                </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                        </tr>
                                    </thead>
    
                                    <tbody class="bg-white">
                                        <tr v-for="item in menu" :key="item.id">
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex items-center">
                                                    <!-- <div class="flex-shrink-0 h-10 w-10">
                                                        <img class="h-10 w-10 rounded-full"
                                                            :src=item.img
                                                            alt="img">
                                                    </div> -->
    
                                                    <div class="">
                                                        <div class="text-sm leading-5 font-medium text-gray-900">{{item.name}}
                                                        </div>
                                                        <div class="text-sm leading-5 text-gray-500"></div>
                                                    </div>
                                                </div>
                                            </td>
    
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex justify-start">
                                                    <div class="text-sm leading-5 text-gray-900">{{item.price}}</div>
                                                </div>
                                            </td>
    
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex justify-start">
                                                <span
                                                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{{item.type}}</span>
                                                </div>
                                            </td>
    
                                            <td
                                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                    <div class="flex justify-start">
                                                    {{item.enable}}
                                                    </div>
                                                </td>
    
                                            <td
                                                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                                    <div class="flex item-center justify-center">
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <router-link :to="{ name:'menuview', params:{id: item.id } }">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </router-link>
                                                    </div>
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <router-link :to="{ name:'menumodify', params:{id: item.id } }">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </router-link>
                                                    </div>
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <div class="" @click="delProd(item.id)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </td>
                                        </tr>
                                       
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col mt-8" v-show="promoteExist">
                        <nav class="mb-5 rounded-lg mt-5 flex items-center justify-center flex-wrap bg-white py-4 lg:px-12 shadow">
                            <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                                <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                                    <span class="font-semibold text-2xl tracking-tight">優惠產品</span>
                                </div>
                            </div>
                        </nav>
                        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div style="max-height: 500px"
                                class="align-middle inline-block min-w-full shadow overflow-y-auto sm:rounded-lg border-b border-gray-200">
                                <table class="min-w-full">
                                    <thead>
                                        <tr class="">
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                名</th>
                                            <th
                                                class=" px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                <div class="flex justify-start">價格</div>
                                                </th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                <div class="flex justify-start">分類</div>
                                                </th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                <div class="flex justify-start">優惠內容</div>
                                                </th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                <div class="flex justify-start">狀態</div>
                                                </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                        </tr>
                                    </thead>
    
                                    <tbody class="bg-white">
                                        <tr v-for="item in promoteMenu" :key="item.id">
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex items-center">
                                                    <!-- <div class="flex-shrink-0 h-10 w-10">
                                                        <img class="h-10 w-10 rounded-full"
                                                            :src=item.img
                                                            alt="img">
                                                    </div> -->
    
                                                    <div class="">
                                                        <div class="text-sm leading-5 font-medium text-gray-900">{{item.name}}
                                                        </div>
                                                        <div class="text-sm leading-5 text-gray-500"></div>
                                                    </div>
                                                </div>
                                            </td>
    
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex justify-start">
                                                    <div class="text-sm leading-5 text-gray-900">{{item.price}}</div>
                                                </div>
                                            </td>
    
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex justify-start">
                                                <span
                                                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{{item.type}}</span>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex justify-start">
                                                <span
                                                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{{item.message}}</span>
                                                </div>
                                            </td>
                                            <td
                                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                    <div class="flex justify-start">
                                                    {{item.enable}}
                                                    </div>
                                                </td>
    
                                            <td
                                                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                                                    <div class="flex item-center justify-center">
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <router-link :to="{ name:'menuview', params:{id: item.id } }">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </router-link>
                                                    </div>
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <router-link :to="{ name:'menumodify', params:{id: item.id } }">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </router-link>
                                                    </div>
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <div class="" @click="delProd(item.id)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                </a>
                                            </td>
                                        </tr>
                                       
                                       
                                    </tbody>
                                </table>
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
    name: 'Home',
    data() {
        return {
            menu: [],
            sidebarOpen: false,
            slug:'',
            type: [],
            promoteMenu: [],
            promoteExist: false,
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
                        if(item.type != "優惠"){
                            this.menu.push(item) 
                        }else{
                            this.promoteMenu.push(item)
                            this.promoteExist = true
                        }
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