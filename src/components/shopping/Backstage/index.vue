<template>
    <div>
        <Navbar></Navbar>
        <Alert/>
        <div class="container-fluid">
            <div class="row" id="skills">
                <Sidebar/>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>

        <div class="store-footer">
            <div> 古 早 味 柑 仔 店 (學習接api使用) © 2019 shaohang du</div>
        </div>
    </div>
</template>

<script>
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Alert from '../Alartmessage';
export default {
    components:{
        Navbar,
        Sidebar,
        Alert,
    }
}
</script>

<style lang="scss">
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
