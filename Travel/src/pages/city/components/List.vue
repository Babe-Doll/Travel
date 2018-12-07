<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">
                    当前城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                            郑州
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">
                    热门城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                            郑州
                        </div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">
                            郑州
                        </div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">
                            郑州
                        </div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">
                            郑州
                        </div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">
                            郑州
                        </div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">
                            郑州
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">
                    A
                </div>
                <div class="item-list">
                    <div class="item border-bottom"> 阿拉尔 </div>
                    <div class="item border-bottom"> 阿拉尔 </div>
                    <div class="item border-bottom"> 阿拉尔 </div>
                </div>
                <div class="title border-topbottom">
                    A
                </div>
                <div class="item-list">
                    <div class="item border-bottom"> 阿拉尔 </div>
                    <div class="item border-bottom"> 阿拉尔 </div>
                    <div class="item border-bottom"> 阿拉尔 </div>
                </div>
                <div class="title border-topbottom">
                    A
                </div>
                <div class="item-list">
                    <div class="item border-bottom"> 阿拉尔 </div>
                    <div class="item border-bottom"> 阿拉尔 </div>
                    <div class="item border-bottom"> 阿拉尔 </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import Bscroll from 'better-scroll'
export default{
     name: 'CityList',
     mounted (){
        this.scroll = new Bscroll(this.$refs.wrapper)
     }
 }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        overflow: hidden
        position:absolute
        top: 1.58rem
        left:0
        right:0
        bottom:0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
        .button-list
            overflow:hidden
            //给右侧列表留地方
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33%
                .button
                    text-align: center
                    margin: .1rem
                    padding: .1rem 0
                    border-radius: .06rem
                    border: .02rem solid #ccc

        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem


</style>