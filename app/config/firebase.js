import { initializeApp } from 'firebase/app';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import {...} from "firebase/database";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD0sDD_9QHJoMEC_H4HWjCAChjoW0c_Fyw",
    authDomain: "lokel-1f4eb.firebaseapp.com",
    projectId: "lokel-1f4eb",
    storageBucket: "lokel-1f4eb.appspot.com",
    messagingSenderId: "769590032053",
    appId: "1:769590032053:web:22e7f00d819d097f6a70fc"
};

const app = initializeApp(firebaseConfig);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);