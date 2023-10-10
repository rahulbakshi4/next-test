// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv8dhJVmCScLBthpl7TVcyetH6qCdUHyQ",
  authDomain: "todododo-2e4ff.firebaseapp.com",
  projectId: "todododo-2e4ff",
  storageBucket: "todododo-2e4ff.appspot.com",
  messagingSenderId: "593457937170",
  appId: "1:593457937170:web:b639b224330e7294d411cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
