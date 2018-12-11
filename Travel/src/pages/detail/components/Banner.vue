<template>
    <div>
       <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1412/12/88ee179e9cdd4902ffecc16e12fa4e1e.water.jpg_600x330_66554233.jpg" />
            <div class="banner-info">
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>15
                </div>
                <div class="banner-title">
                    世纪欢乐园
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary"
        @close="handleGallaryClose"></common-gallary>
    </div>


</template>

<script type="text/javascript">
import CommonGallary from 'common/gallary/Gallary'
export default{
    name: 'DetailBanner',
    data (){
        return{
           showGallary: false,
           imgs: ['http://img1.qunarzz.com/sight/p0/1412/12/88ee179e9cdd4902ffecc16e12fa4e1e.water.jpg_r_800x800_b4eaa620.jpg',
                'http://img1.qunarzz.com/sight/p0/201309/02/48e39192336e6c8bc8d65eac.jpg_r_800x800_1b739d9b.jpg'
                ]
        }
    },
    components: {
        CommonGallary,
    },
    methods: {
        handleBannerClick (){
            this.showGallary = true
        },
        handleGallaryClose (){
            this.showGallary = false
        }
    }
}
</script>
<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
        width: 100%
    .banner-info
        position: absolute
        left: 0
        right: 0
        bottom: 0rem
        line-height: .6rem
        color: #fff
        padding: .2rem 0
        background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.5))
        .banner-title
            font-size: .36rem
            padding: 0 .2rem
            text-shadow: 0 1px 2px rgba(0,0,0,0.70)
        .banner-number
            box-sizing:border-box
            width: 1.2rem
            height: .4rem
            font-size: .24rem
            line-height: .4rem
            border-radius: .2rem
            padding: 0 .2rem
            background: rgba(0,0,0,.5)
            text-align: center
            margin: 0 0.2rem
            .banner-icon
                font-size: .24rem
                margin-right: .14rem
</style>