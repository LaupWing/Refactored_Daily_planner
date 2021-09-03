import { 
   auth,
   firestore 
} from '../../firebase/utils'

export const actions = {
   async signIn({commit}, auth_obj) {
      try{
         const user = await auth.sign_in(auth_obj)
         commit('setUser', user)
      }catch(e){
         throw new Error(e)
      }
   }
}