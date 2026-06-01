// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCewY5iySNAxd5oFFuRmY8d86mRYEqQUb8",
  authDomain: "netflix-gpt-by-avtarit.firebaseapp.com",
  projectId: "netflix-gpt-by-avtarit",
  storageBucket: "netflix-gpt-by-avtarit.firebasestorage.app",
  messagingSenderId: "423426437757",
  appId: "1:423426437757:web:4c633de92d31a05aebb714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();