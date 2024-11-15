// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVOPRgqpoFpHYDj-fQA7NZvhKFade1TJo",
  authDomain: "personalwebsite-4e033.firebaseapp.com",
  projectId: "personalwebsite-4e033",
  storageBucket: "personalwebsite-4e033.firebasestorage.app",
  messagingSenderId: "820374269986",
  appId: "1:820374269986:web:36798232a77716aea9da7b",
  measurementId: "G-1QYCX36D2L",
};

// Initialize Firebase

let analytics;
/** @type {import('firebase/firestore').Firestore} */
let db;
/** @type {import('firebase/auth').Auth} */
let auth;
let app;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== "undefined") {
    analytics = getAnalytics(app);
  }

  // Access Firebase services using shorthand notation
  db = getFirestore(app);
  auth = getAuth(app);
}

export { app, analytics, db, auth };
