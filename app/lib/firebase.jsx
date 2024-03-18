// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2D7Nigf0PgpFRWpVnmGDNkHZ8DFyEsxM",
  authDomain: "expertkitauth.firebaseapp.com",
  projectId: "expertkitauth",
  storageBucket: "expertkitauth.appspot.com",
  appId: "1:627496731356:web:e1dbb6d52687b7f73fea19",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

const auth = getAuth(app);

export { auth, app, db };
