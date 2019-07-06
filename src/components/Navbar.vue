<template>
    <div>
        <nav class="navbar navbar-light bg-light shadow">
            <router-link class="navbar-brand col-3 col-md-2 mr-0 p-0 text-ray" to="/store/content">古早味柑仔店</router-link>
            <router-link class="btn btn-purple ml-auto" to="/store/content"> 購物站 </router-link>
            <form class="form-inline ml-4">
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
            check:'',
        }
    },
    methods: {
    // 登出
    signout(){
        const api = `${process.env.APIPATH}/logout`;
	    const vm = this;
		this.$http.post(api,).then((response) => {
			// console.log(response.data);
			if(response.data.success){
				vm.$router.push('/login');
			}
		});
    },
    checkin(){
        const api = `${process.env.APIPATH}/api/user/check`;
	    const vm = this;
        this.$http.post(api).then((response) => {
			// console.log("是否登入",response);
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

