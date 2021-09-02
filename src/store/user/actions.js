import { 
   auth,
   firestore 
} from '../../firebase/utils'

export const actions = {
   async signIn({dispatch}, {email, password}) {
      try{
         const user = await auth.sign_in(email, password)
         commit('setUser', user)
      }catch(e){
         throw new Error(e)
      }
   },
   async signUp({dispatch}, {email, password}){
      try{
         const user = await auth.create(email, password)
         commit('setUser', user)
      }catch(e){
         throw new Error(e)
      }
   },
   async getUser({commit}, id){

   },
   async createUserInFirestore({dispatch}, id){
      
   }
}