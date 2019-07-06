<template>
    <div>
        <loading :active.sync="isLoading" ></loading>
        
        <div class="container p-0 CardOver">
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

            <div class="my-5 row justify-content-center px-2">
                <form class="col-md-6" @submit.prevent="fromCart">
                    <div class="form-group">
                        <label for="useremail">Email</label>
                        <input type="email" class="form-control" name="email" id="useremail"
                            v-validate="'required|email'"
                            :class="{'is-invalid' : errors.has('email')}"
                            v-model="form.user.email" placeholder="請輸入 Email">
                        <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>
                
                    <div class="form-group">
                        <label for="username">收件人姓名</label>
                        <input type="text" class="form-control" name="name" id="username"
                            v-validate="'required'"
                            :class="{'is-invalid' : errors.has('name')}"
                            v-model="form.user.name" placeholder="輸入姓名">
                        <span class="text-danger" v-if="errors.has('name')">請輸入姓名</span>
                    </div>
                
                    <div class="form-group">
                        <label for="usertel">收件人電話</label>
                        <input type="tel" class="form-control" name="tel" id="usertel"
                        v-validate="'required'"
                        :class="{'is-invalid' : errors.has('tel')}"
                        v-model="form.user.tel" placeholder="請輸入電話">
                        <span class="text-danger" v-if="errors.has('tel')">請輸入電話號碼</span>
                    </div>
                
                    <div class="form-group">
                        <label for="useraddress">收件人地址</label>
                        <input type="text" class="form-control" name="address" id="useraddress"
                        v-validate="'required'"
                        :class="{'is-invalid' : errors.has('address')}"
                        v-model="form.user.address" placeholder="請輸入地址">
                        <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
                    </div>
                
                    <div class="form-group">
                        <label for="comment">留言</label>
                        <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                    </div>
                    <div class="text-right">
                        <button class="btn btn-danger">送出訂單</button>
                    </div>
                </form>
            </div> 
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardproduct:{},
            CouponCode:'',
            form: {
                user: {
                    name: '',
                    email: '',
                    tel:  '',
                    address:'',
                },
                message:'',
            },
            isLoading:false,
        }
    },
    methods: {
        getCart() {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this ;
            vm.isLoading = true;
            this.$http.get(api).then((response) => {
            // console.log(response.data);
            vm.cardproduct = response.data.data;
            vm.isLoading = false;
            });
        },
        DelCart(id) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
            const vm = this ;
            this.$http.delete(api).then((response) => {
            // console.log(response.data);
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
            // console.log(response.data);
            this.getCart();
            });
        },
        fromCart () {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
            const vm = this ;
            const order = vm.form;
            this.$validator.validate().then((result) => {
                if (result) {
                    this.$http.post(api , { data: order } ).then((response) => {
                        // console.log('訂單已建立',response.data);
                        if(response.data.success) {
                            vm.$router.push(`checkout/${response.data.orderId}`);
                        }
                    });
                }else {
                    console.log('建立失敗',);
                }
            });
        },
    },
    created() {
        this.getCart();
    },
}
</script>

<style lang="scss">
@media(max-width:768px){
    /* .m-none{
        display: none;
    } */
    /* 畫面小於569時  表單畫面外資料 使用滾動軸 寬度768px 呈現 */
    .CardOver{
        overflow-x: auto;/*滾動X軸*/
        table{
            width: 770px;
        }
    }
}
</style>