<template>
        <ul class="list">
            <li class="item" v-for="item of letters" :key="item"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
                @click="handleLetterClick"
                :ref="item"
                >{{item}}</li>

        </ul>
</template>

<script type="text/javascript">

export default{
     name: 'CityAlphabet',
     props: {
        cities: Object,

     },
     computed: {
        letters (){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return (letters)
        }
     },
     data (){
        return {
            touchStatus: false
        }
     },
     methods: {
        handleLetterClick (e){
            this.$emit('change',e.target.innerText)

        },
        handleTouchStart (){
            this.touchStatus = true
        },
        handleTouchMove (e){
            if(this.touchStatus){
                // 获取a元素距离顶部高度
                const startY =this.$refs['A'][0].offsetTop
                const touchY=e.touches[0].clientY - 79
                const index = Math.floor((touchY - startY) / 20)
                if(index >= 0 && index<= this.letters.length)
                {
                    this.$emit('change',this.letters[index])
                }

            }
        },
        handleTouchEnd (){
            this.touchStatus = false
        }
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