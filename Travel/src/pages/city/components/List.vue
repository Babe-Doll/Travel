<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">
                    当前城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                             {{this.city}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">
                    热门城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id"
                        @click="handlecityclick(item.name)">
                        <div class="button">
                            {{item.name}}
                        </div>
                    </div>

                </div>
            </div>
            <!-- 对象循环的第二项不是index而是key -->
            <div class="area" v-for="(item,key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">
                    {{key}}
                </div>
                <div class="item-list">
                    <div class="item border-bottom"
                    v-for="innerItem of item"
                    :key="innerItem.id"
                     @click="handlecityclick(innerItem.name)"
                    > {{innerItem.name}} </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import Bscroll from 'better-scroll'
import {mapState} from 'vuex'
export default{
     name: 'CityList',
     props: {
        hotCities: Array,
        cities: Object,
        letter: String
     },
     methods: {
        handlecityclick(city){
           this.$store.dispatch('changeCity',city)
           this.$router.push('/')
        }
     },
    computed: {
        ...mapState(['city'])
    },
     mounted (){
        this.scroll = new Bscroll(this.$refs.wrapper)
     },
     watch: {
        letter (){
           if(this.letter){
                const element = this.$refs[this.letter][0]
                 this.scroll.scrollToElement(element)
            }
        }
     }
 }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        overflow: hidden
        position:absolute
        top: 1.58rem
        left:0
        right:0
        bottom:0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
        .button-list
            overflow:hidden
            //给右侧列表留地方
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33%
                .button
                    text-align: center
                    margin: .1rem
                    padding: .1rem 0
                    border-radius: .06rem
                    border: .02rem solid #ccc

        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem


</style>