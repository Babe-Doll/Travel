<template>
    <div>
         <home-header></home-header>
         <home-swiper></home-swiper>
         <home-icons></home-icons>

    </div>

</template>

<script type="text/javascript">
// 局部组件
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'

export default{
    name: 'Home',
    components:{
        //键和值一样的话就可以简写HomeHeader:HomeHeader => HomeHeader
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>
<style>

</style>