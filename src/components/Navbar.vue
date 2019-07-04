<template>
    <div>
        <nav class="navbar navbar-light bg-light shadow">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
            <form class="form-inline">
                <button class="btn mr-2 btnCart"><i class="fas fa-shopping-cart fa-2x"></i>
                    <span v-if="cartNum.carts.length > 0">{{cartNum.carts.length}}</span>
                </button>
                <button class="btn btn-outline-success my-2 my-sm-0" @click.prevent="signout" v-if="!check">登入</button>
                <button class="btn btn-outline-success my-2 my-sm-0" @click.prevent="signout" v-else>登出</button>
            </form>
        </nav>
    </div>
</template>

<script>
export default {
    name:'Navbar',
    props:{
        cartNum:{
            carts:[],
        }
    },
    data() {
        return {
            check:false,
        }
    },
    methods: {
    // 登出
    signout(){
        const api = `${process.env.APIPATH}/logout`;
	    const vm = this;
		this.$http.post(api,).then((response) => {
			console.log(response.data);
			if(response.data.success){
				vm.$router.push('/login');
			}
		});
    },
    checkin(){
        const api = `${process.env.APIPATH}/api/user/check`;
	    const vm = this;
        this.$http.post(api).then((response) => {
			console.log("是否登入",response);
            if(response.data.success){
                vm.check = true;
            }else{
                vm.check = false;
            }
		});
    },
    getlenght(){
        this.$emit('getCart');
    },
    
  },
  created() {
      this.checkin();
  },
}
</script>

<style lang="scss">
.btnCart{
    position: relative;
    span{
        position:absolute;
        top:-5px;
        right:0px;
        color:white;
        background-color:red;
        font-size:10px;
        padding:5px 10px;
        border-radius: 50%;
    }
}
</style>
