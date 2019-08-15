<template>
    <div>
        <div class="wrap">
            <Header/>
            <div id="skills"></div>
            <Conten/>
            
            <Footer/>
        </div>
    </div>
</template>

<script>
import Header from './header/index';
import Conten from './conten/index';
import Footer from './footer/index';
export default {
    components:{
        Header,
        Conten,
        Footer,
    }
}
</script>

<style lang="scss">
@import "./Html-Index";
.wrap{
    max-width: 100%;
    font-family: "Poppins", sans-serif;
}
a{
    text-decoration: none;
    color: white;
}

</style>

