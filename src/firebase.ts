// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAsjZXqJk9vCHynhhq8DjcpFBk98JYXD8",
  authDomain: "cis371-dfa68.firebaseapp.com",
  projectId: "cis371-dfa68",
  storageBucket: "cis371-dfa68.firebasestorage.app",
  messagingSenderId: "223771499102",
  appId: "1:223771499102:web:7163f21d5e7996f94772cf",
  measurementId: "G-T3F71NBZDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics
getAnalytics(app);
const db = getFirestore(app);

export { app };
export default db;
