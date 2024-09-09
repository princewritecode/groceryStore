// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqGtGqDbBJErrp8qOql6_ysju8DiOGbQk",
    authDomain: "foodo-1f942.firebaseapp.com",
    projectId: "foodo-1f942",
    storageBucket: "foodo-1f942.appspot.com",
    messagingSenderId: "979685323535",
    appId: "1:979685323535:web:835cd0f7a49bf88bd2047a",
    measurementId: "G-K7Y1TM5LY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();