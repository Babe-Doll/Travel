<template>
    <div>
         <home-header></home-header>
         <home-swiper :list="swiperList"></home-swiper>
         <home-icons :list="iconList"></home-icons>
         <home-recommend :list="recommendList"></home-recommend>
         <home-weekend :list="WeekendList"></home-weekend>

    </div>

</template>

<script type="text/javascript">
// 局部组件
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default{
    name: 'Home',
    components:{
        //键和值一样的话就可以简写HomeHeader:HomeHeader => HomeHeader
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data (){
        return {
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            WeekendList: []
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo (){
            axios.get('/api/index.json?city='+this.city).then(
                this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res){
            res =res.data
            if(res.ret && res.data){
                const data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.WeekendList = data.WeekendList

            }
        }
    },
    mounted (){
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated (){
        if(this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>
<style>

</style>