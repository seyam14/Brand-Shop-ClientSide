// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOenLBebnNFx_D-HwYkjGqDp0nDM_CRQc",
  authDomain: "brand-shop-clientside-frontend.firebaseapp.com",
  projectId: "brand-shop-clientside-frontend",
  storageBucket: "brand-shop-clientside-frontend.appspot.com",
  messagingSenderId: "629446954653",
  appId: "1:629446954653:web:fd623724dc7e1842d20e74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;