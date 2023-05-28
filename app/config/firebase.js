import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD0sDD_9QHJoMEC_H4HWjCAChjoW0c_Fyw",
    authDomain: "lokel-1f4eb.firebaseapp.com",
    projectId: "lokel-1f4eb",
    storageBucket: "lokel-1f4eb.appspot.com",
    messagingSenderId: "769590032053",
    appId: "1:769590032053:web:22e7f00d819d097f6a70fc"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);