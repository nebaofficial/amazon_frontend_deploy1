
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

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

// Optional: only connect to the local Firestore emulator when explicitly enabled
// via Vite env var `VITE_FIRESTORE_EMULATOR=true` and running on localhost.
// To enable locally: create a `.env` with `VITE_FIRESTORE_EMULATOR=true`
// and optionally `VITE_FIRESTORE_EMULATOR_HOST` / `VITE_FIRESTORE_EMULATOR_PORT`.
if (
  typeof window !== "undefined" &&
  window.location.hostname === "localhost" &&
  typeof import.meta !== "undefined" &&
  import.meta.env &&
  import.meta.env.VITE_FIRESTORE_EMULATOR === "true"
) {
  const host = import.meta.env.VITE_FIRESTORE_EMULATOR_HOST || "localhost";
  const port = Number(import.meta.env.VITE_FIRESTORE_EMULATOR_PORT) || 8080;
  try {
    connectFirestoreEmulator(db, host, port);
    console.log(`Connected Firestore to emulator at ${host}:${port}`);
  } catch (e) {
    console.warn("Could not connect to Firestore emulator:", e);
  }
}