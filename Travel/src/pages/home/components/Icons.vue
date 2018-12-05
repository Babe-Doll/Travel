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
    data (){
        return{
            swiperOption:{},
            iconList:[{
              id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: "景点门票"
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc: "一日游"
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                desc: "郑州必游"
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/5e/c640ec3b7d7ae802.png',
                desc: "打卡圣地"
            },{
                id: '0005',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
                desc: "当地好玩"
            },{
                id: '0006',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                desc: "动物园"
            },{
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                desc: "名胜古迹"
            },{
                id: '0008',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                desc: "景点门票"
            },{
                id: '0009',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                desc: "一日游"
            },{
                id: '0010',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                desc: "babedoll隐藏测试"
            }]
        }
    },
    computed: {
        pages (){
            const pages = []
            this.iconList.forEach((item,index) => {
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