<template>
    <div>
        <loading :active.sync="isLoading" ></loading>
        <table class="table mt-4">
            <thead>
                <th width="100">購買人</th>
                <th width="350">信箱、電話</th>
                <th>購買數量</th>
                <th width="80">總價錢</th>
                <th width="100">是否付清</th>
                <th width="70">編輯</th>
            </thead>
            <tbody>
                <tr v-for="(item, key) in order" :key="item.id">
                    <td>{{item.user.name}}</td>
                    <td>Email : {{item.user.email}} <br> Tel : {{item.user.tel}} <br>地址 : {{item.user.address}}</td>
                    <td>
                        <div v-for="product in item.products" :key="product.id">
                            產品 : {{product.product.title}} 及數量 : {{product.product.num}}
                        </div>
                    </td>
                    <td>{{item.total | currency}}</td>
                    <td v-if="item.is_paid" class="text-secondary">已付清</td>
                    <td v-else class="text-danger">未付款</td>
                    <td>
                        <button class="btn btn-outline-danger btn-sm" @click="openModal(item)">編輯</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">訂單修改</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <h5>產品資料</h5>
                            <label for="title">標題</label>
                            <input type="text" class="form-control" id="title"
                                v-model="TempOrder.create_at">
                            <label for="title"> 總價</label>
                            <input type="text" disabled class="form-control" id="title"
                                v-model="TempOrder.total">
                            <div class="form-check mt-3">
                                <input class="form-check-input" type="checkbox"
                                v-model="TempOrder.is_paid"
                                :true-value="true" :false-value="false"
                                id="is_paid">
                                <label class="form-check-label" for="is_paid">是否付清</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <h5>購買人資訊</h5>
                            <label for="name">姓名</label>
                            <input type="text" class="form-control" id="name"
                                v-model="TempOrder.user.name">

                            <label for="email">信箱</label>
                            <input type="email" class="form-control" id="email"
                                v-model="TempOrder.user.email">

                            <label for="tel">電話</label>
                            <input type="tel" class="form-control" id="tel"
                                v-model="TempOrder.user.tel">

                            <label for="address">地址</label>
                            <input type="text" class="form-control" id="address"
                                v-model="TempOrder.user.address">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="updataOrder()">送出</button>
                </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            order:{
                products:[],
                user:{},
            },
            TempOrder:{
                products:[],
                user:{},
            },
            isLoading: false,
        };
    },
    methods: {
        getOrder(page = 1) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/orders?page=${page}`;
            const vm = this ;
            vm.isLoading = true;
            vm.$http.get(api).then((response) => {
            // console.log(response.data);
            vm.order = response.data.orders;
            vm.isLoading = false;
            });
        },
        openModal(item) {
            this.TempOrder = Object.assign({}, item);
            $('#exampleModal').modal('show');
        },
        updataOrder() {
            const vm = this ;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/order/${vm.TempOrder.id}`;
            vm.$http.put(api, { data : vm.TempOrder }).then((response) => {
                // console.log(response);
            if(response.data.success){
                $('#exampleModal').modal('hide');
                vm.getOrder();
            }else {
                $('#exampleModal').modal('hide');
                vm.getOrder();
                console.log('新增失敗');
            }    
            });
        },
    },
    created() {
        this.getOrder();
    },
}
</script>