
<template>
    <div class="addMenu">
        <div class="flex justify-center items-center w-full">
            <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">添加类型</h1>
                <div class="s">
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">类型</label>
                            <!-- <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div> -->
                        </div>
                        <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" v-model="typeName">
                        <div class="flex justify-start">
                                
                            <span class="text-red-600 bg-white text-sm" v-show="typeError">輸入內容不能為空</span>
                        </div>
                    </div>
                    <button @click="addType()" class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">提交</button>
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
            typeName: '',
            status: '',
            typeError: false
        };
    },
    components: {
    },
    mounted() {
    },
    created(){
        
    },
    methods:{
        getData(){
            if(!this.typeName || this.typeName == null || this.typeName == '' || this.typeName == 'undefined'){
                this.typeError = true;
            }else{
                this.typeError = false;
            }

        },
        addType(){
            this.getData();
            if(this.typeError == false){
                axios.post(this.$baseUrl+'Type/createType', {
                    "type": this.typeName,
                    "enable": true
                })
                .then(res => {
                    console.log(res.data)
                    this.$router.push('/mains/menu');
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
                })
            }
            
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