import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore' 
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
    apiKey: "AIzaSyC4KuR9nqlxebg4rL0CtLABLrCFqzfJI9Y",
    authDomain: "fir-traffic-a5c0b.firebaseapp.com",
    databaseURL: "https://fir-traffic-a5c0b-default-rtdb.firebaseio.com",
    projectId: "fir-traffic-a5c0b",
    storageBucket: "fir-traffic-a5c0b.appspot.com",
    messagingSenderId: "810273520335",
    appId: "1:810273520335:web:4df66e5872ba9e4ba815ba",
    measurementId: "G-JRQX5LDRXE"
  };
  

//initialize
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)