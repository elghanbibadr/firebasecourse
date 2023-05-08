// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKoCjVBFqqHRkH-bFP_QUhme4GltiiOaw",
  authDomain: "learrfirebase.firebaseapp.com",
  projectId: "learrfirebase",
  storageBucket: "learrfirebase.appspot.com",
  messagingSenderId: "903911668418",
  appId: "1:903911668418:web:6e48bf4444fe196a73d95b",
  measurementId: "G-EQLYL7LGYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)