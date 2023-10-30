import { FIREBASE_AUTH } from '../../firebaseConfig';
import { collection, doc, setDoc, getDoc, query, where} from 'firebase/firestore';
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

export const getInfoFromPlateNumber = async({plateNumber}) => {
    const ref = doc(FIRESTORE_DB, 'user')
    const userSnapShot = await getDoc(ref)
    let data;
    userSnapShot.forEach((doc)=>{
        const userId = doc.id
        const userData = doc.data();
        if (userData.plateNumber === plateNumber) {
            data = userData;
            console.log('this is the owner of the car', plateNumber);
        }
    })
    return data;
}