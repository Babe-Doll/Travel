<template>
    <div>
       <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>{{this.gallaryImgs.length}}
                </div>
                <div class="banner-title">
                    {{this.sightName}}
                </div>
            </div>
        </div>

        <fade>
            <common-gallary :imgs="gallaryImgs" v-show="showGallary"
            @close="handleGallaryClose"></common-gallary>
        </fade>
    </div>


</template>

<script type="text/javascript">
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'

export default{
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    data (){
        return{
           showGallary: false
        }
    },
    components: {
        CommonGallary,
        Fade
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