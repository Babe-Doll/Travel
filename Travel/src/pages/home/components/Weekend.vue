<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" >
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
export default{
    name: 'HomeWeekend',
    data (){
        return{
            recommendList: [{
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/86/57819390ea997c.jpg_r_640x214_00888590.jpg',
                    title: '郑州必游TOP10',
                    desc: "日月轮回，孕育出新的美丽"
                },{
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1711/28/461d4956ad23d8.jpg_r_640x214_d9aae5e7.jpg',
                    title: '泡汤圣地',
                    desc: "在河南，就来这里泡汤呀~"
                },{
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1811/2c/e5e2b086fc0c60.jpg_r_640x214_811a2da7.jpg',
                    title: '石刻艺术宝库',
                    desc: "带你尽情感受石刻艺术"
                }]
            }
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem //属性规定文本块中首行文本的缩进
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
        .item-img
            width: 100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #616161
            ellipsis()
</style>