<template>
    <div x-data="{ cartOpen: false , isOpen: false }" class="bg-white">
        <header>
            <div class="container mx-auto px-6 py-3 pt-12">
                <div class="flex items-center justify-between">
                    <div class="hidden w-full text-gray-600 md:flex md:items-center">
                        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                        </svg>
                        <span class="mx-1 text-sm">DY</span>
                    </div>
                    <div class="w-full text-gray-700 md:text-center text-2xl font-semibold">
                        Backend order
                    </div>
                    <div class="flex items-center justify-end w-full">
                        <button @click="cartOpen = !cartOpen" class="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </button>

                        <div class="flex sm:hidden">
                            <button @click="isOpen = !isOpen" type="button" class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- <div class="relative mt-6 max-w-lg mx-auto">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>

                    <input class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search">
                </div> -->
            </div>
        </header>
        <div :class="cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'" class="mt-16 fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300">
            <div class="flex items-center justify-between">
                <h3 class="text-2xl font-medium text-gray-700">Your cart</h3>
                <button @click="cartOpen = !cartOpen" class="text-gray-600 focus:outline-none">
                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <hr class="my-3">
            <div class="flex justify-between mt-6"
                v-for="orderitem in details" :value="item" :key="orderitem.Pid">
                <div class="flex">
                    <img class="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="">
                    <div class="mx-3">
                        <h3 class="text-sm text-gray-600">{{orderitem.Product}}</h3>
                        <div class="flex items-center mt-2">
                            <button @click="addunit(orderitem)"
                                class="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <span class="text-gray-700 mx-2">{{orderitem.Quantity}}</span>
                            <button @click="delunit(orderitem)"
                                class="text-gray-500 focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <span class="text-gray-600">${{orderitem.QPrice}}</span>
                    <button @click="del(orderitem)"
                            class="ml-3 flex items-center px-3 py-2 bg-red-600 text-white text-sm uppercase font-medium rounded hover:bg-red-500 focus:outline-none focus:bg-blue-500">
                        <span>del</span>
                    </button>
                </div>
                
            </div>
            
            <div class="mt-8">
                <form class="flex items-center justify-start">
                    <select v-model="planSelected">
                        <!-- <option disabled value="">選擇優惠</option>
                        <option value="1. 隕石二號 10mop/杯">1. 隕石二號 10mop/杯</option>
                        <option value="2. 隕石二號買一送一">2. 隕石二號買一送一</option>
                        <option value="3. 經典系列第二杯半價(兩杯比較價高杯半價)">3. 經典系列第二杯半價(兩杯比較價高杯半價)</option>
                        <option value="4. 購買隕石系列外的任何系列 + 1 mop 換購隕石系列一杯">4. 購買隕石系列外的任何系列 + 1 mop 換購隕石系列一杯</option> -->
                        <option value="9折優惠">學生優惠(9折優惠)</option>
                        <option value="">沒有優惠</option>
                    </select>
                    <!-- <button class="flex items-center justify-center ml-2 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <span>Apply</span>
                    </button> -->
                </form>
            </div>
            
            <!-- <button @click="printer()" class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Printer</span>
                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button> -->
            <button @click="postOrder()" class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Chechout</span>
                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
        </div>
        
        <main class="my-8 pb-10">
            
            <div class="container mx-auto px-6">
                <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">

                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden border-t-4" 
                        v-for="item in menu" :value="item" :key="item.id">
                        <!-- <div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')">
                            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                                    @click="addShoppingCart(item)">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div> -->
                        <div class="flex justify-around  w-full bg-cover">
                            <div class="px-5 py-3">
                                <h3 class="text-gray-700 uppercase">{{item.name}}</h3>
                                <span class="text-gray-500 mt-2">${{item.price}}</span>
                            </div>
                            <div class="mt-4">
                            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                                    @click="addShoppingCart(item)">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="promoteExist" class="container mx-auto px-6 mt-6">
                <div class="flex justify-start">
                    <div class="font-bold text-xl font-serif pl-5">優惠</div>
                </div>
                <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">

                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden border-t-4" 
                        v-for="item in promoteMenu" :value="item" :key="item.id">
                        <!-- <div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')">
                            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                                    @click="addShoppingCart(item)">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div> -->
                        <div class="flex justify-around  w-full bg-cover">
                            <div class="px-5 py-3">
                                <h3 class="text-gray-700 uppercase">{{item.name}}</h3>
                                <div class="mt-1 flex justify-between">
                                    <span
                                        class="px-2 pt-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                                        bg-green-100 text-green-800">{{item.message}}</span>
                                    <span class="text-gray-500 mt-2">${{item.price}}</span>
                                </div>
                            </div>
                            <div class="mt-4">
                            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                                    @click="addShoppingCart(item)">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import axios from "axios";
import {addprinter, print} from './printer';

export default {
    name: 'backendOrder',
    data() {
        return {
            menu: [],
            promoteMenu: [],
            promoteExist: false,
            cartOpen: false,
            isOpen: false,
            orderList:[],
            details:[],
            planSelected: ''
        };
    },
    components: {
    },
    mounted() {
        
    },
    created(){
        this.getProduct();
        
    },
    methods:{
        printer(totalPrice, currentDate){
            // addprinter(922560443)
            console.log(this.details)
            var orderInfo;
            orderInfo = "<CB>Areolite cafe</CB><BR>";//标题字体如需居中放大,就需要用标签套上
            orderInfo += "產品名稱　　單價　數量　金額<BR>";
            orderInfo += "--------------------------------<BR>";
            this.details.forEach(element => {
            orderInfo += this.formatStringLen(element.Product, 6, " ")+"  "+this.formatStringLen(element.unitPrice.toString(), 6, " ") + this.formatStringLen(element.Quantity.toString(), 6, " ")+ element.QPrice+ "<BR>";
            });
            orderInfo += "備註：<BR>";
            orderInfo += "--------------------------------<BR>";
            orderInfo += "折扣價："+this.planSelected+"<BR>";
            orderInfo += "合計："+totalPrice+"元<BR>";
            orderInfo += "--------------------------------<BR>";
            orderInfo += "聯繫電話：63351773<BR>";
            orderInfo += "訂餐時間："+currentDate+"<BR><BR>";
            print(922560443, orderInfo)
        },
        formatStringLen(strVal, len, padChar){
            padChar = padChar || " ";
            if (!strVal) {
                return padChar.repeat(len);
            } else {
                const strLen = strVal.length;
                if (strLen > len){
                return strVal.substring(0, len);
                } else if (strLen < len){
                return strVal.padEnd(len, padChar);
                }else{
                return strVal;
                }
            }
        },
        getPrice(){
            var p = 0
            this.details.forEach(element => {
                p += element.QPrice
            });
            return p
        },
        postOrder(){
            var tprice = this.getPrice()
            const i = Math.ceil(Math.random()*100000)
            this.getPrice();
            var currentdate = new Date(); 
            var datetime = currentdate.getFullYear()  + "-" 
                            + (currentdate.getMonth()+1)  + "-" 
                            +  currentdate.getDate() + " "
                            + currentdate.getHours() + ":"  
                            + currentdate.getMinutes() + ":" 
                            + currentdate.getSeconds();
            const currentDate = datetime;
            if(tprice >0){
                if(this.planSelected == "9折優惠"){
                    tprice = tprice * 0.9
                }else if(this.planSelected == "8折優惠"){
                    tprice = tprice * 0.8
                }else{
                    tprice = tprice
                }
                this.printer(tprice, currentDate)
                this.printer(tprice, currentDate)
                axios.post(this.$baseUrl+'Order/addOrder', {
                    "id": currentDate +"--"+ tprice+"--" +i,
                    "price": tprice,
                    "enable": true,
                    "status": "pending",
                    // "createdDate": datetime,
                    "comment": "",
                    "customer": "adminOrder",
                    "details": this.details,
                    "promote": this.planSelected
                })
                .then(res => {
                    console.log(res.data)
                    this.$router.push('/mains/order');
                })
                .catch(error => {
                    console.log(error)
                    // Manage errors if found any
                })
            }else{
                alert("order list is null")
            }
        },
        addShoppingCart(items){
            var cdo = true
            this.details.forEach(element => {
                if(element.Pid ==items.id ){
                    element.Quantity ++
                    element.QPrice += items.price
                    cdo = false
                }
            });
            if(cdo == true){
                // var tmp = new Array();
                // var tmp = 
                //     {   
                //         "pid": items.id,
                //         "product": items.name,
                //         "oid": items.id,
                //         "qPrice": items.price,
                //         "quantity": 1,
                //         "enable": true
                //     }
                 var tmp = {}
                tmp['Pid'] = items.id,
                tmp['Product'] = items.name,
                tmp['Oid'] = "string",
                tmp['QPrice'] = items.price,
                tmp['Quantity'] = 1,
                tmp['unitPrice'] = items.price,
                tmp['PromoteProduct'] = items.message,
                tmp['Enable'] = true
                
                this.details.push(tmp) 
            }
            
            cdo = false
        },
        del(item){
            this.details = this.remove(this.details,item)
        },
        
            //正确代码
        remove(arr, item) {
            var newarr=[];
            arr.forEach(function(element){
                if(element.Pid!=item.Pid){
                    newarr.push(element)
                }
            })
            return newarr;
        },
        addunit(item){
            console.log(item)
            var price = 0
            this.menu.forEach(element => {
                if(element.id ==item.Pid ){
                    price = element.price
                }
            });
            this.details.forEach(element => {
                if(element.Pid ==item.Pid ){
                    item.Quantity ++
                    item.QPrice += price
                }
            });
        },
        delunit(item){
            console.log(item)
            var price = 0
            this.menu.forEach(element => {
                if(element.id ==item.Pid ){
                    price = element.price
                }
            });
            if(item.Quantity > 1){
                this.details.forEach(element => {
                if(element.Pid ==item.Pid ){
                    item.Quantity --
                    item.QPrice -= price
                }
            });
            }
        },
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
    }
}
</script>
