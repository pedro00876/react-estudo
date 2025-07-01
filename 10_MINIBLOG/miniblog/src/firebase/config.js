import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBFainLPo6iAZHRhugxXRkf6goabBorHHY",
  authDomain: "miniblog-dbd2d.firebaseapp.com",
  projectId: "miniblog-dbd2d",
  storageBucket: "miniblog-dbd2d.firebasestorage.app",
  messagingSenderId: "142207837393",
  appId: "1:142207837393:web:8a077b6c99dbedd53351f0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };