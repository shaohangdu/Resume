<template>
  <div class="wrap">
    <div class="container my-7">
        <div class="text-center">
            <img src="@/assets/me.jpg" class="img-fluid rounded-circle mb-2" width="200">
            <h2 class="font-weight-bold">杜少航</h2>
            <div>
                <a href="#" class="text-dark"><i class="fab fa-github fa-2x"></i></a>
                <a href="#" class="text-dark"><i class="fab fa-facebook fa-2x"></i></a>
            </div>
            <a href="#" class="text-dark ">shaohangdu@gmail.com</a>
            <p class="mt-2"> Tel: 0983830081 </p>
            <p class="mt-2">自我介紹: 退伍過後，透過朋友介紹了解到前端這份行業，經過深思熟慮、決心投入，便開始了學習前端技術的旅程</p>
        </div>
    </div>

    <div class="container mb-7">
        <div>
            <h3 class="font-weight-bold m-4">網站開發技能</h3>
            <div class="row">
                <div class="col-md-4 col-12 mb-5">
                    <h4 class="ml-4 pt-2 SkillBorder "> HTML , CSS</h4> 
                    <div class="text-center"><i class="fab fa-html5 fa-5x text-primary mr-2"></i><i class="fab fa-bootstrap fa-5x text-purple"></i></div>
                    <ul>
                        <li>能夠解決瀏覽器相容性</li>
                        <li>熟悉 Bootstrap 客製化網頁</li>
                        <li>使用 SCSS 撰寫更好管理的程式碼</li>
                        <li>RWD 的 CSS 語法、技巧</li>
                    </ul>
                </div>
                <div class="col-md-4 col-12 mb-5">
                    <h4 class="ml-4 pt-2 SkillBorder"> JavaScript </h4> 
                    <div class="text-center"><i class="fab fa-js fa-5x text-warning mr-2"></i><i class="fab fa-vuejs fa-5x text-success"></i></div>
                    <ul>
                        <li> JavaScript (ES6) </li>
                        <li> jQuery Plugin </li> 
                        <li> Vue.js </li>
                        <li> Ajax / Axios 串接 API 撈取遠端 JSON 資料</li>
                    </ul>
                </div>
                <div class="col-md-4 col-12 mb-5">
                    <h4 class="ml-4 pt-2 SkillBorder "> PHP</h4> 
                    <div class="text-center"><i class="fab fa-php fa-5x text-primary mr-2"></i><i class="fab fa-laravel fa-5x text-purple"></i></div>
                    <ul>
                        <li>熟悉 Laravel 框架開發</li>
                        <li>熟悉 RESTful api 撰寫與功能維護</li>
                        <li>連接 Database 規劃資料結構</li>
                    </ul>
                </div>
                <div class="col-md-4 col-12 mb-5">
                    <h4 class="ml-4 pt-2 SkillBorder"> Tools </h4>
                    <div class="text-center"><i class="fab fa-github fa-5x mr-2"></i><i class="fab fa-git-alt fa-5x text-Tangerine"></i></div>
                    <ul>
                        <li> Git / npm </li>
                        <li> Github / Gitlab </li>
                        <li> Chrome Dev Tool </li>
                        <li> MySQL </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="mb-7 bg-gradient1 text-white section-rotate">
        <div class="section-rotate-fixed">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <h2 class="m-b-2 font-weight-bold">
                            學業、經歷
                        </h2>
                        <div class="timeline-section">
                            <div class="row my-3 timeline-pointer">
                                <div class="col-12">
                                    <h3> 2010年 - 2014年</h3>
                                    <p>嘉南藥理科技大學，資訊多媒體應用系</p>
                                </div>
                            </div>
                            <div class="row my-3 timeline-pointer">
                                <div class="col-12">
                                    <h3> 2014年 - 2019年</h3>
                                    <p> 中華民國陸軍，志願役士兵</p>
                                </div>
                            </div>
                            <div class="row my-3 timeline-pointer">
                                <div class="col-12">
                                    <h3> 2019年 ~ 2022年</h3>
                                    <p> 派趣行動整合科技股份有限公司，軟體工程師</p>
                                </div>
                            </div>
                            <div class="row my-3 timeline-pointer">
                                <div class="col-12">
                                    <h3> 2022年 ~</h3>
                                    <p> 待業中，並持續學習新技術</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <h2 class="text-center m-b-2 font-weight-bold">
                                    技能熟練度
                        </h2>
                        <section id="skills" >
                            <div class="mb-2">
                                <span class="skillText"><span class="fab fa-html5"></span> HTML </span>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="70"></div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <span class="skillText"><span class="fab fa-css3-alt"></span> CSS </span>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="70" ></div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <span class="skillText"><span class="fab fa-js"></span> JavaScript </span>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="60" ></div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <span class="skillText"><span class="fab fa-git-alt"></span> Git </span>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="70" ></div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <span class="skillText"><span class="fab fa-vuejs"></span> Vue</span>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="50" ></div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <span class="skillText"><span class="fab fa-sass"></span> SCSS</span>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="60" ></div>
                                </div>
                            </div>
                             <div class="mb-2">
                                <span class="skillText"><span class="fab fa-php"></span> PHP</span>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="70" ></div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <span class="skillText"><img class="fab-database" src="../assets/img/database2.png" alt=""> MySQL</span>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="50" ></div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mb-7">
        <div>
            <h2 class="font-weight-bold m-4">作品集</h2>
            <div class="row">
                <div class="col-md-4 col-12">
                    <h4 class="mt-2 pt-2 SkillBorder"> HTML , CSS 排版</h4> 
                    <router-link target="_blank" to="/index"><img src="@/assets/html-title.jpg" class="img-fluid border a_hover mb-2"></router-link>
                    <a target="_blank" href="https://shaohangdu.github.io/text/"><img src="@/assets/html-2.jpg" class="img-fluid border a_hover"></a>
                </div>
                <div class="col-md-4 col-12">
                    <h4 class="mt-2 pt-2 SkillBorder"> AJAX 政府資料開放平臺</h4> 
                    <router-link target="_blank" to="/activity"><img src="@/assets/ajax-title.jpg" class="img-fluid border a_hover mb-2"></router-link>
                </div>
                <div class="col-md-4 col-12">
                    <h4 class="mt-2 pt-2 SkillBorder"> Vue 電商購物網站 </h4> 
                    <router-link target="_blank" to="/store/content"><img src="@/assets/store.jpg" class="img-fluid border a_hover mb-2"></router-link>
                </div>

            </div>
        </div>
    </div>

    <div class="text-center bg-dark text-white p-2">
        <div>個人履歷 © 2019 shaohang du</div>
        
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods: {
      progress(){
            let showSkill =false;
            $(window).scroll(function(){   
                let scrollPos = $(window).scrollTop();//從Window整個網頁取得現在滾動Y值
                let windowHeight = $(window).height();//取得網頁高度 
                //進度條progress bor
                let SkillTop = $('#skills').position().top;
                if(SkillTop<=(scrollPos + windowHeight /2) && !showSkill){
                    showSkill =true;
                    $('#skills .progress-bar').each(function(){
                    let thisValue = $(this).data('progress');
                    $(this).css('width',thisValue + '%');
                    });
                }
            });
      },
  },
  created() {
      this.progress();
  },
}
</script>


<style lang="scss" scoped>
@import './ihome.scss';

</style>
