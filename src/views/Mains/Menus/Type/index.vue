
<template>
    <div class="addMenu">
        <div class="flex-1 flex flex-col overflow-hidden w-11/12 ml-5">
            <div class="flex flex-col mt-8">
                <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div
                        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <router-link to="/mains/menu/Typeadd">
                            <button 
                                type="button" 
                                class="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
                            >
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>

                                <span class="ml-2">添加类型</span>
                            </button>
                        </router-link>
                        <table class="min-w-full">
                            <thead>
                                <tr class="">
                                    <th
                                        class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Id</th>
                                    <th
                                        class=" px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex justify-start">type</div>
                                    </th>
                                    <th
                                        class=" px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div class="flex justify-start">状态</div>
                                    </th>
                                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                </tr>
                            </thead>

                            <tbody class="bg-white">
                                <tr v-for="item in type" :key="item.id">
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="flex items-center">

                                            <div class="ml-4">
                                                <div class="text-sm leading-5 font-medium text-gray-900">{{item.id}}
                                                </div>
                                                <div class="text-sm leading-5 text-gray-500"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            <div class="flex justify-start">
                                                {{item.type}}
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
                                                    <router-link :to="{ name:'Typemodify', params:{id: item.id } }">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg>
                                                    </router-link>
                                                </div>
                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <div class="" @click="delType(item.id)">
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
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'addMenu',
    data() {
        return {
            type: []
        };
    },
    components: {
    },
    mounted() {
        
    },
    created(){
        this.getTypeAll ()
    },
    methods:{
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
        delType(id){
            axios.delete(this.$baseUrl+'Type/deleteType/'+id)
                .then(res => {
                    
                    console.log(res)
                    this.getTypeAll();
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