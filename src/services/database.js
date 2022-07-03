// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_APP_FIREBASE_APIKEY,
  authDomain: process.env.EXPO_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.EXPO_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.EXPO_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.EXPO_APP_FIREBASE_APPID,
  measurementId: process.env.EXPO_APP_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

export const db = getFirestore(app);