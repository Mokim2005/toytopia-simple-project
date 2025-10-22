// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvH8TRm4DVRJvNdpI7lVw9j-btIMdxmto",
  authDomain: "toytopia-simple-project.firebaseapp.com",
  projectId: "toytopia-simple-project",
  storageBucket: "toytopia-simple-project.firebasestorage.app",
  messagingSenderId: "730258251413",
  appId: "1:730258251413:web:fa2324d0b9865b174b459c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
