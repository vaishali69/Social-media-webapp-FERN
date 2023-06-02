import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjtVTYvk_WIOcxqLgpO2vlNjJUs3EXLL8",
  authDomain: "social-media-app-main-d8894.firebaseapp.com",
  projectId: "social-media-app-main-d8894",
  storageBucket: "social-media-app-main-d8894.appspot.com",
  messagingSenderId: "891745111620",
  appId: "1:891745111620:web:0a850f77a6cebea8f2b611",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
