// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyB9HlI0aCRaXQ8Chon1Co3a-c5DX2K569U",
    authDomain: "farhanms123-e28bd.firebaseapp.com",
    projectId: "farhanms123-e28bd",
    storageBucket: "farhanms123-e28bd.appspot.com",
    messagingSenderId: "965310500866",
    appId: "1:965310500866:web:fca0d1365a48d581c4171b",
    measurementId: "G-SYCNCVL143"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
