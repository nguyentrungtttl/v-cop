import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export const handleLogin = async(id, password)=>{
    try{
        const response = await signInWithEmailAndPassword( FIREBASE_AUTH, `${id}@gmail.com`, password)
        console.log(response);
        return true;
    } catch (error){
        console.log(error);
        return false;
    }
  }

export const handleSignUp = async({id, password, name, phoneNumber})=>{
    const currentUserID = firebase.auth().currentUser?.uid;
    try{
        const response = await createUserWithEmailAndPassword(FIREBASE_AUTH,`${id}@gmail.com`,password)
        console.log(response);
        firestore().collection('user').doc(currentUserID).set({
            name: name,
            id: id,
            phoneNumber: phoneNumber,
        })
    } catch (error){
        console.log(error);
    }
  }

export const storePersonalInfo = async(personalInfo) => {
    try {
        const response = await 
    }
}
  