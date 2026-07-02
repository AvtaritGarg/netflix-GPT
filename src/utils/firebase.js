// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf1Ko9NQfCv2VHUprOe37WwnMODjLnBp8",
  authDomain: "avtarit-movieapp.firebaseapp.com",
  projectId: "avtarit-movieapp",
  storageBucket: "avtarit-movieapp.firebasestorage.app",
  messagingSenderId: "124013741681",
  appId: "1:124013741681:web:882215bce42f2905ea3dd0",
  measurementId: "G-DTWT9HEHV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();