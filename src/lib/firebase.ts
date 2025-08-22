// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXqtwT3Z-3Qdx2Mr5OWzhdxDJh40mSBFo",
  authDomain: "shofy-4f642.firebaseapp.com",
  projectId: "shofy-4f642",
  storageBucket: "shofy-4f642.appspot.com",
  messagingSenderId: "422304763333",
  appId: "1:422304763333:web:779e63d37c13e033f40fac",
  measurementId: "G-PCXWQX43GH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
