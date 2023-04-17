// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVzVRcOEfiWx7Xl1kUNA-ygAbDL0tIF-M",
  authDomain: "fir-intro-pract.firebaseapp.com",
  projectId: "fir-intro-pract",
  storageBucket: "fir-intro-pract.appspot.com",
  messagingSenderId: "1042029900490",
  appId: "1:1042029900490:web:dddd8b92300bdc74cf3a33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();