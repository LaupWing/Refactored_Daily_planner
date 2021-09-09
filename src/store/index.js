import Vue from 'vue'
import Vuex from 'vuex'
import { user } from './user'
import { planner } from './planner'
import { _day } from './_day'

Vue.use(Vuex)

export default new Vuex.Store({
   modules: {
      user,
      planner,
      _day
   }
})