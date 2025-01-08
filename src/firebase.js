// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtHlmoIWxhRoBd0-lhELpG1ANJUGs9DVE",
  authDomain: "todo-list-eb579.firebaseapp.com",
  projectId: "todo-list-eb579",
  storageBucket: "todo-list-eb579.firebasestorage.app",
  messagingSenderId: "290589569140",
  appId: "1:290589569140:web:316c9610eea195fe5c6121",
  measurementId: "G-JWMGVXQPKH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider= new GoogleAuthProvider();
export const db = getFirestore(app);