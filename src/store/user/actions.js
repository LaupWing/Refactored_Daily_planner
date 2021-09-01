import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth()

export const actions = {
   async login({commit}, {email, password}) {
      try{
         const user = await signInWithEmailAndPassword(auth, email, password)
         commit('setUser', user)
      }catch(e){
         throw new Error(e)
      }
   }
}