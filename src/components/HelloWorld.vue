<template>
  <div>
    <div class="container mb-7">
        <div class="text-center">
            <img src="@/assets/me.jpg" class="img-fluid rounded-circle mb-2" width="200">
            <h2 class="font-weight-bold">杜少航</h2>
            <div>
                <a href="#" class="text-dark"><i class="fab fa-github fa-2x"></i></a>
                <a href="#" class="text-dark"><i class="fab fa-facebook fa-2x"></i></a>
            </div>
            <a href="#" class="text-dark ">shaohangdu@gmail.com</a>
            <p class="mt-2"> Tel: 0983830081 </p>
            <p class="mt-2">自我介紹:剛退伍半年，經過朋友介紹，便開始了學習前端技術的旅程</p>
        </div>
    </div>

    <div class="container mb-7">
        <div class="section-rotate-fixed">
            <h2 class="font-weight-bold m-4">網頁前端開發技能</h2>
            <div class="row">
                <div class="col-md-4 col-12">
                    <h4 class="ml-4 pt-2 SkillBorder "> HTML , CSS</h4> 
                    <div class="text-center"><i class="fab fa-html5 fa-5x text-primary mr-2"></i><i class="fab fa-bootstrap fa-5x text-purple"></i></div>
                    <ul>
                        <li>能夠解決瀏覽器相容性</li>
                        <li>使用 bootstrap 4 客製化網頁</li>
                        <li>能以 SCSS 撰寫更好管理的程式碼</li>
                        <li>RWD 的 CSS 語法、技巧</li>
                    </ul>
                </div>
                <div class="col-md-4 col-12">
                    <h4 class="ml-4 pt-2 SkillBorder"> JavaScript </h4> 
                    <div class="text-center"><i class="fab fa-js fa-5x text-warning mr-2"></i><i class="fab fa-vuejs fa-5x text-success"></i></div>
                    <ul>
                        <li> JavaScript (ES6) </li>
                        <li> jQuery Plugin </li> 
                        <li> Vue.js </li>
                        <li> Ajax / Axios 串接 API 撈取遠端 JSON 資料</li>
                    </ul>
                </div>
                <div class="col-md-4 col-12">
                    <h4 class="ml-4 pt-2 SkillBorder"> Tools </h4>
                    <div class="text-center"><i class="fab fa-github fa-5x mr-2"></i><i class="fab fa-git-alt fa-5x text-Tangerine"></i></div>
                    <ul>
                        <li> Git / npm </li>
                        <li> Github / Gitlab </li>
                        <li> Chrome Dev Tool </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="mb-7 bg-gradient1 text-white section-rotate">
        <div class="container section-rotate-fixed">
            <div class="row">
                <div class="col-md-6 col-12">
                    <h2 class="m-b-2 font-weight-bold">
                        學業、經歷
                    </h2>
                    <div class="timeline-section">
                        <div class="row my-3 timeline-pointer">
                            <div class="col-12">
                                <h3> 2010年 就學 - 2014年 畢業</h3>
                                <p> 學業 : 嘉南藥理科技大學，資訊多媒體應用系 畢業</p>
                            </div>
                        </div>
                        <div class="row my-3 timeline-pointer">
                            <div class="col-12">
                                <h3> 2014年 入伍 - 2019年 退役 </h3>
                                <p> 中華民國陸軍，志願役士兵</p>
                            </div>
                        </div>
                        <div class="row my-3 timeline-pointer">
                            <div class="col-12">
                                <h3> 2019年 退役 - 至今 </h3>
                                <p> 待業中，並持續學習前端技術</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <h2 class="text-center m-b-2 font-weight-bold">
                                技能熟練度
                    </h2>
                    <section id="skills" >
                        <div class="m-b-1">
                            <span><span class="fab fa-html5"></span> HTML</span>
                            <div class="progress">
                                <div class="progress-bar" data-progress="85">
                                    85
                                </div>
                            </div>
                        </div>
                        <div class="m-b-1">
                            <span><span class="fab fa-css3-alt"></span> CSS3</span>
                            <div class="progress">
                                <div class="progress-bar" data-progress="70" >
                                    70
                                </div>
                            </div>
                        </div>
                        <div class="m-b-1">
                            <span><span class="fab fa-js"></span> JavaScript </span>
                            <div class="progress">
                                <div class="progress-bar" data-progress="60" >
                                    60
                                </div>
                            </div>
                        </div>
                        <div class="m-b-1">
                            <span><span class="fab fa-git-alt"></span> Git </span>
                            <div class="progress">
                                <div class="progress-bar" data-progress="70" >
                                    70
                                </div>
                            </div>
                        </div>
                        <div class="m-b-1">
                            <span><span class="fab fa-vuejs"></span> Vue</span>
                            <div class="progress">
                                <div class="progress-bar" data-progress="50" >
                                    50
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>

    

    <div class="container mb-7">
        <div>
            <h2 class="font-weight-bold m-4">作品集</h2>
            <div class="row ">
                <div class="col-md-4 col-12">
                    <h4 class="mt-2 pt-2 SkillBorder"> HTML , CSS 排版</h4> 
                    <router-link to="/index"><img src="@/assets/html-title.jpg" class="img-fluid border"></router-link>
                </div>
                <div class="col-md-4 col-12">
                    <h4 class="mt-2 pt-2 SkillBorder"> 高雄市政府JSON檔</h4> 
                    <router-link to="/activity"><img src="@/assets/ajax-title.jpg" class="img-fluid border"></router-link>
                </div>
                <div class="col-md-4 col-12">
                    <h4 class="mt-2 pt-2 SkillBorder"> Vue 電商購物網站 </h4> 
                    <router-link to="/admin/products"><div class="box">暫時存放</div></router-link>
                </div>
            </div>
        </div>
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
                // console.log(SkillTop);
                if(SkillTop<=(scrollPos + windowHeight /2) && !showSkill){ //當技能熟練度在網頁中間時執行
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


<style lang="scss" >
@import '../assets/helpers/ihome.scss';
</style>
