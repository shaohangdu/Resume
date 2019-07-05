<template>
    <div>
        <div class="container my-4">
            <table class="table mt-4">
                <thead>
                    <th width="100">分類</th>
                    <th>產品名稱</th>
                    <th width="70">數量</th>
                    <th width="100">單價</th>
                    <th width="100">總價錢</th>
                    <th width="120">刪除</th>
                </thead>
                <tfoot> 
                    <tr>
                        <td colspan="4" class="text-right">總計</td>
                        <td class="text-right">{{ cardproduct.total | currency}}</td>
                        <td></td>
                    </tr> 
                    <tr v-if="cardproduct.final_total !== cardproduct.total">
                        <td colspan="4" class="text-right">折扣價</td>
                        <td class="text-right">{{ cardproduct.final_total | currency}}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="5">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="輸入優惠碼  12 打九折" 
                                v-model="CouponCode">
                                <div class="input-group-append">
                                    <button class="input-group-text" @click="addCouponCode">優惠碼</button>
                                </div>
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </tfoot> 
                <tbody>
                    <tr v-for="(item, key) in cardproduct.carts" :key="item.id">
                        <td>{{ item.product.category }}</td>
                        <td>{{ item.product.title }}
                        <div class="text-danger" v-if="item.coupon">已套用優惠卷</div>
                        </td>
                        <td class="text-right">{{ item.qty }}</td>
                        <td class="text-right">{{ item.product.price | currency}}</td>
                        <td class="text-right">{{ item.total | currency}}</td>
                        <td>
                        <button class="btn btn-outline-secondary btn-sm" @click="DelCart(item.id)">取消訂單</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardproduct:{},
            CouponCode:'',
        }
    },
    methods: {
        getCart() {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this ;
            this.$http.get(api).then((response) => {
            console.log(response.data);
            vm.cardproduct = response.data.data;
            });
        },
        DelCart(id) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
            const vm = this ;
            this.$http.delete(api).then((response) => {
            console.log(response.data);
            vm.getCart();
            });
        },
        addCouponCode() {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
            const vm = this ;
            const coupon = {
                code: vm.CouponCode,
            };
            this.$http.post(api , { data : coupon }).then((response) => {
            console.log(response.data);
            this.getCart();
            });
        },
    },
    created() {
        this.getCart();
    },
}
</script>