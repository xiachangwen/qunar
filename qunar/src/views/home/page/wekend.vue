<template>
    <div class='wekend'>
        <div class="quna">
            周末去哪儿
        </div>
        <dl v-for='(item,index) in vacationList' :key='index'>
            <dt>
                <img :src='item.imgUrl' />
            </dt>
            <dd>
                <h3>{{item.title}}</h3>
                <p>{{item.msg}}</p>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:{
        vacationList: Array
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
.wekend{
    width: 100%;
    background: #fff;
}

.quna{
    font-size: 0.48rem;
    padding: 0.4rem 0.3rem;
    background: #eee;
}

dl{
    width: 100%;
}

dl dt img {
    width: 100%;
}

dl dd {
    padding-left: 0.4rem;
}

dl dd h3{
    font-size: 0.4rem;
    font-weight: 500;
    padding: 0.2rem 0;

}

dl dd p{
    font-size: 0.34rem;
    padding: 0.2rem 0;
}
</style>