import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import City from '@/views/city/city'

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
      },{
        path:'/city',
        name:'city',
        component:City
      }
    ]
})

export default router