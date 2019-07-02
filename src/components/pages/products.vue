<template>
    <div>
        <div class="text-right mt-4">
            <button class="btn btn-primary">建立新的產品</button>
        </div>
        <table class="table mt-4">
            <thead>
                <th width="120">分類</th>
                <th>產品名稱</th>
                <th width="100">原價</th>
                <th width="100">售價</th>
                <th width="90">是否啟用</th>
                <th width="70">編輯</th>
                <th width="70">刪除</th>
            </thead>
            <tbody>
                <tr v-for="(item, key) in products" :key="item.id">
                    <td> {{ item.category }} </td>
                    <td> {{ item.title }} </td>
                    <td class="text-right"> {{ item.origin_price}} </td>
                    <td class="text-right"> {{ item.price}} </td>
                    <td>
                        <span v-if="item.is_enabled" class="text-success"> 啟用 </span>
                        <span v-else> 未啟用 </span>
                    </td>
                    <td>
                        <button class="btn btn-outline-secondary btn-sm">編輯</button>
                    </td>
                    <td>
                        <button class="btn btn-outline-danger btn-sm">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products:[],
        }
    },
    methods: {
        getProduct(page = 1){
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
            const vm = this ;
            vm.$http.get(api).then((response) => {
            console.log(response.data);
            vm.products = response.data.products;
            });
        },
    },
    created() {
        this.getProduct();
    },
}
</script>