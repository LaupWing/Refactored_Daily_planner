import Vue from 'vue'
import './firebase/init'
import App from './App.vue'
import router from './router'
import store from './store'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import './index.css'
import './registerComponents'

Vue.config.productionTip = false

let app = null
// signOut(getAuth())
onAuthStateChanged(getAuth(), async (user) => {
   if (!app) {
      await store.commit('user/setUser', user)
      console.log(user)
      app = new Vue({
         store,
         router,
         render: h => h(App)
      }).$mount('#app')
   }
})