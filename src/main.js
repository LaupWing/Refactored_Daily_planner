import Vue from 'vue'
import './firebase/init'
import App from './App.vue'
import router from './router'
import store from './store'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import './index.css'
import './registerGlobals'

Vue.config.productionTip = false

let app = null

onAuthStateChanged(getAuth(), () => {
   if (!app) {
      app = new Vue({
         store,
         router,
         render: h => h(App)
      }).$mount('#app')
   }
})