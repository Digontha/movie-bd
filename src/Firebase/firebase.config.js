// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgHk3FXZPdXfyNtQ-v_mjsc3p6FV3jAOI",
  authDomain: "movie-chobi-auth.firebaseapp.com",
  projectId: "movie-chobi-auth",
  storageBucket: "movie-chobi-auth.appspot.com",
  messagingSenderId: "491050967216",
  appId: "1:491050967216:web:2ea1aee0aeaa5d68829b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;