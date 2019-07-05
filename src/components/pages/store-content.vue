<template>
    <div>
        <div class="mr-2 btnCart" v-if="cartNum.carts.length > 0">
            <button class="btn" @click="tablechange=!tablechange"><i class="fas fa-shopping-cart fa-2x"></i></button>
            <span class="num">{{cartNum.carts.length}}</span>
            <div class="goshopping">
                <table class="border bg-light" v-if="tablechange==true">
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
                                    <router-link class="btn btn-purple" to="/store/checkout"> 前往結帳 </router-link>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <div class="container my-4">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 mb-2" v-for="(item , key) in products" :key="item.id">
                    <div class="card h-100">
                        <img :src="item.imageUrl" class="card-img-top">
                        <div class="card-body">
                            <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                            <h5 class="card-title">{{item.title}}</h5>
                            <p class="card-text">{{item.content}}</p>
                            <div class="h6">只要<span class="text-danger h5"> {{ item.price }} </span>元</div>
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
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            products:[],
            cartNum:{
                carts:[],
            },
            tablechange:false,
        }
    },
    methods: {
        getproduct(page = 1){
            const vm = this;
            let api=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
            this.$http.get(api).then((response) => {
                // console.log(response);
                vm.products= response.data.products;
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
            vm.$http.get(api).then((response) => {
            // console.log(response.data);
            vm.cartNum = response.data.data;
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
    },
    created() {
        this.getproduct();
        this.getCart();
    },
}
</script>

<style lang="scss">
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
    


</style>
