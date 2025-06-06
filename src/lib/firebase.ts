// src/lib/firebase.ts
import { initializeApp, getApp, getApps } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';

// Your web app's Firebase configuration from your project settings
const firebaseConfig = {
  apiKey: "AIzaSyB0Cr-Y2djxU8QSs6_6wh7QsB9xqBEJCCQ",
  authDomain: "rally-athletes.firebaseapp.com",
  projectId: "rally-athletes",
  storageBucket: "rally-athletes.firebasestorage.app",
  messagingSenderId: "937022850322",
  appId: "1:937022850322:web:f5d7030edd19512a989fcb",
  measurementId: "G-1967EW0NH4" // Corrected based on screenshot (OCR had 'O' instead of '0')
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export { app, firebaseConfig };
