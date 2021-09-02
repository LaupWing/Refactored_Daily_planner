import { 
   getAuth, 
   signInWithEmailAndPassword, 
   createUserWithEmailAndPassword 
} from 'firebase/auth'
import {
   doc, 
   getFirestore,
   getDoc,
   addDoc,
   setDoc,
   collection
} from 'firebase/firestore'

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
   _firestore: getFirestore(),
   get_user(id){
      return getDoc(doc(this._firestore, 'users', id))
   },  
   add_user(data){
      return addDoc(collection(this._firestore, 'users'), data)
   },  
   update_user(id, data){
      return setDoc(doc(this._firestore, 'users', id), data)
   },  
}