// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7lnxw35OT2QwWz_-sh66Uw9kvKopMo4o",
  authDomain: "ucollab-486a6.firebaseapp.com",
  databaseURL: "https://ucollab-486a6-default-rtdb.firebaseio.com",
  projectId: "ucollab-486a6",
  storageBucket: "ucollab-486a6.appspot.com",
  messagingSenderId: "926522356417",
  appId: "1:926522356417:web:df99a2ad93156853139a40",
  measurementId: "G-RV4Y4S2H58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);