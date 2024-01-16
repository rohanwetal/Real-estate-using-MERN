// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "real-estate-f7db6.firebaseapp.com",
  projectId: "real-estate-f7db6",
  storageBucket: "real-estate-f7db6.appspot.com",
  messagingSenderId: "519817326334",
  appId: "1:519817326334:web:29e231901198a3458e3faf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);