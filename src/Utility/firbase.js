
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQeBYuyd_3d1_8A3hqRz1j2zO5T4BWMz4",
  authDomain: "clone-cd694.firebaseapp.com",
  projectId: "clone-cd694",
  storageBucket: "clone-cd694.firebasestorage.app",
  messagingSenderId: "611015683946",
  appId: "1:611015683946:web:7775580c857a4e677a3f13"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);