import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth'
import store from '../store'

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/auth',
      name: 'Auth',
      component: Auth
   },
   {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
   }
]

const router = new VueRouter({
   routes
})

router.beforeEach((to, from, next) => {
   // if (to.name !== 'Auth'){
   //    next()
   // }
   console.log(store.state.user)
   next()
 })


export default router
