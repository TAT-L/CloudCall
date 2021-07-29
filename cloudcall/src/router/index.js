import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../views/Home'
import page1 from '../pages/page1'
import AssociatedCity from '../pages/AssociatedCity'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        children:[
            {
                path: 'page1',
                component: page1,
            
            },
             {
                 path: 'AssociatedCity',
                 component: AssociatedCity

             }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
        routes
})
export default router