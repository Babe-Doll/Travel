<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id">
            <img class="swiper-img"
            :src="item.imgUrl" />
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>

        </swiper>
    </div>
</template>

<script type="text/javascript">
export default{
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data (){ //data:function()
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                // 支持循环播放
                loop: true,
                autoplay: 3000
            }
        }
    },
    computed: {
        showSwiper (){
            return this.list.length
        }
    }
}
</script>
<style lang="stylus" scoped>
// 样式穿透 wrapper下面所有子组件只要出现swiper-pagination-bullets就变成红色
    .wrapper>>> .swiper-pagination-bullet
        background: #fff !important
    .wrapper
        width: 100%
        overflow: hidden
        height: 0
        padding-bottom: 26.67%
        background: #eee
        .swiper-img
            width: 100%
</style>