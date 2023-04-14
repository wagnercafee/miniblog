import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6AWPgEYoPgpIN5kEqvdxvZ2FRMwETrsc",
  authDomain: "miniblog-da027.firebaseapp.com",
  projectId: "miniblog-da027",
  storageBucket: "miniblog-da027.appspot.com",
  messagingSenderId: "434609152501",
  appId: "1:434609152501:web:15492f86cf3a3b4fa380bc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };