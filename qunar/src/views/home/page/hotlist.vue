<template>
    <div class='hotlist'>
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
    display: flex;
    padding-left: 0.3rem;
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