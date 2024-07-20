// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRDcbB31A3t1aoprD8VYp3TRyOOVkj28Q",
  authDomain: "chatapp-54b8d.firebaseapp.com",
  projectId: "chatapp-54b8d",
  storageBucket: "chatapp-54b8d.appspot.com",
  messagingSenderId: "330994004597",
  appId: "1:330994004597:web:50d7035e3fb6ac60a97e3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)