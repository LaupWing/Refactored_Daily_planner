import { 
   getAuth, 
   signInWithEmailAndPassword, 
   createUserWithEmailAndPassword 
} from 'firebase/auth'

import {getDoc} from 'firebase/firestore'

export const auth = {
   _auth: getAuth(),
   sign_in({email, password}){
      return signInWithEmailAndPassword(this._auth, email, password)
   },
   create({email, password}){
      return createUserWithEmailAndPassword(this._auth, email, password)
   },
}

export const firestore = {
   test(id){
      return getDoc(id)
   }  
}