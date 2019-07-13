<template>
    <div class="wrap">
        <form class="form-signin" @submit.prevent="signin">
            <h1>登入管理者</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" v-model="user.username" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" v-model="user.password" placeholder="Password" required>
        <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button type="submit">sign in</button>
        <router-link class="FormStore" to="/store/content"> 返回購物站 </router-link>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
        </form>
    </div>
</template>

<script> 
export default {
  data () {
    return {
     user:{
			 username: '',
			 password: '',
		 }
    }
  },
	methods: {
		// 登入
		signin () {
				const api = `${process.env.APIPATH}/admin/signin`;
				const vm = this;
				this.$http.post(api, vm.user).then((response) => {
					// console.log(response.data);
					if(response.data.success){
						vm.$router.push('/admin/products');
					}
				});
		 }
	},
}
</script>
<style lang="scss" scoped>
.wrap{
  background: radial-gradient(#333, #000);
  height:100vh;
}
.form-signin {
    min-width:320px;
    padding:80px;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

    text-align:center;
    h1 {
      color: white;
      text-transform: uppercase;
      font-weight:500;
    }
    input[type="email"],input[type="password"] {
        background: none;
        display: block;
        margin: 30px auto;
        text-align: center;
        border: 2px solid #3498db;
        padding: 15px 10px;
        width: 200px;
        outline:none;
        color: white;
        border-radius:24px;
        transition:0.25s;
        &:focus{
          width:280px;
          border:2px solid #2ecc71;
        } 
    }
    .checkbox{
        color: white;
    }
    button, .FormStore{
        background: none;
        display: block;
        margin: 10px auto;
        text-align: center;
        border: 2px solid #2ecc71;
        padding: 10px 10px;
        width: 200px;
        color: white;
        border-radius:24px;
        transition:0.25s;
        text-decoration:none;
        &:hover{
            background: #2ecc71;
        }
    }
}
</style>