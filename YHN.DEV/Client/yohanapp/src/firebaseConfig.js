import firebase from 'firebase/app';
import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4daSoUqiaVsQPySq1SvbFADGdh9kqHMg",
  authDomain: "yohan-app-2095.firebaseapp.com",
  projectId: "yohan-app-2095",
  storageBucket: "yohan-app-2095.appspot.com",
  messagingSenderId: "413267423197",
  appId: "1:413267423197:web:a0b1d9107af30ccb4c5034",
  measurementId: "G-5EY4PXRRC1"
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

export default firebase;