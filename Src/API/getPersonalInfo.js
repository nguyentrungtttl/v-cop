import { FIRESTORE_DB } from '../../firebaseConfig';
import { collection, doc, setDoc, getDoc} from 'firebase/firestore';
import { FIREBASE_AUTH } from '../../firebaseConfig';

export const getPersonalInfo = async ()=>{
    const currentUser = FIREBASE_AUTH.currentUser;
    const currentUserID = currentUser.uid;
    const userDocRef = doc(FIRESTORE_DB, 'users', currentUserID);
    const result = await getDoc(userDocRef);
    console.log(result.data());
    return(result.data())
}

