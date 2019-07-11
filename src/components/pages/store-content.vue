<template>
    <div>
        <loading :active.sync="isLoading" ></loading>
        <div class="MarqBor">
            <marquee onMouseOver="this.stop()" onMouseOut="this.start()">商品網站製作中，持續改進</marquee>
        </div>
        
        <div class="mr-2 btnCart" v-if="cartNum.carts.length > 0">
            <button class="btn" @click="tablechange=!tablechange"><i class="fas fa-shopping-cart fa-2x"></i></button>
            <span class="num">{{cartNum.carts.length}}</span>
            <div class="goshopping">
                <table class="border bg-light" v-if="tablechange===true">
                    <thead class="bg-primary text-white">
                        <th width="100">商品</th>
                        <th width="40" >數量</th>
                        <th width="110" class="text-center">價錢</th>
                        <th>操作</th>
                    </thead>
                    <tbody>
                        <tr class="border" v-for="(cart ,key) in cartNum.carts" :key="cart.id">
                            <td>{{cart.product.title}}</td>
                            <td>{{cart.qty}}</td>
                            <td class="text-right">{{cart.total | currency}}</td>
                            <td>
                                <button class="btn btn-outline-danger" @click="delCart(cart.id)">取消</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot class="my-2">
                        <tr>
                            <td>合計 <span class="text-danger">{{cartNum.total}}</span></td>
                            <td colspan="3" class="text-right">
                                <div>
                                    <router-link class="btn btn-purple" to="/store/user"> 前往結帳 </router-link>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-lg-3 d-none d-lg-block">
                    <div class="">
                        <nav class="nav nav-tabs">
                            <a class="nav-item nav-link active" id="nav-home-tab"  data-toggle="tab" href="#nav-home" >熱賣商品</a>
                            <a class="nav-item nav-link" id="nav-profile-tab"  data-toggle="tab" href="#nav-profile">飲料精選</a>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" aria-labelledby="nav-home-tab">
                                <div class="border p-2" v-for="item in product" :key="item" v-if="item.num < 4">
                                     <div class="text-right text-Tangerine h4 font-italic">No {{item.num}}</div>
                                     <img :src="item.imageUrl" style="height:150px;" class="card-img-top">
                                     <div class="h5">{{item.title}}</div>
                                     <div class="h5 text-Tangerine">{{ item.price | currency}}</div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" aria-labelledby="nav-profile-tab">
                                <div class="border p-2" v-for="item in product" :key="item" v-if="item.category == '飲料'">
                                     <img :src="item.imageUrl" style="height:150px;" class="card-img-top">
                                     <div class="h5">{{item.title}}</div>
                                     <div class="h5 text-Tangerine">{{ item.price | currency}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-12">
                    <div id="carouselExampleIndicators" class="carousel slide mb-4" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="../../assets/img/bt_1.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="../../assets/img/bt_2.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="../../assets/img/bt_3.jpg" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4 mb-2" v-for="(item , key) in product.slice(pageStart, pageStart + countOfPage)" :key="item.id">
                            <div class="card h-100 ProductImg">
                                <diV class="cartRibbon" v-show="item.is_enabled">熱賣</div>
                                <img :src="item.imageUrl" style="height:200px;" class="card-img-top">
                                <div class="card-body d-flex flex-column justify-content-end">
                                    <div>
                                        <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                                        <h5 class="card-title">{{item.title}}</h5>
                                        <p class="card-text">{{item.content}}</p>
                                        <div class="h6">只要<span class="text-danger h5"> {{ item.price }} </span>元</div>
                                    </div>
                                    <div class="d-flex  d-sm-block">
                                        <div class="mt-2">
                                            <select name="" class="form-control" v-model="item.num">
                                                <option :value="num" v-for="num in 10" :key="num">
                                                    選購 {{num}} {{item.unit}}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="ml-auto mt-2">
                                            <button type="button" class="btn btn-outline-danger w-100" @click="upcart(item.id , item.num)">
                                                加到購物車
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center my-2">
                        <ul class="pagination">
                            <li class="page-item" v-bind:class="{'disabled': (currPage === 1)}" @click.prevent="setPage(currPage-1)">
                                <a class="page-link" href="#">上一頁</a>
                            </li>
                            <li class="page-item" v-for="n in totalPage" v-bind:class="{'active': (currPage === (n))}" @click.prevent="setPage(n)">
                                <a class="page-link" href="#">{{n}}</a>
                            </li>
                            <li class="page-item" v-bind:class="{'disabled': (currPage === totalPage)}" @click.prevent="setPage(currPage+1)">
                                <a class="page-link" href="#">下一頁</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            products:[],
            product:[],
            cartNum:{
                carts:[],
            },
            tablechange:false,
            isLoading:false,
            countOfPage: 6,
            currPage: 1, 
        }
    },
    computed: {
        pageStart: function () {
        return (this.currPage - 1) * this.countOfPage;
        },
        totalPage: function () {
        return Math.ceil(this.product.length / this.countOfPage);
        }
    },
    methods: {
        getproduct(page = 1){
            const vm = this;
            let api=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
            vm.isLoading = true;
            this.$http.get(api).then((response) => {
                // console.log(response);
                vm.products= response.data.products;
                vm.product = [];
                for(let i=0;i<vm.products.length;i++){
                    if(vm.selected === ''){
                        vm.product = vm.products;
                    }else if(vm.selected === vm.products[i].MUSEUM_POSTUNIT){
                        vm.product.push(vm.products[i]);
                    }
                }
            });
        },
        upcart(id , qty = 1){
            const vm = this;
            let api=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const cart = {
                product_id : id,
                qty,
            }
            this.$http.post(api , {data : cart} ).then((response) => {
                // console.log(response);
                this.getCart();
            });
        },
        getCart() {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this ;
            vm.isLoading = true;
            vm.$http.get(api).then((response) => {
            // console.log(response.data);
            vm.cartNum = response.data.data;
            vm.isLoading = false;
            // console.log(vm.cartNum);
            });
        },
        delCart(id){
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
            vm.$http.delete(api).then((response) => {
                // console.log(response);
                this.getCart();
            });
        },
        setPage: function (idx) {
            if (idx <= 0 || idx > this.totalPage) {
                return;
            }
            this.currPage = idx;
        },
    },
    created() {
        this.getproduct();
        this.getCart();
    },
}
</script>

<style lang="scss" scoped>
.MarqBor{
    padding:5px;
    border-top:1px dashed black;
    border-bottom:1px dashed black;
    margin-bottom:20px;
    marquee{
        font-size:20px;
    }
}

.btnCart{
    position: relative;
    position: fixed;
    right:0;
    bottom:100px;
    z-index:13;
    .num{
        position:absolute;
        top:-5px;
        right:0px;
        color:white;
        background-color:red;
        font-size:10px;
        padding:5px 10px;
        border-radius: 50%;
    }
    .goshopping{
    position:absolute;
    bottom:50px;
    left:-270px;
    z-index:13;
        table{
        }
    }
}

    .ProductImg{
        overflow: hidden;
        position:relative;
        .cartRibbon{
            position: absolute;
            top: 10px;
            right:-23px;
            transform: rotate(45deg);
            padding:0 30px;
            background-color:red;
            font-weight:bold;
            color:white;
            z-index:3;
        }
        img{
            transition: all 1.5s;
            &:hover{
                transform:scale(1.2);
            }
        }
    }

    .nav-tabs{
        border-bottom:5px solid orange;
        .active{
            border:2px solid orange;
            font-weight: bold ;
        }
        a{
            color: black;
        }
    }




</style>
