import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth()
// console.log('auth --->' ,auth)
export const actions = {
   async login({commit}, {email, password}) {
      try{
         const user = await signInWithEmailAndPassword(auth, email, password)
         commit('')
      }catch(e){
         console.log(e)
      }
   }
}