<template>
    <div>
        <detail-banner :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
            ></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"> </detail-list>

        <div class="content">

        </div>
    </div>

</template>

<script type="text/javascript">
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'

export default{
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data (){
        return{
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list:[]
        }

    },
    methods: {
        getDetailInfo1 (){
            axios.get('/api/detail.json?id=' +this.$route.params.id)
        },
        getDetailInfo (){
            axios.get('/api/detail.json',{
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res){
            res =res.data
            if(res.ret && res.data){
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list=data.categoryList
            }
        }
    },
    mounted (){
        this.getDetailInfo()
    }

}
</script>
<style lang="stylus" scoped>
    .content
        height: 50rem
</style>