<template>
    <div>
    <loading :active.sync="isLoading" ></loading>
    <div class="container text-center my-5 p-0">
            <div class="form-row text-center">
                <div class="col-12 col-sm">
                    <div class="alert alert-dark alert-rounded mb-0">1.輸入個人資料</div>
                </div>
                <i class="fas fa-arrow-right fa-2x my-auto d-none d-sm-block"></i>
                <i class="fas fa-arrow-down fa-2x mx-auto d-sm-none"></i>
                <div class="col-12 col-sm">
                    <div class="alert alert-rounded mb-0" :class="{'alert-primary': !order.is_paid, 'alert-dark': order.is_paid}">2.金流付款</div>
                </div>
                <i class="fas fa-arrow-right fa-2x my-auto d-none d-sm-block"></i>
                <i class="fas fa-arrow-down fa-2x mx-auto d-sm-none"></i>
                <div class="col-12 col-sm">
                    <div class="alert alert-rounded mb-0" :class="{'alert-dark': !order.is_paid, 'alert-primary': order.is_paid}">3.完成</div>
                </div>
            </div>
        </div>
    <div class="my-5 row justify-content-center">
        <form class="col-md-6" @submit.prevent="payorder">
            <table class="table">
            <thead>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
            </thead>
            <tbody>
                <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total | currency}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ order.total | currency}}</td>
                </tr>
            </tfoot>
            </table>

            <table class="table">
            <tbody>
                <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                <th>付款狀態</th>
                <td>
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span v-else class="text-success">付款完成</span>
                </td>
                </tr>
            </tbody>
            </table>
            <div class="d-flex">
                <router-link v-if="order.is_paid === false" class="btn btn-secondary" to="/store/content"> 取消訂單 </router-link>
                <router-link v-else class="btn btn-primary" to="/store/content"> 前往購物 </router-link>
                <div class="ml-auto" v-if="order.is_paid === false">
                    <button class="btn btn-danger">確認付款去</button>
                </div>
            </div>
            
        </form>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return{
            order:{
                user:{
                    email:'',
                },
            },
            orderId:'',
            isLoading:false,
        }
    },
    methods: {
        getorder() {
            const vm = this ;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
            this.$http.get(api).then((response) => {
            // console.log(response.data);
            vm.order = response.data.order;
            });
        },
        payorder(){
            const vm = this ;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
            vm.isLoading = true;
            this.$http.post(api).then((response) => {
            // console.log(response.data);
            if(response.data.success){
                this.getorder();
                vm.isLoading = false;
            }
            });
        }
    },
    created() {
        this.orderId = this.$route.params.orderId;
        this.getorder();
        // console.log(this.orderId);
        
    },
}
</script>