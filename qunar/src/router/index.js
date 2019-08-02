import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'

Vue.use(Router)

const router = new Router({
    routes:[
      {
        path:'/',
        redirect:{name:'home'}
      },{
        path:'/home',
        name:'home',
        component:Home
      }
    ]
})

export default router