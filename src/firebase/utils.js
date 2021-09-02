import { 
   getAuth, 
   signInWithEmailAndPassword, 
   createUserWithEmailAndPassword 
} from 'firebase/auth'

export const auth = {
   _auth: getAuth(),
   sign_in: ({email, password})=>{
      return signInWithEmailAndPassword(this._auth, email, password)
   },
   create: ({email, password})=>{
      return createUserWithEmailAndPassword(this._auth, email, password)
   },
}
