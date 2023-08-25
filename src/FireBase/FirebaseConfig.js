// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTSm43GzI9-ekmAp-fM8w5eRio_Vz4lkU",
    authDomain: "thryft-3f076.firebaseapp.com",
    projectId: "thryft-3f076",
    storageBucket: "thryft-3f076.appspot.com",
    messagingSenderId: "685910972396",
    appId: "1:685910972396:web:fbd0a9a42cb20e294312c9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

