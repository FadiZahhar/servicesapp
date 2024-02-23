// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZRmrAhdBhHef9zw_tXQc4dF1sy6gRy2I",
    authDomain: "serviceapp-247dc.firebaseapp.com",
    projectId: "serviceapp-247dc",
    storageBucket: "serviceapp-247dc.appspot.com",
    messagingSenderId: "667935358920",
    appId: "1:667935358920:web:ddda1663d2d9de94f70afd",
    measurementId: "G-TSMFH18D2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with the Firebase app instance
export const db = getFirestore(app);

// Initialize Firebase Storage with the Firebase app instance
export const storage = getStorage(app);



