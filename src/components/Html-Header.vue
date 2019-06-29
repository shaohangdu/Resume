<template>
    <div>
        <div class="html-header">
            <div class="nav-header">
                <h1><a>Mag</a></h1>
                <div class="header-btn"><a>SUBMIT VIDEO</a></div>
                <div class="poeple"><i class="fas fa-users"></i></div>
                <div class="search">
                    <input type="text" placeholder="Search and hit enter...">
                    <i class="fas fa-search"></i>
                </div>
                <div class="menu">
                    <ul>
                        <li><a class="font-weight-bold active">Home</a></li>
                        <li><a>ARCHIVE</a></li>
                        <li class="Dropdown">
                            <a>PAGES<i class="fas fa-chevron-down"></i></a>
                            <ul>
                                <li><a>home</a></li>
                                <li><a>Archive</a></li>
                                <li><a>Singe Video Post</a></li>
                                <li><a>Single Post</a></li>
                                <li><a>About Us</a></li>
                                <li><a>Contact</a></li>
                                <li><a>Submit Video</a></li>
                                <li><a>Login</a></li>
                            </ul>
                        </li>
                        <li class="megamenu-item">
                            <a>MEGA<i class="fas fa-chevron-down"></i></a>
                            <div class="megamenu clearfix">
                                <ul>
                                    <li><a>home</a></li>
                                    <li><a>Archive</a></li>
                                    <li><a>Singe Video Post</a></li>
                                    <li><a>Single Post</a></li>
                                    <li><a>About Us</a></li>
                                    <li><a>Contact</a></li>
                                    <li><a>Submit Video</a></li>
                                    <li><a>Login</a></li>
                                </ul>
                                <ul>
                                    <li><a>home</a></li>
                                    <li><a>Archive</a></li>
                                    <li><a>Singe Video Post</a></li>
                                    <li><a>Single Post</a></li>
                                    <li><a>About Us</a></li>
                                    <li><a>Contact</a></li>
                                    <li><a>Submit Video</a></li>
                                    <li><a>Login</a></li>
                                </ul>
                                <ul>
                                    <li><a>home</a></li>
                                    <li><a>Archive</a></li>
                                    <li><a>Singe Video Post</a></li>
                                    <li><a>Single Post</a></li>
                                    <li><a>About Us</a></li>
                                    <li><a>Contact</a></li>
                                    <li><a>Submit Video</a></li>
                                    <li><a>Login</a></li>
                                </ul>
                                <ul>
                                    <li><a>home</a></li>
                                    <li><a>Archive</a></li>
                                    <li><a>Singe Video Post</a></li>
                                    <li><a>Single Post</a></li>
                                    <li><a>About Us</a></li>
                                    <li><a>Contact</a></li>
                                    <li><a>Submit Video</a></li>
                                    <li><a>Login</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a>ABOUT</a></li>
                        <li><a>CONTACT</a></li>
                    </ul>
                </div>
                <a class="showmenu"><i class="fas fa-bars"></i></a>
            </div>
            <div class="Overview">
                <div>
                    <a> MAY 8 2018</a>
                    <a>/ LIFESTYLE</a>
                </div>
                <h2>
                    <a>Party Jokes Startling But Unnecessary</a>
                    <p>學習排版使用</p>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    methods: {
        openmenu(){
            $(document).ready(function() {
                $('.showmenu').click(function(event){
                    $('.menu').toggleClass("open");
                });
            });
        },
    },
    created() {
        this.openmenu();
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/helpers/reast";
.html-header{
    background-image: url(../assets/img/2.jpg);
    .nav-header{
        h1{
            background-image: url(../assets/img/logo.png);
        }
    }
}
</style>

