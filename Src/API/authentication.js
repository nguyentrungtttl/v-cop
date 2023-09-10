import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


export const handleLogin = async(email, password)=>{
    try{
        const response = await signInWithEmailAndPassword( FIREBASE_AUTH, email,password)
        console.log(response);
        return true;
    } catch (error){
        console.log(error);
        return false;
    }
  }

export const handleSignUp = async(email, password)=>{
    try{
        const response = await createUserWithEmailAndPassword(FIREBASE_AUTH ,email,password)
        console.log(response);
    } catch (error){
        console.log(error);
    }
  }

  