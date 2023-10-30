import { FIREBASE_AUTH } from '../../firebaseConfig';
import { collection, doc, setDoc, getDoc} from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebaseConfig';

export const getPersonalInfo = async ()=>{
    const currentUser = FIREBASE_AUTH.currentUser;
    let data;
    if (currentUser) {
      const currentUserID = currentUser.uid;
      const userDocRef = doc(FIRESTORE_DB, 'users', currentUserID);
      const res = await getDoc(userDocRef);
      data = res.data()
    }

    return data;
}

