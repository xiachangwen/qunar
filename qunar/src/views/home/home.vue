<template>
  <div class='home'>
        <Header :city='city' />
        <Swipe :swiperList='swiperList'/>
        <Iconst :iconsList='iconsList'/>
        <Hotlist :hotList='hotList' />
        <Guess :likeList='likeList' />
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

import Header from './page/header'
import Swipe from './page/swipe'
import Iconst from './page/iconst'
import Hotlist from './page/hotlist'
import Guess from './page/guess'

export default {
    props:{
        

    },
    components:{
        Header,
        Swipe,
        Iconst,
        Hotlist,
        Guess
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['city','swiperList','iconsList','hotList','likeList']),

    },
    methods:{
        ...mapActions(['getdate'])
    },
    created(){
       
    },
    mounted(){
        this.getdate()
    }
}
</script>
<style scoped lang="">
.home{
    width: 100%;
    /* height: auto; */
    overflow-y: auto;
}
</style>