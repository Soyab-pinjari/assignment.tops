import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAFUcC3reQji54G6pMG-_I-SmspY2mi7o",
  authDomain: "dashboard-project-f2124.firebaseapp.com",
  databaseURL: "https://dashboard-project-f2124-default-rtdb.firebaseio.com",
  projectId: "dashboard-project-f2124",
  storageBucket: "dashboard-project-f2124.firebasestorage.app",
  messagingSenderId: "36418032637",
  appId: "1:36418032637:web:8f31622b63907f94"
};

const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

// ✅ Explicit named exports
export { db, auth };