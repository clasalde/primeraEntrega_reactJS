// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIssGiZI2qzS-1p5aS39fxD5lKxR-cgs8",
  authDomain: "indarg-82853.firebaseapp.com",
  projectId: "indarg-82853",
  storageBucket: "indarg-82853.appspot.com",
  messagingSenderId: "763065631856",
  appId: "1:763065631856:web:9752ab12f92e60723160b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)