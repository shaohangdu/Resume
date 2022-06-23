<template>
    <div>
    <loading :active.sync="isLoading" ></loading>
        <div class="wrap" >
            <div class="uptop"><button @click="uptop()"><i class="fas fa-arrow-alt-circle-up fa-3x"></i></button></div>
            <div class="ajax-header" id="skills">
                <h1>整 合 文 創 商 店 資 訊</h1>
                <select class="selectClass" v-model="selected">
                    <option disabled value="">-- 請選擇 --</option>
                    <option :value="item" v-for="(item, key) in postunit" :key="item.id">-- {{item}} --</option>
                </select>
            </div>
            <div class="ajax-conten clearfix">
                <div class="MenuList">
                    <h2><i class="fas fa-user-astronaut pr-2 text-danger"></i>分類</h2>
                    <div class="btnAdmin">
                        <div><input type="button" value="ALL" class="bg-Tangerine" @click="selected=''"></div>
                        <div v-for="(item, key) in postunit" :key="item.id"><input :value="item" type="button" :class="selectedColor[key]" @click="selected=item"></div>
                    </div>
                </div>
                <div class="article">
                    <div class="container content-wary">
                        <div class="row">
                            <div class="col-md-6 col-12 my-2" v-for="(item, key) in dataSele.slice(pageStart, pageStart + countOfPage)" :key="item.id">
                                <div class="row no-gutters border rounded shadow-sm h-md-250 p-3 h-100">
                                    <div class="col-sm-7 col-12 d-flex flex-column">
                                        <strong class="d-inline-block mb-1 text-primary">{{ item.name}}</strong>
                                        <p class="mb-0">{{item.openTime}}</p>
                                        <div class="mb-1 text-muted">{{item.address }}</div>
                                        <div class="OverScroll mb-2"><p>{{item.intro }}</p></div>
                                        <a :href="item.srcWebsite" class="text-primary">{{ item.name }}</a>
                                    </div>
                                    <div class="col-sm-5 d-none d-sm-block text-center">
                                        <img :src="item.representImage" class="img-fluid"  width="200" height="300">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center my-2">
                            <ul class="pagination">
                                <li class="page-item" v-bind:class="{'disabled': (currPage === 1)}" @click.prevent="setPage(currPage-1)">
                                    <a class="page-link" href="#">上一頁</a>
                                </li>
                                <li class="page-item" v-for="n in totalPage" v-bind:class="{'active': (currPage === (n))}" @click.prevent="setPage(n)">
                                    <a class="page-link" href="#">{{n}}</a>
                                </li>
                                <li class="page-item" v-bind:class="{'disabled': (currPage === totalPage)}" @click.prevent="setPage(currPage+1)">
                                    <a class="page-link" href="#">下一頁</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ajax-footer">
                <div> 整 合 文 創 商 店 資 訊  © 2022 shaohang du</div>
                <div> 資料來源: <a target="_blank" class="source" href="https://data.gov.tw/">政 府 資 料 開 放 平 臺</a></div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data(){
        return{
            dataAll:[],
            dataSele:[],
            postunit:{},
            selected: '',
            selectedColor:['bg-success','bg-whiteBlue','bg-ray','bg-danger','bg-primary','bg-warning','bg-info'],
            countOfPage: 6,
            currPage: 1,
            isLoading:false,
            
        }
    },
    watch: {
        selected: function(val, oldVal) {
            this.reload();
        }
    },
    computed: {
        pageStart: function () {
            return (this.currPage - 1) * this.countOfPage;
        },
        totalPage: function () {
            return Math.ceil(this.dataSele.length / this.countOfPage);
        }
    },
    methods: {
        getdata(){
            const api = `https://script.google.com/macros/s/AKfycbx76AxUtGPMKG2fQmZHNGDAZsaiQyGD61nmKr2DKM9V58ZZCgAEOxo9UuhxMFBmSH_67g/exec`;
            const vm = this;
            vm.isLoading = true;
            vm.$http.get(api , { withCredentials: false }).then((response) => {
                vm.dataAll = response.data;
                this.updata();
                vm.dataSele = vm.dataAll;
                vm.currPage = 1;
                vm.isLoading = false;
            });
        },
        updata(){
            let dataDie=[];
            const vm = this;
            const len = vm.dataAll.length;

            for(let i=0; i < len ;i++){
                dataDie.push(vm.dataAll[i].cityName.substr(0,3));
            }
      
            vm.postunit = dataDie.filter(function(obj,index){
                if(dataDie.indexOf(obj)===index){return obj}
            });
        },
        reload(){
            const vm = this;
            vm.dataSele = [];
            for(let i=0;i<vm.dataAll.length;i++){
                if(vm.selected === ''){
                    vm.dataSele = vm.dataAll;
                    break;
                }else if(vm.selected === vm.dataAll[i].cityName.substr(0,3)){
                    vm.dataSele.push(vm.dataAll[i]);
                }
            }
            vm.currPage = 1;
        },
        setPage: function (idx) {
            if (idx <= 0 || idx > this.totalPage) {
                return;
            }
            this.currPage = idx;
        },
        upscroll(){
            $(window).scroll(function(){   
                //從Window整個網頁取得現在滾動Y值
                let scrollPos = $(window).scrollTop();
                if(scrollPos > 250){
                    $('.uptop').addClass('open');
                }else{
                    $('.uptop').removeClass('open');
                }
            });
        },
        uptop(){
            $('html,body').animate({scrollTop:0},1000);
        }
    },
    created() {
        this.getdata();
        this.upscroll();
    },
}

</script>


<style lang="scss" scoped>

@import './ajax-index.scss';
.wrap{
    .ajax-header{
        background-image: url(../../assets/img/annie-spratt-gJ3EpFlw_ss-unsplash.jpg);
    }

    .source {
        color: white;
    }
}
</style>
