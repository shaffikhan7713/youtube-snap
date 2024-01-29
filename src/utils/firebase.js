// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjUuepjHpn8u-4oCG0Hn2j7Bjhld9Zd4g",
  authDomain: "snap-f0973.firebaseapp.com",
  projectId: "snap-f0973",
  storageBucket: "snap-f0973.appspot.com",
  messagingSenderId: "87329140125",
  appId: "1:87329140125:web:7781feca92a2735d11d374",
  measurementId: "G-RL0958GTLL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
