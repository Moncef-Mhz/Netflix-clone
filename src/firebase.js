// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMwHhzIdkxNOPnBg7dHVMfUi5Jnnl7rxk",
  authDomain: "netflix-clone-5e629.firebaseapp.com",
  projectId: "netflix-clone-5e629",
  storageBucket: "netflix-clone-5e629.appspot.com",
  messagingSenderId: "52060842398",
  appId: "1:52060842398:web:5f0847dc04086361278e8f",
  measurementId: "G-X9L4BCGSP7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
