<template>
    <div class="index">
        <div class="flex-1 flex flex-col overflow-hidden">
            <main class="flex-1 bg-gray-100">
                <div class="container mx-auto px-6 py-8">
                    <nav class="rounded-lg mt-5 flex items-center justify-center flex-wrap bg-white py-4 lg:px-12 shadow">
                        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                                <span class="font-semibold text-2xl tracking-tight">後台訂單</span>
                            </div>
                        </div>
                    </nav>
                    <div class="mt-8">
                         <div class="mt-10">
                            <div class="container px-6 mx-auto grid">
                                <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                                    <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                        <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="mb-2 text-sm font-medium text-gray-600">
                                                未處理訂單
                                            </p>
                                            <p class="text-lg font-semibold text-gray-700">
                                                {{countPending}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                        <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="mb-2 text-sm font-medium text-gray-600">
                                                今日訂單量
                                            </p>
                                            <p class="text-lg font-semibold text-gray-700">
                                                {{countOrder}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                        <div class="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="mb-2 text-sm font-medium text-gray-600">
                                                今日營業額
                                            </p>
                                            <p class="text-lg font-semibold text-gray-700">
                                                {{countTodayMoney}} MOP
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                        <div
                                            class="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
                                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="8" r="7"></circle>
                                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="mb-2 text-sm font-medium text-gray-600">
                                                總會員數
                                                
                                            </p>
                                            <p class="text-lg font-semibold text-gray-700">
                                                {{account}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex justify-between">
                            <div class="flex bg-white border rounded-full overflow-hidden select-none">
                                <button @click="ratioSelect" class=" hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
                                title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3">訂單</button>
                                <label class="flex items-center radio p-2 cursor-pointer">
                                    <input v-model="radioP"  class="my-auto transform scale-125" type="radio" id="today" value="today"/>
                                    <div for="today" class="title px-2">今日未處理訂單</div>
                                </label>
                                <label class="flex items-center radio p-2 cursor-pointer">
                                    <input v-model="radioP"  class="my-auto transform scale-125" type="radio" id="allOrder" value="allOrder"/>
                                    <div for="allOrder" class="title px-2">今日全部已處理訂單</div>
                                </label>
                                <label class="flex items-center radio p-2 cursor-pointer">
                                    <input v-model="radioP"  class="my-auto transform scale-125" type="radio" id="allCancelOrder" value="allCancelOrder"/>
                                    <div for="allCancelOrder" class="title px-2">今日全部已取消訂單</div>
                                </label>
                                <label class="flex items-center radio p-2 cursor-pointer">
                                    <input v-model="radioP"  class="my-auto transform scale-125" type="radio" id="all" value="all"/>
                                    <div for="all" class="title px-2">今日全部訂單</div>
                                </label>
                            </div>
                            <!-- This is an example component -->
                            <div class="flex justify-center text-gray-600">
                                <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search">
                                <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                                    viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                                    width="512px" height="512px">
                                    <path
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col mt-8">
                        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div style="height: 700px"
                                class="align-middle inline-block min-w-full shadow overflow-y-auto sm:rounded-lg border-b border-gray-200">
                                <table class="min-w-full ">
                                    <thead>
                                        <tr class="">
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                Id</th>
                                            <th
                                                class=" px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                <div class="flex justify-start">價格</div>
                                                </th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                <div class="flex justify-start">時間</div>
                                                </th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                <div class="flex justify-start">優惠</div>
                                                </th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                <div class="flex justify-start">狀態</div>
                                                </th>
                                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                        </tr>
                                    </thead>
  
                                    <tbody class="bg-white">
                                        <tr v-for="item in order" :key="item.id">
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex items-center">
    
                                                    <div class="ml-4">
                                                        <div class="text-sm leading-5 font-medium text-gray-900">{{item.id}}
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
                                                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{{item.createdDate}}</span>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex justify-start">
                                                    <div class="text-sm leading-5 text-gray-900">{{item.promote}}</div>
                                                </div>
                                            </td>
                                            <td
                                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                    <div class="flex justify-start">
                                                    {{item.status}}
                                                    </div>
                                                </td>
    
                                            <td
                                                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                                <router-link :to="{ name:'processOrder', params:{id: item.id } }">
                                                            <div class="m-3">
                                                                <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                                                <span class="mr-2">訂單處理</span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                                                    <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                                                </svg>
                                                                </button>
                                                            </div>
                                                        </router-link>
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
    name: 'OrderHome',
    data() {
        return {
            order: [],
            sidebarOpen: false,
            slug:'',
            type: [],
            radioP:'today',
            countPending: 0,
            countOrder: 0,
            countTodayMoney: 0,
            account:0
        };
    },
    components: {
    },
    mounted() {
    },
    created(){
        // 
        // this.getTodayOrderPending();
        this.init()
    },
    methods:{
        init(){
            // this.getAllOrder();
            this.countOrder = 0
            axios.get(this.$baseUrl+'Order/getAll')
                .then(res => {
                    res.data.value.order.forEach(item => {
                        this.countOrder ++
                    });
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
            // this.getTodayOrderPending();
            this.order = [];
            this.countPending = 0
            axios.get(this.$baseUrl+'Order/GetOrderByTodayPending')
                .then(res => {
                    res.data.value.order.forEach(item => {
                        this.order.push(item) 
                        this.countPending ++
                    });
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })

            // this.getAllTodayOrder()
            this.countTodayMoney = 0
            axios.get(this.$baseUrl+'Order/getAllTodayOrder')
                .then(res => {
                    res.data.value.order.forEach(item => {
                        this.countTodayMoney += item.price
                    });
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })

        },
        ratioSelect(){
            if(this.radioP == "all"){
                this.getAllOrder() 
            }else if(this.radioP == "allOrder"){
                this.getAllTodayOrder()
            }else if(this.radioP == "allCancelOrder"){
                this.getTodayOrderCancel()
            }else{
                this.getTodayOrderPending()
            }

            
        },
        getTodayOrderCancel() {
            this.order = [];
            axios.get(this.$baseUrl+'Order/GetOrderByTodayCancel')
                .then(res => {
                    res.data.value.order.forEach(item => {
                        this.order.push(item) 
                    });
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
        },
        getTodayOrderPending() {
            this.order = [];
            this.countPending = 0
            axios.get(this.$baseUrl+'Order/GetOrderByTodayPending')
                .then(res => {
                    res.data.value.order.forEach(item => {
                        this.order.push(item) 
                        this.countPending ++
                    });
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
        },
        getAllTodayOrder() {
            this.order = [];
            axios.get(this.$baseUrl+'Order/getAllTodayOrder')
                .then(res => {
                    res.data.value.order.forEach(item => {
                        this.order.push(item) 
                    });
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
        },
        
        getAllOrder() {
            this.order = [];
            this.countOrder = 0
            axios.get(this.$baseUrl+'Order/getAll')
                .then(res => {
                    res.data.value.order.forEach(item => {
                        this.order.push(item) 
                        this.countOrder ++
                    });
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