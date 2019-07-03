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
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Alert from '@/components/Alartmessage';
export default {
    components:{
        Navbar,
        Sidebar,
        Alert,
    }
}
</script>

