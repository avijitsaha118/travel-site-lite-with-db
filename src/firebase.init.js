// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyTOBRteOprbqRboFVr0sBrKg2GdNznGg",
  authDomain: "travel-booking-site-25ee6.firebaseapp.com",
  projectId: "travel-booking-site-25ee6",
  storageBucket: "travel-booking-site-25ee6.appspot.com",
  messagingSenderId: "161847172544",
  appId: "1:161847172544:web:ae78de154881b5898ffc25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;