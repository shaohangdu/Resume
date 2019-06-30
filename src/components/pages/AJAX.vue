<template>
    <div>
        <div class="wrap" id="skills">
            <div class="ajax-header">
                <h1> 高 雄 市 政 府 文 化 局 </h1>
                <select class="selectClass" v-model="selected" @click="getdata()">
                    <option disabled value="">-- 請選擇 --</option>
                    <option :value="item" v-for="(item, key) in postunit" :key="item.id">-- {{item}} --</option>
                </select>
            </div>
            <div class="ajax-conten clearfix">
                <div class="MenuList">
                    <h2><i class="fas fa-user-astronaut pr-2 text-danger"></i>分類</h2>
                    <div class="btnAdmin">
                        <div><input type="button" value="圖書館" class="blue" @click="selected='圖書館',getdata()"></div>
                        <div><input type="button" value="岡山文化中心" class="whiteBlue" @click="selected='岡山文化中心',getdata()"></div>
                        <div><input type="button" value="電影館" class="ray" @click="selected='電影館',getdata()"></div>
                        <div><input type="button" value="歷史博物館" class="red" @click="selected='歷史博物館',getdata()"></div>
                    </div>
                </div>
                <div class="article">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 my-2" v-for="(item, key) in dataSele" :key="item.id" v-if="!item.MUSEUM_IMAGE ==''">
                                <div class="row no-gutters border rounded shadow-sm h-md-250 position-relative">
                                    <div class="col-8 p-4 d-flex flex-column">
                                        <strong class="d-inline-block mb-2 text-primary">{{ item.MUSEUM_TITLE}}</strong>
                                        <p class="mb-0">{{item.MUSEUM_TOPDATE}} ~ {{item.MUSEUM_ENDDATE}}</p>
                                        <div class="mb-1 text-muted">{{item.MUSEUM_POSTUNIT }}</div>
                                        <div class="OverScroll"><p>{{item.MUSEUM_DESC }}</p></div>
                                        <a :href="item.MUSEUM_URL">{{ item.MUSEUM_URL_Name }}</a>
                                    </div>
                                    <div class="col-4 d-none d-lg-block">
                                        <img :src="item.MUSEUM_IMAGE" class="img-fluid"  width="200" height="300">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ajax-footer">
                <div> 高 雄 藝 術 (學習串接AJAX使用)</div>
                <div>資料來源: 高 雄 市 政 府 </div>
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
        }
    },
    methods: {
        getdata(){
            const api = `http://opendata.khcc.gov.tw/public/OD_khcc_museum.ashx?SDate=2019/06/24&EDate=2019/12/24`;
            const vm = this;
            vm.$http.get(api).then((response) => {
                console.log(response.data);
                vm.dataAll = response.data;
                this.updata();
                vm.dataSele = [];
                for(let i=0;i<vm.dataAll.length;i++){
                    if(vm.selected == ''){
                        vm.dataSele = vm.dataAll;
                    }else if(vm.selected == vm.dataAll[i].MUSEUM_POSTUNIT){
                        vm.dataSele.push(vm.dataAll[i]);
                    }
                }
                
            });
        },
        updata(){
            let dataDie=[];
            const vm = this;
            const len = vm.dataAll.length;
            console.log(vm.dataAll.length);
            for(let i=0; i < len ;i++){
                dataDie.push(vm.dataAll[i].MUSEUM_POSTUNIT);
            }
                vm.postunit = dataDie.filter(function(obj,index){
                if(dataDie.indexOf(obj)==index){return obj}
            });
            console.log("整合",vm.postunit);
        },
    },
    created() {
        this.getdata();
        this.updata();
    },
}

</script>


<style lang="scss" scoped>

@import 'src/assets/helpers/ajax-index.scss';
.wrap{
    .ajax-header{
        background-image: url(../../assets/img/annie-spratt-gJ3EpFlw_ss-unsplash.jpg);
    }
}
</style>
