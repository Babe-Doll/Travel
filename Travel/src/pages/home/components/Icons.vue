<template>
    <div class="icons">
        <swiper :options="swiperOption" >

            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class='icon-img-content' :src="item.imgUrl" />
                    </div>

                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script type="text/javascript">
export default{
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data (){
        return{
            swiperOption:{}
        }
    },
    computed: {
        pages (){
            const pages = []
            this.list.forEach((item,index) => {
                // 取整  0就是0页 1就是1页
                const page = Math.floor(index/8)
                // 如果pages中不含page页
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icons
        margin-top: .1rem
    .icon
        position: relative
        overflow: hidden
        float: left
        height: 0
        // 下面这俩都是相当于父元素的
        width: 25%
        padding-bottom: 25%
        .icon-img
            // 因为这个absolute相当于根元素的了 所以上面一级要加relative
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            // height: 80%
            .icon-img-content
                display: block
                // 可以使盒子居中
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .44rem
            height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis()

</style>