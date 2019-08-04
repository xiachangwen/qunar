<template>
  <div class='home'>
        <Header :city='city' />
        <Swipe :swiperList='swiperList'/>
        <Iconst :iconsList='iconsList'/>
        <Hotlist :hotList='hotList' />
        <Guess :likeList='likeList' />
        <Wekend :vacationList='vacationList' />
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

import Header from './page/header'
import Swipe from './page/swipe'
import Iconst from './page/iconst'
import Hotlist from './page/hotlist'
import Guess from './page/guess'
import Wekend from './page/wekend'

export default {
    props:{
        

    },
    components:{
        Header,
        Swipe,
        Iconst,
        Hotlist,
        Guess,
        Wekend
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['city','swiperList','iconsList','hotList','likeList','vacationList']),

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
<style lang="">
.home{
    width: 100%;
    height: auto;
    overflow-y: scroll;
}
</style>