<template>
    <div class="swipe">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperList" :key='index'><img :src="require('../../../image/'+item.imgUrl)"/></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <!-- {{data.swiperList}} -->
    </div>
</template>
<script>
export default {
    props:{
        swiperList:Array
    },
    components:{

    },
    data(){
        return {
            swiperOption: {
                loop:true,
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    computed:{
        // swiper() {
        //     return this.$refs.mySwiper.swiper
        // }
    },
    methods:{

    },
    created(){

    },
    mounted(){
       
         
        // console.log('this is current swiper instance object', this.swiper)
        // this.swiper.slideTo(1, 1000, false)
    }
}
</script>
<style scoped lang="">
.swipe{
    width: 100%;
    height: 2rem;
    padding-bottom: 0.6rem;
}
.swipe .swiper-container .swiper-slide{
    width: 100%;
    height: 100%;   
}

.swiper-container .swiper-slide img{
    width: 100%;
}

/* .swiper-pagination  /deep/ .swiper-pagination-bullet-active{
    background: #fff;
} */
.swiper-pagination  >>> .swiper-pagination-bullet-active{
    background: #fff;
}
</style>