<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" >
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>

            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">

export default{
    name: 'HomeRecommend',
    data (){
        return{
            recommendList: [{
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/12/88ee179e9cdd4902ffecc16e12fa4e1e.water.jpg_200x200_08bf7b1e.jpg',
                    title: '世纪欢乐园',
                    desc: "探寻火车文化，感受迪斯尼欢乐"
                },{
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/bb/bb456c41736963ab.water.jpg_200x200_042d91c3.jpg',
                    title: '禅宗少林音乐大典',
                    desc: "🔥好评如潮，小伙伴热推景点~"
                },{
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/37/37da055bc2d39755a3.img.jpg_200x200_aec295f8.jpg',
                    title: '郑州方特欢乐世界',
                    desc: "高科技主题乐园，方特成就欢乐梦想"
                },{
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/7f/7f95b9cb5cc9e227.water.jpg_200x200_2767529b.jpg',
                    title: '郑州绿博园',
                    desc: "近期小伙伴们收藏最！多！的景点😊"
                },{
                    id: '0005',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/bb/bb456c41736963ab.water.jpg_200x200_042d91c3.jpg',
                    title: '禅宗少林音乐大典',
                    desc: "🔥好评如潮，小伙伴热推景点~"
                },{
                    id: '0006',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/37/37da055bc2d39755a3.img.jpg_200x200_aec295f8.jpg',
                    title: '郑州方特欢乐世界',
                    desc: "高科技主题乐园，方特成就欢乐梦想"
                },{
                    id: '0007',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/7f/7f95b9cb5cc9e227.water.jpg_200x200_2767529b.jpg',
                    title: '郑州绿博园',
                    desc: "近期小伙伴们收藏最！多！的景点😊"
                }]
            }
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem //属性规定文本块中首行文本的缩进
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding .1rem
        .item-info
            flex: 1
            padding: .1rem
            // 主要要为父添加100%;那么就不会超出父容器。 但是flex为1的 设置百分100无效 然而用这个min-width:0 其实也就是width为>0 可以间接这么理解 然后确定了width 避免溢出
            min-width:0
            .item-title
                line-height: .54rem
                font-size: .32rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #f55
                background: #fff9f9
                display: inline-block
                ellipsis()
            .item-btn
                display: block
                line-height: .44rem
                margin-top:.16rem
                background: #ff9300
                padding: 0 .2rem
                border-radius: .06rem
                color: #fff
</style>