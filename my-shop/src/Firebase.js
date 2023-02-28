// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "poised-trail-359809.firebaseapp.com",
  projectId: "poised-trail-359809",
  storageBucket: "poised-trail-359809.appspot.com",
  messagingSenderId: "649607852930",
  appId: "1:649607852930:web:854ec762e96cad48e1959b",
  measurementId: "G-GKPYEWEPFP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
