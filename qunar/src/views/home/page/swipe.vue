<template>
    <div class="swipe">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide><img src="http://pic41.nipic.com/20140524/9643307_104442624152_2.jpg"/></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    props:{

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
            },
            callback:{

            }
        }
    },
    computed:{
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    methods:{

    },
    created(){

    },
    mounted(){
        this.$axios.get('/api/homeData.json').then((res) => {
            console.log(res)
        })
        // console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(1, 1000, false)
    }
}
</script>
<style scoped lang="">
.swipe{
    width: 100%;
    height: 2rem;
}
.swipe .swiper-container .swiper-slide{
    width: 100%;
    height: 100%;   
}

.swiper-container .swiper-slide img{
    width: 100%;
    height: 100px;
}
</style>