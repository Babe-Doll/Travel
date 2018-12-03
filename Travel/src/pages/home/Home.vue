<template>
    <div>
         <home-header></home-header>
    </div>

</template>

<script type="text/javascript">
// 局部组件
import HomeHeader from './components/Header.vue'
export default{
    name: 'Home',
    components:{
        //键和值一样的话就可以简写HomeHeader:HomeHeader => HomeHeader
        HomeHeader
    }
}
</script>
<style>

</style>