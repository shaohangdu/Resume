<template>
    <div>
         <div class="footer clearfix">
            <div class="component clearfix">
                <div class="logo">
                    <img src="../assets/html-img/logo2.png" alt="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                    <div>
                        <a href="" class="blue"><i class="fab fa-facebook-f"></i></a>
                        <a href="" class="red"><i class="fab fa-google-plus-g"></i></a>
                        <a href="" class="ray"><i class="fab fa-instagram"></i></a>
                        <a href="" class="whiteBlue"><i class="fab fa-twitter"></i></a>
                        <a href="" class="greedBlue"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div>
                    <h3>CATEGORIES</h3>
                    <ul>
                        <li><i class="fas fa-angle-double-right"></i><a href="#">Life Style</a></li>
                        <li><i class="fas fa-angle-double-right"></i><a href="#">Tech</a></li>
                        <li><i class="fas fa-angle-double-right"></i><a href="#">Travel</a></li>
                        <li><i class="fas fa-angle-double-right"></i><a href="#">Music</a></li>
                        <li><i class="fas fa-angle-double-right"></i><a href="#">Foods</a></li>
                        <li><i class="fas fa-angle-double-right"></i><a href="#">Fashion</a></li>
                        <li><i class="fas fa-angle-double-right"></i><a href="#">Game</a></li>
                        <li><i class="fas fa-angle-double-right"></i><a href="#">Football</a></li>
                        <li><i class="fas fa-angle-double-right"></i><a href="#">Sports</a></li>
                        <li><i class="fas fa-angle-double-right"></i><a href="#">Show</a></li>
                    </ul>
                </div>
                <div>
                    <h3>SPORT VIDEOS</h3>
                    <div class="blog">
                        <div>
                            <img src="../assets/html-img/12.jpg" alt="">
                        </div>
                        <div class="blog-content">
                            <a href="#">Take A Romantic Break In A Boutique Hotel</a>
                            <p>
                                <a href=""><i class="fas fa-eye"></i>34</a>
                                <a href=""><i class="fas fa-thumbs-up"></i>84</a>
                                <a href=""><i class="fas fa-comments"></i>14</a>
                            </p>
                        </div>
                    </div>
                    <hr>
                    <div class="blog">
                        <div>
                            <img src="../assets/html-img/13.jpg" alt="">
                        </div>
                        <div class="blog-content">
                            <a href="#">Take A Romantic Break In A Boutique Hotel</a>
                            <p>
                                <a href=""><i class="fas fa-eye"></i>34</a>
                                <a href=""><i class="fas fa-thumbs-up"></i>84</a>
                                <a href=""><i class="fas fa-comments"></i>14</a>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="channe">
                    <h3>CHANNELS</h3>
                    <div><a href="#">TRAVEL</a></div>
                    <div><a href="#">FASHIONISTA</a></div>
                    <div><a href="#">MUSIC</a></div>
                    <div><a href="#">DESIGN</a></div>
                    <div><a href="#">NEWS</a></div>
                    <div><a href="#">TRENDING</a></div>
                    <div><a href="#">VIDEO</a></div>
                    <div><a href="#">GAME</a></div>
                    <div><a href="#">SPORTS</a></div>
                    <div><a href="#">UFESTYLE</a></div>
                    <div><a href="#">FOODS</a></div>
                    <div><a href="#">TV SHOW</a></div>
                    <div><a href="#">TWITTER VIDEO</a></div>
                    <div><a href="#">PLAYING</a></div>
                    <div><a href="#">CLIPS</a></div>
                </div>
            </div>
            <div class="AtLast ">
                <p>Copyright ©2019 All rights reserved | This template is made with by Colorlib  is used for practice html.css.</p>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Advertisement</a></li>
                    <li><a href="#">Contact US</a></li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

@import "src/assets/helpers/_reast";
@import "src/assets/helpers/_ipad";

.footer{
    background-color: #111111;
    font-size: 14px;
    .component{
        max-width: 1200px;
        margin: 0 auto; 
        padding: 40px 0;
        >div{
            @include Float(25%,0%);
            padding: 0 15px;
            color: white;
            height: 325px;
            h3{
                margin-bottom: 30px;
                padding-left: 10px;
                border-left: 3px solid #ed3974;
                font-size: 16px;
            }
            ul{
                li{
                    @include Float(48%,1%);
                    margin-bottom: 15px;
                    a{
                        &:hover{
                            color: #ed3974;
                        }
                    }
                }
                i{
                   margin-right: 5px;
                   opacity: 0.5;
                }
            }
            .blog{
                @include flex;
                div{
                    flex: 1;
                    img{
                        color: white;
                    }
                }
                .blog-content{
                    flex: 3;
                    padding-left: 15px;
                    a{
                        letter-spacing: 1px;
                        &:hover{
                            color:#ed3974;
                            opacity: 1;
                        }
                    }
                    p{
                        margin-top: 8px;
                        a{
                            margin-right: 20px;
                            opacity: 0.5;
                        }
                    }
                }
            }
            hr{
                opacity: 0.2;
                margin: 15px 0;
            }

        }
        .logo{
            img{
                margin-bottom: 25px;
            }
            p{
                margin-bottom: 30px;
                line-height: 28px;
                opacity: 0.5
            }
            div{
                padding: 0;
                width: 100%;
                a{
                    margin-right: 5px;
                    width: 40px;
                    height: 40px;
                    float: left;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 40px;
                }
                .blue{
                    background: #4b6cd0;
                }
                .red{
                    background: #f03b3b;
                }
                .ray{
                    background: #bb8950;
                }
                .whiteBlue{
                    background: #49a7f3;
                }
                .greedBlue{
                    background: #30bad7;
                }
            }
        }
        .channe{
            div{
                display: inline-block;
                margin: 5px;
                padding: 10px;
                font-size: 12px;
                background: rgba(255,255,255,0.1);
                border-radius: 5px;
                &:hover{
                    background: #ed3974;
                }
            }
        }
    }
    .AtLast{
        max-width: 1200px;
        margin: 0 auto;
        font-size: 14px;
        p{
            color: white;
            display: inline-block;
            padding: 10px 0;
        }
        ul{
            padding: 10px 0;
            float: right;
            li{
                float: left;
                padding: 0 15px;
                opacity: 0.5;
                &:hover{
                    color: #ed3974;
                    opacity: 1;
                }
            }
        }
    }
}
@include pad-l{
    .footer{
        .component{
            max-width: 1024px;
            >div{
                @include Float(25%,0%);
                padding: 0 5px;
            }
        }
        .AtLast{
            max-width: 1024px;
            text-align: center;
            p{
               display: block;
            }
            ul{
               float: none;
               display:inline-block;
            }
        }
    }
}
@include pad-m{
    .footer{
        .component{
            max-width: 800px;
            >div{
                @include Float(46%,1%);
                padding: 0 5px;
            }
        }
    }
}
@include iphone7{
    .footer{
        .component{
            >div{
                @include Float(98%,1%);
            }
        }
    }
}

</style>

