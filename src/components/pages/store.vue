<template>
    <div>
        <Navbar :cartNum="cartproduct" @theCart="getCart"></Navbar>
        <div class="bg-store"></div>
        
        <router-view></router-view>

        <div class="store-footer">
            <div> 古 早 味 柑 仔 店 (學習接後端api使用)</div>
        </div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar';

export default {
    data() {
        return {
            cartproduct:[],
        }
    },
    components:{
        Navbar,
    },
    methods: {
        getCart() {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this ;
            vm.$http.get(api).then((response) => {
            // console.log(response.data);
            vm.cartproduct = response.data.data;
            console.log(vm.cartproduct);
            });
        },
    },
    created() {
        this.getCart();
    },
}
</script>

<style lang="scss" scoped>

@import "../../assets/helpers/ipad";

.bg-store{
    background-image: url(../../assets/store-title.jpg);
    background-repeat: no-repeat;
    background-position:center center;
    
    background-size: cover;
    height:250px;
}
.store-footer{
        margin: 0 auto;
        padding: 20px;
        background: black;
        text-align: center;
        line-height: 40px;
        padding-top: 10px;
        color: white;
    }
</style>