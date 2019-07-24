<template>
    <div>
        <Navbar></Navbar>
        <div class="bg-store" id="skills"></div>
        <router-view></router-view>

        <div class="store-footer">
            <div> 古 早 味 柑 仔 店 (學習接api使用) © 2019 shaohang du</div>
            <div>您在本站已停留：<span>{{ hour }} 時 {{ minute }} 分 {{ second }} 秒 </span></div>
        </div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar';

export default {
    data() {
        return {
            second: 0,
            minute: 0,
            hour: 0,
        }
    },
    components:{
        Navbar,
    },
    methods: {
        timeInterval(){
            let vm = this;
            vm.second++;
            if(vm.second==60) { 
                vm.second=0;
                vm.minute+=1; 
            };
            if(vm.minute==60) { 
                vm.minute=0;
                vm.hour+=1; 
            };
            window.setTimeout(vm.timeInterval,1000); 
        }
    },
    created() {
        this.timeInterval();
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