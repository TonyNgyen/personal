// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const key = `${process.env.NEXT_PUBLIC_FIREBASE_APIKEY}`;
const firebaseConfig = {
  apiKey: key,
  authDomain: "personalwebsite-4e033.firebaseapp.com",
  projectId: "personalwebsite-4e033",
  storageBucket: "personalwebsite-4e033.firebasestorage.app",
  messagingSenderId: "820374269986",
  appId: "1:820374269986:web:36798232a77716aea9da7b",
  measurementId: "G-1QYCX36D2L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
