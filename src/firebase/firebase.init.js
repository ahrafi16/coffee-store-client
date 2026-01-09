// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK5MwJtGRUUZgouCmObBJOq92IOLr4QAE",
  authDomain: "coffee-store-app-b9961.firebaseapp.com",
  projectId: "coffee-store-app-b9961",
  storageBucket: "coffee-store-app-b9961.firebasestorage.app",
  messagingSenderId: "1046328516418",
  appId: "1:1046328516418:web:1aa1bbaa0e93fe7ad0b2db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);