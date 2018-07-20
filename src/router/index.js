import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/home'
import Film from '../components/film'
import Nowplaying from '../components/nowplaying'
import Comingsoon from '../components/comingsoon'

export default new Router({
  routes: [
    {
    	path: '/home',
    	component:Home 
    },
    {
        path: '/film',
        component:Film,
        children:[
            {
                path: 'nowplaying',
                component:Nowplaying 
            },
            {
                path: 'comingsoon',
                component:Comingsoon 
            },
            {
                path:'/film',
                redirect:'/film/nowplaying'
            }
        ] 
    },
    {
    	path: "*",
    	redirect:"/home"
    }
  ]
})
