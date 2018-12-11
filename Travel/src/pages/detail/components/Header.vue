<template>
    <div>
        <router-link tag="div" to="/" class="header-abs"
            v-show="showAbs"
            >
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <div class="header-fixed"
            :style="opacityStyle" v-show="!showAbs">
             <router-link tag="div" to="/" >
                <div class="iconfont fixed-back-icon">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>


</template>

<script type="text/javascript">
export default{
    name: 'DetailHeader',
    data (){
        return {
            showAbs: true,
            opacityStyle: {
                opacity:0
            }
        }
    },
    methods: {
        handleScroll(){
            const top =document.documentElement.scrollTop
            if(top>60){
                let opacity = top /140
                opacity = opacity > 1 ? 1 : opacity

                this.opacityStyle= {
                    opacity
                }
                this.showAbs = false
            }else{
                this.showAbs = true
            }
        }
    },
    activated (){
        window.addEventListener('scroll',this.handleScroll)
    }

}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    line-height: .8rem
    text-align: center
    background: rgba(0,0,0,0.5)
    .back-icon
        color: #fff
        font-size: .4rem
.header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    // overflow: hidden
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size:.32rem
    .fixed-back-icon
        position: absolute
        top:0
        left:0
        width: .64rem
        text-align:center
        font-size:.4rem
        color:#fff
</style>