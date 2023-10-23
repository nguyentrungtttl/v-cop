import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { collection, doc, setDoc, getDoc} from 'firebase/firestore';

export const handleLogin = async ({id, password}) => {
  try {
    const response = await signInWithEmailAndPassword(FIREBASE_AUTH, `${id}@gmail.com`, password);
    // console.log(response);
    const currentUser = FIREBASE_AUTH.currentUser;
    let position;
    if (currentUser) {
      const currentUserID = currentUser.uid;
      const userDocRef = doc(FIRESTORE_DB, 'users', currentUserID);
      const res = await getDoc(userDocRef);
      position = res.data().position
      // console.log("type", type.data());
    }

    return position;
  } catch (error) {
    console.log('signInwithemailandpassword: ', `${id}@gmail.com`, password);

    console.log('Login Error:', error);
    return false;
  }
};

export const handleSignUp = async ({ id, password, username, phoneNum,job="undefined",birthdate="00/00/0000", position="user" }) => {
    try {
      const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, `${id}@gmail.com`, password);
      console.log(response);
  
      const currentUser = FIREBASE_AUTH.currentUser;
      if (currentUser) {
        const currentUserID = currentUser.uid;
        const userDocRef = doc(FIRESTORE_DB, 'users', currentUserID);
        await setDoc(userDocRef, {
          position: 'user', 
          name: username,
          id: id,
          phoneNumber: phoneNum,
          job: job,
          birthdate: birthdate,
          position: position
        });
        console.log('User information successfully added to Firestore');
      } else {
        console.log('No current user found');
      }
    } catch (error) {
      console.log('Signup Error:', error);
    }
};

export const handleSignOut = async()=> {
  await signOut();
}