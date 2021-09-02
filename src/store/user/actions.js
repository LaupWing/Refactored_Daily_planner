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
   },
   async signUp({commit}, {email, password}){
      try{
         const user = await auth.create(email, password)
         commit('setUser', user)
      }catch(e){
         throw new Error(e)
      }
   },
   async getUser({commit}, id){
      const user = await firestore.get_user(id)
      commit('setUser', user.data())
   },
   async createUserInFirestore({dispatch}, id){

   }
}