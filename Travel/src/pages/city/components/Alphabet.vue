<template>
        <ul class="list">
            <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>

        </ul>
</template>

<script type="text/javascript">

export default{
     name: 'CityAlphabet',
     props: {
        cities: Object
     }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .list
        //做垂直居中用flex下面三条
        display: flex
        flex-direction: column
        justify-content: center

        position: absolute
        top: 1.58rem
        right: 0
        width: .4rem
        bottom:0
        .item
            line-height: .4rem
            text-align: center
            color: $bgColor
</style>