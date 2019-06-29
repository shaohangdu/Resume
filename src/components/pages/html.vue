<template>
    <div>
        <div class="wrap">
            <Htmlheader/>
            <div id="skills"></div>
            <HtmlConten/>
            
            <Htmlfooter/>
        </div>
    </div>
</template>

<script>
import Htmlheader from '@/components/Html-Header';
import HtmlConten from '@/components/Html-Conten';
import Htmlfooter from '@/components/Html-footer';
export default {
    components:{
        Htmlheader,
        HtmlConten,
        Htmlfooter,
    }
}
</script>

<style lang="scss">
@import "../../assets/helpers/Html-Index";
.wrap{
    max-width: 100%;
    font-family: "Poppins", sans-serif;
    border:1px solid black;
}
a{
    text-decoration: none;
    color: white;
}

</style>

