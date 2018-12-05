<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
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
    data (){ //data:function()
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                // 支持循环播放
                loop: true,
                autoplay: 3000
            },
            swiperList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/e0/7aed5dde53dabe02.jpg_750x200_92afe34c.jpg'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/6c/b1b8677dc1886d02.jpg_750x200_1931f6c4.jpg'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/d4/d51b0de13bdaeb02.jpg_750x200_a16ebfe3.jpg'
            }]
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