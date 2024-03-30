// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCBjdg27jl3i2pPCu8ejgoqcERCfVTQeo",
  authDomain: "talentos-do-reggae.firebaseapp.com",
  databaseURL: "https://talentos-do-reggae-default-rtdb.firebaseio.com",
  projectId: "talentos-do-reggae",
  storageBucket: "talentos-do-reggae.appspot.com",
  messagingSenderId: "741125384125",
  appId: "1:741125384125:web:03ab1506ff6ce2d12514d4",
  measurementId: "G-4VL14YX8F9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
