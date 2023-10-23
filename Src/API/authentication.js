import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';

export const handleLogin = async (id, password) => {
  
  try {
    const response = await signInWithEmailAndPassword(FIREBASE_AUTH, `${id}@gmail.com`, password);
    console.log(response);
    return true;
  } catch (error) {
    console.log('Login Error:', error);
    return false;
  }
};

export const handleSignUp = async ({ id, password, username, phoneNum,job="undefined",birthdate="00/00/0000" }) => {
    try {
      const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, `${id}@gmail.com`, password);
      console.log(response);
  
      const currentUser = FIREBASE_AUTH.currentUser;
      if (currentUser) {
        const currentUserID = currentUser.uid;
        const userDocRef = doc(FIRESTORE_DB, 'users', currentUserID);
        await setDoc(userDocRef, {
          name: username,
          id: id,
          phoneNumber: phoneNum,
          job: job,
          birthdate: birthdate,
        });
        console.log('User information successfully added to Firestore');
      } else {
        console.log('No current user found');
      }
    } catch (error) {
      console.log('Signup Error:', error);
    }
  };