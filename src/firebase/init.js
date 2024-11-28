// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCjBgXejMpwOsK3IMvC3NOfjMw8Hu1wLTc",
  authDomain: "movie-list-1809f.firebaseapp.com",
  projectId: "movie-list-1809f",
  storageBucket: "movie-list-1809f.firebasestorage.app",
  messagingSenderId: "94654060592",
  appId: "1:94654060592:web:9b95de9290e8447319f5f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {db, auth};