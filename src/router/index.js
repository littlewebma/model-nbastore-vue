import Vue from 'vue'
import Router from 'vue-router'
import nba from '../components/nba.vue'
import detail from '../components/detail.vue'
import cart from '../components/cart.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',redirect:'/nba'},
        {path:'/nba',name:'nba',component:nba},
        {path:'/detail',name:'detail',component:detail},
        {path:'/cart',name:'cart',component:cart},
    ]
})
