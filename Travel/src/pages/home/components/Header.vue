<template>
    <div class="header">
       <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
        <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
            {{this.city}}<span class="iconfont arrow-icon" >&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script type="text/javascript">
import {mapState} from 'vuex'
export default{
    name: 'HomeHeader',
    computed: {
        ...mapState(['city'])
    }
}
</script>
<style lang="stylus" scoped>
// 1rem =html font-size =50px 这里应该是43px  43/50 = 86/100 =0.86
// 所以计算 86/100
@import '~styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align:center
                font-size:.4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            color: #ccc
            border-radius: .1rem //5px
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff
            .arrow-icon
                font-size: .24rem
</style>