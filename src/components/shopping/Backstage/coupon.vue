<template>
    <div>
        <loading :active.sync="isLoading" ></loading>
        <div class="text-right mt-4">
            <button class="btn btn-outline-primary" @click="openModal(true)">建立新優惠卷</button>        
        </div>

        <table class="table mt-4">
            <thead>
                <th width="70">編號</th>
                <th>優惠卷名稱</th>
                <th>優惠卷掃描碼</th>
                <th>輸入碼</th>
                <th width="120">優惠百分比</th>
                <th width="120">截止日期</th>
                <th width="70">編輯</th>
                <th width="70">刪除</th>
            </thead>
            <tbody>
                   <tr v-for="(item, key) in couponTotle.coupons" :key="item.id">
                        <td> {{ item.num }}</td>
                        <td> {{ item.title }}</td>
                        <td> {{ item.id }}</td>
                        <td class="text-right"> {{ item.code }}</td>
                        <td class="text-right"> {{ item.percent }}</td>
                        <td> {{ item.due_date }}</td>
                        <td>
                            <button class="btn btn-outline-secondary btn-sm" @click="openModal(false, item)">編輯</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-danger btn-sm" @click="DelModal(item)">刪除</button>
                        </td>
                   </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <div class="modal fade" id="newCoupon" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">建立新優惠卷</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="title">標題</label>
                        <input type="text" class="form-control" id="title"
                        v-model="coupon.title"
                        placeholder="請輸入標題">
                    </div>

                    <div class="form-group">
                        <label for="title">textCode</label>
                        <input type="text" class="form-control" id="code"
                        v-model="coupon.code"
                        placeholder="請輸入code">
                    </div>

                    <div class="form-group">
                        <label for="price">優惠多少(百分比)</label>
                        <input type="number" class="form-control" id="percent"
                        v-model="coupon.percent"
                        placeholder="請輸入百分比">
                    </div>

                    <div class="form-group">
                        <label for="description">產品描述 截止期限</label>
                        <input type="date" class="form-control" id="due_date"
                        v-model="coupon.due_date"
                        placeholder="請輸入截止期限"></input>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                        v-model="coupon.is_enabled"
                        :true-value="1" :false-value="0"
                        id="is_enabled">
                        <label class="form-check-label" for="is_enabled">
                        是否啟用
                        </label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                    <button type="button" class="btn btn-primary" @click="updataCoupon">新增</button>
                </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="DelModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title" id="exampleModalLabel">刪除優惠卷</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    是否刪除 <strong class="text-danger">{{ coupon.title }}</strong> 優惠卷(刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click="delCoupon">確認刪除</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    data() {
        return {
            couponTotle:[],
            coupon:{},
            isLoading: false,
            isNew: false,
        };
    },
    methods: {
        openModal(isNew, item) {
            if(isNew){
                this.coupon = {};
                this.isNew = true;
            }else {
                this.coupon = Object.assign({}, item); //避免傳參考特性
                this.isNew = false;
            }
            $('#newCoupon').modal('show');
        },
        updataCoupon() {
            let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
            let httpMethod = 'post';
            const vm = this ;
            if(!vm.isNew) {
                api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.coupon.id}`;
                httpMethod = 'put';
            }
            this.$http[httpMethod](api , { data : vm.coupon }).then((response) => {
            // console.log(response.data);
            if(response.data.success){
                $('#newCoupon').modal('hide');
                vm.getCoupon();
            }else {
                $('#newCoupon').modal('hide');
                vm.getCoupon();
                console.log('刪除失敗');
            }
            });
        },
        getCoupon(page = 1) {
            let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`;
            let httpMethod = 'get';
            const vm = this ;
            vm.isLoading = true;
            this.$http[httpMethod](api).then((response) => {
            // console.log(response.data);
            vm.couponTotle = response.data;
            vm.isLoading = false;
            });
        },
        DelModal(item) {
            this.coupon = Object.assign({}, item);
            $('#DelModal').modal('show');
        },
        delCoupon() {
            const vm = this ;
            let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.coupon.id}`;
            vm.$http.delete(api).then((response) => {
            // console.log(response.data);
            if(response.data.success){
                $('#DelModal').modal('hide');
                vm.getCoupon();
            }else {
                $('#DelModal').modal('hide');
                vm.getCoupon();
                console.log('刪除失敗');
            }
            });
        }
    },
    created() {
        this.getCoupon();
    },

}
</script>