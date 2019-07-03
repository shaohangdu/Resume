<template>
    <div>
        <nav class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
            <input class="form-control  w-100" type="text" placeholder="Search">
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                <a class="nav-link" href="#" @click.prevent="signout" v-if="this.check ==false">登入</a>
                <a class="nav-link" href="#" @click.prevent="signout" v-else>登出</a>
                </li>
            </ul>
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
    }
  },
  created() {
      this.checkin();
  },
}
</script>
