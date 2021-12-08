<template>
    <div class="Analysis">
        <div class="flex-1 flex flex-col overflow-hidden">
            <main class="flex-1 bg-gray-100">
                <div class="container mx-auto px-6 py-8">
                    <nav class="rounded-lg mt-5 flex items-center justify-center flex-wrap bg-white py-4 lg:px-12 shadow">
                        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                                <span class="font-semibold text-2xl tracking-tight">業務分析</span>
                            </div>
                        </div>
                    </nav>
                    <div class="mt-8">
                        
                        <!--  -->
                        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                            <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
                            <div class="block w-full overflow-x-auto">
                                <table class="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
                                            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
                                            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-100">
                                        <tr class="text-gray-500">
                                            <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                                            <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                                            <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                            <div class="flex items-center">
                                                <span class="mr-2 text-xs font-medium">30%</span>
                                                <div class="relative w-full">
                                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                                        <div class="bg-cyan-600 h-2 rounded-sm" style="width: 30%"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-500">
                                            <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                                            <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                                            <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                            <div class="flex items-center">
                                                <span class="mr-2 text-xs font-medium">24%</span>
                                                <div class="relative w-full">
                                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                                        <div class="bg-orange-300 h-2 rounded-sm" style="width: 24%"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-500">
                                            <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                                            <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                                            <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                            <div class="flex items-center">
                                                <span class="mr-2 text-xs font-medium">18%</span>
                                                <div class="relative w-full">
                                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                                        <div class="bg-teal-400 h-2 rounded-sm" style="width: 18%"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-500">
                                            <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                                            <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                                            <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                            <div class="flex items-center">
                                                <span class="mr-2 text-xs font-medium">12%</span>
                                                <div class="relative w-full">
                                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                                        <div class="bg-pink-600 h-2 rounded-sm" style="width: 12%"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-500">
                                            <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                                            <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                                            <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                            <div class="flex items-center">
                                                <span class="mr-2 text-xs font-medium">9%</span>
                                                <div class="relative w-full">
                                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                                        <div class="bg-indigo-600 h-2 rounded-sm" style="width: 9%"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-500">
                                            <th class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                                            <td class="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                                            <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                            <div class="flex items-center">
                                                <span class="mr-2 text-xs font-medium">7%</span>
                                                <div class="relative w-full">
                                                    <div class="w-full bg-gray-200 rounded-sm h-2">
                                                        <div class="bg-purple-500 h-2 rounded-sm" style="width: 7%"></div>
                                                    </div>
                                                </div>
                                            </div>
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
    name: 'Analysis',
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