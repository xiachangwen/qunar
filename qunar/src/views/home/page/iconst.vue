<template>
    <div class='iconts'>
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in getIcont" :key='index'>
                <div v-for="(val,index) in item" :key='index' class='mout'>
                    <img :src="val.imgUrl"/>
                    <h3>{{val.title}}</h3>
                </div>
            </swiper-slide>
          
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

        <!-- {{getIcont}} -->
    </div>
</template>
<script>
export default {
    props:{
        iconsList:Array
    },
    components:{

    },
    data(){
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            },
        }
    },
    computed:{
        getIcont(){
            let page = []
            this.iconsList.forEach((item,index) => {
                let ind = Math.floor(index/8)
                // console.log(ind)
                if(page[ind]){
                    page[ind].push(item)
                } else {
                    page[ind] = []
                    page[ind].push(item)
                }
            })

            return page
        }
    },
    methods:{

    },
    created(){

    },
    mounted(){
        
    }
}
</script>
<style scoped lang="">
.iconts{
    width: 100%;
}

.swiper-slide {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 0.8rem ;
    align-items: center;
}

.swiper-slide .mout{
    flex-shrink: 0;
    width: 25%;
    text-align: center;
    padding-top: 0.3rem;
}

.swiper-slide .mout img{
    width: 59%;
}

.swiper-slide .mout h3{
    font-size: 0.35rem;
    text-align: center;
    font-weight: 500;
}
</style>