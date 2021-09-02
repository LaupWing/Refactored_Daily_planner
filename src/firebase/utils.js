import { 
   getAuth, 
   signInWithEmailAndPassword, 
   createUserWithEmailAndPassword 
} from 'firebase/auth'
import {firebase} from './init'

console.log(firebase)

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

console.log(getDoc)

export const db = {
   test(id){
      return getDoc(id)
   }  
}