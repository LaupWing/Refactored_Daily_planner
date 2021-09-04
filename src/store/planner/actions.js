import { firestore } from '../../firebase/utils'

export const actions = {
   async getData({commit, rootState}) {
      try{
         console.log(rootState)
         const planner = await firestore.get_doc('planner', rootState.user.id)
         console.log(planner)
         console.log(planner.data())
         commit('setPlanner', planner)
      }catch(e){
         throw new Error(e)
      }
   }
}