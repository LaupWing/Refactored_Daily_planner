import { firestore } from '../../firebase/utils'

export const actions = {
   async getData({commit, rootState}) {
      try{
         console.log(rootState)
         const planner = await firestore.get_doc('planner', rootState.user.id)
         commit('setPlanner', planner.data())
      }catch(e){
         throw new Error(e)
      }
   }
}