<template>
    <div class='head'>
        <p><i class="iconfont icon-chevron-thin-left"></i></p>
        <span></span>
        <div>{{city}} <i class="iconfont icon-triangle-down"></i></div>
    </div>
</template>
<script>
export default {
    props:{
        city:String,
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
<style scoped lang="stylus">
@import '~@/assets/vue.styl'

.head{
    display flex
    background $background
    font-size 0.4rem
    align-items center
    justify-content  space-between
    color  $fontColor
    padding 0.2rem 0

    
    p{
        width 11%
        text-align center
        
        i{
            font-size 0.6rem
        }
    }

    span {
        flex 1
        background #fff
        height 0.8rem
    }

    div {
        width 18%
        text-align center
    }
}

</style>