<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id"
                :to="'/detail/'+ item.id">
                <img class="item-img" :src="item.imgUrl" >
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>

            </router-link>
        </ul>
    </div>
</template>

<script type="text/javascript">

export default{
    name: 'HomeRecommend',
    props: {
        list: Array
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