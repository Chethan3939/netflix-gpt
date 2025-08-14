// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjzsIHUC0zMENjQO45CjfbRDyL2_Hf1Yc",
  authDomain: "netflixgpt-d52f7.firebaseapp.com",
  projectId: "netflixgpt-d52f7",
  storageBucket: "netflixgpt-d52f7.firebasestorage.app",
  messagingSenderId: "656645392733",
  appId: "1:656645392733:web:cd48f3b5ecad9595c880b4",
  measurementId: "G-PZTL98R7SD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();  