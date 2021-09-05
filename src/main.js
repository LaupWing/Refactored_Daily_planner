import Vue from 'vue'
import './firebase/init'
import App from './App.vue'
import router from './router'
import store from './store'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import './index.css'
import './registerComponents'

Vue.config.productionTip = false

let app = null
onAuthStateChanged(getAuth(), async (user) => {
   if (!app) {
      await store.commit('user/setUser', user)
      if(user){
         await store.dispatch('planner/getData')
      }
      app = new Vue({
         store,
         router,
         render: h => h(App)
      }).$mount('#app')
   }
})