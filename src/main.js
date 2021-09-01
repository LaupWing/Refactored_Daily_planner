import Vue from 'vue'
import './firebase/init'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import './registerGlobals'

Vue.config.productionTip = false

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app')
