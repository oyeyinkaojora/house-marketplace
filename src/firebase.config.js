// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_V22bJzEasBHJQgLslq0XQG3jGWi0MwY",
  authDomain: "house-marketplace-app-bc02d.firebaseapp.com",
  projectId: "house-marketplace-app-bc02d",
  storageBucket: "house-marketplace-app-bc02d.appspot.com",
  messagingSenderId: "288827916497",
  appId: "1:288827916497:web:9b6105cb5ce60b592285f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();