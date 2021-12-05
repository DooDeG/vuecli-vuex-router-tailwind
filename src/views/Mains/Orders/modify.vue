
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
                        <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" v-model="name" value="name" >
                        <div class="flex justify-start">
                                
                            <span class="text-red-600 bg-white text-sm" v-show="nameError">輸入內容不能為空</span>
                        </div>
                    </div>
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="last_name">price</label>
                            <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div>
                        </div>
                        <input class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name" v-model="price" >
                        <div class="flex justify-start">
                                
                            <span class="text-red-600 bg-white text-sm" v-show="priceError">輸入內容不能為空</span>
                        </div>
                    </div>
                    
                    <div class="tableTitle mt-5 mb-5"><span class="midText"></span></div>
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="Select" >type</label>
                            <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div>
                        </div>
                        <select class="border py-2 px-3 text-grey-800" v-model="type" >
                            <option v-for="item in typelist" :value="item.type" :key="item.id">
                                {{item.type}}
                            </option>
                        </select>
                    <div class="flex justify-start">
                                
                        <span class="text-red-600 bg-white text-sm" v-show="typeError">輸入內容不能為空</span>
                    </div>
                    </div>
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="File">Image</label>
                            <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div>
                        </div>
                        <input class="border py-2 px-3 text-grey-800" type="file" name="file" id="file">
                        <div class="flex justify-start">
                            <span class="text-red-600 bg-white text-sm" v-show="imgError">輸入內容不能為空</span>
                        </div>
                    </div>
                    
                    <div class="flex flex-col mb-4">
                        <div class="flex justify-start">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="textarea">描述</label>
                            <div class="tableTitle mt-4 mb-5 "><span class="midText"></span></div>
                        </div>
                        <textarea class="border py-2 px-3 text-grey-800"  v-model="message" name="textarea" id="textarea"></textarea>
                    </div>
                    <button @click="moProd()" class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">提交</button>
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
        name:'',
        nameError: false,
        price:'',
        priceError: false,
        type:'',
        typeError: false,
        message:'',
        img:'456',
        imgError: false,
        formError: false,
        enable: true,
        pdate:'',
        typelist:[]
        };
    },
    components: {
    },
    mounted() {
 
    },
    created(){
        this.getParams();
        this.getProductId();
        this.getTypeAll()
        
    },
    methods:{
        getTypeAll () {
            this.type = [];
            axios.get(this.$baseUrl+'Type/getAll')
                .then(res => {
                    res.data.value.type.forEach(item => {
                        this.typelist.push(item) 
                    });
                    console.log(this.type)
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
            })
        },
        getData(){
            console.log(this.name)
            if(!this.name || this.name == null || this.name == '' || this.name == 'undefined'){
                this.nameError = true;
            }else{
                this.nameError = false;
            }
            if(!this.price || this.price == null || this.price == '' || this.price == 'undefined'){
                this.priceError = true;
            }else{
                this.priceError = false;
            }
            if(!this.type || this.type == null || this.type == '' || this.type == 'undefined'){
                this.typeError = true;
            }else{
                this.typeError = false;
            }
            if(!this.img || this.img == null || this.img == '' || this.img == 'undefined'){
                this.imgError = true;
            }else{
                this.imgError = false;
            }
            if(this.nameError == true || this.price == true || this.typeError == true || this.imgError == true){
                this.formError = true; 
            }else{
                this.formError = false; 
            }
        },
        getParams() {
            console.log(this.$route.params.id);
            this.slug = this.$route.params.id
            if(!this.slug || this.slug == null || this.slug == ''){
                this.$router.push('/mains');
            }
        },
        currentDate() {
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
            return date;
        },
        moProd(){
            this.getData();
            if(this.formError == false){
                axios.put(this.$baseUrl+'Product/updateProduct/'+this.slug, {
                    "name":  this.name,
                    "price": this.price,
                    "type": this.type,
                    "img": "this.img",
                    "enable": this.enable,
                    "message": this.message,
                    "date": this.pdate
                })
                .then(res => {
                    console.log(res.data)
                    this.$router.push('/mains');
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
        getProductId () {
            axios.get(this.$baseUrl+'Product/getProduct/'+this.slug)
                .then(res => {
                    this.pdate = res.data.date
                    this.name = res.data.name
                    this.price = res.data.price
                    this.type = res.data.type
                    this.img = res.data.img
                    this.message = res.data.message
                })
                .catch(error => {
                    console.log(error)
            })
        },
        cancelButton(){
            alert("data not save");
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