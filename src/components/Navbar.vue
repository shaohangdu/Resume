<template>
    <div>
        <nav class="navbar navbar-light bg-light shadow">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
            <router-link class="btn btn-purple ml-auto" to="/store/content"> 購物站 </router-link>
            <form class="form-inline ml-2">
                <button class="btn btn-outline-success my-2 my-sm-0" @click.prevent="signout" v-if="!check">登入</button>
                <button class="btn btn-outline-success my-2 my-sm-0" @click.prevent="signout" v-else>登出</button>
            </form>
        </nav>
    </div>
</template>

<script>
export default {
    name:'Navbar',
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
    
  },
  created() {
      this.checkin();
  },
}
</script>

