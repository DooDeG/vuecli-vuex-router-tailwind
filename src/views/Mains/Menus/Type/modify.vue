
<template>
    <div class="addMenu">
        <div class="flex justify-center items-center w-full">
            <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">修改类型</h1>
                <div class="s">
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">类型</label>
                            <!-- <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div> -->
                        </div>
                        <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" v-model="type" value="type" >
                        <div class="flex justify-start">
                                
                            <span class="text-red-600 bg-white text-sm" v-show="typeError">輸入內容不能為空</span>
                        </div>
                    </div>
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">状态</label>
                            <!-- <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div> -->
                        </div>
                        <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" v-model="status" value="type" >
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
            type: '',
            status: '',
            typeError: false,
            statusError: false
        };
    },
    components: {
    },
    mounted() {
    },
    created(){
        this.getParams();
        this.getTypeId()
    },
    methods:{
        getParams() {
            console.log(this.$route.params.id);
            this.slug = this.$route.params.id
            if(!this.slug || this.slug == null || this.slug == ''){
                this.$router.push('/mains');
            }
        },
        getTypeId () {
            axios.get(this.$baseUrl+'Type/getType/'+this.slug)
                .then(res => {
                    this.type = res.data.type
                    this.status = res.data.enable
                })
                .catch(error => {
                    console.log(error)
            })
        },
        getData(){
            console.log(this.name)
            if(!this.type || this.type == null || this.type == '' || this.type == 'undefined'){
                this.typeError = true;
            }else{
                this.typeError = false;
            }
            if(!this.status || this.status == null || this.status == '' || this.status == 'undefined'){
                this.statusError = true;
            }else{
                this.statusError = false;
            }

        },
        addType(){
            this.getData();
            if(this.typeError == false && this.statusError == false){
                axios.post(this.$baseUrl+'Type/createType', {
                    "type":  this.type,
                    "enable": this.status
                })
                .then(res => {
                    console.log(res.data)
                    this.$router.push('/mains');
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