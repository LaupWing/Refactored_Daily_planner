import { firestore } from '../../firebase/utils'

export const actions = {
   async getData({commit, rootState}) {
      try{
         console.log(rootState)
         // const planner = await firestore.get_doc('planner', rootState.user.uid)
         // console.log(planner)
         // console.log(planner.data())
         // commit('setUser', user)
      }catch(e){
         throw new Error(e)
      }
   }
}