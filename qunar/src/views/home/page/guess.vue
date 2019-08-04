<template>
    <div class="guess">
        <div class="gueser">
           <i class="iconfont icon-shoucang1"></i> 猜你喜欢
        </div>
        <dl v-for='(item,index) in likeList' :key='index'>
                <dt>
                    <img :src='item.imgUrl' />
                </dt>
                <dd>
                    <h3>{{item.title}}</h3>
                    <p>{{item.msg}}条评论</p>
                    <span>￥<b>{{item.pre}}</b>起</span>
                    <h4>{{item.map}}</h4>
                </dd>
            </dl>
    </div>
</template>
<script>
export default {
    props:{
        likeList: Array
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
.guess{
    width: 100%;
    height: 100%;
    margin-top: 0.2rem;
    background: #fff;
    padding-bottom: 0.3rem;
}

.gueser{
    font-size: 0.48rem;
    padding: 0.3rem;
}

.gueser i {
    color: red;
    font-size: 0.49rem;
}

dl{
   height: auto;
   padding: 0.4rem 0 0 0.4rem;
   display: flex;
}

dl dt img{
    width: 2.7rem;
    height: 2.7rem;
   
}

dl dd{
     padding-left: 0.3rem;
     position: relative;
     width: 100%;
}

dl dd h3{
    font-size: 0.46rem;
    padding-top: 0.1rem;
    font-weight: 500;
   
}

dl dd p{
     font-size: 0.35rem;
     padding-top: 0.4rem;
}

dl dd span{
    font-size: 0.34rem;
    display: flex;
    color: orange;
    padding-top: 0.4rem;
    display: flex;
    align-items: flex-end;
}

dl dd span b {
    font-size: 0.55rem;
}

dl dd h4{
    font-size: 0.34rem;
    position: absolute;
    right: 0.2rem;
    font-weight: 500;
}
</style>