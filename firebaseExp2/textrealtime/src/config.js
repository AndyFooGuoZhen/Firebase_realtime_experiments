// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACGxArGIiB13j02VavkZAgET1AqXRy548",
  authDomain: "text-realtime-cc880.firebaseapp.com",
  databaseURL: "https://text-realtime-cc880-default-rtdb.firebaseio.com",
  projectId: "text-realtime-cc880",
  storageBucket: "text-realtime-cc880.appspot.com",
  messagingSenderId: "309543412604",
  appId: "1:309543412604:web:508344197657f0f9ed7af9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
