<template>
    <div>
         <home-header></home-header>
         <home-swiper></home-swiper>
         <home-icons></home-icons>
         <home-recommend></home-recommend>
         <home-weekend></home-weekend>

    </div>

</template>

<script type="text/javascript">
// 局部组件
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'

export default{
    name: 'Home',
    components:{
        //键和值一样的话就可以简写HomeHeader:HomeHeader => HomeHeader
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    }
}
</script>
<style>

</style>