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
   get_doc(collection, id){
      return getDoc(doc(this._firestore, collection, id))
   },  
   add_doc(collection, data){
      return addDoc(collection(this._firestore, collection), data)
   },  
   update_doc(collection, id, data){
      return setDoc(doc(this._firestore, collection, id), data)
   },  
}