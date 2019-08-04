<template>
    <div class="guess">
        <dl v-for='(item,index) in likeList' :key='index'>
                <dt>
                    <img :src='item.imgUrl' />
                </dt>
                <dd>
                    <h3>{{item.title}}</h3>
                    <p>{{item.msg}}条评论</p>
                    <span>￥{{item.pre}}起</span>
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
}

dl dd h3{
    font-size: 0.5rem;
    padding-top: 0.1rem;
   
}

dl dd p{
     font-size: 0.35rem;
     padding-top: 0.4rem;
}

dl dd span{
    font-size: 0.5rem;
    display: flex;
    color: orange;
    padding-top: 0.4rem;
}
</style>