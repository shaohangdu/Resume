<template>
    <div>
        <div class="wrap">
            <div class="ajax-header">
                <h1> 高 雄 市 政 府 文 化 局 </h1>
                <select class="selectClass">
                    <option value="請選擇">-- 請 選 擇 --</option>
                </select>
            </div>
            <div class="ajax-conten clearfix">
                <div class="MenuList">
                    <h2><i class="fas fa-user-astronaut pr-2 text-danger"></i>分類</h2>
                    <div class="btnAdmin">
                        <div ><input type="button" value="圖書館" class="blue"></div>
                        <div ><input type="button" value="圖書館" class="whiteBlue"></div>
                        <div ><input type="button" value="圖書館" class="ray"></div>
                        <div ><input type="button" value="圖書館" class="red"></div>
                    </div>
                </div>
                <div class="article">
                    <ul>
                        <li>123</li>
                        <li>123</li>
                        <li>123</li>
                        <li>123</li>
                    </ul>
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
// http://opendata.khcc.gov.tw/public/OD_khcc_museum.ashx?SDate=2019/06/24&EDate=2019/12/24
export default {

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
