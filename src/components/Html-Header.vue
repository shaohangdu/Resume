<template>
    <div>
    <div class="header">
            <div class="nav-header">
                <h1><a>Mag</a></h1>
                <div class="btn"><a>SUBMIT VIDEO</a></div>
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

@import "src/assets/helpers/_reast";
@import "src/assets/helpers/_ipad";

.header{
    background-image: url(../assets/html-img/2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    height:800px;
    z-index: 0;
    &::before{
        content:'';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background:rgba(0,0,0,0.5);
        z-index: -1;
    }
    .nav-header{
        top:0;
        left: 0;
        right: 0;
        background-color: white;
        padding-left: 30px;
        height: 70px;
        line-height: 70px;
        z-index: 3;
        h1{
            width: 74px;
            float: left;
            display: block;
            background-image: url(../assets/html-img/logo.png);
            background-repeat: no-repeat;
            background-position:center;
            text-indent: 101%;
            overflow:hidden;
            white-space:nowrap;
        }
        div{
            float: right;
        }
        .btn{
            background-color: #ed3974;
            a{
                @include Acolor(#ed3974,white);
            }
        }
        .poeple{
            padding: 0 25px;
            border-left: 1px solid #ebebeb;
        }
        .search{
            padding: 0 15px ;
            line-height:58px;
            input{
                border: none;
                font-style: italic;
            }
            i{
                padding: 6px 12px;
            }
        }
        .menu{
            border-right: 1px solid #ebebeb;
            >ul{
                >li{
                    float: left;
                    padding: 0 12px;
                    font-size: 13px;
                    letter-spacing: 1px;
                    a{
                        color: #000;
                        &:hover{
                            color: #ed3974;
                        }
                    }
                }
                .Dropdown{
                    &:hover{
                        ul{
                            opacity: 1;
                            max-height: 300px;
                        }
                    }
                    ul{
                        line-height: 20px;
                        padding: 10px;
                        position: absolute;
                        opacity: 0;
                        max-height: 0px;
                        transition:  all 0.5s;
                        border: 1px solid white;
                        background: white;
                        li{
                            float: none;
                            height: 25px;
                            color: black;                    
                        }
                    }
                }
                .megamenu-item{
                    &:hover{
                        .megamenu{
                            ul{
                                opacity: 1;
                                max-height: 300px;
                            }
                        }
                    }
                    .megamenu{
                        line-height: 20px;
                        position: absolute;
                        width: 100%;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background: white;
                        ul{
                            opacity: 0;
                            max-height: 0px;
                            border-right:1px solid rgba(0,0,0,0.2);
                            @include Float(24.66666%,0%);
                            li{
                                height: 25px;
                                padding-left: 25px;
                            }
                        }
                    }
                }
            }
        }
        .showmenu{
            display: none;
        }
    }
    .Overview{
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 300px;
        text-align: center;
        div{
            margin-bottom: 20px;
            a{
                @include Acolor(0,#ed3974);
                font-size: 14px;
                letter-spacing: 2px;
                &:hover{
                    color: white;
                }
            }
        }
        h2{
            margin-bottom: 20px;
            a{
                @include Acolor(0,white);
                font-size: 45px;
                &:hover{
                    color: #ed3974;
                }
            }
        }
    }
}
@include pad-m{
    .header{
        .nav-header{
            .menu{
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                background: white;
                padding: 20px 40px;
                transition: transform .5s;
                transform: translateX(-150px);
                ul{
                    li{
                    float: none;
                    padding: 0px;
                    }
                }
                .Dropdown{
                    ul{
                        li{
                            position: relative;
                        }
                    }
                }
                .megamenu-item{
                    .megamenu{
                        ul{ 
                        }
                    }
                }
            }
            .open{
                transform: translateX(0px);
            }
            .showmenu{
                display: block;
                color: black;
                float: right;
                margin-right: 20px;
            }
        }
    }
}
@include iphone7{
    .header{
        .nav-header{
            .btn,.search{
                display: none;
            }
        }
    }
}

</style>

