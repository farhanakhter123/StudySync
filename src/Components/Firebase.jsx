import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqdUNbkEoYb--cqW_5DHEwSCa8gLwtXIc",
  authDomain: "smart-study-central.firebaseapp.com",
  projectId: "smart-study-central",
  storageBucket: "smart-study-central.appspot.com",
  messagingSenderId: "576004645453",
  appId: "1:576004645453:web:015e533a615e9358d8f204",
  measurementId: "G-JLR6W3D9SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app , auth};