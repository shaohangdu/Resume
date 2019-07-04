<template>
    <div>
        <div class="container my-4">
            <div class="row">
                <div class="col-4 mb-2" v-for="(item , key) in products" :key="item.id">
                    <div class="card h-100">
                        <img :src="item.imageUrl" class="card-img-top">
                        <div class="card-body">
                            <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                            <h5 class="card-title">{{item.title}}</h5>
                            <p class="card-text">{{item.content}}</p>
                            <div class="d-flex">
                                <div class="h6">只要<span class="text-danger h5">{{ item.price }}</span>元</div>
                                <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="upcart(item.id)">
                                    加到購物車
                                </button>
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
        }
    },
    methods: {
        getproduct(page = 1){
            const vm = this;
            let api=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
            this.$http.get(api).then((response) => {
                console.log(response);
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
                console.log(response);
            });
        },
    },
    created() {
        this.getproduct();
    },
}
</script>