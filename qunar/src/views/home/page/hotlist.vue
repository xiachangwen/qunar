<template>
    <div class='hotlist'>
        <div class="hothead">
            <h3><img src='../../.../../../image/2.png' />本周热门榜单</h3>
            <p>全部榜单 <i class="iconfont icon-chevron-thin-right"></i></p>
        </div>
        <div class="dlis">
            <dl v-for='(item,index) in hotList' :key='index'>
                <dt>
                    <img :src='item.imgUrl' />
                </dt>
                <dd>
                    <h3>{{item.title}}</h3>
                    <span>￥{{item.mark}}起</span>
                </dd>
            </dl>
        </div>
            
    </div>
</template>
<script>
export default {
    props:{
        hotList: Array
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

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
.hotlist{
    width: 100%;
    height: auto;
    padding-left: 0.3rem;
    background: #fff;
    margin-top: 0.2rem;
}

.hothead{
    display: flex;
    font-size: 0.35rem;
    padding: 0.3rem 0;
    justify-content: space-between;
}

.hothead h3{
    font-size: 0.46rem;
    font-weight: 500;
}

.hothead h3 img {
    width: 0.45rem;
    height: 0.45rem;
}

.hothead p{
    font-size: 0.34rem;
}


.dlis{
  display: flex;
  overflow-x: scroll;
}

dl{
   height: auto;
   padding: 0.1rem;
   text-align: center;
}

dl dt img{
    width: 2.7rem;
    height: 2.7rem;
}

dl dd h3{
    font-size: 0.32rem;
    padding-top: 0.1rem;
    font-weight: 500;
    overflow: hidden;
    width: 100%;
    height: 0.4rem;
}
dl dd span{
    font-size: 0.32rem;
    color: orange;
}
</style>